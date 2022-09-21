import express, { response } from 'express';

const app = express();

/**
  *Parametros:
    - Query: (?) -> Persistir estado (manter o estado atual da página)
    - Route: identificadores de recursos
    - Body: enviar várias informações em uma requisição (form por exemplo)
 */

// HTTP methods / API RESTful
  // => GET, POST, PUT, PATCH, DELETE
  // HTTP Codes => 2xx (sucesso), 3xx(redirecionamento), 4xx (erro da aplicação), 5xx (erros inesperados)

app.get('/games', (request, response) => {
  return response.json([]);
});

app.post('/ads', (request, response) => {
  return response.status(201).json([]);
}); 

app.get('/games/:id/ads', (request, response) => {
  // const adId = request.params.id;

  return response.json([
    {id:1, name: 'Anúncio 1'},
    {id:2, name: 'Anúncio 2'},
    {id:3, name: 'Anúncio 3'},
    {id:4, name: 'Anúncio 4'}
  ])
})

app.get('/ads/:id/discord', (request, response) => {
  // const gameId = request.params.id;

  return response.json([
    {id:1, name: 'Anúncio 1'},
    {id:2, name: 'Anúncio 2'},
    {id:3, name: 'Anúncio 3'},
    {id:4, name: 'Anúncio 4'}
  ])
})

app.listen(3333)