/*É uma aula introdutoria de modulos por Vitor Lima no youtube, em JS  tem como foco no aprendizado de Node.js;
- Essa importante ferramenta e usada em varios projetos e aplicações mundo a fora.
- Nessa aula estou aprendendo;
- Funções dentro de variaveis, ou seja funções sem nome;
- sintaxe e padrão de funções com seus parametros e retorno;
- Uso do CMD junto ao lado do servidor para melhor aproveitamento das aula no youtube
OBS.: no dashoard esta sendo usada todas os modulos que serão usados com o metodo de node require.
*/

var SomaFunc = require("./somar");
var MultiFunc = require("./multiplicar");
var DiviFunc = require("./dividir");
var Subt = require("./subtrair");

console.log(SomaFunc(1,2));
console.log(MultiFunc(2,2));
console.log(DiviFunc(2,2));
console.log(Subt(2,2))