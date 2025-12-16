let menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
]

let mainEl = document.querySelector("main");
let bg = 'var(--main-bg)';

mainEl.style.backgroundColor = bg;

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

mainEl.classList.add("flex-ctr");

let menuBg = 'var(--top-menu-bg)';

let topMenuEl = document.getElementById("top-menu");



topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = menuBg;
topMenuEl.classList.add('flex-around');

for(let i of menuLinks){
   let a = document.createElement("a");
   a.getAttribute(i.href);
   a.textContent = i.text;
   topMenuEl.appendChild(a);
}