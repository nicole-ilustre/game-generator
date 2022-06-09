import { useState, useEffect } from 'react';
import { gameTypes } from '../../gameTypes'
import { ErrorMessage } from '../ErrorMessage'

export const SelectedResult = (props) => {
  const { selectedDescription } = props;
  const [results, setResults] = useState([]);

  useEffect(() => {
    const matchScores = [];
    const gameDescriptions = gameTypes.map((game) => game.descriptions);
    gameDescriptions.forEach((game) => {
      let match = 0;
      selectedDescription.forEach((description) => {
        if (game.includes(description)) {
          match++;
        }
        return;
      });
      matchScores.push(match);
    });
    const matches = [];
    matchScores.forEach((score, i) => {
      if (score === selectedDescription.length) {
        matches.push(gameTypes[i].title);
      }
    });
    setResults(matches);
  }, [selectedDescription]);

  return (
      <div>
          {results.length === 0 &&
          <ErrorMessage errorMessage="No match found. Please try again." />}
      <ul>
        {results?.map((result) => {
          return <li key={result}>{result}</li>;
        })}
      </ul>
    </div>
  );
};
