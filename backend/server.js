import http from "node:http";

const PORT = 3009;

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json; charset=utf-8");

  if (request.url === "/" && request.method === "GET") {
    response.statusCode = 200;
    return response.end(JSON.stringify({ message: "Hello World do Node.js!" }));
  }

  response.statusCode = 401;
  return response.end(JSON.stringify({ error: "Rota nao encontrada!" }));
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
