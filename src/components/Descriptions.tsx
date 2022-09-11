import { useEffect } from "react";
import { gameDescriptions } from "../gameDescriptions";
import { Props } from "../App";

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
          return resultDescriptions.push(description);
        } else {
          return;
        }
      })
    );

    const difference = resultDescriptions.filter(
      (description) => selectedDescription.indexOf(description) === -1
    );

    const btns = Array.from(
      document.getElementsByClassName(
        "btn-description"
      ) as HTMLCollectionOf<HTMLButtonElement>
    );

    btns.forEach((btn: HTMLButtonElement) => {
      if (
        (difference.includes(btn.id) && selectedDescription.includes(btn.id)) ||
        difference.includes(btn.id) ||
        results.length === 0
      ) {
        btn.disabled = false;
        btn.style.opacity = "1";
      } else if (
        results.length > 0 &&
        !difference.includes(btn.id) &&
        !selectedDescription.includes(btn.id)
      ) {
        btn.disabled = true;
        btn.style.opacity = ".3";
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);

  // const onSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const target = e.target as HTMLButtonElement;
  //   if (selectedDescription.includes(target.value)) {
  //     const newSelectedDescription = selectedDescription.filter(
  //       (description: string) => description !== target.value
  //     );
  //     setSelectedDescription(newSelectedDescription);
  //     target.classList.toggle("selected");
  //   } else {
  //     setIsError(false);
  //     setSelectedDescription([...selectedDescription, target.value]);
  //     target.classList.toggle("selected");
  //   }
  //   if (target.classList.contains("selected")) {
  //     target.style.backgroundImage =
  //       "url(./btn-img-selected/" + target.value + "-selected.png)";
  //   } else {
  //     target.style.backgroundImage =
  //       "url(./svg-images/" + target.value + "-unselected.svg)";
  //   }
  // };

  const onSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    if (selectedDescription.includes(target.value)) {
      const newSelectedDescription = selectedDescription.filter(
        (description: string) => description !== target.value
      );
      setSelectedDescription(newSelectedDescription);
      target.classList.toggle("selected");
    } else {
      setIsError(false);
      setSelectedDescription([...selectedDescription, target.value]);
      target.classList.toggle("selected");
    }
    if (target.classList.contains("selected")) {
      target.style.backgroundImage =
        "url(./svg-selected-images/" + target.value + "-selected.svg)";
    } else {
      target.style.backgroundImage =
        "url(./svg-unselected-images/" + target.value + "-unselected.svg)";
    }
  };

  return (
    <div className="flex-container-descriptions">
      {gameDescriptions.map((description) => {
        return (
          <button
            id={description.description}
            className="btn-description"
            value={description.description}
            key={description.description}
            onClick={(e) => onSelect(e)}
            style={{
              backgroundImage: "url(" + description.icon_unselected + ")",
            }}
          />
        );
      })}
    </div>
  );
};
