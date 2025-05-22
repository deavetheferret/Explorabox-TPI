import favGre from "../img/favicon-gre.png";
import favPur from "../img/favicon-pur.png";
import favAci from "../img/favicon-aci.png";
import favBlu from "../img/favicon-blu.png";
import favOra from "../img/favicon-ora.png";

document.addEventListener("DOMContentLoaded", function () {
  const favicon = document.querySelector("link[rel*='icon']");
  let favicons = [favGre, favPur, favAci, favBlu, favOra];

  let currentFavicon = 0;

  window.addEventListener("focus", () => {
    currentFavicon = (currentFavicon + 1) % favicons.length;
    favicon.href = favicons[currentFavicon];
  });

  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardText = card.querySelector(".card__text");
    const cardSubtext = card.querySelector(".card__subtext");
    const cardTitle = card.querySelector(".card__title");
    if (cardText.textContent.length <= 0) {
      cardText.style.display = "none";
    }
    if (cardSubtext.textContent.length <= 0) {
      cardSubtext.style.display = "none";
    }
    if (cardTitle.textContent.length <= 0) {
      cardTitle.style.display = "none";
    }
  });

  function hashShowerTrailmaker() {
    const hash = window.location.hash;

    document.getElementById("family_start").style.display = "none";
    document.getElementById("family_self-number").style.display = "none";
    document.getElementById("family_gift-number").style.display = "none";

    switch (hash) {
      case "#family_start":
        document.getElementById("family_start").style.display = "flex";
        break;
      case "#family_self-number":
        document.getElementById("family_self-number").style.display = "flex";
        break;
      case "#family_gift-number":
        document.getElementById("family_gift-number").style.display = "flex";
        break;
      default:
        document.getElementById("family_start").style.display = "flex";
    }
  }

  if (document.body.classList.contains("trailmaker")) {
    hashShowerTrailmaker();

    console.log("hashShowerTrailmaker is running");

    window.addEventListener("hashchange", hashShowerTrailmaker);
  } else {
    return;
  }
});
