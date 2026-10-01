(() => {
  function setup() {
    const indicator = document.querySelector(".chapter-progress");

    if (!indicator || typeof Reveal === "undefined") {
      return;
    }

    const name = indicator.querySelector(".chapter-progress__name");
    const count = indicator.querySelector(".chapter-progress__count");
    const bar = indicator.querySelector(".chapter-progress__bar");

    function update() {
      const { h, v } = Reveal.getIndices();
      const chapter = Reveal.getHorizontalSlides()[h];
      const slides = chapter?.querySelectorAll(":scope > section");

      // A level-one heading and its level-two slides form a vertical stack.
      // Do not show the indicator on the deck title or ungrouped slides.
      if (!slides?.length) {
        indicator.hidden = true;
        return;
      }

      const chapterTitle = slides[0].querySelector("h1")?.textContent?.trim();
      if (!chapterTitle) {
        indicator.hidden = true;
        return;
      }

      const total = Math.max(1, slides.length - 1);
      const current = Math.min(v, total);

      indicator.hidden = false;
      name.textContent = chapterTitle;
      count.textContent = v === 0 ? "" : `${current} / ${total}`;
      bar.style.width = `${(current / total) * 100}%`;
    }

    function initialize() {
      Reveal.on("slidechanged", update);
      update();
    }

    if (Reveal.isReady()) {
      initialize();
    } else {
      Reveal.on("ready", initialize);
    }
  }

  window.addEventListener("DOMContentLoaded", setup, { once: true });
})();
