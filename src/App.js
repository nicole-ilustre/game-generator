import './App.css';
import { useState } from 'react';
import { Descriptions } from './components/Descriptions';
import { Result } from './components/results/Result';
import { ErrorMessage } from './components/ErrorMessage';

function App() {
  const [selectedDescription, setSelectedDescription] = useState([]);
  const [isError, setIsError] = useState(false);

  const props = {
    selectedDescription,
    setSelectedDescription,
    setIsError,
  };

  return (
    <div>
      <h1>what do you feel like playing?</h1>
      <h2>Tap the words to find a game</h2>
      <div className='flex-container-main'>
        <Descriptions {...props} />
        {!isError && selectedDescription.length > 0 && (
          <Result selectedDescription={selectedDescription} />
        )}
      </div>
      {isError && <ErrorMessage errorMessage='Please choose from above' />}
    </div>
  );
}

export default App;
