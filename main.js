// Peguei o container que tem todas as divs
const accordion = document.querySelector('[data-js="accordion__container"]');
// Adicionei eventListener pra quando houver click dentro deste elemento
accordion.addEventListener('click', onAccordionClick);

// Função que é chamada quando há um click
function onAccordionClick(event) {
  // Vê se o target do click foi um elemento title
  const element = event.target.closest('.accordion__header');
  if (element) {
    // Procuro saber e guardar a informção que o title clicado é o que está ativo
    const activeElement = document.querySelector('.accordion__article--active');
    if (activeElement) {
      // Se for o ativo, remove a classe de ativo
      activeElement.classList.remove('accordion__article--active');
    }
    // Procuro saber qual é o elemento que estou clicando
    const parent = element.parentElement;
    // Se o elemento que estou clicando for diferente do que está ativo
    if (parent !== activeElement){
      // Adiciono a classe de ativo a este elemento
      parent.classList.add('accordion__article--active');
    }
    
  }
  
}

