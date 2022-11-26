window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar").className = "nav-shrink";
    } else {
      document.getElementById("navbar").className = "";
    }
  }

  function openNavbar() {
    document.getElementById("navbar_nav").style.left = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar_nav").style.left = "-100%";
  }