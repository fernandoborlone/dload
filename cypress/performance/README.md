## Teste de desempenho no Apache Jmeter
Dentre os tipos de testes de software, o teste de carga (Desempenho) é uma abordagem de teste `Não Funcional`, útil para garantir que o aplicativo e seus elementos isolados tenham um bom desempenho sob a carga de trabalho esperada.

O objetivo não é encontrar bugs, mas eliminar gargalos de performance do app.

## Pré-requisitos
- Java 8+ é necessário para a execução do Apache JMeter.
> Para este projeto a seguinte versão foi utilizada (`java 11.0.17 2022-10-18 LTS`)

## Instruções de Instalação e Execução
Faça o download do JMeter, acessado o site oficial do [Apache JMeter](http://jmeter.apache.org/), na opção de Download Releases. Em sequida, descompacte o arquivo do diretório de sua preferência.
> Para este projeto a seguinte versão foi utilizada (`5.5 Binaries`)
___________

### Gerando Massa para execução do Teste de Performance
Para gerar massa de teste, no diretório raiz do projeto de automação, execute o comando: `npm run generate_data_testing`.



### Execução do Teste de Performance no Jmeter via Interface Gráfica
1 - Para abrir o Jmeter, no diretório raiz do jmeter rode o comando: `./bin/jmeter` no terminal,

2 - Copie o arquivo Performance-Testing-Dload.jmx(que fica no diretório: cypress/performance/) e cole na pasta raiz do Jmeter,

3 - Abra a árvore do projeto, selecione `Data emails` e em Filename > botão "Browse...", selecione o arquivo `users_email.txt` que fica no diretório `cypresss/fixture/data/`

4 - Abra a árvore do projeto, selecione `Data idProducts` e em Filename > botão "Browse...", selecione o arquivo `idProduct.txt` que fica no diretório `cypresss/fixture/data/`

5 - Em `Grupo de Usuários Virtuais`, defina o número de usuários simultâneos no campo `Numbers os Threads (users)`. Ex: 10

6 - Clique no botão `Clean All`  (ícone das duas vassouras - caso hajam resultados de execução, eles serão limpos).

7 - Clique no botão `Start` para executar o teste.
> Veja os resultados em `Relatório de Sumário` (Summary Report) ou em `Ver Árvore de Resultados` (View Results Tree)

______

## Informações Adicionais

### Performance Report

<img width="1974" alt="Dload test cases" src="https://user-images.githubusercontent.com/69471264/226148869-fa1c89c3-feb3-4850-91a4-ec36a77093e5.png">