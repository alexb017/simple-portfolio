import { data } from './data.js';

const content = document.querySelector('#content');
const contentLeft = document.querySelector('#content-left');
const contentRight = document.querySelector('#content-right');

const getMeta = (url) => {
  let img = new Image();
  img.src = url;
  return img;
};

const render = () => {
  data.forEach((img, index) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'card-img');

    if (getMeta(img.url).height > 2500) {
      div.classList.add('card-tall');
    }

    div.innerHTML = `
        <div class="img-link">
            <p class="img-link-p">
                Photo by 
                <span>${img.name}</span>
            </p>
            <a class="img-link-a" href="${img.link}" target="_blank">
                <span class="img-link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#ffffff">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/>
                    </svg>
                </span>
                Unsplash
            </a>
        </div>
        <img src='${img.url}'>
    `;

    content.appendChild(div);
  });
};

render();

const cards = document.querySelectorAll('.card-img');
cards.forEach((card) => {
  card.addEventListener('mouseover', (event) => {
    const child = event.currentTarget.firstElementChild;

    if (child) {
      child.classList.add('active');
    }
  });

  card.addEventListener('mouseleave', (event) => {
    const child = event.currentTarget.firstElementChild;

    if (child.classList.contains('active')) {
      child.classList.remove('active');
    }
  });
});

const openMenu = document.querySelector('#menu-icon');
const closeMenu = document.querySelector('#menu-icon-close');
const menu = document.querySelector('#nav-menu-content');

openMenu.addEventListener('click', () => {
  menu.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
  document.body.removeAttribute('style');
});
