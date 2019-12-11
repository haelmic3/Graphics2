const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');

const server = http.createServer((req, res) => {
  var filename = req.url.substring(1);
  if(filename !='')
  {
    if(!fs.existsSync(filename))
    {
      console.log("Error: \""+filename+"\" doesn't exist.");
      res.end();
    }else{
      console.log(filename);
      var file = fs.readFileSync(filename);
      res.statusCode = 200;
      switch(req.url.split('.')[1])
      {
      case 'html':
        res.setHeader('Content-Type', 'text/html');
        break;
      case 'css':
        res.setHeader('Content-Type', 'text/css');
        break;
      case 'js':
        res.setHeader('Content-Type', 'text/javascript');
        break;
      case 'jpg':
        res.setHeader('Content-Type', 'image/jpeg');
        break;
      case 'ogg':
        res.setHeader('Content-Type', 'audio/vorbis');
        break;
      default:
        res.setHeader('Content-Type', 'application/octet-stream');
      }
      res.end(file);
    }
  }else{
    console.log("New session.")
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(fs.readFileSync('index.html').toString());
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
