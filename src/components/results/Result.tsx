import { useEffect } from 'react';
import { gameTypes } from '../../gameTypes';
import { Props } from '../../App';
import { GameTypes } from '../../App';

export const Result = ({ selectedDescription, results, setResults }: Props) => {
  useEffect(() => {
    const matchScores: number[] = [];
    const gameDescriptions = gameTypes.map((game) => game.descriptions);
    gameDescriptions.forEach((game) => {
      let match = 0;
      if (selectedDescription) {
        selectedDescription.forEach((description) => {
          if (game.includes(description)) {
            match++;
          }
          return;
        });
      }
      matchScores.push(match);
    });
    const matches: GameTypes[] = [];
    matchScores.forEach((score, i) => {
      if (score === selectedDescription.length) {
        matches.push(gameTypes[i]);
      }
    });
    setResults(matches);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDescription]);

  return (
    <div className='div-result'>
      {results.length === 0 &&
        gameTypes.map((game) => {
          return (
            <a
              href={`https://www.gamechanger.best/${game.title}`}
              target='_blank'
              rel='noreferrer'
              key={game.title}
            >
              <img src={game.icon} key={game.title} alt='result' />
            </a>
          );
        })}
      {results?.map((result) => {
        return (
          <a
            href={`https://www.gamechanger.best/${result.title}`}
            target='_blank'
            rel='noreferrer'
            key={result.title}
          >
            <img
              className='result-icon'
              src={result.icon}
              key={result.title}
              alt='result'
            />
          </a>
        );
      })}
    </div>
  );
};
