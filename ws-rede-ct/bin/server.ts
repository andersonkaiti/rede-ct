import http, { type Server } from "node:http";
import { app } from "../src/app.ts";

const server: Server = http.createServer(app);

const PORT = 3_000;

server.listen(() => {
  console.log(`🚀 Aplicação rodando na porta ${PORT}.`);
});
