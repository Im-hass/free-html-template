const filter_listEl = document.querySelector('.filter_box > ul').children;
let aEls = [];

for (let i = 0; i < filter_listEl.length; i++) {
  console.log(filter_listEl[i].children[0]);
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
