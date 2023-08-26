const http = require("http");
const hp = require("./hp.json");

const server = http.createServer((req, res) => {
    // thunderclient
//   console.log(req.url);
  // if(req.url != '/favicon.ico')

  res.write("<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Apps</title></head><body>");
  res.write("<h1>Mi titulo</h1>");

  if (req.url === "/") {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("<p>Api Harry Potter</p>");
  } else if (req.url === "/api") {
    res.write("<p>parrafo</p>");
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.write(JSON.stringify(hp));
  } else {
    // res.writeHead(404);
    res.write("<p>Page not found</p>");
  }

  res.write("</body></html>");
  res.end();
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server is running on port 3000");
});
