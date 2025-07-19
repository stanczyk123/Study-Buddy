
let db;

document.addEventListener("DOMContentLoaded", () => {
  const request = indexedDB.open("ExamImageDB", 1);

  request.onerror = e => console.error("IndexedDB error:", e.target.error);

  request.onupgradeneeded = e => {
    db = e.target.result;
    db.createObjectStore("images", { keyPath: "id" });
  };

  request.onsuccess = e => {
    db = e.target.result;
    loadImage('img1');
    loadImage('img2');
    loadImage('img3');
    loadImage('img4');
    loadImage('img5');
    loadImage('img6');
    loadImage('img7');
    loadImage('img8');
    loadImage('img9');
    loadImage('img10');
    loadImage('img11');
    loadImage('img12');
    loadImage('img13');
    loadImage('img14');
    loadImage('img15');
    loadImage('img16');
    loadImage('img17');
    loadImage('img18');
    loadImage('img19');
    loadImage('img20');
    loadImage('img21');
    loadImage('img22');
    loadImage('img23');
    loadImage('img24');
    loadImage('img25');
    loadImage('img26');
    loadImage('img27');
    loadImage('img28');
    loadImage('img29');
    loadImage('img30');
  };

  ['1', '2', '3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'].forEach(i => {
    document.getElementById('imageInput' + i).addEventListener("change", () => {
      const file = document.getElementById('imageInput' + i).files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        const img = document.getElementById('display' + i);
        img.src = e.target.result;
        img.style.display = "block";
      };
      reader.readAsDataURL(file);
    });
  });
});

function saveImage(id) {
  const input = document.getElementById('imageInput' + id.slice(-1));
  const file = input.files[0];
  if (!file) return alert("Please choose a file.");

  const reader = new FileReader();
  reader.onload = e => {
    const tx = db.transaction("images", "readwrite");
    const store = tx.objectStore("images");
    store.put({ id: id, image: e.target.result, name: file.name });

    tx.oncomplete = () => alert("Image saved!");
    tx.onerror = () => alert("Failed to save.");
  };
  reader.readAsDataURL(file);
}

function loadImage(id) {
  const tx = db.transaction("images", "readonly");
  const store = tx.objectStore("images");
  const req = store.get(id);

  req.onsuccess = e => {
    const result = e.target.result;
    const img = document.getElementById('display' + id.slice(-1));
    if (result) {
      img.src = result.image;
      img.style.display = "block";
    }
  };
}

function deleteImage(id) {
  const tx = db.transaction("images", "readwrite");
  const store = tx.objectStore("images");
  const req = store.delete(id);

  req.onsuccess = () => {
    const img = document.getElementById('display' + id.slice(-1));
    img.src = "";
    img.style.display = "none";
    alert("Image deleted.");
  };

  req.onerror = () => alert("Failed to delete image.");
}

function openImageInNewTab(id) {
  const tx = db.transaction("images", "readonly");
  const store = tx.objectStore("images");
  const req = store.get(id);

  req.onsuccess = e => {
    const result = e.target.result;
    if (!result) return alert("No saved image found.");
    const tab = window.open();
    tab.document.write(`<img src="${result.image}" style="width:100%;">`);
  };
}

