import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('#gallery');
const loader = document.querySelector('#loader');

let lightbox = null;

export function clearGallery() {
  gallery.innerHTML = '';
}

export function renderImages(images) {
  const markup = images
    .map(
      img =>       `
      <div class="card">
        <a class="gallery__item" href="${img.largeImageURL}">
          <img
            class="gallery__image"
            src="${img.webformatURL}"
            alt="${img.tags}"
            loading="lazy"
          />
        </a>

        <div class="info">
          <div class="info-item">
            <span class="label">Likes</span>
            <span class="value">${img.likes}</span>
          </div>
          <div class="info-item">
            <span class="label">Views</span>
            <span class="value">${img.views}</span>
          </div>
          <div class="info-item">
            <span class="label">Comments</span>
            <span class="value">${img.comments}</span>
          </div>
          <div class="info-item">
            <span class="label">Downloads</span>
            <span class="value">${img.downloads}</span>
          </div>
        </div>
      </div>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('#gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function showLoader() {
  loader.hidden = false;
}

export function hideLoader() {
  loader.hidden = true;
}

export function showError(message) {
  iziToast.error({
    message,
    position: 'topRight',
  });
}

export function showInfo(message) {
  iziToast.info({
    message,
    position: 'topRight',
  });
}