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

function scrollEvt() {
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;

  window.addEventListener("scroll", () => {
    const posY = window.pageYOffset;
    const posY1 = (window.pageYOffset / maxScrollValue) * 10000;

    console.log((window.pageYOffset / maxScrollValue) * 10000);

    if (posY1 >= 1500) {
      const basicTxt = document.querySelector(".basic-txt");
      // console.log(basicTxt.scrollTop);
      // console.log(basicTxt.scrollHeight);
      basicTxt.style.transform = `translateY(0)`;
      basicTxt.style.opacity = `1`;
    }

    if (posY1 >= 1700) {
      const less = document.querySelector(".trans-less");
      less.style.transform = `translateY(0)`;
      less.style.opacity = `1`;
    }

    if (posY1 >= 2100) {
      const sec3 = document.querySelector(".sec3");
      sec3.style.transform = `translateX(0)`;
      sec3.style.opacity = `1`;
      sec3.style.transition = `1s`;
    }

    if (posY1 >= 3000) {
      const sec4 = document.querySelector(".sec4");
      sec4.style.transform = `translateX(0)`;
      sec4.style.opacity = `1`;
      sec4.style.transition = `1s`;
    }

    if (posY1 >= 3800) {
      const sec5 = document.querySelector(".sec5");
      sec5.style.opacity = `1`;
    }
    if (posY1 >= 5000) {
      const txtMid = document.querySelector(".txt-mid");
      txtMid.style.transform = `translateY(0)`;
      txtMid.style.opacity = `1`;
    }
    if (posY1 >= 5400) {
      const txtBot = document.querySelector(".txt-bot");
      txtBot.style.transform = `translateY(0)`;
      txtBot.style.opacity = `1`;
    }
    if (posY1 >= 5700) {
      const cctLink = document.querySelector(".link-a");
      cctLink.style.transform = `translateY(0)`;
      cctLink.style.opacity = `1`;
    }

    if (posY1 >= 6000) {
      const labTit = document.querySelector(".lab-title");
      labTit.style.transform = `translateX(0)`;
      labTit.style.opacity = `1`;
      labTit.style.transition = `1s`;
    }
    if (posY1 >= 6400) {
      const labImg = document.querySelector(".lab-img");
      labImg.style.transform = `translateX(0)`;
      labImg.style.opacity = `1`;
      labImg.style.transition = `1s`;
    }
    if (posY1 >= 7500) {
      const labMid = document.querySelector(".lab-mid");
      labMid.style.transform = `translateY(0)`;
      labMid.style.opacity = `1`;
    }
    if (posY1 >= 7700) {
      const labR = document.querySelector(".labR");
      labR.style.transform = `translateX(0)`;
      labR.style.opacity = `1`;
      labR.style.transition = `1s`;
    }
    if (posY1 >= 7900) {
      const labL = document.querySelector(".labL");
      labL.style.transform = `translateX(0)`;
      labL.style.opacity = `1`;
      labL.style.transition = `1s`;
    }
    if (posY1 >= 8000) {
      const labB = document.querySelector(".labB");
      labB.style.transform = `translateY(0)`;
      labB.style.opacity = `1`;
    }

    if (posY1 >= 8200) {
      const title7 = document.querySelector(".title7");
      title7.style.opacity = `1`;
    }

    if (posY1 >= 9100) {
      const title8 = document.querySelector(".title8");
      title8.style.transform = `translateY(0)`;
      title8.style.opacity = `1`;
    }
    if (posY1 >= 9300) {
      const txt1 = document.querySelector(".txt1");
      txt1.style.opacity = `1`;
    }
    if (posY1 >= 9400) {
      const txt2 = document.querySelector(".txt2");
      txt2.style.opacity = `1`;
    }
    if (posY1 >= 9500) {
      const txt3 = document.querySelector(".txt3");
      txt3.style.opacity = `1`;
    }
  });
  window.addEventListener("resize", scrollEvt);
}
scrollEvt();
