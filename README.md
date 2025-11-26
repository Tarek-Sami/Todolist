# Todo Application (مهامي)

Live Demo 👉 [https://todolisttarek.netlify.app/](https://todolisttarek.netlify.app/)

A modern, feature-rich Todo application built with React and Material-UI. This application supports Arabic language (RTL) and provides a complete task management solution with local storage persistence.

## Features

- ✅ **Add Todos** - Create new tasks with titles
- ✏️ **Edit Todos** - Update existing task titles and details
- 🗑️ **Delete Todos** - Remove tasks with confirmation dialog
- ✓ **Mark as Complete** - Toggle completion status of tasks
- 🔍 **Filter Todos** - View all, completed, or non-completed tasks
- 💾 **Local Storage** - Todos are automatically saved to browser's local storage
- 🔔 **Toast Notifications** - Feedback messages for user actions
- 🌐 **RTL Support** - Full right-to-left layout for Arabic language
- 🎨 **Material-UI Design** - Beautiful, modern interface using MUI components

## Technologies Used

- **React** (v19.1.0) - UI library
- **Material-UI (MUI)** (v7.3.5) - Component library
- **React Router DOM** (v6.30.1) - Routing (if needed)
- **UUID** (v13.0.0) - Unique ID generation
- **React Scripts** (v5.0.1) - Build tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production to the `build` folder
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
my-app/
├── public/
│   ├── fonts/          # Tajawal font files
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Toast.js    # Toast notification component
│   │   ├── Todo.js     # Individual todo item component
│   │   └── Todolist.js # Main todo list container
│   ├── contexts/
│   │   ├── toastContext.js  # Context for toast notifications
│   │   └── todosContext.js  # Context for todos state management
│   ├── reducers/
│   │   └── todosReducer.js  # Reducer for handling todo actions
│   ├── App.js          # Main application component
│   ├── App.css         # Application styles
│   ├── index.js        # Application entry point
│   └── index.css       # Global styles
└── package.json
```

## Usage

1. **Adding a Todo**: Enter a task title in the input field and click the "إضافة" (Add) button
2. **Completing a Todo**: Click the checkmark icon to mark a task as completed
3. **Editing a Todo**: Click the edit icon to modify a task's title and details
4. **Deleting a Todo**: Click the delete icon and confirm the deletion
5. **Filtering Todos**: Use the toggle buttons to filter between:
   - غير منجز (Non-completed)
   - منجز (Completed)
   - الكل (All)

## Features in Detail

### State Management

- Uses React Context API (`TodosContext`, `ToastContext`) for global state management
- Uses `useReducer` hook for complex state logic
- Todos are stored in component state and synchronized with localStorage

### Local Storage

- All todos are automatically saved to browser's local storage
- Todos persist across page refreshes and browser sessions

### UI/UX

- Responsive design with Material-UI components
- Dark theme background (#181616)
- Custom color scheme for todo cards (#283593)
- RTL (Right-to-Left) layout support for Arabic text
- Tajawal font family for Arabic typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and not licensed for public use.

## Author

Created as part of a React Front-End Course project.

---

**Note**: This application is configured for Arabic language interface. All UI text and interactions are in Arabic with RTL layout support.
