const filter_listEl = document.querySelector('.filter_box > ul').children;
const toTopEl = document.getElementById('to-top');
const nav = document.getElementsByTagName('nav')[0];
let aEls = [];

for (let i = 0; i < filter_listEl.length; i++) {
  aEls.push(filter_listEl[i].children[0]);
}

function controlActive(el) {
  aEls.forEach(function (aEl) {
    if(aEl === el) {
      aEl.classList.add('active');
    } else {
      aEl.classList.remove('active');
    }
  });
}

aEls.forEach(function (el) {
  el.addEventListener('click', function () {
    controlActive(this);
  });
});

toTopEl.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

let beforePosition = document.documentElement.scrollTop;

document.addEventListener('scroll', function() {
    let afterPosition = document.documentElement.scrollTop;

    if (afterPosition > 50) {
      if(beforePosition < afterPosition ){
        nav.classList.add('nav-up');
      } else {
        nav.classList.remove('nav-up');
      }
    } else {
      if(afterPosition < 120) {
        nav.classList.remove('nav-up');
      } else {
        nav.classList.add('nav-up');
      }
    }
    beforePosition = afterPosition;
});