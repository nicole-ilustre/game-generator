import { useState, useEffect } from 'react';
import { gameTypes } from '../../gameTypes';
import { ErrorMessage } from '../ErrorMessage';
import { Props } from '../../App';

type GameTypes = {
  title: string;
  icon: string;
  descriptions: string[]
}

export const Result = ({ selectedDescription }: Props) => {
  const [results, setResults] = useState<GameTypes[]>([]);

  useEffect(() => {
    const matchScores: number[] = [];
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
    const matches: GameTypes[] = [];
    matchScores.forEach((score, i) => {
      if (score === selectedDescription.length) {
        matches.push(gameTypes[i]);
      }
    });
    setResults(matches);
  }, [selectedDescription]);

  return (
    <div className='div-result'>
      {results.length === 0 && (
        <ErrorMessage errorMessage='No match found. Please try again.' />
      )}
        {results?.map((result) => {
          return <a href={`https://www.gamechanger.best/${result.title}`} target="_blank" rel="noreferrer"><img src={result.icon} key={result.title} alt='result' /></a>;
        })}
    </div>
  );
};
