# Cypress Testing – QAZANDO Shop

Projeto de automação de testes com **Cypress**, criado para praticar testes end-to-end nos principais fluxos do site [QAZANDO Shop](https://automationpratice.com.br/), plataforma de e-commerce de prática mantida pela Qazando.

## Sobre o projeto

O objetivo deste projeto foi automatizar os fluxos mais críticos de um e-commerce: login, cadastro de usuário e carrinho de compras, cobrindo cenários positivos e negativos em cada um.

## Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript

## Casos de teste automatizados

### Login
| Cenário | Resultado esperado |
|---------|---------------------|
| Login com sucesso | Login realizado e redirecionamento para a área logada |
| Login com senha inválida | Mensagem de erro "Senha inválida." |
| Login com credenciais inválidas | Mensagem de erro "E-mail inválido." |
| Login sem credenciais | Mensagem de erro "E-mail inválido." |

### Cadastro
| Cenário | Resultado esperado |
|---------|---------------------|
| Cadastro com sucesso | Conta criada com sucesso |
| E-mail com formato inválido | Mensagem de erro de e-mail incorreto |
| Senha fraca | Mensagem de erro de senha com menos de 6 dígitos |

### Carrinho
| Cenário | Resultado esperado |
|---------|---------------------|
| Adicionar um produto ao carrinho | Contador do carrinho atualiza de 3 para 4 produtos |

## Estrutura do projeto

```
cypress/
├── e2e/
│   ├── login.cy.js       # Testes de login
│   ├── cadastro.cy.js    # Testes de cadastro
│   └── carrinho.cy.js    # Testes de carrinho
└── support/
    ├── commands.js
    └── e2e.js
cypress.config.js
package.json
```

## Como executar o projeto

1. Clone o repositório
```bash
git clone https://github.com/rodhsf/cypress-qazando-shop.git
cd cypress-qazando-shop
```

2. Instale as dependências
```bash
npm install
```

3. Execute os testes em modo interativo
```bash
npx cypress open
```

4. Ou execute os testes em modo headless (via terminal)
```bash
npx cypress run
```

## Autor

**Rodrigo Fonseca**
[LinkedIn](https://linkedin.com/in/rodrigo-fonseca-509b80256) | [GitHub](https://github.com/rodhsf)
