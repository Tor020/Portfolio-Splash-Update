//Debounce 
  function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
      let context = this, args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

//Nav-Block
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

window.addEventListener('scroll', debounce(navBarInOut));

function navBarInOut(e) {
  if (window.scrollY > height - 45) {
    navbar.classList.remove('nav-transparent')
  } else {
    navbar.classList.add('nav-transparent')
  }
}

