import cors from "cors";
import express from "express";
import route from "./route";

const server = express();

server.use(cors());
server.use(route)

export default server;