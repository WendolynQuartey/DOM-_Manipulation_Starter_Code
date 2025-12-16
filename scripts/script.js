let mainEl = document.querySelector("main");
let bg = 'var(--main-bg)';

mainEl.style.backgroundColor = bg;

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

mainEl.classList.add("flex-ctr");