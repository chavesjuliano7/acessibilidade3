// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

// mostrar botão para o usuario quando o jaavscript estiver ativo Juliano
var mostrarBotao = document.querySelector('.secaoDestaques-form-botao').style.display='block'
//pegar a div para aplciar o inert para remover a opção de focus quando o dialog for ativa.
let removerFoco = document.querySelector('#removeFocoDialog')
//pegar o controle de video para depois remove-lo 
let video = document.querySelector('.secaoInstitucional-video')
//pegar o botão fechar do dialogo
let btnFecharBotao = document.querySelector('.dialogNewsletter-fechar')



// Listeners

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
 
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-campo').focus();
  video.removeAttribute('controls');
  removerFoco.inert = true;
});  /*fim do botao abrir dialogo */


// Quando fecha o dialog..
function fechandoDialog() {

  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');
  video.setAttribute('controls', '')
  removerFoco.inert = false;  
  btnAbreDialog.focus();

} /*fim do botao fechar dialogo */
/*fechar o dialog com o botão fechar */
btnFecharBotao.addEventListener('click', fechandoDialog);

/*fechar o botão clicando fora da dialog, na verdade no overlay que foi adicionado no fundo zom o z-index do css */
dialogOverlay.addEventListener('click', fechandoDialog);

/*fechar dialog com o teclado ESC */
document.addEventListener('keyup', ( event )=> {
  
  if (!(event.keyCode === 27)) return; /* não é necessario adicionar chaves quando é apenas uma linha. */
  fechandoDialog();
})









