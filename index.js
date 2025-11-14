import{i as c}from"./assets/vendor-Cn23zq6i.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",d="53246584-28feabd4215ec3afc796f885c",p={image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40};async function h(o,n=1){const r=new URLSearchParams({key:d,q:o,page:n,...p}),a=`${f}?${r.toString()}`,e=await fetch(a);if(!e.ok)throw new Error(`HTTP error: ${e.status}`);return await e.json()}const l=document.querySelector("#gallery"),u=document.querySelector("#loader");function m(){l.innerHTML=""}function y(o){const n=o.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}" target="_blank" rel="noopener noreferrer">
          <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </li>
    `).join("");l.innerHTML=n}function g(){u.hidden=!1}function w(){u.hidden=!0}function i(o){c.error({message:o,position:"topRight"})}function b(o){c.info({message:o,position:"topRight"})}const L=document.querySelector("#search-form"),P=document.querySelector("#search-input");L.addEventListener("submit",S);async function S(o){o.preventDefault();const n=P.value.trim();if(!n){b("Please enter a search term.");return}m(),g();try{const r=await h(n);if(!r.hits||r.hits.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}y(r.hits)}catch(r){console.error(r),i("Something went wrong. Please try again later.")}finally{w()}}
//# sourceMappingURL=index.js.map
