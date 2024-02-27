// ナビボタン
document.querySelector(".nav-btn").addEventListener("click", function () {
  this.classList.toggle("nav-open");
  document
    .querySelectorAll(".header, .nav--global, .nav__inner--global")
    .forEach(function (element) {
      element.classList.toggle("nav-open");
    });
  setTimeout(function () {
    document.querySelectorAll(".nav--global, .nav__inner--global").forEach(function (element) {
      element.classList.toggle("transition");
    });
  }, 200);
});
//

// リンククリックでナビ閉じる
document.querySelectorAll(".nav--global a").forEach(function (link) {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-btn, .header, .nav--global, .nav__inner--global")
      .forEach(function (element) {
        element.classList.remove("nav-open");
      });
  });
});
//

// 画面リサイズ時にopenクラス除去
window.addEventListener("resize", function () {
  let windowWidth = window.innerWidth;
  if (windowWidth > 960) {
    document
      .querySelectorAll(".nav-btn, .header, .nav--global, .nav__inner--global")
      .forEach(function (element) {
        element.classList.remove("nav-open", "transition");
      });
  }
});
//

// ヘッダーカラーチェンジ
window.addEventListener("scroll", function () {
  const sliderHeight = document.querySelector(".mv").offsetHeight;
  if (sliderHeight - 60 < window.pageYOffset) {
    document.querySelectorAll(".header, .nav-btn__line").forEach(function (element) {
      element.classList.add("bg-wh");
    });
  } else {
    document.querySelectorAll(".header, .nav-btn__line").forEach(function (element) {
      element.classList.remove("bg-wh");
    });
  }
});
//

// 低電力モードで画像に切り替え
document.addEventListener("DOMContentLoaded", function () {
  let is_playing = false;
  const video = document.querySelector(".mv__movie");
  const img = document.querySelector(".mv__img");
  video
    .play()
    .then(() => {
      // 省電力モードではないときの処理
      video.style.display = "block";
      img.style.display = "none";
    })
    .catch((error) => {
      // 省電力モードのときの処理
      video.style.display = "none";
      img.style.display = "block";
    });
});

// Rellaxオプション
var rellax = new Rellax(".rellax", {
  speed: -10,
  center: true,
  round: true,
  vertical: true,
});

// Rellax オンオフ
// function rellaxChange() {
//   const windowWidth = window.innerWidth;
//   const mvBg = document.querySelector(".mv__bg");
//   const className = "rellax";
//   if (windowWidth > 960) {
//     mvBg.classList.add(className);
//     rellax.refresh();
//   } else {
//     mvBg.classList.remove(className);
//     rellax.destroy();
//   }
// }
// window.addEventListener("load", rellaxChange);
// window.addEventListener("resize", rellaxChange);
// //

// 慣性スクロール
const lenis = new Lenis({
  lerp: 0.3, // Linear interpolation (lerp) intensity (between 0 and 1)
  duration: 1, // The duration of scroll animation (in seconds). Useless if lerp defined
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
//

// ローダーアニメーション
// var bar = new ProgressBar.Circle(loader__circle, {
//   strokeWidth: 1.5,
//   easing: "easeInOut",
//   duration: 1400,
//   color: "#333435",
//   trailWidth: 0,
//   svgStyle: null,
// });
// bar.animate(1.0, function () {
//   $("#loader, #loader__circle").delay(200).fadeOut(800);
// });
//
