import './App.css';
import { useState } from 'react';
import { Descriptions } from './components/Descriptions';
import { SelectedResult } from './components/results/SelectedResult';
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
      <h1>No idea which game to play?</h1>
      <h2>
        Tell us what you feel like playing and we'll tell you which game to
        play.
      </h2>
      <Descriptions {...props} />

      {isError && <ErrorMessage errorMessage='Please choose from above' />}
      {!isError && selectedDescription.length > 0 && (
        <SelectedResult selectedDescription={selectedDescription} />
      )}
    </div>
  );
}

export default App;
