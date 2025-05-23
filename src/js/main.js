import favGre from "../img/favicon-gre.png";
import favPur from "../img/favicon-pur.png";
import favAci from "../img/favicon-aci.png";
import favBlu from "../img/favicon-blu.png";
import favOra from "../img/favicon-ora.png";
import { popupData } from "./popupData";

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
    document.getElementById("family_self_o-dates").style.display = "none";
    document.getElementById("family_gift_o-dates").style.display = "none";
    document.getElementById("family_self_o-prefs").style.display = "none";
    document.getElementById("family_self_o-address").style.display = "none";
    // document.getElementById("family_gift_o-prefs").style.display = "none";

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
      case "#family_self_o-dates":
        document.getElementById("family_self_o-dates").style.display = "flex";
        break;
      case "#family_gift_o-dates":
        document.getElementById("family_gift_o-dates").style.display = "flex";
        break;
      case "#family_self_o-prefs":
        document.getElementById("family_self_o-prefs").style.display = "flex";
        break;
      case "#family_self_o-address":
        document.getElementById("family_self_o-address").style.display = "flex";
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

  const miniLinks = document.querySelectorAll("span.mini-link");

  console.log("hello world");

  miniLinks.forEach((miniLink) => {
    if (miniLink.textContent === "Info ↗") {
      const keyword = miniLink.parentElement.textContent
        .replace("↗", "")
        .replace(/-/g, "")
        .replace(/é/g, "e")
        .replace(/è/g, "e")
        .replace(/info/gi, "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "");
      const popupDataEntry = popupData[keyword];

      console.log("keyword", keyword);

      if (!popupDataEntry) return;

      miniLink.addEventListener("mouseenter", () => {
        const popup = document.createElement("div");
        popup.classList.add("popup");

        if (popupDataEntry.content) {
          const p = document.createElement("p");
          p.textContent = popupDataEntry.content;
          popup.appendChild(p);

          console.log("content data fetched");
        }

        document.body.appendChild(popup);
        const rect = miniLink.getBoundingClientRect();
        popup.style.top = `${window.scrollY + rect.bottom + 5}px`;
        popup.style.left = `${window.scrollX + rect.left}px`;

        popup.offsetHeight;

        popup.classList.add("show");

        miniLink.classList.add("info-dumper");

        miniLink.addEventListener(
          "mouseleave",
          () => {
            popup.classList.remove("show");
            miniLink.classList.remove("info-dumper");
            setTimeout(() => {
              popup.remove();
            }, 300);
          },
          { once: true }
        );
      });
    }
  });
});
