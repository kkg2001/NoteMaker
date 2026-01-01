# 📝 Notes Maker Application

A full-stack notes application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- ✨ Create, Read, Update, and Delete notes
- 🏷️ Categorize notes (General, Work, Personal, Ideas, Todo)
- 📱 Responsive design
- 🎨 Beautiful gradient UI
- ⚡ Real-time updates
- 🗂️ Sort notes by last updated

## Tech Stack

**Frontend:**
- React 18
- Axios for API calls
- CSS3 with modern styling

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas URI)
- npm or yarn

## Installation

### 1. Clone or navigate to the project directory

```bash
cd notes-app
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory (already created with default values):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/notesapp
```

**Note:** If you're using MongoDB Atlas, replace the MONGODB_URI with your Atlas connection string.

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

## Running the Application

### 1. Start MongoDB

Make sure MongoDB is running on your system:
```bash
# If using local MongoDB
mongod
```

Or ensure your MongoDB Atlas cluster is accessible.

### 2. Start the Backend Server

```bash
cd backend
npm start
# Or for development with auto-restart:
npm run dev
```

The backend server will run on `http://localhost:5000`

### 3. Start the Frontend

Open a new terminal window:
```bash
cd frontend
npm start
```

The React app will run on `http://localhost:3000` and automatically open in your browser.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/notes | Get all notes |
| GET | /api/notes/:id | Get a single note |
| POST | /api/notes | Create a new note |
| PUT | /api/notes/:id | Update a note |
| DELETE | /api/notes/:id | Delete a note |

## Project Structure

```
notes-app/
├── backend/
│   ├── models/
│   │   └── Note.js          # Mongoose Note model
│   ├── routes/
│   │   └── notes.js         # API routes
│   ├── .env                 # Environment variables
│   ├── server.js            # Express server setup
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteForm.js
│   │   │   ├── NoteForm.css
│   │   │   ├── NoteList.js
│   │   │   ├── NoteList.css
│   │   │   ├── NoteItem.js
│   │   │   └── NoteItem.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## Usage

1. **Create a Note:** Fill in the title, select a category, write your content, and click "Add Note"
2. **Edit a Note:** Click the "Edit" button on any note card, modify the content, and click "Update Note"
3. **Delete a Note:** Click the "Delete" button on any note card and confirm the deletion
4. **View Notes:** All notes are displayed in a grid layout, sorted by last updated time

## Future Enhancements

- 🔍 Search functionality
- 🏷️ Tags support
- 📎 File attachments
- 👤 User authentication
- 🌙 Dark mode
- 📤 Export notes
- ☁️ Cloud sync

## License

MIT License

## Author

Built with ❤️ using the MERN stack
