O código foi testado tanto em Windows quanto em Linux

Necessário: Node.js

Dependências:
npm i @angular/cli express mongoose bootstrap jquery nodemon jsonwebtoken -g

//Nos dois testes, esse passo não fez diferença na execução do código
Baixar mongosh:
https://downloads.mongodb.com/compass/mongosh-1.1.6-win32-x64.zip

Adicionar a pasta mongosh/bin no PATH das variáveis locais (Propriedades do Computador/Configurações avançadas)

Sobre o projeto:
cd VivinoWeb/Angular -> ng serve
cd VivinoWeb/Express -> npm start

Para rodar: localhost:4200

Uma funcionalidade que não ficou muito clara foi a de logout, que é feita clicando no nome do usuário depois que este já estiver logado.
As funcionalidades de review e consulta começaram a ser implementadas, com alguns vestígios no código, mas não foram completadas.
