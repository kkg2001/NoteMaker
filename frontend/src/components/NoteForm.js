import React, { useState, useEffect } from 'react';
import './NoteForm.css';

function NoteForm({ onSave, editingNote, onCancel }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('General');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
      setCategory(editingNote.category);
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      alert('Please fill in all fields');
      return;
    }

    onSave({ title, content, category });
    
    // Reset form
    setTitle('');
    setContent('');
    setCategory('General');
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    setCategory('General');
    onCancel();
  };

  return (
    <div className="note-form-container">
      <h2>{editingNote ? 'Edit Note' : 'Create New Note'}</h2>
      <form onSubmit={handleSubmit} className="note-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-select"
          >
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Ideas">Ideas</option>
            <option value="Todo">Todo</option>
          </select>
        </div>
        
        <div className="form-group">
          <textarea
            placeholder="Note Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-textarea"
            rows="6"
          />
        </div>
        
        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            {editingNote ? 'Update Note' : 'Add Note'}
          </button>
          {editingNote && (
            <button type="button" onClick={handleCancel} className="btn btn-secondary">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
