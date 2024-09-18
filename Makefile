GIT_AUTH_FOR_DOCKER?=""
docker_build_tag=ts_device_protos
docker_run_name=ts_device_protos_run

GEN_OUTPUT_DIR ?= build_output

generate-proto:
	@echo Compiling Protobuf files

	docker build -t $(docker_build_tag) \
		--progress=plain \
		--build-arg GIT_TOKEN=$(GIT_AUTH_FOR_DOCKER) .
	docker run --name=$(docker_run_name) $(docker_build_tag)
	docker cp $(docker_run_name):proto/. $(GEN_OUTPUT_DIR)
	docker rm $(docker_run_name)
	docker rmi $(docker_build_tag)

	@echo Done compiling Protobuf files

clean:
	rm -rf build_output