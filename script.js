var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Sophomore", "Coder"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const image = document.getElementById("myImage");
const form = document
  .getElementById("myform")
  .addEventListener("submit", function (event) {
    const inputs = document.querySelectorAll("#myform input[type='text']");
    let formValid = true;
    //loop through each input to validate
    inputs.forEach((input) => {
      const errorPopup = input.nextElementsibling; //
      if (input.value.trim() === "") {
        errorPopup.style.display = "block";
        errorPopup.style.left = `${input.offsetLeft}px`;
        errorPopup.style.top = `${input.offsetTop + input.offsetHeight}px`;
        formValid = false;
      } else {
        errorPopup.style.display = "none";
      }
    });
    if (!formValid) {
      event.preventDefault();
    }
  });

// Navbar toggle
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");

const openNavbar = () => {
  navbar.classList.toggle("active");
  navBtn.classList.toggle("close");
  navBtn.innerHTML = navBtn.classList.contains("close")
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg> `;
};


//nav button click event
navBtn.addEventListener("click", openNavbar);
