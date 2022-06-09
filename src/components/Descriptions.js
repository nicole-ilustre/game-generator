import { gameDescriptions } from '../gameDescriptions';

export const Descriptions = ({
  selectedDescription,
  setSelectedDescription,
  setIsError,
}) => {
  const onSelect = async (e) => {
    if (selectedDescription.includes(e.target.value)) {
      const newSelectedDescription = selectedDescription.filter(
        (description) => description !== e.target.value
      );
      setSelectedDescription(newSelectedDescription);
      await e.target.classList.toggle('not-selected');
    } else {
      setIsError(false);
      setSelectedDescription([...selectedDescription, e.target.value]);
      await e.target.classList.toggle('selected');
    }
  };
  return (
    <div className='flex-container-descriptions'>
      {gameDescriptions.map((description) => {
        return (
          <button
            className='btn-description'
            value={description}
            onClick={(e) => onSelect(e)}
            key={description}
          >
            {description}
          </button>
        );
      })}
    </div>
  );
};
