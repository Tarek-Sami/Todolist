import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// other imports
import { useState, useContext, useEffect, useMemo, useReducer } from 'react';
import { useToast } from '../contexts/toastContext';
// component imports
import Todo from './Todo';
import todosReducer from '../reducers/todosReducer';
// Dialog imports
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Todolist() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const { showHideToast } = useToast();

  const [titleInput, setTitleInput] = useState('');

  const [displayedTodosType, setDisplayedTodosType] = useState('all');

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const [dialogtodo, setDialogTodo] = useState(null);

  const [showEditDialog, setShowEditDialog] = useState(false);

  // Filterd Todos
  const compledtedTodos = useMemo(() => {
    return todos.filter((todo) => todo.isCompleted);
  }, [todos]);
  const notCompletedTodos = useMemo(() => {
    return todos.filter((todo) => !todo.isCompleted);
  }, [todos]);

  // End of Filtered Todos

  let todosToBeDisplayed = todos;

  if (displayedTodosType === 'completed') {
    todosToBeDisplayed = compledtedTodos;
  } else if (displayedTodosType === 'non-completed') {
    todosToBeDisplayed = notCompletedTodos;
  } else {
    todosToBeDisplayed = todos;
  }

  function changeDisplayedTodosType(e) {
    setDisplayedTodosType(e.target.value);
  }

  function openDeleteDialog(todo) {
    setShowDeleteDialog(true);
    setDialogTodo(todo);
  }

  function openEditDialog(todo) {
    setDialogTodo(todo);
    setShowEditDialog(true);
  }

  function handleDeleteDialogClose() {
    setShowDeleteDialog(false);
  }

  function handleEditDialogClose() {
    setShowEditDialog(false);
  }

  function handleDeleteConfirm() {
    dispatch({ type: 'delete', payload: dialogtodo });
    handleDeleteDialogClose();
    showHideToast('تم حذف المهمة بنجاح');
  }
  function handleEditDialogConfirm() {
    // To be implemented
    dispatch({
      type: 'edit',
      payload: dialogtodo,
    });
    handleEditDialogClose();
    showHideToast('تم تعديل المهمة بنجاح');
  }

  function handleAddTodo() {
    dispatch({
      type: 'add',
      payload: {
        title: titleInput,
      },
    });
    setTitleInput('');
    showHideToast('تمت إضافة المهمة بنجاح');
  }

  useEffect(() => {
    dispatch({ type: 'get' });
  }, []);
  const todosJsx = todosToBeDisplayed.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        showDelete={openDeleteDialog}
        showEdit={openEditDialog}
      />
    );
  });
  return (
    <>
      {/* Delete Modal */}
      <Dialog
        style={{ direction: 'rtl' }}
        onClose={handleDeleteDialogClose}
        open={showDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          هل أنت متأكد من حذف هذه المهمة؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكن التراجع عن هذا الإجراء.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>اغلاق</Button>
          <Button autoFocus onClick={handleDeleteConfirm}>
            حذف
          </Button>
        </DialogActions>
      </Dialog>
      {/* Delete Modal */}
      {/* Update Modal */}
      <Dialog
        style={{ direction: 'rtl' }}
        onClose={handleEditDialogClose}
        open={showEditDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">تعديل المهمة</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="عنوان المهمة"
            fullWidth
            variant="standard"
            value={dialogtodo?.title}
            onChange={(e) =>
              setDialogTodo({ ...dialogtodo, title: e.target.value })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="details"
            label="التفاصيل"
            fullWidth
            variant="standard"
            value={dialogtodo?.details}
            onChange={(e) =>
              setDialogTodo({ ...dialogtodo, details: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>اغلاق</Button>
          <Button autoFocus onClick={handleEditDialogConfirm}>
            تعديل
          </Button>
        </DialogActions>
      </Dialog>
      {/* Update Modal */}
      <Container maxWidth="sm">
        <Card
          sx={{ minWidth: 275 }}
          style={{
            maxHeight: '80vh',
            overflowY: 'scroll',
          }}
        >
          <CardContent>
            <Typography variant="h1" style={{ fontWeight: 'bold' }}>
              مهامي
            </Typography>
            <Divider variant="middle" />
            {/* Filters */}
            <ToggleButtonGroup
              style={{ direction: 'ltr', marginTop: '30px' }}
              color="primary"
              value={displayedTodosType}
              exclusive
              aria-label="Platform"
              onChange={changeDisplayedTodosType}
            >
              <ToggleButton value="non-completed">غير منجز</ToggleButton>
              <ToggleButton value="completed">منجز</ToggleButton>
              <ToggleButton value="all">الكل</ToggleButton>
            </ToggleButtonGroup>
            {/* End of Filters */}
            {/* All to dos */}
            {todosJsx}
            {/* ---All to dos--- */}
            {/* INPUT + ADD BUTTON */}
            <Grid container style={{ marginTop: '20px' }} spacing={2}>
              <Grid
                size={8}
                display="flex"
                justifyContent="space-between"
                alignItems="right"
              >
                <TextField
                  style={{ width: '100%' }}
                  id="outlined-basic"
                  label="عنوان المهمة"
                  variant="outlined"
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                />
              </Grid>

              <Grid
                size={4}
                display="flex"
                justifyContent="space-between"
                alignItems="left"
              >
                <Button
                  style={{ width: '100%', height: '100%' }}
                  variant="contained"
                  onClick={() => {
                    handleAddTodo();
                  }}
                  disabled={titleInput.trim() === ''}
                >
                  إضافة
                </Button>
              </Grid>
            </Grid>
            {/*== INPUT + ADD BUTTON ==*/}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
