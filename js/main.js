$(function () {
  $(".icon-menu").on("click", function (e) {
    $(".Navigation").toggleClass("none");
    $(".Main").toggleClass("open");

    e.preventDefault();
  });
  $(".Header-menu .search").on("click", function (e) {
    $(".Header-menu").addClass("none");
    $(".Header-sidebar").addClass("none");
    $(".Header-search").addClass("active");
    e.preventDefault();
  });
  $(".Header-search .back-button").on("click", function (e) {
    $(".Header-menu").removeClass("none");
    $(".Header-sidebar").removeClass("none");
    $(".Header-search").removeClass("active");
    e.preventDefault();
  });
});
