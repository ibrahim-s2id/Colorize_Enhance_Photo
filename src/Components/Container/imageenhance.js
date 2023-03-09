document.addEventListener('DOMContentLoaded', function(){
  let banner = document.getElementById('banner-wrapper');
  let devLayer = banner.querySelector('.dev');
  let delta = 0;

  banner.addEventListener('mousemove', function(e){
      delta = (e.clientX - window.innerWidth / 2) * 0;
      devLayer.style.width = e.clientX -400 + delta + 'px';
  });
})
