document.addEventListener("DOMContentLoaded", function () {
  const favicon = document.querySelector("link[rel*='icon']");
  let favicons = [
    "img/favicon-gre.ico",
    "img/favicon-pur.ico",
    "img/favicon-aci.ico",
    "img/favicon-blu.ico",
    "img/favicon-ora.ico",
  ];

  let currentFavicon = 0;

  window.addEventListener("focus", () => {
    currentFavicon = (currentFavicon + 1) % favicons.length;
    favicon.href = favicons[currentFavicon];
  });
});
