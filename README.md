# Contador de Visitantes em Tempo Real

Este projeto demonstra um contador de visitantes em tempo real usando Eventos Enviados pelo Servidor (SSE) no Node.js. O servidor envia atualizações para o cliente a cada segundo sobre o número atual de visitantes.

## Tecnologias Utilizadas

- Node.js
- HTML
- JavaScript

## Como Funciona

O projeto consiste em um servidor Node.js e uma página HTML simples.

### Servidor

- O servidor é criado usando o módulo `http` integrado do Node.js.
- Ele serve um arquivo HTML (`index.html`) quando o URL raiz é acessado.
- Ele também estabelece um ponto de extremidade SSE (Server-Sent Events) em `/events`.
- O servidor incrementa a variável `visitorCount` e a envia para os clientes a cada segundo através de SSE.

### Cliente

- O script do lado do cliente usa a API `EventSource` para estabelecer uma conexão com o ponto de extremidade SSE (`/events`).
- Uma vez conectado, ele ouve as mensagens contendo o contador de visitantes enviadas pelo servidor.
- Ao receber uma mensagem, ele atualiza o contador de visitantes exibido na página HTML.


