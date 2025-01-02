FROM node:21.7.3-alpine
#Cria o diretório dentro do container e entrar dentro dele, como se fosse o mkdir -> cd
WORKDIR /app
COPY package*.json ./
#Depois roda o comando npm install que instalar todas as dependências do projeto
RUN npm install
#Copiamos todo o nosso diretório local para o /app do container
COPY . .
#Instalamos o angular no nosso container para que ele possa executar um app angular
RUN npm install -g @angular/cli
#Informamos que o container irá expor a porta 4201 do container em tempo de execução
EXPOSE 4201
#
CMD ["ng", "serve", "--host", "0.0.0.0"]
