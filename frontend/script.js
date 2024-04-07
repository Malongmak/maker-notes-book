// Function to add a new note
function addNote() {
    var title = document.getElementById('noteTitle').value;
    var content = document.getElementById('noteContent').value;
    
    // Validate input
    if (title.trim() === '' || content.trim() === '') {
        alert('Please enter both title and content.');
        return;
    }

    var note = {
        title: title,
        content: content,
        timestamp: new Date().getTime()
    };

    // Save note to local storage or send it to the backend
    // Here you can make an AJAX call to the backend to save the note
    // For simplicity, I'm using localStorage here
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));

    // Clear input fields
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';

    // Refresh notes list
    displayNotes();
}

// Function to display notes
function displayNotes() {
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    var notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';

    notes.forEach(function(note) {
        var noteDiv = document.createElement('div');
        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <p>${new Date(note.timestamp)}</p>
        `;
        notesContainer.appendChild(noteDiv);
    });
}

// Display notes when the page loads
displayNotes();
fetch('/api/data', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response data from the backend
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });