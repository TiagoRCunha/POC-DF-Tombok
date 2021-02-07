import cors from "cors";
import express from "express";
import route from "./routes";

const server = express();

server.use(cors());
server.use(route);

export default server;