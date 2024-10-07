const BASE_API_URL = 'http://localhost:3000/api'

async function loadTrustImages() {
        const response = await fetch(`${BASE_API_URL}/trust`);
        const images = await response.json();
        documentsSwiperWrapper.innerHTML = '';
        images.forEach(image => {
            const documentElement = document.createElement('div');
            documentElement.classList.add('swiper-slide', 'documents__swiper-slide')
            documentElement.innerHTML = `
                 <div class="documents__slider-content">
                    <img src="http://localhost:3000${image.imageUrl}" alt="">
                </div>
            `;
            documentsSwiperWrapper.appendChild(documentElement);
        }) 
}

async function loadCases() {
    const response = await fetch(`${BASE_API_URL}/case`);
    const cases = await response.json();
    casesItems.innerHTML = '';
    cases.forEach(caseItem => {
        const caseElement = document.createElement('div');
        caseElement.classList.add('cases__item')
        caseElement.innerHTML = `
                            <div class="cases__image">
                                <img src="http://localhost:3000${caseItem.imageUrl}" alt="">
                            </div>
                            <div class="cases__title">
                                ${caseItem.title}
                            </div>
                            <div class="cases__text">
                                ${caseItem.description}
                            </div>
        `;
        casesItems.appendChild(caseElement);
    }) 
}

async function loadPackages(packageName){
    const response = await fetch(`${BASE_API_URL}/services`);
    const services = await response.json();
    const packagesItems = document.querySelectorAll(`.${packageName}__packages .packages__item`);
    const servicePackages = services.filter(service=>service.name===packageName)[0].packages
    packagesItems.forEach((packageItem, index) => {
        packageItem.querySelector('.packages__price').innerHTML = `${servicePackages[index].price} грн`
        packageItem.querySelector('.packages__term span').innerHTML = `${servicePackages[index].term}`
    }) 
}

async function loadContacts(){
    const response = await fetch(`${BASE_API_URL}/contact`);
    const contacts = await response.json();
    const contactItems = document.querySelectorAll('.contacts-block__items a');
    contacts.forEach((contact, index)=>{
        contactItems[index].href = contact.link;
        contactItems[index].style.display = contact.isDisplayed ? 'block' : 'none'
    })
  
}

const documentsSwiperWrapper = document.querySelector('.documents__swiper-wrapper')
if(documentsSwiperWrapper){
    loadTrustImages()
}

const casesItems = document.querySelector('.cases__items');
if(casesItems){
    loadCases()
}



const optimizationPackages = document.querySelector('.optimization__packages')
const promotionPackages = document.querySelector('.promotion__packages')
const profilePackages = document.querySelector('.profile__packages')
const auditPackages = document.querySelector('.audit__packages')

if(optimizationPackages){
    loadPackages('optimization')
}

if(profilePackages){
    loadPackages('profile')
}

if(promotionPackages){
    loadPackages('promotion')
}

if(auditPackages){
    loadPackages('audit')
}

const contactBlock = document.querySelector('.contacts-block');
if(contactBlock){
    loadContacts()
}