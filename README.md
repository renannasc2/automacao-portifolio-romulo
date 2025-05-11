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
├── elements/
│   └── portfolio.elements.ts    # Seletores dos elementos
├── pages/
│   ├── PortfolioPage.ts        # Métodos da página principal
│   └── ContactPage.ts          # Métodos da página de contato
└── tests/
    └── portfolio.spec.ts       # Testes usando Page Objects
```

## Testes Implementados

### Navegação
- Verificação de navegação para Projetos
- Verificação de navegação para Contato
- Verificação de navegação para Sobre

### Links
- Verificação de links do menu
- Verificação de links do rodapé

### Funcionalidades
- Teste de download do CV
- Teste de envio do formulário de contato

## Configuração

O arquivo `playwright.config.ts` contém as configurações dos testes, incluindo:
- Timeouts
- Navegadores suportados (Chrome, Firefox, Safari)
- Configurações de relatório
- Configurações de screenshot e vídeo
- Execução em paralelo

## Relatórios

Os relatórios são gerados automaticamente após a execução dos testes e podem ser visualizados com o comando `npm run test:report`. Os relatórios incluem:
- Status dos testes
- Screenshots em caso de falha
- Vídeos em caso de falha
- Tempo de execução
- Detalhes dos erros

## Tecnologias Utilizadas

- Playwright
- TypeScript
- Page Objects Pattern 