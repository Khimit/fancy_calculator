import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButtons = ({ setCount }) => {
  const handleClickPlus = () => {
    setCount((prev) => {
      if (prev === 5) {
        return 5;
      } else {
        return prev + 1;
      }
    });
  };
  const handleClickMinus = () => {
    setCount((prev) => {
      if (prev === 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className="button-container">
      <button onClick={handleClickMinus} className="count-btn">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button onClick={handleClickPlus} className="count-btn">
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
};

export default CountButtons;
