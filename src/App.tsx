import './App.css';
import { useState } from 'react';
import { Descriptions } from './components/Descriptions';
import { Result } from './components/results/Result';

export interface Props {
  selectedDescription: string[],
  setSelectedDescription: React.Dispatch<React.SetStateAction<string[]>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  results: GameTypes[],
  setResults: React.Dispatch<React.SetStateAction<GameTypes[]>>
}

type GameTypes = {
  title: string;
  icon: string;
  descriptions: string[]
}

function App() {
  const [selectedDescription, setSelectedDescription] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const [results, setResults] = useState<GameTypes[]>([]);

  const props: Props = {
    selectedDescription,
    setSelectedDescription,
    setIsError,
    results,
    setResults
  };

  return (
    <div>
      <div className='header-img'>
        </div>
      <h1>What do you feel like playing?</h1>
      <h2>Tap the words to find a game</h2>

      <div>
        <Descriptions {...props} />
        {!isError && selectedDescription.length > 0 && (
          <Result {...props} />
        )}
      </div>
    </div>
  );
}

export default App;
