//accordion
const btns = document.querySelectorAll(".questions__btn");
const drop_text = document.querySelectorAll(".questions__btn-droptext");

export function accordion() {
  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      drop_text.forEach((e, j) => {
        if (i == j) {
          btns[j].classList.toggle("active");
          drop_text[j].classList.toggle("active");
          e.getElementsByClassName.maxHeight = e.scrollHeight + "px";
        } else {
          btns[j].classList.remove("active");
          drop_text[j].classList.remove("active");
        }
      });
    });
  });
}
