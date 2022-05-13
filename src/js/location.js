const title = document.querySelectorAll(".location__place-title")

export function activeLocation() {  
  title.forEach((item, i) => {
    item.addEventListener("click", () => {
      title.forEach((item, j) => {
        if (i == j) {
          item.classList.toggle("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  });
}
