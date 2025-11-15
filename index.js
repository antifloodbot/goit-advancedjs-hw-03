import{S as d,i as l}from"./assets/vendor-D96s6gZV.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",h="53246584-28feabd4215ec3afc796f885c",m={image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40};async function y(o,n=1){const t=new URLSearchParams({key:h,q:o,page:n,...m}),a=`${p}?${t.toString()}`,e=await fetch(a);if(!e.ok)throw new Error(`HTTP error: ${e.status}`);return await e.json()}const u=document.querySelector("#gallery"),f=document.querySelector("#loader");let i=null;function g(){u.innerHTML=""}function b(o){const n=o.map(t=>`
        <a class="gallery__item" href="${t.largeImageURL}">
          <img
            class="gallery__image"
            src="${t.webformatURL}"
            alt="${t.tags}"
            loading="lazy"
          />
          <div class="info">
            <p><b>Likes:</b> ${t.likes}</p>
            <p><b>Views:</b> ${t.views}</p>
            <p><b>Comments:</b> ${t.comments}</p>
            <p><b>Downloads:</b> ${t.downloads}</p>
          </div>
        </a>
      `).join("");u.insertAdjacentHTML("beforeend",n),i?i.refresh():i=new d("#gallery a",{captionsData:"alt",captionDelay:250})}function w(){f.hidden=!1}function L(){f.hidden=!0}function c(o){l.error({message:o,position:"topRight"})}function S(o){l.info({message:o,position:"topRight"})}const P=document.querySelector("#search-form"),$=document.querySelector("#search-input");P.addEventListener("submit",_);async function _(o){o.preventDefault();const n=$.value.trim();if(!n){S("Please enter a search term.");return}g(),w();try{const t=await y(n);if(!t.hits||t.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}b(t.hits)}catch(t){console.error(t),c("Something went wrong. Please try again later.")}finally{L()}}
//# sourceMappingURL=index.js.map
