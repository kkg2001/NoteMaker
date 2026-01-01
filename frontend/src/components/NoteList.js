import React from 'react';
import NoteItem from './NoteItem';
import './NoteList.css';

function NoteList({ notes, onEdit, onDelete }) {
  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <p>No notes yet. Create your first note above!</p>
      </div>
    );
  }

  return (
    <div className="note-list">
      <h2>Your Notes ({notes.length})</h2>
      <div className="notes-grid">
        {notes.map(note => (
          <NoteItem
            key={note._id}
            note={note}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
