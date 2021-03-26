import { Box } from '@chakra-ui/react';
import * as React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';

import './App.css';


function App() {

  return (
    <Box maxW="xl" maxH="xl">
      <Header />
          <div style={{
            position: 'absolute', left: '50%',transform: 'translate(-50%)' }}>
              <Container />
          </div>
    </Box>
  );
}

export default App;
