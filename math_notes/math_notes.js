let db;

window.onload = () => {
  const request = indexedDB.open("NotesFileDB", 1);

  request.onerror = e => console.error("IndexedDB error:", e.target.error);

  request.onupgradeneeded = e => {
    db = e.target.result;
    db.createObjectStore("files", { keyPath: "id", autoIncrement: true });
  };

  request.onsuccess = e => {
    db = e.target.result;
    loadFiles();
  };
};

function saveFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  if (!file) {
    alert("Please choose a file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const transaction = db.transaction(["files"], "readwrite");
    const store = transaction.objectStore("files");
    const data = {
      name: file.name,
      type: file.type,
      content: e.target.result
    };
    store.add(data);
    transaction.oncomplete = () => {
      loadFiles();
      fileInput.value = ""; // reset input
    };
  };
  reader.readAsArrayBuffer(file);
}

function loadFiles() {
  const list = document.getElementById("fileList");
  list.innerHTML = "";

  const transaction = db.transaction(["files"], "readonly");
  const store = transaction.objectStore("files");
  const request = store.openCursor();

  request.onsuccess = e => {
    const cursor = e.target.result;
    if (cursor) {
      const file = cursor.value;
      const blob = new Blob([file.content], { type: file.type });
      const url = URL.createObjectURL(blob);

      const item = document.createElement("div");
      item.className = "file-item";
      item.innerHTML = `
        <input type="text" class="file-name-input" id="nameInput-${cursor.key}" value="${file.name}">
        ${
          file.type.startsWith("text")
            ? `<button onclick="viewText(${cursor.key})" class="view-btn">📖 View Text</button>`
            : file.type === "application/pdf"
            ? `<iframe src="${url}" width="500" height="1000"></iframe>`
            : `<a href="${url}" download="${file.name}" class="download-link">📄 Download</a>`
        }
        <br>
        <button onclick="saveCustomName(${cursor.key})" class="save-name-btn">💾 Save Name</button>
        <button onclick="deleteFile(${cursor.key})" class="delete-btn">🗑 Delete</button>
        <div id="textContent-${cursor.key}"></div>
      `;
      list.appendChild(item);

      cursor.continue();
    }
  };
}
function saveCustomName(id) {
  const newName = document.getElementById(`nameInput-${id}`).value;

  const transaction = db.transaction(["files"], "readwrite");
  const store = transaction.objectStore("files");
  const getRequest = store.get(id);

  getRequest.onsuccess = () => {
    const data = getRequest.result;
    data.name = newName;
    const putRequest = store.put(data);

    putRequest.onsuccess = () => {
      loadFiles(); // refresh display
    };
  };
}


function viewText(id) {
  const transaction = db.transaction(["files"], "readonly");
  const store = transaction.objectStore("files");
  const request = store.get(id);

  request.onsuccess = e => {
    const file = e.target.result;
    const blob = new Blob([file.content], { type: file.type });
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById(`textContent-${id}`).innerHTML = `<pre>${reader.result}</pre>`;
    };
    reader.readAsText(blob);
  };
}

function deleteFile(id) {
  const transaction = db.transaction(["files"], "readwrite");
  const store = transaction.objectStore("files");
  store.delete(id);
  transaction.oncomplete = () => {
    loadFiles();
  };
}
