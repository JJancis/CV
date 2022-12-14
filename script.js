'use strict';
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
let anchors = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
let downloadBtn = document.getElementById('btn');

document.addEventListener('DOMContentLoaded', function () {
  window.scrollTo(0, 0);
});

menu.onclick = () => {
  navbar.classList.toggle('open-menu');
  menu.classList.toggle('move');
};
window.onscroll = () => {
  navbar.classList.remove('open-menu');
  menu.classList.remove('move');
};
// Job Swiper
var swiper = new Swiper('.job-content', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Email JS
function validate() {
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let msg = document.querySelector('.message');
  let sendBtn = document.querySelector('.send-btn');

  sendBtn.addEventListener('click', e => {
    e.preventDefault();
    if (name.value == '' || email.value == '' || msg.value == '') {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send('service_g2sytio', 'template_kahp029', {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: 'Oi No....',
    text: 'Fields cannot be empty!',
    icon: 'error',
  });
}
function success() {
  swal({
    title: 'E-mail sent successfully!',
    text: 'I will try to respond within 24 hours',
    icon: 'success',
  });
}

// Header Background Change On Scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('header-active', window.scrollY > 0);
});

// Scroll Top
let scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('scroll-active', window.scrollY >= 300);
});

// Active;

window.addEventListener('scroll', function () {
  let current = '';

  for (var section of sections) {
    if (window.pageYOffset >= section.offsetTop - 170) {
      current = section.getAttribute('id');
    }
  }

  for (var anchor of anchors) {
    anchor.classList.remove('selected');
    if (anchor.getAttribute('href') === '#' + current) {
      anchor.classList.add('selected');
    }
  }
});
// CV download different language
downloadBtn.addEventListener('click', function (event) {
  event.preventDefault();
  window.open(`./app/pdf/JustynaJancisCv_${switcher.value}.pdf`, '_blank');
});
