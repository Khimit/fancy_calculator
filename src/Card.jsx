import { useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

const Card = () => {
  const [count, setCount] = useState(0);
  let locked = false;
  if (count === 5) {
    locked = true;
  }

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
          <Title locked={locked } />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <CountButtons setCount={setCount} />
    </div>
  );
};

export default Card;
