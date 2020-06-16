    
    const inputEmail = document.querySelector('#email')


  
//TODO: esse são os elementos utilizado para alterar a função Mailcheck
// var domains = ['gmail.com', 'aol.com'];
// var secondLevelDomains = ['hotmail']
// var topLevelDomains = ["com", "net", "org"];


inputEmail.addEventListener('blur',function ( ) {
   
    const divInputEmail = inputEmail.parentNode;
    const inputEmailSugestao = document.querySelector('#sugestao');

    inputEmailSugestao.innerHTML = '';
    divInputEmail.classList.remove('contatoCampo--erro')
    inputEmail.classList.remove('contatoCampo--validouErro')
    inputEmailSugestao.style.display = 'none'


    Mailcheck.run({
        email: inputEmail.value,
        // TODO: os elementos a seugir servem para que seja editado o e-mail que queremos que o sistema forneca, não se faz necessario utilizar, ja que a função tem esse elementos ja inseridos no mailcheck.

        // domains: domains, // optional
        // topLevelDomains: topLevelDomains, // optional
        // secondLevelDomains: secondLevelDomains, // optional
        // distanceFunction: superStringDistance, // optional

        suggested: function (suggestion) {

            divInputEmail.classList.add('contatoCampo--erro')
            inputEmail.classList.add('contatoCampo--validouErro')
            inputEmailSugestao.style.display = 'inline-block'
            inputEmailSugestao.insertAdjacentHTML('afterbegin',`Você quis dizer: <a href="#">${suggestion.full} ?</a>` )
            inputEmailSugestao.setAttribute('tabindex', '0');
            inputEmailSugestao.setAttribute('role', 'alert');   
 
    
        },
        // empty: function () {
        //         // callback code
        // }
    });

})


// resolução do professor:

// campoEmail.addEventListener('blur', function() {
//     Mailcheck.run({
//         email: campoEmail.value,
//         domains: domains,                                                // optional
//         topLevelDomains: topLevelDomains,                // optional
//         secondLevelDomains: secondLevelDomains,    // optional
//         suggested: function(suggestion) {
//             sugestao.style.display = 'inline-block';
//             sugestao.textContent = 'Você quis dizer: ' + suggestion.full + '?';
//             sugestao.parentNode.classList.add('contatoCampo--erro');
//             campoEmail.classList.add('contatoCampo--validouErro');
//             sugestao.setAttribute('tabindex', '0');
//             sugestao.setAttribute('role', 'alert');
//         }
//     });
// });