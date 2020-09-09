import { useState } from 'react';

export const useInputChange = () => {
  const [name, setName] = useState('');

  const onChange = e => {
    setName(e.target ? e.target.value : e)
  }

  return [name, onChange]
}