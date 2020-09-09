import React, { useState } from 'react';

export const FunctionalInput = () => {
  const [name, setName] = useState("");
  const handleInput = (e) => {
    setName(e.target.value);
  }

  return (
    <>
      <input type="text" value={name} onChange={handleInput} />
      <h1>Hello{name ? `, ${name}` : ""}!</h1>
    </>
  );
}