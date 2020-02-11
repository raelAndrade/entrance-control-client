# Controle de Entradas

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Servidor de desenvolvimento

Execute o comando `ng serve` para inicializar o servidor. Navegue no endereço `http://localhost:4200/` .

## Instalar pacotes

  + Bootstrap 4

    - `npm i bootstrap --save` 

  + NGX Bootstrap

    - `npm i ngx-bootstrap --save` 

  + PrimeNG

    - `npm i primeng --save` 

  + PrimeNG Icons

    - `npm i primeicons --save` 

  + Ao instalar os pacotes acima executar o seguinte comando `npm install` na pasta raiz do projeto.

## Gerar componentes

Execute o comando para gerar um novo componente angular `ng generate component component-name` ou `ng g c component-name` .
Você também pode usar o seguinte comando `ng generate directive|pipe|service|class|guard|interface|enum|module` .

## JSON-SERVER

#### Instalação do json-server

  + npm install -g json-server

  ##### Locals

  + Execute o comando `json-server --watch locals.json --port 3000` . O arquivo `locals.json` contém a estrutura do arquivo que será gerado um json
  + URL:  http://localhost:3000/locals

  ##### Administrations

  + Execute o comando `json-server --watch administration.json --port 3100` . O arquivo `administration.json` contém a estrutura do arquivo que será gerado um json
  + URL: http://localhost:3100/administrations

  ##### User

  + Execute o comando `json-server users.json -m node_modules/json-server-auth --port 3200` O arquivo `users.json` contém a estrutura do arquivo que será gerado um json
  + URL: http://localhost:3200/users

## Plugin REST Client

Ferramenta para enviar requisições HTTP Rest.
O arquivo `api.http` contém os métodos HTTP que serão utilizados conforme a necessidade do projeto.

### Locals - Endpoints

``` js
@GET todos

curl - X GET http: //localhost:3000/locals -H 'cache-control: no-cache'
```

``` js
@GET por id

curl - X GET http: //localhost:3000/locals/1 -H 'cache-control: no-cache'
```

``` js
@POST

curl - X POST http: //localhost:3000/locals -H 'cache-control: no-cache' -H'content-type: application/json' -d '{
    "initial": "TESTE",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting",
    "administrations": [{
        "name": "Lorem Ipsum",
        "cnpj": "123.123.123/0001-01",
        "churches": [{
            "name": "Lorem Ipsum is simply dummy text of the printing and typesetting",
            "code": "221605",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting",
            "rooms": [{
                "name": "Lorem Ipsum is simply dummy text of the printing and typesetting",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting",
                "entrances": [
                    "MAIN_ENTRANCE"
                ],
                "created": "{{$localDatetime iso8601}}",
                "updated": "{{$localDatetime iso8601}}"
            }],
            "created": "{{$localDatetime iso8601}}",
            "updated": "{{$localDatetime iso8601}}"
        }],
        "created": "{{$localDatetime iso8601}}",
        "updated": "{{$localDatetime iso8601}}"
    }],
    "created": "{{$localDatetime iso8601}}",
    "updated": "{{$localDatetime iso8601}}"
}
'
```

<!-- ## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.-->

<!-- ## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).-->

<!-- ## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).-->

<!-- ## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).-->

