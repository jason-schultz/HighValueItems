import * as React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';


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
