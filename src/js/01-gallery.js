import { galleryItems } from './gallery-items.js';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryObject = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const galleryItem = document.createElement('li');
  galleryObject.append(galleryItem);

  galleryItem.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    
  </a>`
  );
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
