function circleCursor() {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", () => {
    document.body.onmousemove = function (e) {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
      // console.log(e.clientX, e.clientY);
      // cursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
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

function ourArticles() {
  const cursor = document.querySelector(".cursor");
  const hoverTxt = document.querySelector(".hoverTxt1");
  const hoverImg = [
    { idx: 0, imgUrl: "../images/dont-exist.jpeg" },
    { idx: 1, imgUrl: "../images/ar.jpeg" },
    { idx: 2, imgUrl: "../images/vogue-taiwan.jpeg" },
  ];

  // hoverImg.forEach((item) => {
  //   hoverTxt.addEventListener("mouseover", () => {
  //     cursor.style.width = "150px";
  //     cursor.style.height = "150px";
  //     cursor.style.background = `url(${item.imgUrl}) no-reapeat 50% / contain`;
  //   });
  // });

  // onmouseover => html , 마우스커서 처리
  hoverTxt.addEventListener("mouseover", () => {
    cursor.style.width = "200px";
    cursor.style.height = "200px";
    cursor.style.borderRadius = "0%";
    cursor.style.background = `url(./images/dont-exist.jpeg) no-reapeat 50% / cover`;
  });
  hoverTxt.addEventListener("mouseout", () => {
    cursor.style.width = "";
    cursor.style.height = "";
    cursor.style.borderRadius = "";
    cursor.style.background = "";
  });
}
ourArticles();
