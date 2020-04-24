function upDate(previewPic) {
  document.querySelector("#image").textContent = `${previewPic.alt}`;
  document.querySelector(
    "#image"
  ).style.backgroundImage = `url('${previewPic.src}')`;
}

function unDo() {
  document.querySelector("#image").style.backgroundImage = "url('')";
  document.querySelector("#image").textContent =
    "Hover over an image below to display here.";
}
