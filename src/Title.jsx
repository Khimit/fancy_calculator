const Title = ({ locked }) => {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          {" "}
          Buy <b>Pro</b> Version
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
};

export default Title;
