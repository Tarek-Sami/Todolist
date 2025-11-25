import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// icons
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// other
import { useContext } from 'react';
import { TodosContext } from '../contexts/todosContext';
import { useToast } from '../contexts/toastContext';
// dialog imports

export default function Todo({ todo, showDelete, showEdit }) {
  const { todos, setTodos } = useContext(TodosContext);
  const { showHideToast } = useToast();
  //Handle Clicks Functions

  function handleDeleteClick() {
    showDelete(todo);
  }

  function handleCheckClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    showHideToast(
      !todo.isCompleted ? 'تم وضع المهمة كغير مكتملة' : 'تم إكمال المهمة بنجاح'
    );
  }

  function handleEditClick() {
    showEdit(todo);
  }

  //Handle Clicks Functions
  return (
    <>
      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          background: '#283593 ',
          color: 'white',
          marginTop: '20px',
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: 'right',
                  textDecoration: todo.isCompleted ? 'line-through' : 'none',
                  maxWidth: '400px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {todo.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'right',
                  maxWidth: '400px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {todo.details}
              </Typography>
            </Grid>

            {/* Buttons */}

            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              gap="10px"
              alignItems="center"
            >
              {/* check icon button */}
              <IconButton
                className="iconButton"
                aria-label="check"
                style={{
                  backgroundColor: todo.isCompleted ? '#8bc34a' : 'white',
                  color: todo.isCompleted ? 'white' : '#8bc34a',
                  border: 'solid 3px #8bc34a',
                }}
                onClick={() => {
                  handleCheckClick();
                }}
              >
                <CheckIcon />
              </IconButton>
              {/* check icon button */}
              {/* Edit icon button */}
              <IconButton
                className="iconButton"
                aria-label="edit"
                style={{
                  backgroundColor: 'white',
                  color: '#1796aa',
                  border: 'solid 3px #1796aa',
                }}
                onClick={handleEditClick}
              >
                <EditIcon />
              </IconButton>
              {/* Edit icon button */}
              {/* Delete icon button */}
              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  backgroundColor: 'white',
                  color: '#b23c17',
                  border: 'solid 3px #b23c17',
                }}
                onClick={handleDeleteClick}
              >
                <DeleteIcon />
              </IconButton>
              {/* Delete icon button */}
            </Grid>
            {/* --- Buttons --- */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
