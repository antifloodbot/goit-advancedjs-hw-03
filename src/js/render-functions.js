import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('#gallery');
const loader = document.querySelector('#loader');

export function clearGallery() {
  gallery.innerHTML = '';
}

export function renderImages(images) {
  const markup = images
    .map(
      img => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}" target="_blank" rel="noopener noreferrer">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${img.likes}</p>
          <p><b>Views:</b> ${img.views}</p>
          <p><b>Comments:</b> ${img.comments}</p>
          <p><b>Downloads:</b> ${img.downloads}</p>
        </div>
      </li>
    `
    )
    .join('');

  gallery.innerHTML = markup;
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