## Tópicos

## História do AngularJS e Angular 2/3/4/5/6
## ReactiveX
  - observer pattern
  - utilizado pelo Angular
## Typescript e Sass
  - linguagem 
## Hello world

### Explicação da estrutura do projeto
  - tslint.json - dicas para um melhor código
  - package.json - referências aos módulos do projeto e outras configurações
  - /environment - define o ambiente que está rodando e alguns switches de acordo com isso
  - /assets - arquivos estáticos
  - app.commponent.ts - agrupa html e css
  - app.component.spec - testes
### Comandos
  - `ng build` - gera o dist (distribution), para deploy
  - `ng serve --open` - abre no browser
  - `ng build --prod` - gera o dist para produção (otimizado)
  - `ng test` - realiza testes unitários
  - `npm run e2e` - realiza testes e2e
  - `ng generate componente <component_name>` - gera um componente com todos os arquivos necessários
  - `ng generate module <module_name>` - gera um módulo
  - `ng generate service <service_name>` - gera um serviço
  - `ng generate class <class_name>` - pode ser usada como modelo
### Testes
  - e2e - para testes end-to-end, cria cenários para testes
  - .spec - testes unitários, para cada component
### Termos
  - modules - agrupador lógico de funcionalidades como componentes e serviços. Equivalente à uma DLL em C#
  - componentes - regra de visualização, lógica e HTML para exibição
  - services - cuida das requisições HTTP etc
  - routes - muda a tela baseando-se nas rotas

### Programando

#### Module
  - declarations - lista de componentes, diretivas e pipe do módulo
  - exports - sub-conjunto de declarations dispónível para ser usado em outros módulos
  - imports - outros módulos que são utilizados
  - providers - serviços para serem usados através de injeção de dependência
  - bootstrap (não tem tempo)

## Service
  - instância é singleton, se quisermos uma única para um componente, então devemos declará-lo dentro do componente
  - é possível fazer injeção de dependência, padrão: `{ provide: ILogService, useClass: MyLogService}`
  - Angular 6+: O próprio serviço pode fazer a injeção de dependência, através do `provideIn`

## Validação
  - ReactiveForms etc. Formulários!
  - template-driven e model-driven (Reactive Forms)
  - dynamic-form

## Segurança com routes
  - O Angular routes apresenta funcionalidades para controlar a permissão do usuário
  - `canActive`
  - `HttpInterceptor`

## UI Libs
  - @Angular material
  - primeng
  - template (starter kits)
  - Schematics - é a forma que o AngularCLI modelos para gerar components, services etc. Ainda pouco usado, o Angular Material oferece um conjunto

## Links interessantes
  - https://angular.io/guide/cheatsheet
  - https://angular.io/api/core/Directive
  - https://update.angular.io/
  - https://github.com/douglasfernandesjr/exemplos/tree/master/Angular/Workshop
  - https://angular.io/guide/dynamic-form
  - https://github.com/ngx-rocket/starter-kit

## Dicas
  - Observable não consegue tratar erros (quando usado em autocomplete, por exemplo), então é necessário colocar um tratamento de erro no meio do fluxo de dados
  - Dentro de routes é possível definir um `component` e alguns `children`, definindo assim um layout base para todos os outros

## TODO
  - diferença entre componentes e diretivas
  - `@input` e `@output`