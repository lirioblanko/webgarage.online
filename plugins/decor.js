import decorSrc from "../assets/img/decor_el.svg";
const decor = document.querySelector(".decor");
for (let i = 0; i < 30; i++) {
  const img = document.createElement("img");
  img.setAttribute("src", decorSrc);
  img.classList.add("decor-item");
  decor.appendChild(img);
}
