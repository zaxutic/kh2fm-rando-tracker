function handleLeftClick(e){const t=e.currentTarget;if(t.classList.contains("disabled"))return;const n=t.querySelector(".icon"),o=t.querySelector(".number"),s=t.querySelector(".nobody");let a=Number(t.dataset.level)||0,c=t.dataset.total||1;if(a=(a+1)%((c=Number(c)+Boolean(s))+1),t.dataset.level=a,null===s||a!==c)switch(null!==o&&a>1&&o.setAttribute("src",`img/numbers/${a}.png`),a){case 0:n.classList.remove("opaque"),o&&o.classList.remove("opaque"),s&&s.classList.remove("opaque");break;case 1:n.classList.add("opaque");break;case 2:o.classList.add("opaque")}else s.classList.add("opaque")}function handleRightClick(e){const t=e.currentTarget;if(t.classList.contains("disabled"))return;const n=t.querySelector(".secondary");if(null===n)return;let o=n.dataset.files;if(void 0===o)return void n.classList.toggle("opaque");o=JSON.parse(n.dataset.files);let s=Number(n.dataset.index)+1||1;s%(o.length+1)==0?s=0:n.setAttribute("src",`img/secondary/${o[s-1]}.png`),s<2&&n.classList.toggle("opaque"),n.dataset.index=s}function handleMiddleClick(e){e.currentTarget.classList.toggle("disabled")}document.body.onmousedown=(e=>{if(1===e.button)return!1}),document.querySelectorAll(".grid > div").forEach(e=>{e.onmousedown=(e=>{switch(e.button){case 0:handleLeftClick(e);break;case 2:handleRightClick(e);break;case 1:handleMiddleClick(e)}}),e.oncontextmenu=(e=>{e.preventDefault()})}),document.querySelectorAll("footer .popup > button").forEach(e=>{e.onclick=(t=>{e.nextElementSibling.classList.toggle("active")})}),document.querySelectorAll("footer .popup > .content").forEach(e=>{e.onclick=(t=>{e===t.target&&e.classList.remove("active")})}),document.onkeydown=(e=>{if("Escape"===e.key){const e=document.querySelector("footer .popup > .content.active");null!==e&&e.classList.remove("active")}});const themeBtn=document.querySelector("#theme-btn");"dark"===theme?themeBtn.innerHTML="Light Theme":themeBtn.innerHTML="Dark Theme",themeBtn.onclick=(e=>{"light"===theme?(theme="dark",themeBtn.innerHTML="Light Theme"):(theme="light",themeBtn.innerHTML="Dark Theme"),setTheme()});