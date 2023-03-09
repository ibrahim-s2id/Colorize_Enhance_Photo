"use strict";
document.querySelectorAll('.image').forEach(elem => {
  let x, width;
  elem.onmouseenter = () => {
    const size = elem.getBoundingClientRect();
    x = size.x;
    width = size.width;
  };
  elem.onmousemove = e => {
    const horizontal = (e.clientX - x) / width * 100;
    elem.style.setProperty('--x', horizontal + '%');
  };
})