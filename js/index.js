function circleCursor() {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", () => {
    document.body.onmousemove = function (e) {
      // cursor.style.left = `${e.pageX}px`;
      // cursor.style.top = `${e.pageY}px`;
      // console.log(e.clientX, e.clientY);
      cursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
    };
  });
}
circleCursor();

function toggle() {
  const moreBtn = document.querySelector(".trans-less");
  const moreTxt = document.querySelector(".add-txt");

  if (moreBtn.innerHTML == `<em class="didot">Re</em>ad more about us`) {
    moreBtn.innerHTML = `<em class="didot">Le</em>es`;
    moreTxt.classList.remove("dp-tog");
  } else {
    moreBtn.innerHTML = `<em class="didot">Re</em>ad more about us`;
    moreTxt.classList.add("dp-tog");
  }
}
