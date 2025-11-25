import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
export default function Toast({ open, title }) {
  const action = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" color="white">
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar open={open} action={action}>
        <Alert severity="success" variant="filled">
          {title}
        </Alert>
      </Snackbar>
    </div>
  );
}
