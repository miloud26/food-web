// drop down menu
const dropDown = document.getElementById("drop");

dropDown.addEventListener("click", () => {
  dropDown.classList.toggle("active");
});
const divOption = document.querySelectorAll("#options  div");
divOption.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("#drop span").textContent = item.textContent;
  });
});
