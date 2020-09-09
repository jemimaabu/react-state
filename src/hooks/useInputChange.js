import { useState } from 'react';

export const useInputChange = () => {
  const [name, setName] = useState('');

  const onChange = e => {
    setName(e.target.value)
  }

  return [name, onChange]
}