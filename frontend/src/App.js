import React, { useState, useEffect } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all notes
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(API_URL);
      setNotes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching notes:', error);
      setLoading(false);
    }
  };

  // Create or update note
  const handleSaveNote = async (noteData) => {
    try {
      if (editingNote) {
        // Update existing note
        const response = await axios.put(`${API_URL}/${editingNote._id}`, noteData);
        setNotes(notes.map(note => 
          note._id === editingNote._id ? response.data : note
        ));
        setEditingNote(null);
      } else {
        // Create new note
        const response = await axios.post(API_URL, noteData);
        setNotes([response.data, ...notes]);
      }
    } catch (error) {
      console.error('Error saving note:', error);
      alert('Failed to save note');
    }
  };

  // Delete note
  const handleDeleteNote = async (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setNotes(notes.filter(note => note._id !== id));
      } catch (error) {
        console.error('Error deleting note:', error);
        alert('Failed to delete note');
      }
    }
  };

  // Edit note
  const handleEditNote = (note) => {
    setEditingNote(note);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingNote(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>📝 Notes Maker</h1>
      </header>
      
      <div className="container">
        <NoteForm 
          onSave={handleSaveNote}
          editingNote={editingNote}
          onCancel={handleCancelEdit}
        />
        
        {loading ? (
          <div className="loading">Loading notes...</div>
        ) : (
          <NoteList 
            notes={notes}
            onEdit={handleEditNote}
            onDelete={handleDeleteNote}
          />
        )}
      </div>
    </div>
  );
}

export default App;
