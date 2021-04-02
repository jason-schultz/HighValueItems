import * as React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';


function App() {

  return (
    <div className="container mx-auto">
      <Header />
          <div style={{
            position: 'absolute', left: '50%',transform: 'translate(-50%)' }}>
              <Container />
          </div>
    </div>
  );
}

export default App;
