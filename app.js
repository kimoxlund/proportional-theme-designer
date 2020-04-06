const defaultTheme = {
  h: 270,
  "spacing-base": 3.5,
  "font-family-base": "Source Serif Pro",
  "font-size-root": 16,
  "text-ratio": 1.3,
  contrast: 25,
  "page-width": 60
};

function onLoad() {
  const iframe = document.getElementById("iframe"),
    doc = iframe.contentDocument
      ? iframe.contentDocument
      : iframe.contentWindow.document,
    controls = document.querySelectorAll(".control"),
    font = doc.getElementById("font"),
    form = document.querySelector("form");

  controls.forEach(control => {
    control.addEventListener("input", e => {
      setPreview(e);
    });
  });

  Object.keys(defaultTheme).forEach(item => {
    if (item === "font-weight-heading") {
    } else {
      form[item].value = defaultTheme[item];
      doc.documentElement.style.setProperty(
        form[item].dataset.property,
        form[item].value
      );
    }
  });

  function setPreview(e) {
    const property = e.target.dataset.property;

    if (property === "--font-family-base") {
      let fontFormatted = e.target.value.split(" ").join("+");
      font.href = `https://fonts.googleapis.com/css?family=${fontFormatted}&display=swap`;
    }

    doc.documentElement.style.setProperty(property, e.target.value);
  }
}
