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

// 画面リサイズ時にクラス除去
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

// Rellax
var rellax = new Rellax(".rellax", {
  speed: -10,
  center: true,
  round: true,
  vertical: true,
});
// function changeRellax() {
//   var windowWidth = $(window).width();
//   var windowSm = 960;
//   if (windowWidth <= windowSm) {
//     rellax.destroy();
//   } else {
//     rellax.refresh();
//   }
// }
// window.addEventListener("resize", function () {
//   changeRellax();
// });
// window.addEventListener("load", function () {
//   changeRellax();
// });
//

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
