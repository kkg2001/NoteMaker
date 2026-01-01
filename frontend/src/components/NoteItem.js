import React from 'react';
import './NoteItem.css';

function NoteItem({ note, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="note-item">
      <div className="note-header">
        <span className={`note-category category-${note.category.toLowerCase()}`}>
          {note.category}
        </span>
        <span className="note-date">{formatDate(note.updatedAt)}</span>
      </div>
      
      <h3 className="note-title">{note.title}</h3>
      <p className="note-content">{note.content}</p>
      
      <div className="note-actions">
        <button onClick={() => onEdit(note)} className="btn-edit">
          ✏️ Edit
        </button>
        <button onClick={() => onDelete(note._id)} className="btn-delete">
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
