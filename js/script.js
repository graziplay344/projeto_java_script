var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
  somar();

});


//Função somar
function somar() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let primeiro_preco = Number(document.getElementById("primeiro_preco").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let primeiro_preco = Number(document.getElementById("segundo_preco").value);


  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let terceiro_preco = Number(document.getElementById("terceiro_preco").value);

  //Realiza a soma do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //E a variável "resultado_soma" recebe o valor da soma
  let resultado_soma = primeiro_preco + primeiro_preco + preco;

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_soma"
  document.getElementById("resultado_soma").value = resultado_soma;


}
