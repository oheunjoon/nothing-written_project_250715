function mobileSideMenu() {
  $(".burger").click(function () {
    $("body").addClass("nav-active");
  });

  // 	임시코드
  $(".category").click(function () {
    $("body").removeClass("nav-active");
  });
}

mobileSideMenu();
