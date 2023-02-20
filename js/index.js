// 스크롤 헤더
function navOnOff() {
  const header = document.querySelector("header");
  let navMove = (e) => {
    if (e === "up") {
      header.className = "";
    } else if (e === "down") {
      header.className = "scrollDown";
    }
  };
  const prevScrollTop = 0;
  document.addEventListener("scroll", () => {
    const nextScrollTop = window.pageYOffset || 0;
    if (nextScrollTop > prevScrollTop) {
      navMove("down");
    } else if (nextScrollTop < prevScrollTop) {
      navMove("up");
    }
  });
}
navOnOff();

// 커서
function circleCursor() {
  const cursor = document.querySelector(".cursor");
  const body = document.querySelector("body");

  body.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    // console.log(e.clientX, e.clientY);
    // cursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
  });
}
circleCursor();

// 토글txt
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
  const hoverTxt = document.querySelectorAll(".hoverTxt");
  const hoverImg = [
    { idx: 0, img: "../images/dont-exist.jpeg" },
    { idx: 1, img: "../images/ar.jpeg" },
    { idx: 2, img: "../images/vogue-taiwan.jpeg" },
  ];

  for (i = 0; i < hoverImg.length; i++) {
    hoverTxt[i].addEventListener("mouseover", () => {
      cursor.style.width = "300px";
      cursor.style.height = "300px";
      cursor.style.borderRadius = "0%";
      hoverImg.forEach((item) => {
        cursor.style.background = `url(${item.img}) no-repeat 50% / cover`;
      });
    });
    hoverTxt[0].addEventListener("mouseover", () => {
      cursor.style.background = `url(${hoverImg[0].img}) no-repeat 50% / cover`;
    });
    hoverTxt[1].addEventListener("mouseover", () => {
      cursor.style.background = `url(${hoverImg[1].img}) no-repeat 50% / cover`;
    });

    hoverTxt[i].addEventListener("mouseout", () => {
      cursor.style.width = "";
      cursor.style.height = "";
      cursor.style.borderRadius = "";
      cursor.style.background = "";
    });
  }
}
ourArticles();
