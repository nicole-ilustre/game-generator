import { useEffect} from 'react';
import { gameDescriptions } from '../gameDescriptions';
import { Props } from '../App';

export const Descriptions = ({
  selectedDescription,
  setSelectedDescription,
  setIsError,
  results,
}: Props) => {

  useEffect(() => {
    const resultDescriptions: string[] = [];
    results.forEach((result) =>
      result.descriptions.forEach((description) => {
        if (!resultDescriptions.includes(description)) {
          console.log(description, true)
          return resultDescriptions.push(description)
        } else {
          console.log(description, false)
          return resultDescriptions.splice(resultDescriptions.indexOf(description), 1)
        };
      })
    );

    const difference = resultDescriptions.filter(
      (description) => selectedDescription.indexOf(description) === -1
    );

    const btns = Array.from(
      document.getElementsByClassName(
        'btn-description'
      ) as HTMLCollectionOf<HTMLButtonElement>
    );
    if (results.length > 0) {
      btns.forEach((btn: HTMLButtonElement) => {
        if (difference.includes(btn.id) && selectedDescription.includes(btn.id)) {
          return;
        } else if (!difference.includes(btn.id) && !selectedDescription.includes(btn.id)) {
          btn.disabled = true
          btn.style.opacity = '.3';
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);

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
            id={description.description}
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
