document.querySelectorAll(".std-acc").forEach((e=>{const t=e.querySelectorAll(".std-acc__item");t.forEach(((e,t)=>{const s=e.querySelector(".std-acc__header");null!==s&&(0===t&&e.classList.add("is-open"),s.addEventListener("click",(()=>{e.classList.contains("is-open")?(e=>{if(!e.classList.contains("is-open"))return;const t=e.querySelector(".std-acc__body");if(null===t)return;const s=e.querySelector(".std-acc__inner");null!==s&&(t.style.height=`${s.offsetHeight}px`,window.setTimeout((()=>{t.style.height=null,e.classList.remove("is-open")})))})(e):(e=>{if(e.classList.contains("is-open"))return;const t=e.querySelector(".std-acc__body");if(null===t)return;const s=e.querySelector(".std-acc__inner");null!==s&&(t.style.height=`${s.offsetHeight}px`,window.setTimeout((()=>t.style.height=null),400),e.classList.add("is-open"))})(e)})))}))}));
//# sourceMappingURL=std-acc.js.map
