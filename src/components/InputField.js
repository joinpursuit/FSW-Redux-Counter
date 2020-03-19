
import React from 'react';

const InputField = ({ value, onChange }) => {
  return (
    <div>
      <input type="text" value={value} onChange={(e) => { onChange(e.target.value) }} />
    </div>
  );
};

export default InputField;