import React, { useEffect } from 'react';
import { useInputChange } from '../hooks/useInputChange'

export const Subtitle = (props) => {
  const [name, setName] = useInputChange(props.name);

  useEffect(() => {
    setName(props.name);
  }, [props]);

  return (
    <>
      <input type="text" value={name} onChange={setName} />
      <h2>Thanks for listening{name ? `, ${name}` : ""}!</h2>
    </>
  );
}