const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Geeks!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*const http = require('http');
const fs = require('fs'); //read and write files from local file system
const path = require('path'); //to specify the path of a local file system
const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req,res) => {

 //examine the method
  if(req.method=='GET')
  {
    var fileUrl;
    //if get request comes in then we will examine the url
    if(req.url=='/'){//if nothing is specified then its by default directed to index
      fileUrl="/index.html";
    }
    else fileUrl=req.url;//otherwise directed to equested url

    var filePath = path.resolve('./public'+fileUrl);//translating full path for the file(gets fileUrl from public folder)
    const fileExt =path.extname(filePath); //examine the file extation is html or not(returns the path name)
    if(fileExt == '.html'){ //checking of file path exists or not
      fs.access(filePath, (exists) => {
        if(!exists){
          res.statusCode=404;
          res.setHeader('content-type','text/html');
          res.end('Error 404 '+fileUrl+' not found');
          return;
        }
        res.statusCode=200;
        res.setHeader('content-type','text/html');
        fs.createReadStream(filePath).pipe(res);//read the file from file path and converts into stream of bits and pipe it to the response
      })
    }
    else{
      res.statusCode=404;
      res.setHeader('content-type','text/html');
      res.end('/Error 404 '+fileUrl+' not an html file');
      return;
    }
     
  }
  else{
    res.statusCode=404;
    res.setHeader('content-type','text/html');
    res.end('/Error 404 '+req.method+' not supported');
    return;
  }
})
 server.listen(port,hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);

 })*/