// src/utils/base64.ts
function getBase64FromUtf8String(utf8Str) {
  return window.btoa(unescape(encodeURIComponent(utf8Str)));
}
function blobToBase64(blob) {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise((resolve, reject) => {
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });
}

// src/utils/svg.ts
function createObjectURLFromSvg(svgElement) {
  return URL.createObjectURL(new Blob([svgElement.outerHTML], { type: "image/svg+xml" }));
}
function getBase64FromSvg(svgElement) {
  return `data:image/svg+xml;base64,${getBase64FromUtf8String(svgElement.outerHTML)}`;
}

// src/utils/download.ts
function downloadDataURL(dataURL, fileName) {
  const a = document.createElement("a");
  a.href = dataURL;
  a.download = fileName;
  a.click();
}

// src/utils/image.ts
function createImageFromSrcUrl(srcURL) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (err) => reject(err));
    image.src = srcURL;
  });
}
function createImageCanvasBlock({ img, cb, rect, margin = 0 }) {
  const canvas = new OffscreenCanvas(img.naturalWidth, img.naturalHeight);
  const canvasContext = canvas.getContext("2d");
  if (!canvasContext)
    throw new Error("Canvas context is null");
  const imageRect = rect != null ? rect : {
    x: 0,
    y: 0,
    width: img.naturalWidth,
    height: img.naturalHeight
  };
  canvas.width = imageRect.width + margin * 2;
  canvas.height = imageRect.height + margin * 2;
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.drawImage(
    img,
    imageRect.x,
    imageRect.y,
    imageRect.width,
    imageRect.height,
    margin,
    margin,
    imageRect.width,
    imageRect.height
  );
  return cb(canvas);
}
function getImageBlobFromImage(img, imgType = "image/png", rect, margin) {
  return new Promise((resolve, reject) => {
    createImageCanvasBlock({
      img,
      rect,
      margin,
      cb: (canvas) => {
        canvas.convertToBlob({ type: imgType }).then(resolve).catch(reject);
      }
    });
  });
}

export {
  blobToBase64,
  createObjectURLFromSvg,
  getBase64FromSvg,
  downloadDataURL,
  createImageFromSrcUrl,
  getImageBlobFromImage
};
//# sourceMappingURL=chunk-B5H3PAHZ.js.map
