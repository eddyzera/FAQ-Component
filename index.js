/**
 * Funtion para abrir e fechar as FAQs
 */
function openAndCloseFAQ() {
    document.querySelectorAll('.accordion-title').forEach(divItem => {
        divItem.addEventListener('click', (event) => {
            event.preventDefault();
            console.log()
            let childElement = divItem.nextElementSibling;
            divItem.classList.toggle('active')
            if (childElement.style.maxHeight) {
                childElement.style.maxHeight = null;
            } else {
                childElement.style.maxHeight = childElement.scrollHeight + "px";
            } 
        })
    })
}

/**
 * Function para que quando a FAQ estiver aberta deixar uma cor fixada
 */
function changeColorFAQ () {
    document.querySelectorAll('.accordion-title').forEach(divItem => {
        divItem.addEventListener('click', () => {
            if (divItem.classList.item(1) === 'red') {
                divItem.classList.toggle('click-red')
            } else if (divItem.classList.item(1) === 'green') {
                divItem.classList.toggle('click-green')
            } else if(divItem.classList.item(1) === 'purple') {
                divItem.classList.toggle('click-purple')
            }
        })
    })
}

changeColorFAQ();
openAndCloseFAQ();
