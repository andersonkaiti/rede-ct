import {
  app
} from "../chunk-5AMDJ3MJ.js";

// bin/server.ts
import http from "node:http";
var server = http.createServer(app);
var PORT = 3e3;
server.listen(() => {
  console.log(`\u{1F680} Aplica\xE7\xE3o rodando na porta ${PORT}.`);
});
