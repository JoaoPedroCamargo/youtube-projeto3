# youtube-projeto3

### Rotas
  /session - login do usuário
  /user - cadastro de usuário
  /search/:NomeFilme - pesquisa de um filme
  /publish - publicação de um filme
  
### /session
  Parametros enviados:
  {
    "email": "email@email.com",
    "password": "senha"
  }
  
  Parametros recebidos:
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY1NjE5Mzg3Mn0.r7vmkdsI2FwrWfKakjfVAaHMhN26cEO4XfrRaRA6v_w"
  }
  
### /user
  Parametros enviados:
  {
    "userName": "meuNome",
    "email": "email@email.com",
    "password": "senha"
  }

  Parametros recebidos:
  {
    "userName": "meuNome",
    "email": "email@email.com",
    "password": "senha"
  }
  
### /publish
  Parametros enviados:
  {
    "movieName": "122s2"
  }

  *só é possível acessar essa rota com o token de login

  Parametros recebidos:
  {
    "movie": {
      "name": "122s2",
      "id": 4
    }
}

### /search/:NomeFilme
  Parametro enviado é o nome do filme na url da página

  Parametros recebidos:
  {
    "moviesList": [
      {
        "name": "122s2",
        "id": 1
      },
      {
        "name": "122s2",
        "id": 2
      },
      {
        "name": "122s2",
        "id": 3
      },
      {
        "name": "122s2",
        "id": 4
      }
    ]
  }
  
  
  
