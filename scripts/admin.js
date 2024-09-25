const BASE_API_URL = 'http://localhost:3000/api'

async function loadDocuments() {
   
   
        const response = await fetch(`${BASE_API_URL}/trust`);
        const images = await response.json();
        documentsSwiperWrapper.innerHTML = '';
        images.forEach(image => {
            const documentElement = document.createElement('div');
            documentElement.classList.add('swiper-slide documents__swiper-slide')
            documentElement.innerHTML = `
                 <div class="documents__slider-content">
                    <img src="${image.imageUrl}" alt="">
                </div>
            `;
            documentsSwiperWrapper.appendChild(documentElement);
        })
    
}



const documentsSwiperWrapper = document.querySelector('.documents__swiper-wrapper')
if(documentsSwiperWrapper){
    loadDocuments()
}