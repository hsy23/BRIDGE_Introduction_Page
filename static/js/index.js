const scrollButton = document.getElementById("scrollToTop");
const copyButton = document.getElementById("copyBibtexBtn");
const bibtexCode = document.getElementById("bibtex-code");

function toggleScrollButton() {
  if (!scrollButton) {
    return;
  }

  if (window.scrollY > 420) {
    scrollButton.classList.add("is-visible");
  } else {
    scrollButton.classList.remove("is-visible");
  }
}

if (scrollButton) {
  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("scroll", toggleScrollButton);
toggleScrollButton();

if (copyButton && bibtexCode) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(bibtexCode.textContent);
      copyButton.classList.add("is-copied");
      copyButton.querySelector(".copy-label").textContent = "Copied";
      window.setTimeout(() => {
        copyButton.classList.remove("is-copied");
        copyButton.querySelector(".copy-label").textContent = "Copy";
      }, 1800);
    } catch (error) {
      console.error("BibTeX copy failed", error);
    }
  });
}
