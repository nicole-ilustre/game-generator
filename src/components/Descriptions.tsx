import { useEffect, useState } from 'react';
import { gameDescriptions } from '../gameDescriptions';
import { Props } from '../App';

export const Descriptions = ({
  selectedDescription,
  setSelectedDescription,
  setIsError,
  results,
}: Props) => {
  const [resultDescriptions, setResultDescriptions] = useState<string[][]>([]);
  useEffect(() => {
    results.forEach((result) =>
      setResultDescriptions([result.descriptions])
    );

    // const difference = gameDescriptions.filter(
    //   (description) =>
    //     resultDescriptions.indexOf(description.description) === -1
    // );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);

  console.log(resultDescriptions);

  const onSelect = (e: React.MouseEvent<HTMLButtonElement>) => {

    const target = e.target as HTMLButtonElement;
    if (selectedDescription.includes(target.value)) {
      const newSelectedDescription = selectedDescription.filter(
        (description: string) => description !== target.value
      );
      setSelectedDescription(newSelectedDescription);
      target.classList.toggle('selected');
    } else {
      setIsError(false);
      setSelectedDescription([...selectedDescription, target.value]);
      target.classList.toggle('selected');
    }
    if (target.classList.contains('selected')) {
      target.style.backgroundImage =
        'url(./btn-img-selected/' + target.value + '-selected.png)';
    } else {
      target.style.backgroundImage =
        'url(./btn-img-unselected/' + target.value + '-unselected.png)';
    }
  };
  return (
    <div className='flex-container-descriptions'>
      {gameDescriptions.map((description) => {
        return (
          <button
            className='btn-description'
            value={description.description}
            key={description.description}
            onClick={(e) => onSelect(e)}
            style={{
              backgroundImage: 'url(' + description.icon_unselected + ')',
            }}
          />
        );
      })}
    </div>
  );
};
