# Automação de Testes - Portfólio

Este projeto contém testes automatizados para o site de portfólio usando Playwright.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Instale os navegadores necessários:
```bash
npm run test:install
```

## Executando os Testes

### Executar todos os testes
```bash
npm test
```

### Executar testes com interface gráfica
```bash
npm run test:ui
```

### Executar testes em modo debug
```bash
npm run test:debug
```

### Visualizar relatório de testes
```bash
npm run test:report
```

## Estrutura do Projeto

```
src/
  └── tests/
      └── portfolio.spec.ts    # Testes do site de portfólio
```

## Configuração

O arquivo `playwright.config.ts` contém as configurações dos testes, incluindo:
- Timeouts
- Navegadores suportados
- Configurações de relatório
- Configurações de screenshot e vídeo

## Relatórios

Os relatórios são gerados automaticamente após a execução dos testes e podem ser visualizados com o comando `npm run test:report`. 