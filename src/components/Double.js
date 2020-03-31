import React from "react";

const Double = ({ value, setDouble }) => {
  return (
    <div>
      <p>
        <button onClick={setDouble}>Double</button>
      </p>
    </div>
  );
};

export default Double;
