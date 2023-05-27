# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

![De classes](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e5-proj-mov-t1-grupo-1-projetos/assets/81269914/6b5ef78d-4bb1-43d6-a142-86262b3ad415)

## Modelo ER


![Diagramas  - ER](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e5-proj-mov-t1-grupo-1-projetos/assets/81269914/baf1b6f2-2ffa-4bb9-a4c8-6376172c2c58)

## Esquema Relacional

![Relacional](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e5-proj-mov-t1-grupo-1-projetos/assets/81269914/2b246baa-019e-4c0b-8510-9f4c2339e4d4)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Tecnologias utilizadas para para o desenvolvimento do código:

- **React Native**
- **Firebase**

Ferramentas usadas para a criação dos diagramas presentes na documentação do projeto:
- **Lucidchart**
- **BPMN.io**


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

![Diagramas  - qualidade](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e5-proj-mov-t1-grupo-1-projetos/assets/81269914/428116d0-cc89-4a27-9093-6ac90406b034)

Segue abaixo as oito características de qualidade de software definidas pela norma internacional ISO/IEC 25010 e os subgrupos escolhidos para o projeto: 

### Funcionalidade 

- **Adequação**: A aplicação de fato faz o que foi planejado, que seria possibilitar o cadastro, a visualização e a edição de alunos, professores e aulas.

- **Acurácia**: Ao preencher as fichas de cadastro, de alunos, professores e aulas, as informações vão para o banco de dados e podem ser acessadas em qualquer momento. 

- **Segurança de acesso**: Ao acessar a aplicação, a primeira tela é de login, logo quem não tem as informações do administrador ou nem é um professor cadastrado pelo administrador, não terá acesso a nada. 

- **Interoperabilidade**: No caso desta aplicação em específico podemos citar o relacionamento com o banco de dados. 

### Confiabilidade 

- **Recuperabilidade**: Como estamos utilizando banco de dados, as informações armazenadas são persistentes. 

### Usabilidade 

- **Inteligibilidade, Apreensibilidade e Operacionalidade**: As interfaces foram desenvolvidas seguindo os princípios do UX e sempre levando em consideração o perfil dos usuários, para desenvolver uma aplicação intuitiva e fácil de usar. 

### Eficiência 

- **Comportamento em relação ao tempo**: A aplicação foi desenvolvida usando React Native, o que proporciona um carregamento mais rápido e imperceptível. 

### Manutenibilidade 

- **Modificabilidade, Testabilidade e Conformidade**: A aplicação foi desenvolvida usando o princípio de baixo acoplamento e alta coesão, o que facilita na compreensão e na modificação. 

### Portabilidade 

- **Adaptabilidade**: Como definido no requisito não funcional RNF-001, o sistema foi desenvolvido para ser uma aplicação móvel e tendo isto em mente a adaptabilidade está relacionada com diferentes navegadores e dispositivos. 

- **Capacidade para substituir**: A proposta deste projeto é literalmente criar esta aplicação para substituir o sistema que está sendo usado atualmente pelo Instituto Árvore da Vida. 

### Segurança 

- **Confidencialidade, Integridade e Autenticação**: Ao acessar a aplicação, a primeira tela é de login, logo quem não tem as informações do administrador ou nem é um professor cadastrado pelo administrador, não terá acesso a nada. 

Há também diferentes acessos para administradores e professores, para proteger a integridade e a confidencialidade de certos dados. 

### Compatibilidade 

- **Interoperabilidade**: No caso desta aplicação em específico podemos citar o relacionamento com o banco de dados. 



