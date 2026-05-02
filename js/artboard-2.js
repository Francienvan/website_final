const mediaModal = document.getElementById("mediaModal");
const videoContainer = document.getElementById("videoContainer");
const youtubeVideo = document.getElementById("youtubeVideo");
const pdfContainer = document.getElementById("pdfContainer");
const imageContainer = document.getElementById("imageContainer");
const modalImage = document.getElementById("modalImage");

async function renderPDF(url) {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

  const data = await fetch(url).then((response) => response.arrayBuffer());
  const pdf = await pdfjsLib.getDocument({ data }).promise;
  pdfContainer.innerHTML = "";

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1.4 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;
    pdfContainer.appendChild(canvas);

    await page.render({ canvasContext: context, viewport }).promise;
  }
}

if (mediaModal) {
  mediaModal.addEventListener("show.bs.modal", async (event) => {
    const trigger = event.relatedTarget;
    const type = trigger?.getAttribute("data-type");
    const src = trigger?.getAttribute("data-src");

    videoContainer.classList.add("d-none");
    pdfContainer.classList.add("d-none");
    imageContainer.classList.add("d-none");
    pdfContainer.innerHTML = "";

    if (type === "video" && src) {
      videoContainer.classList.remove("d-none");
      const separator = src.includes("?") ? "&" : "?";
      youtubeVideo.src = src + separator + "autoplay=1&rel=0";
      return;
    }

    if (type === "pdf" && src) {
      pdfContainer.classList.remove("d-none");
      await renderPDF(src);
      return;
    }

    if (type === "image" && src) {
      imageContainer.classList.remove("d-none");
      modalImage.src = src;
    }
  });

  mediaModal.addEventListener("hidden.bs.modal", () => {
    youtubeVideo.src = "";
    pdfContainer.innerHTML = "";
    modalImage.src = "";
  });
}

function closeTab() {
  window.close();
  setTimeout(() => {
    window.location.href = "about:blank";
  }, 100);
}

window.closeTab = closeTab;
