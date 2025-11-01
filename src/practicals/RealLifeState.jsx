import { useState } from "react";

export const FormExample = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <p>Your name: {name}</p>
    </>
  );
};
