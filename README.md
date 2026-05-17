# Todo Application (مهامي)

A feature-rich todo app built with React and Material UI. The interface is in Arabic with full RTL layout, local storage persistence, and an animated WebGL background.

**Live demo:** [todolisttarek.netlify.app](https://todolisttarek.netlify.app/)

## Features

- Add, edit, delete, and mark todos complete
- Filter by all, completed, or non-completed tasks
- Confirmation dialog before delete; edit dialog for title and details
- Toast notifications for user feedback
- Todos persisted in the browser via `localStorage`
- RTL Arabic UI with Tajawal typography
- Animated `DarkVeil` background (OGL + GSAP)

## Tech stack

- React 19 (CRA)
- Material UI (MUI) 7
- React Context API + `useReducer` for state
- UUID for unique todo IDs
- `react-router-dom` (wraps the app in `index.js` for future routing)
- OGL, GSAP — background effect in `src/component/DarkVeil.jsx`

## Getting started

### Prerequisites

- Node.js 14+
- npm or yarn

### Installation

1. Go to the project folder:

```bash
cd TodoList
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Development server |
| `npm test` | Test runner (watch mode) |
| `npm run build` | Production build to `build/` |
| `npm run eject` | Eject from CRA (one-way) |

## Project structure

```
TodoList/
├── public/
│   ├── fonts/              # Tajawal font files
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Toast.js        # Toast notification UI
│   │   ├── Todo.js         # Single todo row
│   │   └── Todolist.js     # List, filters, dialogs
│   ├── component/
│   │   └── DarkVeil.jsx    # Animated background
│   ├── contexts/
│   │   ├── toastContext.js
│   │   └── todosContext.js
│   ├── reducers/
│   │   └── todosReducer.js # Actions: add, edit, delete, complete
│   ├── App.js              # Theme, providers, layout
│   ├── App.css
│   └── index.js
└── package.json
```

## Usage

1. **Add** — Enter a title and click **إضافة**
2. **Complete** — Use the checkmark control on a todo
3. **Edit** — Open the edit dialog to change title and details
4. **Delete** — Confirm in the delete dialog
5. **Filter** — Toggle **غير منجز** / **منجز** / **الكل**

## State management

- `TodosContext` holds todos and dispatch; `todosReducer` handles actions and syncs to `localStorage` under the key `todos`
- `ToastContext` drives short-lived feedback messages

## UI notes

- Dark theme (`#181616`) with indigo todo cards (`#283593`)
- Full-screen `DarkVeil` layer behind content (`pointer-events: none` so controls stay clickable)

## Browser support

Recent versions of Chrome, Firefox, Safari, and Edge.

## License

Private — not licensed for public reuse.

## Author

Created as part of the **React Front-End Course**.
