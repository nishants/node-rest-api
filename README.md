Running locally

```bash
npm install 
npm start dev

# swagger http://localhost:3000/api-docs/
# sample resquest: http://localhost:3008/api/v1/search?q=hello
```



### Setup redis locally with docker

- config here : https://github.com/bitnami/bitnami-docker-redis#configuration
- 

```bash
docker pull bitnami/redis
docker run --name "my-redis" -e ALLOW_EMPTY_PASSWORD=yes bitnami/redis:latest

# configuration here : https://github.com/bitnami/bitnami-docker-redis#configuration
```

- run redis client : 

  ```
  npx redis-commander
  ```

  



node redis client : https://www.npmjs.com/package/redis

