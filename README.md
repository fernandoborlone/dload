# Teste Dload
Repositório de testes e2e, API e Performance utilizando Cypress.io e Jmeter, para [Dload](https://dload.com/).

## Pré-Requisitos
Para instalar as dependências do projeto e rodar os testes é necessário que o [Node.js](https://nodejs.org/en) e o [NPM](https://www.npmjs.com) estejam instalados em seu computador.

> Nota: Para este projeto as seguintes versões foram utilizadas (`node v18.12.1` e `npm 8.19.2`)

<br>

## Instalação
Faça o clone do projeto: `git clone git@github.com:fernandoborlone/dload.git`. Em seguida, acesse o diretório raiz e execute o comando `npm install` para instalar as dependências de desenvolvimento.

<br>

## Execução dos testes
- Execute o comando `test:open_dev` para rodar os testes em modo interativo contra o ambiente dev.
- Execute o comando `test:run_dev` para rodar os testes em modo _headless_ contra o ambiente dev.


___

## Estrutura do Projeto

### cypress/e2e/API
Diretório para os testes de API

### cypress/e2e/GUI
Diretório para os testes e2e

### cypress/reports
Diretório que contém os relatórios de execução dos testes

### cypress/support/API
Diretório para alocação de comandos customizados utilizados nos testes de API (Application Programming Interface)

### cypress/support/GUI
Diretório para alocação de comandos customizados utilizados nos testes e2e

### cypress/support/GUI/locators
Diretório onde são alocação os locators para facilitar a manutenção e organização dos mesmos.

### cypress/screenshots
Diretório com imagens das evidências dos testes

### cypress/videos
Diretório com vídeos das execuções dos testes

### cypress/node_modules
Diretório onde são baixadas as dependencias do projeto

### cypress/.gitignore
Local onde são alocados os diretórios e arquivos que serão ignorados pelo GIT(repositório)

### cypress/config
Diretório de configuração do projeto, utilizado para adicionar plugins, etc
> Nota: A configuração padrão deste projeto aponta para o ambiente de desenvolvimento (dev). Esta configuração pode ser alterada sempre que necessário, através do arquivo de configuração _cypress.config_, via script do arquivo package.json, ou via linha de comandos, diretamente no terminal

### cypress/package.json
Arquivo que contém as dependencias de desenvolvimento, bem como adicionamos os scripts de testes, utilizados como atalhos para linha de comandos.
___

## Informações adicionais
> Este projeto utiliza o [Faker-br](https://www.npmjs.com/package/faker-br) para gerar dados randomicos em alguns cenários testes.<p>
> Utiliza o [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) para gerar relaótio das execuções dos testes.<p>
> Utiliza o [cypress-plugin-api](https://www.npmjs.com/package/cypress-plugin-api) para imprimir informações sobre a chamada de API na interface do usuário do aplicativo Cypress.