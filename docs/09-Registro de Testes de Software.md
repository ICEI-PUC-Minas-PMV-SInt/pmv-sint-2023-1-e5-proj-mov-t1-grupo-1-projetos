# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

<table>
  <tr>
    <th> Caso teste 1 </th>
    <th> Login/logout </th>
  </tr>
  
 <tr>
    <th> Requisitos associados </th>
    <th> 
      <li> [RF-000]	Permitir que o usuário realize login/logout no sistema</li>
   </th>
  </tr>
  
   <tr>
  <th> Objetivo do Teste </th>
   <th> Verificar se os usuários conseguem fazer o login e logout. </th>
  </tr>
  
  <tr>
  <th> Resultado </th>
   <th> Login e logout efetuados com sucesso para usuário administrador e professor. </th>
  </tr>
   
</th>
  </tr>
  </table>
  <table>
  <tr>
    <th> Caso teste 2 </th>
    <th> Cadastro de novos alunos </th>
  </tr>
  
 <tr>
    <th> Requisitos associados </th>
    <th> 
      <li> [RF-001]	Permitir que o usuário cadastre novos membros </li>
   </th>
  </tr>
  
   <tr>
  <th> Objetivo do Teste </th>
   <th> Verificar se os usuários autorizados(administradores) conseguem fazer o cadastro de novos alunos. </th>
  </tr>
  
  <tr>
  <th> Resultado </th>
   <th> Cadastro de um novo aluno realizado com sucesso após preenchimento dos dados obrigatórios. </th>
  </tr>
   
</th>
  </tr>
</table>

<table>
  <tr>
    <th> Caso teste 3 </th>
    <th> Visualização e edição de cadastro de alunos </th>
  </tr>
  
 <tr>
    <th> Requisitos associados </th>
    <th> 
      <li> [RF-002]	Permitir que o usuário edite o cadastro de membros já existentes</li>
     <li> [RF-003]	Permitir que o usuário visualize os cadastros existentes </li>
   </th>
  </tr>
  
   <tr>
  <th> Objetivo do Teste </th>
   <th> Verificar se os usuários autorizados(administradores) conseguem visualizar e editar o cadastro de membros já existentes. </th>
  </tr>
  
  <tr>
  <th> Resultado </th>
   <th> 
     <li>Alunos cadastrados no sistema foram listados após clicar em `Educandos Cadastrados`. </li>
   <li> As informações do aluno foram editadas com sucesso após clicar no nome do aluno, e em seguida, clicar no botão `Editar Cadastro do Aluno`. </li>
    </th>
  </tr>
   
</th>
  </tr>
</table>

<table>
<tr>
    <th> Caso teste 4 </th>
    <th> Cadastro, vizualização e edição de atividades. </th>
  </tr>
  
 <tr>
    <th> Requisitos associados </th>
    <th> 
     <li> [RF-004]	Permitir que o usuário(administrador) cadastre, vizualize e edite novas atividades </li>
   </th>
  </tr>
  
   <tr>
  <th> Objetivo do Teste </th>
   <th> Verificar se os administradores conseguem vizualizar, cadastrar e editar as atividades. </th>
  </tr>
  
  <tr>
  <th> Resultado </th>
    <th> 
      <li>Cadastro de atividade realizado com sucesso após preenchimento das informações obrigatórias. </li>
  <li>Atividades cadastradas no sistema foram listadas após clicar em `Atividades Cadastradas`. </li>
   <li>As informações da atividade foram editadas com sucesso após clicar em seu nome, e em seguida, clicar no botão `Editar Cadastro da Atividade`. </li>
    </th>
  </tr>
  </table>

<table>
  <tr>
    <th> Caso teste 5 </th>
    <th> Cadastro de professores. </th>
  </tr>
  
 <tr>
    <th> Requisitos associados </th>
    <th> 
     <li> [RF-005]	Permitir que o usuário(administrador) cadastre novos professores </li>
   </th>
  </tr>
  
   <tr>
  <th> Objetivo do Teste </th>
   <th> Verificar se os administradores conseguem fazer o cadastro de novos professores. </th>
  </tr>
  
  <tr>
  <th> Resultado </th>
   <th> Professor cadastrado no sistema com sucesso após preenchimento do email e senha. </th>
  </tr>
   
</th>
  </tr>
</table>

<table>
  <tr>
    <th> Caso teste 6 </th>
    <th> Cadastro, vizualização e edição de classes. </th>
  </tr>
  
 <tr>
    <th> Requisitos associados </th>
    <th> 
     <li> [RF-006]	Permitir que o usuário(professor) cadastre, vizualize e edite as classes </li>
   </th>
  </tr>
  
   <tr>
  <th> Objetivo do Teste </th>
   <th> Verificar se os professores conseguem fazer a vizualizaçao, o cadastro e a edição das classes. </th>
  </tr>
  
  <tr>
  <th> Resultado </th>
   <th> 
     <li>Cadastro da classe realizado com sucesso após preenchimento das informações obrigatórias. </li>
  <li> Atividades cadastradas no sistema foram listadas após clicar em `Turmas Cadastradas`. </li>
   <li> As informações da classe foram editadas com sucesso após clicar em seu nome, e em seguida, clicar no botão `Editar Cadastro da Turma`. </li>
    </th>
  </tr>
   
</th>
  </tr>
</table>

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

O resultado alcançado após o desenvolvimento da primeira versão do sistema foi satisfatório, pois atendeu aos requisitos necessários, e consequentemente, às principais necessidades propostas pelo cliente. A organização dos componentes e o controle do sistema proveniente de uma navegação simples e intuitiva são pontos que se destacam no sistema. Em contrapartida ainda há a necessidade de algumas validações no sistema. Atualmente, ao editar um aluno, é possível apagar suas informações já cadastradas e salvar com sucesso, tornando possível perder toda a informação cadastrada anteriormente.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
