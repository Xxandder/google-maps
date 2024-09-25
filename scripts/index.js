let isBurgerOpened = false;
const BASE_URL = 'http://127.0.0.1:5500/'

const burgerMenu = document.querySelector('.burger__menu');
const sideMenu = document.querySelector('.burger__side-menu');
const overlay = document.querySelector('.burger__overlay');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
    isBurgerOpened = !isBurgerOpened;
    document.body.classList.toggle('lock-scroll');
});

overlay.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('lock-scroll');
});


/* MODAL WINDOW */
// Получаем элементы
const modal = document.getElementById('formModal');

function openFormModal(service = null, partner = false){
    const checkedRadio = document.querySelectorAll('.radio-service input')[service]
    if(service !== null && service < 4){
        checkedRadio.checked = true
    }else{
        document.querySelectorAll('.radio-service input').forEach(input=>{
            input.checked = false
        })
    }
    if(partner){
        document.querySelector('.radio-service').style.display = 'none';
        document.querySelectorAll('.radio-service input').checked = true
    }else{
        document.querySelector('.radio-service').style.display = 'block'
    }
    openModal()
}

function openModal(){
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}

function closeModal(){
    modal.style.display = 'none';
    if(!isBurgerOpened){
        document.body.style.overflow = 'auto';
    }
    
}
// console.log(document.querySelectorAll('.open-form'))
document.querySelectorAll('.open-form').forEach(el=>{
    el.addEventListener('click', ()=>{
        openFormModal();
    })
})

const serviceButtons = [
    document.querySelector('.open-form-profile'),
    document.querySelector('.open-form-optimization'),
    document.querySelector('.open-form-promotion'),
    document.querySelector('.open-form-audit')
]

serviceButtons.forEach((button, index)=>{
    if(button){
        button.addEventListener('click', ()=>{
            openFormModal(index);
        })
    }
})


const referalButton = document.querySelector('.referal__button')
if(referalButton){
    referalButton.addEventListener('click', ()=>{
        openFormModal(null, true)
    })
}


/**/ 

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        if(!isBurgerOpened){
            document.body.style.overflow = 'auto';
        }
        // document.body.style.overflow = 'auto';
    }
})


$(document).ready(function(){
	 $('#phone-input').inputmask({
      mask: '+380 (99) 999 99 99',
      placeholder: "+380 (__) ___ __ __",
        clearMaskOnLostFocus: false,
       
    });

});

const token = '7535339824:AAGJ2kZUTlLvaSgaz9KccpVeVxQRkNHdouA';  
const chatId = '-1002240078385';  

document.querySelector('#formModalForm').addEventListener('submit', (e)=>{
    e.preventDefault();

    function getSelectedService() {
        const selectedRadio = document.querySelector('input[name="service"]:checked');
        return selectedRadio ? selectedRadio.value : 'Partner' ;
    }

    function getSelectedContact() {
        const selectedRadio = document.querySelector('input[name="contact"]:checked');
        return selectedRadio.value;
    }

    const phoneInput = document.querySelector('#phone-input');
    const phoneValue = phoneInput.value;

    const nameInput = document.querySelector('#name');
    const nameValue = nameInput.value;


    if(!phoneValue || phoneValue.includes('_')){
        alert('Введіть номер телефону повністю')
    }else{
        sendMessage(token, chatId, `Ім'я: ${nameValue},\nПослуга: ${getSelectedService()}\nСпосіб зв'язку: ${getSelectedContact()}\nНомер телефону: ${phoneValue}`)
    }
    window.location.href = `${BASE_URL}appeal.html`;
    
})


const sendMessage = async (token, chatId, message) => {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: message
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
             
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log('Message sent successfully:', jsonResponse);
        } else {
            console.error('Error sending message:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
};




