function obterCep (formCep){

    const cep = {

        valor: formCep.value,
        valido: formCep.checkValidity(),

        validaCep: function ( ){
            console.log(this.valido);
                if(this.valido) return

                formCep.setCustomValidity('Ops! Tem algo errado neste campo!');
                formCep.classList.add('contatoCampo--validouErro')
                formCep.parentNode.classList.add('contatoCampo--erro');
            
        },


    }


    
    return cep
}



const botao = document.querySelector('.secaoContato-form-cta');

botao.addEventListener('click',function(event) {
    event.preventDefault();

    const campoCep = document.querySelector('#cep');
    let meuCep = obterCep(campoCep)
    meuCep.validaCep();
   
  

})