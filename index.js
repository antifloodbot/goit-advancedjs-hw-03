import{S as f,i as l}from"./assets/vendor-D96s6gZV.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="53246584-28feabd4215ec3afc796f885c",h={image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40};async function y(a,s=1){const t=new URLSearchParams({key:m,q:a,page:s,...h}),n=`${p}?${t.toString()}`,e=await fetch(n);if(!e.ok)throw new Error(`HTTP error: ${e.status}`);return await e.json()}const u=document.querySelector("#gallery"),d=document.querySelector("#loader");let i=null;function g(){u.innerHTML=""}function v(a){const s=a.map(t=>`
      <div class="card">
        <a class="gallery__item" href="${t.largeImageURL}">
          <img
            class="gallery__image"
            src="${t.webformatURL}"
            alt="${t.tags}"
            loading="lazy"
          />
        </a>

        <div class="info">
          <div class="info-item">
            <span class="label">Likes</span>
            <span class="value">${t.likes}</span>
          </div>
          <div class="info-item">
            <span class="label">Views</span>
            <span class="value">${t.views}</span>
          </div>
          <div class="info-item">
            <span class="label">Comments</span>
            <span class="value">${t.comments}</span>
          </div>
          <div class="info-item">
            <span class="label">Downloads</span>
            <span class="value">${t.downloads}</span>
          </div>
        </div>
      </div>
      `).join("");u.insertAdjacentHTML("beforeend",s),i?i.refresh():i=new f("#gallery a",{captionsData:"alt",captionDelay:250})}function w(){d.hidden=!1}function L(){d.hidden=!0}function c(a){l.error({message:a,position:"topRight"})}function b(a){l.info({message:a,position:"topRight"})}const S=document.querySelector("#search-form"),P=document.querySelector("#search-input");S.addEventListener("submit",$);async function $(a){a.preventDefault();const s=P.value.trim();if(!s){b("Please enter a search term.");return}g(),w();try{const t=await y(s);if(!t.hits||t.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}v(t.hits)}catch(t){console.error(t),c("Something went wrong. Please try again later.")}finally{L()}}
//# sourceMappingURL=index.js.map
