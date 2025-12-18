let menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
]

let bg = 'var(--main-bg)';
let menuBg = 'var(--top-menu-bg)';
let subMenuBg = 'var(--sub-menu-bg)'


let mainEl = document.querySelector('main');

mainEl.style.backgroundColor = bg;
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');


let topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = menuBg;
topMenuEl.classList.add('flex-around');

for (let i of menuLinks) {
  let a = document.createElement('a');
  a.getAttribute(i.href);
  a.textContent = i.text;
  topMenuEl.appendChild(a);
}

let subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = subMenuBg;
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

let topMenuLinks = topMenuEl.querySelectorAll('a');
// console.log(topMenuLinks.textContent);
topMenuEl.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  // console.log(event.target.tagName);
  if (event.target.tagName !== 'A') return;
  // console.log("testing!");
  // console.log(event.target.tagName);
  console.log(event.target.textContent);
  // if (event.target.classList.contains('active')){
  //   event.target.classList.remove('active');
  //   subMenuEl.style.top = '0';
  //   return;
  // }
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove('active');
  }

  event.target.classList.add('active');
  for (let i = 0; i < menuLinks.length; i++) {
    if (event.target.textContent == menuLinks[i].text) {
      let currTarget = menuLinks[i];
      if ('subLinks' in currTarget) {
        subMenuEl.style.top = '100%';
      } else {
        subMenuEl.style.top = '0';
      }
    }
  }

}

// function buildSubmenu(subLinks) {
//   subMenuEl.textContent = "";
//   for(let i of subLinks){
//     let subMenuA = document.createElement('a');
//     subMenuA.getAttribute(i.href);
//     subMenuA.textContent = i.text;
//     subMenuEl.appendChild(a);
//   }
// }

