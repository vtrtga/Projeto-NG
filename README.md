# Projeto-NG
Projeto para processo seletivo da NG

Antes de tudo, verificar se as portas 3001, 3000 e 5432 estão disponíveis.
Node roda na porta 3001, o frontend na porta 3000 e o db postgres na porta 5432.

1 - Executar o comando "docker-compose up -d" para inicializar todos os serviços do docker.
Não é necessário dar npm start no frontend ou no backend, os containers já estão configurados para isso. Apenas
acesse o link http://localhost:3000/

2 - Executar o comando "npm run db:reset" para criar, popular e iniciar o db;

