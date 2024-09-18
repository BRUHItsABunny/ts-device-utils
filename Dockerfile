FROM node:18.13 AS builder
WORKDIR /tmp

# Set env variables, stabilize versions of each compiler component
RUN echo "${PATH}"
ENV PROTOBUF_VERSION="3.19.4"
ENV PROTOC_ZIP="protoc-${PROTOBUF_VERSION}-linux-x86_64.zip"
ENV PROTOC_URL="https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOBUF_VERSION}/${PROTOC_ZIP}"
# "https://github.com/protocolbuffers/protobuf/releases/download/v3.20.0-rc1/protoc-3.20.0-rc-1-linux-x86_64.zip"

# Download dependencies
RUN apt-get update && apt-get install -y curl git unzip

# Install protobuf (with our version constraint for stability)
RUN echo "Downloading protobuf compiler from: ${PROTOC_URL}"
RUN wget "${PROTOC_URL}"
RUN unzip "${PROTOC_ZIP}" -d ./protoc_dir
RUN chmod 755 -R ./protoc_dir/bin && chmod +x -R ./protoc_dir/bin
RUN cd protoc_dir/bin && ls -R && ./protoc --version
ENV BASE="/usr/local"
RUN cp ./protoc_dir/bin/protoc "${BASE}/bin/"
RUN cp -R ./protoc_dir/include/* "${BASE}/include/"
RUN rm -r ./protoc_dir
RUN ls -R "${BASE}/bin/"
RUN rm "${PROTOC_ZIP}"
# Check protobuf is installed
RUN protoc --version

# Setup Node/TypeScript environment
WORKDIR /proto
RUN npm i -g pnpm

COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile \
  && npm list -g

# Copy our repo
COPY . ./

# Setup general includes
ENV PROTO_INC="-I ./ \
  -I ../ \
  -I ../../"

ENV PROTOC_CMD="protoc ${PROTO_INC} \
  --plugin=/proto/node_modules/ts-proto/protoc-gen-ts_proto \
  --ts_proto_out=. ./*.proto \
  --ts_proto_opt=esModuleInterop=true \
  --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions \
  --ts_proto_opt=useExactTypes=true \
  --ts_proto_opt=addGrpcMetadata=true \
  --ts_proto_opt=useOptionals=all"
# Generate
RUN ls -R /proto
RUN cd /proto/proto-device-utils/ \
  && ${PROTOC_CMD} \
  && find . -name "*.ts" -type f -maxdepth 1 -exec cp {} /proto/src/$target \;;
RUN ls -R /proto

CMD ["/bin/sh", "-c", "echo Docker done"]