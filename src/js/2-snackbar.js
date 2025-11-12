import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const delay = Number(formData.get('delay'));
  const state = formData.get('state');

  if (!Number.isFinite(delay) || delay < 0 || !state) {
    iziToast.error({ message: 'Provide a non-negative delay and choose a state', position: 'topRight' });
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });

  promise
    .then(ms => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${ms}ms`,
        position: 'topRight',
        timeout: 3000,
      });
    })
    .catch(ms => {
      iziToast.error({
        message: `❌ Rejected promise in ${ms}ms`,
        position: 'topRight',
        timeout: 3000,
      });
    });
}
