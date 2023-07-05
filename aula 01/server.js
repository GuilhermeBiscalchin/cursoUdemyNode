const http = require('http');

const hostname = '127.0.0.1';
const port = 3003;

const server = http.createServer((request, response) => {

    const categorias = request.url

    if(categorias == '/tecnologia'){
        response.end("<html><body>Noticias Tecnologias</body><html>")    
    }else if(categorias == '/modas'){
        response.end("<html><body>Noticias Modas</body><html>")    
    }else
    response.end("<html><body>Portal Noticias</body><html>")
})



server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});

