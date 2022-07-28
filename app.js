const http = require('http');
const server = http.createServer();


const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",  
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
];

const httpRequestListener = (request,response) => {
  const {url, method} = request // request에 url에 따라 메소드 실행
   if(method === 'POST') {
    if(url === '/users'){
      let body = '';
      request.on('data',(data) => {body += data;})
  
      request.on('end',() => {
        const user = JSON.parse(body);

        users.push({
          id : user.id,
          name : user.name,
          email : user.email,
          password : user.password
            })

          response.end(JSON.stringify({message : "userCreated"}))
        })
 }
 
 else if(method === 'POST') {
  if(url === '/posts'){
    let body = '';
    request.on('data',(data) => {body += data;})

    request.on('end',() => {
      const post = JSON.parse(body);

      posts.push({
        id : post.id,
        title : post.name,
        content : post.email,
        userId : post.password
          })

        response.end(JSON.stringify({message : "postCreated"}))
      })
}
}


}
};

  




server.on("request", httpRequestListener);

server.listen(8000, '127.0.0.1', function() { 
    console.log('Listening to requests on port 8000');
});
