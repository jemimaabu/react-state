import React from 'react';
import { useInputChange } from '../hooks/useInputChange'
import { HeaderName } from './HeaderName'

export const HooksInput = () => {
  const [name, setName] = useInputChange();

  return (
    <>
      <input type="text" value={name} onChange={setName} />
      <HeaderName name={name} />
    </>
  );
}