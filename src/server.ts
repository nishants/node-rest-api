import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import redis from './redis';

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

(async() => {
    // TODO remove this
    const client = await redis(console.error);
    await client.setObject("key-1", {key: 'key-1'})
    const value = await client.getObject('key-1');
    console.log("value form redis : ", value);
})();

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
