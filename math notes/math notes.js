let db;

document.addEventListener("DOMContentLoaded", () => {
  const request = indexedDB.open("NoteDB", 1);

  request.onerror = e => console.error("IndexedDB error:", e.target.error);

  request.onupgradeneeded = e => {
    db = e.target.result;
    db.createObjectStore("notes", { keyPath: "id" });
  };

  request.onsuccess = e => {
    db = e.target.result;
  };
});

// Show image + filename when file is chosen
function previewNote(noteId) {
  const input = document.getElementById(`${noteId}Input`);
  const file = input.files[0];
  const number = noteId.replace("note", "");
  const display = document.getElementById(`noteDisplay${number}`);
  const filename = document.getElementById(`filename${number}`);

  if (file) {
    display.style.display = "block";
    filename.textContent = file.name;
  } else {
    display.style.display = "none";
    filename.textContent = "";
  }
}

// Save file
function saveNote(noteId) {
  const input = document.getElementById(`${noteId}Input`);
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const transaction = db.transaction(["notes"], "readwrite");
    const store = transaction.objectStore("notes");
    const noteData = {
      id: noteId,
      name: file.name,
      type: file.type,
      content: e.target.result
    };
    store.put(noteData);
    alert("Saved!");
  };
  reader.readAsArrayBuffer(file);
}

// Load file
function loadNote(noteId) {
  const transaction = db.transaction(["notes"], "readonly");
  const store = transaction.objectStore("notes");
  const request = store.get(noteId);

  request.onsuccess = event => {
    const note = event.target.result;
    const number = noteId.replace("note", "");
    const display = document.getElementById(`noteDisplay${number}`);
    const filename = document.getElementById(`filename${number}`);
    const content = document.getElementById(`noteContent${number}`);

    if (!note) {
      display.innerHTML = "No saved note.";
      return;
    }

    display.style.display = "block";
    filename.textContent = note.name;

    const blob = new Blob([note.content], { type: note.type });
    const url = URL.createObjectURL(blob);

    content.innerHTML = ""; // clear previous content

    if (note.type.startsWith("text")) {
      const reader = new FileReader();
      reader.onload = () => {
        content.innerHTML = `<pre>${reader.result}</pre>`;
      };
      reader.readAsText(blob);
    } else if (note.type.includes("pdf")) {
      content.innerHTML = `
        <iframe src="${url}" style="width:100%; height:300px;" frameborder="0"></iframe>
        <p><a href="${url}" target="_blank" download="${note.name}">📄 Open / Download PDF</a></p>
      `;
    } else {
      content.innerHTML = `
        <p><a href="${url}" target="_blank" download="${note.name}">📄 Download ${note.name}</a></p>
      `;
    }
  };
}





// Delete file
function deleteNote(noteId) {
  const number = noteId.replace("note", "");
  const transaction = db.transaction(["notes"], "readwrite");
  const store = transaction.objectStore("notes");
  store.delete(noteId);

  document.getElementById(`noteDisplay${number}`).style.display = "none";
  document.getElementById(`filename${number}`).textContent = "";
  document.getElementById(`noteContent${number}`).innerHTML = "";
  alert("Deleted.");
}
