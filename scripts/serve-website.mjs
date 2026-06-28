import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const docsDir = fileURLToPath(new URL('../docs/', import.meta.url));
const portIndex = process.argv.indexOf('--port');
const portValue = portIndex >= 0 ? process.argv[portIndex + 1] : process.env.PORT;
const port = Number(portValue ?? 4173);
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};
const resolvePath = (urlPath) => {
  const decodedPath = decodeURIComponent(new URL(urlPath, 'http://localhost').pathname);
  const requestedPath = normalize(join(docsDir, decodedPath === '/' ? 'index.html' : decodedPath));

  return requestedPath.startsWith(docsDir) ? requestedPath : join(docsDir, 'index.html');
};
const server = createServer(async (request, response) => {
  const filePath = resolvePath(request.url ?? '/');

  try {
    const fileStat = await stat(filePath);

    if (!fileStat.isFile()) {
      response.writeHead(404);
      response.end('Not found');

      return;
    }

    response.writeHead(200, {
      'content-type': mimeTypes[extname(filePath)] ?? 'application/octet-stream',
    });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
});

server.listen(port, () => {
  console.log(`Website ready at http://localhost:${port}`);
});
