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
        content: content
    };

    // Save note to the backend
    fetch('/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        // Clear input fields
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteContent').value = '';
        // Refresh notes list
        displayNotes();
    })
    .catch(error => console.error('Error:', error));
}

// Function to display notes
function displayNotes() {
    // Retrieve notes from the backend
    fetch('/notes')
    .then(response => response.json())
    .then(notes => {
        var notesContainer = document.getElementById('notesContainer');
        notesContainer.innerHTML = '';

        notes.forEach(function(note) {
            var noteDiv = document.createElement('div');
            noteDiv.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
            `;
            notesContainer.appendChild(noteDiv);
        });
    })
    .catch(error => console.error('Error:', error));
}

// Display notes when the page loads
displayNotes();
