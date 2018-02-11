let height = (function () {
  landing = document.getElementById('landing');
  let height = [];
  height.push(parseInt(window.getComputedStyle(landing).paddingTop));
  height.push(parseInt(window.getComputedStyle(landing).paddingBottom));
  height.push(parseInt(window.getComputedStyle(landing).marginTop));
  height.push(parseInt(window.getComputedStyle(landing).marginBottom));
  height.push(parseInt(window.getComputedStyle(landing).height));

  height = height.reduce((prevTotal, currentValue) => prevTotal + currentValue);
  return height
})();

navbar = document.querySelector('.nav');
landing = document.getElementById('landing');

window.addEventListener('scroll', navBarInOut);

function navBarInOut(e) {
  if (window.scrollY > height - 45) {
    navbar.classList.remove('nav-transparent')
  } else {
    navbar.classList.add('nav-transparent')
  }
}