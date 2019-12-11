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
      if(filename.includes('.html')){
        res.setHeader('Content-Type', 'text/html');
      }else if(filename.includes('.css')){
        res.setHeader('Content-Type', 'text/css');
      }else if(filename.includes('.js')){
        res.setHeader('Content-Type', 'text/javascript');
      }else if(filename.includes('.jpg')){
        res.setHeader('Content-Type', 'image/jpeg');
      }else if(filename.includes('.ogg')){
        res.setHeader('Content-Type', 'audio/vorbis');
      }else{
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
