(() => {
  "use strict";

  const ARTICLE_IMAGE_SELECTOR = ".bd-article img:not(.image-lightbox__image)";

  function getCaption(image) {
    const figure = image.closest("figure");
    const caption = figure?.querySelector("figcaption");
    return caption?.textContent?.trim() || image.alt || "";
  }

  function buildLightbox() {
    const overlay = document.createElement("div");
    overlay.className = "image-lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Просмотр изображения в полном размере");
    overlay.hidden = true;

    overlay.innerHTML = `
      <button class="image-lightbox__close" type="button" aria-label="Закрыть изображение">×</button>
      <div class="image-lightbox__stage">
        <img class="image-lightbox__image" alt="">
        <p class="image-lightbox__caption" hidden></p>
      </div>
    `;

    document.body.appendChild(overlay);
    return overlay;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const overlay = buildLightbox();
    const fullImage = overlay.querySelector(".image-lightbox__image");
    const caption = overlay.querySelector(".image-lightbox__caption");
    const closeButton = overlay.querySelector(".image-lightbox__close");
    let lastFocusedImage = null;

    function openLightbox(image) {
      lastFocusedImage = image;
      fullImage.src = image.currentSrc || image.src;
      fullImage.alt = image.alt || "";

      const captionText = getCaption(image);
      caption.textContent = captionText;
      caption.hidden = !captionText;

      overlay.hidden = false;
      overlay.classList.add("is-open");
      document.body.classList.add("image-lightbox-open");
      closeButton.focus();
    }

    function closeLightbox() {
      overlay.classList.remove("is-open");
      overlay.hidden = true;
      fullImage.removeAttribute("src");
      document.body.classList.remove("image-lightbox-open");
      lastFocusedImage?.focus();
    }

    document.querySelectorAll(ARTICLE_IMAGE_SELECTOR).forEach((image) => {
      image.classList.add("is-zoomable");
      image.tabIndex = 0;
      image.setAttribute("role", "button");
      image.setAttribute("aria-label", `${image.alt || "Изображение"}. Открыть в полном размере`);
      image.title = "Нажмите, чтобы открыть в полном размере";

      image.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        openLightbox(image);
      });

      image.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(image);
        }
      });
    });

    closeButton.addEventListener("click", closeLightbox);

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay || event.target.classList.contains("image-lightbox__stage")) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && overlay.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  });
})();
