/*//Variaveis código em aula

var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var noticias = document.querySelectorAll('.listaDeArtigos-item');


var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');


new0.style.display = 'block'


// Criando indicador de slide atual
var indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.textContent = '(Slide atual)';


// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    
    // btn.href = 'javascript:void(0)'
    noticias.forEach(function(noticia) {
      noticia.style.display = 'none';
      
      if ( this.getAttribute('data-sliderItem') === noticia.getAttribute('data-noticia') ) {
        noticia.style.display = 'block'
      }

    }.bind(this));
    
  
    
    document.querySelector('.listaDeArtigos-slider-item .escondeVisualmente').remove();
    this.append(indicadorSlideAtual);
    

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
}) 



*/



const   $                = document.querySelector('html');
const   botoes           = $.querySelectorAll('.listaDeArtigos-slider .listaDeArtigos-slider-item');
const   noticias          = $.querySelectorAll('.listaDeArtigos .listaDeArtigos-item');
        noticias[0].style.display = 'block';
        criarElemento.call(...botoes)/*esse elemento funciona poroque estou passando no spread operator apenas um argumento.  */
        /*criarElemento.call(botoes[0]) esse elemento funciona */


botoes.forEach((botaoItem) => {

    botaoItem.addEventListener('click', function () {

        removeSpanDoSlide.call(botoes)
        
       adicionaSpanNoSlide.call(botaoItem);

    

    //    console.log(this.getAttribute('data-sliderItem') );

       noticias.forEach( (noticia) => {
        noticia.style.display='none'

        let dataNoticia = +noticia.getAttribute('data-noticia');   
        let dataSlideItem = +this.getAttribute('data-sliderItem');
        if (!(dataNoticia === dataSlideItem)) return
        noticia.style.display = 'block';

       })
        
    });

});






function adicionaSpanNoSlide() {

    criarElemento.call(this);
    adicionaClass.call(this)
    return this
}/*fim da função adicionaSpanSlide */

function criarElemento () {

    let elementoSpan = document.createElement('span');
        elementoSpan.textContent = 'Slide Atual';
        elementoSpan.classList.add('.esconderVisualmente');
    this.appendChild(elementoSpan);

}/*fim do criar Elemento */

function removeSpanDoSlide () { 
    this.forEach( (itemDoElemento) => {
        
        removeClass.call(itemDoElemento)

        let slideSpan = itemDoElemento.querySelector('span')
        if(!slideSpan){
            return
        }
        slideSpan.remove()

    })/*fim do forEach */
} /*fim da função removerSpanSlide */

function adicionaClass () {
    this.classList.add('listaDeArtigos-slider-item--ativo');
}

function removeClass () {
    let classe = 'listaDeArtigos-slider-item--ativo'
    //verificar se contem uma classe e deletar
    if (!this.classList.contains(classe)) return 
    this.classList.remove(classe)
}