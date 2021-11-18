import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './components/header.js';
import ListFollowers from './components/listFollowers';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="mainWrapper">
            <div className="container">
            <>
                <CssBaseline />
                <Container maxWidth="md">
                  <Box sx={{ bgcolor: '#cfe8fc', height: 'auto'}}>
                      <Header />
                      <ListFollowers />
                  </Box>
                  
                </Container>
                
            </>
            </div>
        </div>
    </div>
  );
}

export default App;
