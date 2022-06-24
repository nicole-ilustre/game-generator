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
    if (target.classList.contains('selected')) {
      console.log(target.classList)
      target.style.backgroundImage = "url(./btn-img-selected/" + target.value + "-selected.png)"
    } else {
      target.style.backgroundImage = "url(./btn-img-unselected/" + target.value + "-unselected.png)"
    }
  };
  return (
    <div className='flex-container-descriptions'>
      {gameDescriptions.map((description) => {
        return (
          <button
            className='btn-description'
            value={description.description}
            onClick={(e) => onSelect(e)}
            style={{ backgroundImage: "url(" + description.icon_unselected + ")"}}
          />
        );
      })}
    </div>
  );
};
