let contrastToggle = false;
const scalefactor = 1 / 20;

function moveBackground(event){
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scalefactor;
  const y = event.clientY * scalefactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isodd = i % 2 !== 0;
    const oddInteger = isodd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * oddInteger}px,${
      y * oddInteger
    }px)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_jb9aq7y",
      "template_gj6pkjc",
      event.target,
    )
       .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
       })
       .catch(() => {
         loading.classList.remove("modal__overlay--visible");
        alert(
          "the shit is down right now only because my teacher provided me a shitty gmailjs"
        );
        });
}
let isModalopen = false;
function togglemodal() {
  if (isModalopen) {
    isModalopen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalopen = true;
  document.body.classList += " modal--open";
}
