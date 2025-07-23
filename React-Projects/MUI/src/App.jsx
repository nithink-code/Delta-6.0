import './App.css'
import Button from '@mui/material/Button';

function App() {
  return (
    <>
      <Button color="secondary">Secondary</Button>&nbsp;&nbsp;
      <Button variant="contained" color="success">
        Success
      </Button>&nbsp;&nbsp;
      <Button variant="outlined" color="error">
        Error
      </Button>
    </>
  )
}

export default App
