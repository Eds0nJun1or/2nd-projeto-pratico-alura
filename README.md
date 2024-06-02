# 2º Projeto Prático - DevOps

### Desafio

O desafio consiste em configurar e otimizar um servidor NGINX para atuar como servidor web, proxy reverso e gateway de API. O objetivo é melhorar o desempenho, implementar HTTPS, configurar regras de proxy reverso e gerenciar servidores web seguros.

### Etapas

1. **Configuração Básica:** Configuração inicial do NGINX como servidor web.
2. **Proxy Reverso:** Configuração das regras de proxy reverso.
3. **Segurança e HTTPS:** Implementação de HTTPS com certificados SSL/TLS.
4. **Otimização de Desempenho:** Aplicação de técnicas de otimização.
5. **Documentação:** Documentação das configurações e decisões tomadas.

### Começando

### Ferramentas Utilizadas

- NGINX
- Docker
- OpenSSL

### Instalação

1. Configuração do arquivo `docker-compose` para o NGINX.
2. Criação do arquivo de configuração do NGINX.
3. Início do container:
   ```sh
   docker-compose up -d
   sudo apt-get install docker-ce
   ```
4. Verificação do estado do container:
   ```sh
   docker ps
   ```

### Implantação

Para implantar o servidor, serão seguidas práticas de segurança e monitoramento de desempenho.

### NGINX

NGINX é um servidor web de alta performance que oferece balanceamento de carga, proxy reverso e streaming, gerenciando milhares de conexões simultâneas.

### Proxy Reverso

Um proxy reverso encaminha solicitações do cliente para os servidores web, aumentando a segurança, desempenho e confiabilidade.

### Solicitações HTTP e HTTPS

- **HTTP:** Protocolo para transferência de texto.
- **HTTPS:** Protocolo seguro que criptografa informações com chaves, garantindo a segurança dos dados.

### Certificado OpenSSL

O OpenSSL será utilizado para garantir a segurança das informações trafegadas entre os servidores. Será gerado um certificado autoassinado para transformar um site HTTP em HTTPS.

### Balanceamento de Carga

As requisições serão distribuídas entre servidores de acordo com suas capacidades, otimizando o desempenho e evitando sobrecargas.

### Estrutura do Projeto

Adotamos uma arquitetura baseada em microserviços para facilitar a manutenção, escalabilidade e desenvolvimento.

### Estrutura de Diretórios

```
├── conf.d
├── estrutura_projeto.txt
├── html
│   ├── erro
│   │   ├── index.css
│   │   ├── index.html
│   │   └── index.js
│   ├── index.html
│   └── teste
│       └── index.html
├── index.html
├── load-balancer.conf
├── mime.types
├── nginx.conf
├── noticias.conf
├── novidades.conf
└── servidores
    └── microservicos
        ├── html
        │   └── index.html
        ├── noticias
        │   ├── html
        │   │   ├── erro
        │   │   │   ├── index.css
        │   │   │   ├── index.html
        │   │   │   └── index.js
        │   │   ├── index.html
        │   │   └── teste
        │   │       └── index.html
        │   └── index.html
        ├── noticias.conf
        ├── novidades
        │   ├── html
        │   │   ├── erro
        │   │   │   ├── index.css
        │   │   │   ├── index.html
        │   │   │   └── index.js
        │   │   ├── index.html
        │   │   └── teste
        │   │       └── index.html
        │   └── index.html
        └── novidades.conf
```

### Configuração e Deploy

#### Configuração

1. **Servidor NGINX:** Configuração do `nginx.conf` e inclusão dos arquivos dos microserviços.
2. **Balanceador de Carga:** Configuração do `load-balancer.conf`.
3. **Tipos MIME:** Configuração do `mime.types`.

#### Deploy

1. Organização dos diretórios conforme a estrutura e configuração de cada microserviço.
2. Início do servidor NGINX.

### Manutenção

- **Identificação do Microserviço:** Localização do microserviço na estrutura.
- **Aplicação das Alterações:** Modificação dos arquivos de configuração ou código fonte.
- **Testes:** Teste dos microserviços alterados.
- **Deploy das Alterações:** Validação e deploy das mudanças.

### Observação

Os arquivos HTML são básicos e focados em testar as funcionalidades do NGINX.
