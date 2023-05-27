# Especificações do Projeto

## Personas

<table>
  <tr>
    <th>Foto</th>
    <th>Nome</th>
    <th>Descrição</th>
    <th>Aplicativos</th>
    <th>Motivações</th>
    <th>Frustrações</th>
    <th>Hobbies, História</th>
  </tr>
  <tr>
    <td><img title="Maria Eugênia" src="https://i.imgur.com/EZmVbet.jpg"/></td>
    <td>Maria Eugênia</td>
    <td>
      <ul>
        <li>31 anos</li>
        <li>Funcionária do Instuto Árvore da Vida</li>
        <li>Mora em Betim, Minas Gerais</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Youtube</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Frida Kahlo</li>
        <li>Tarsila do Amaral</li>
        <li>Rihanna</li>
      </ul>
    </td>
    <td>
      <li>Sempre se atrapalha ao cadastrar novos membros em suas atividades no Instuto Árvore da Vida</li>
      <li>Ao ser questionada, dificilmente encontra todas as informações necessárias sobre as aulas disponibilizadas pelo Instituto</li>
    </td>
    <td>
      <li>Fotografia</li>
      <li>Música</li>
      <li>Desde nova sempre teve amor por ajudar os outros, assim que descobriu sobre o Instuto Árvore da Vida não teve dúvida em participar</li>
    </td>
  </tr>
  <tr>
    <td><img title="Renato Luís" src="https://i.imgur.com/rGQVtoe.jpg" /></td>
    <td>Renato Luís</td>
    <td>
      <ul>
        <li>56 anos</li>
        <li>Professor</li>
        <li>Mora em Betim, Minas Gerais</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Youtube</li>
        <li>Facebook</li>
        <li>Reddit</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Coisa de Nerd(Leon e Nilse)</li>
        <li>Elon Musk</li>
      </ul>
    </td>
    <td>
      <li>Possui dificuldade em identificar as aulas que vai ministrar e qual o dia de cada no Instituto Árvore da Vida</li>
      <li>Possui dificuldade em identificar quais alunos estão cadastrados nas aulas que ministra no Instituto Árvore da Vida</li>
    </td>
    <td>
      <li>Música</li>
      <li>Barzinho com os amigos</li>
      <li>Dar aulas criativas</li>
      <li>Ele deseja que ajudar seus alunos a terem mais possibilidades no futuro e por isso decidiu se juntar ao Instituto Árvore da Vida</li>
    </td>
  </tr>
</table>

## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Como usuário   | Quero poder cadastrar novos membros do Instituto Árvore da Vida.           | Para obter dados necessários de todos que iram receber algum serviço do Instituto e facilitar o processo de verificação e aprovação de cada novo membro.              |
|Como usuário       | Quero poder adicionar, editar ou excluir cadastros de membros já existentes no Instituto Árvore da Vida.                | Para que eu possa manter atualizado os dados dos membros do Instituto Árvore da Vida. |
|Como usuário       | Quero poder organizar as aulas e horários disponíveis no Instituto Árvore da Vida.                | Para que eu possa repassar as informações das aulas, seus horários, professores e alunos matriculados quando solicitado |
|Como usuário       | Quero poder visualizar as aulas e horários disponíveis no Instituto Árvore da Vida.                | Para que eu possa organizar as aulas que irei ministrar no Instituto |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente o Instituto Árvore da Vida armazena dois importantes dados organizacionais, informações das aulas e dos alunos, em planilhas do Excel. E com o crescimento do Instituto, algumas dificuldades e preocupações aparecem em relação a este armazenamento. 

Por exemplo, ao cadastrar um aluno, a psicóloga responsável pela matrícula recolhe as informações do aluno manualmente e depois transfere para a planilha do Excel. Esse processo não é só demorado, mas como também deixa muito espaço para erros.  

Outro exemplo é o controle das aulas, atualmente o Instituo não possui uma ferramenta para o controle das aulas e com a expansão da oferta de cursos, a necessidade para uma organização cresce. 

Em conclusão, para as crescentes necessidades do Instituto Árvore da Vida o armazenamento em planilhas do Excel não está sendo eficiente nem satisfatório. 

![Cadastro BPMN_page-0001](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e5-proj-mov-t1-grupo-1-projetos/assets/81269914/434dd388-e85f-4498-86cb-80c1396f3394)

### Análise da Situação Futura
### Descrição Geral da Proposta

Para melhorar os processos realizados pelo Instituto Árvore da Vida é proposto realizar uma aplicação móvel que facilite o cadastramento dos membros já existentes e de novos membros, salvando os dados em um banco de dados, e permitindo a edição e exclusão, tornando todo o processo mais intuitivo e rápido, além de mais organizado.

Todos os membros cadastrados serão apresentados na interface seguindo os princípios do UX e além da possibilidade de inserção de fotos e documentos com a adição de filtros que facilitem a busca de membros específicos caso necessário. 

Junto com o novo processo de cadastramento é proposto a realização de uma agenda / organograma ao qual possa ser inserido as informações das aulas, horários, alunos matriculados e os professores que estão ministrando cada disciplina.

Igualmente será inserido a possibilidade de edição e filtro dos dados inseridos.


### Processo 1 – CADASTRAMENTO / EDIÇÃO DE NOVOS MEMBROS

Modelo de cadastramento / edição de membros. Para a melhoria do processo de cadastramento é proposto realizar uma aplicação móvel que facilite o cadastramento dos membros já existentes e de novos membros, salvando os dados em um banco de dados, e permitindo a edição e exclusão, tornando todo o processo mais intuitivo e rápido, além de mais organizado.


![ADM BPMN_page-0001](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e5-proj-mov-t1-grupo-1-projetos/assets/81269914/fd047f29-fd50-4959-959f-3c37a31db352)


### Processo 2 – ORGANOGRAMA / AGENDA DE AULAS

Modelo de criação da Agenda de Aulas. Para a melhoria do processo é proposto a realização de uma agenda / organograma ao qual possa ser inserido as informações das aulas, horários, alunos matriculados e os professores que estão ministrando cada disciplina.

![Aulas BPMN_page-0001](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e5-proj-mov-t1-grupo-1-projetos/assets/81269914/eeab3e57-807f-44b0-a8af-8b91b1f76301)


## Indicadores de Desempenho

<img src="img/Percentual de desempenho.png"/>


## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-000| Permitir que o usuário realize login | ALTA | 
|RF-001| Permitir que o usuário cadastre novos membros | ALTA | 
|RF-002| Permitir que o usuário edite o cadastro de membros já existentes   | MÉDIA |
|RF-003| Permitir que o usuário visualize os cadastros existentes   | MÉDIA |
|RF-004| Permitir que o usuário cadastre novas classes | ALTA | 
|RF-005| Permitir que o usuário edite o cadastro de classes já existentes   | MÉDIA |
|RF-006| Permitir que o usuário visualize as classes existentes   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

### Priorização dos requisitos
Abaixo segue a priorização dos requisitos usando a técnica MoSCoW (Must have, Should have, Could have and Won’t have):

![Diagramas  - Página 6](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e5-proj-mov-t1-grupo-1-projetos/assets/81269914/153d2c95-b9cc-44b1-979b-8f19b8cd82c6)

## Restrições

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto deve ser desenvolvido utilizando o React Native      |
|04| Deve ser utilizado um banco de dados para armazenar os dados inseridos      |

## Diagrama de Casos de Uso

<img src="img/Diagrama de Casos de Uso.png"/>

# Matriz de Rastreabilidade

<img src="img/Matriz de Rastreabilidade.png"/>

# Gerenciamento de Projeto

## Gerenciamento de Tempo

<img src="img/Gerenciamento de Tempo 01.png"/>

<img src="img/Gerenciamento de Tempo 02.png"/>

<img src="img/Gerenciamento de Tempo 03.png"/>

## Gerenciamento de Equipe

<img src="img/Gerenciamento de Equipe.png"/>

Gerenciamento de equipe ainda em andamento, membros ainda não foram definidos para cada atividade.

## Gestão de Orçamento

<img src="img/Gestão de Orçamento.png"/>
