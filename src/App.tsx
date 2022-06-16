import './App.css';
import { useState } from 'react';
import { Descriptions } from './components/Descriptions';
import { Result } from './components/results/Result';

export interface Props {
  selectedDescription: string[],
  setSelectedDescription: React.Dispatch<React.SetStateAction<string[]>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
}

function App() {
  const [selectedDescription, setSelectedDescription] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);

  const props: Props = {
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
          <Result {...props} />
        )}
      </div>
    </div>
  );
}

export default App;
