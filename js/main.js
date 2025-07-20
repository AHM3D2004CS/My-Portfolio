// تفعيل كلاس active على الهيدر عند السحب
let header = document.querySelector("header");

window.onscroll = function () {
  if (this.scrollY >= 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// التحكم في إظهار / إخفاء القائمة بزر ☰ و ✖
const menu = document.querySelector("#links");
const toggleMenuBtn = document.querySelector(".icon_menu");
const closeMenuBtn = document.querySelector(".close_menu");

toggleMenuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
