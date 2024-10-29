import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');


const galleryMarkup = galleryItems
  .map(
    item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `
  )
  .join('');


galleryContainer.innerHTML = galleryMarkup;


galleryContainer.addEventListener('click', event => {
  event.preventDefault();


  const largeImageURL = event.target.dataset.source;


  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="600" height="600">
  `);
  
  instance.show();


  
  const closeOnEscape = e => {
    if (e.key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', closeOnEscape);
    }
  };

  document.addEventListener('keydown', closeOnEscape);
});