## Tópicos

* História do AngularJS e Angular 2/3/4/5/6
* ReactiveX
  - observer pattern
  - utilizado pelo Angular
* Typescript e Sass
  - linguagem 
* Hello world
  - explicação da estrutura do projeto
    - tslint.json - dicas para um melhor código
    - package.json - referências aos módulos do projeto e outras configurações
    - /environment - define o ambiente que está rodando e alguns switches de acordo com isso
    - /assets - arquivos estáticos
    - app.commponent.ts - agrupa html e css
    - app.component.spec - testes
  - comandos
    - `ng build` - gera o dist (distribution), para deploy
    - `ng serve --open` - abre no browser
    - `ng build --prod` - gera o dist para produção (otimizado)
    - `ng test` - realiza testes unitários
  - testes
    - e2e - para testes end-to-end, cria cenários para testes
    - .spec - testes unitários, para cada component
