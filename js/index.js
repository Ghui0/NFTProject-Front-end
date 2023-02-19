history.replaceState(
  null,
  null,
  window.location.origin + window.location.pathname
);

setTimeout(() => {
  window.scrollTo(0, 0);
}, 100);

document.getElementById("dt-btn").addEventListener("click", () => {
  document.getElementsByClassName('bodyst')[0].classList.add('dark');
  document.getElementsByClassName('bodyst')[0].classList.remove('white');
});

document.getElementById("lt-btn").addEventListener("click", () => {
  document.getElementsByClassName('bodyst')[0].classList.remove('dark');
  document.getElementsByClassName('bodyst')[0].classList.add('white');
});