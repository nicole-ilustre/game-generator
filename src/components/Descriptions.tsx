import { gameDescriptions } from '../gameDescriptions';
import { Props } from '../App';

export const Descriptions = ({
  selectedDescription,
  setSelectedDescription,
  setIsError,
}: Props) => {
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
  };
  return (
    <div className='flex-container-descriptions'>
      <span className='empty-div'></span>
      {gameDescriptions.map((description) => {
        return (
          <button
            className='btn-description'
            value={description}
            onClick={(e) => onSelect(e)}
            key={description}
          >
            {description.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};
