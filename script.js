const sectionNotes = document.getElementById('sectionNotes');
const notes = JSON.parse(localStorage.getItem('notes')) || []; // trae del local storage un objeto parseado paraque nos regrese de un json a

showList();


function createNote() {
  const areaNote = document.getElementById('areaNote');
  const noteText = areaNote.value.trim();//texto de prueba "hola mi primera nota"//vuelve a vacio
  if (noteText !== '') {
    const note = {
      id: Date.now().toString(),
      text: noteText
    };
    notes.push(note);
    
    saveNotes();
    showList();
    areaNote.value = '';
  }
}
function showList() {
  sectionNotes.innerHTML = '';
  notes.forEach(note => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
    <p>${note.text}</p>
    <button onclick="deleteNote('${note.id}')">Borrar</button>
`;
    sectionNotes.appendChild(noteElement);//
  });
}


function deleteNote(noteId) {
  notes.splice(notes.findIndex(note => note.id === noteId), 1);
  saveNotes();
  showList();
}

// Función para guardar las notas en el almacenamiento local
function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes));
}


