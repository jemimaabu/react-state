import React, { useEffect, useContext } from 'react';
import ThemeContext from '../context/ThemeContext'
import { useInputChange } from '../hooks/useInputChange'

export const ColorChange2 = () => {
  const [name, setName] = useInputChange("");
  const [themeColor, setThemeMode] = useContext(ThemeContext);

  const changeThemeColor = (value) => {
    setThemeMode(value)
  }

  const handleInput = (e) => {
    setName(e.target.value);
  }

  const isColor = (strColor) => {
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
  }

  useEffect(() => {
    (isColor(name)) && changeThemeColor(name);
  }, [name]);

  return (
    <>
      <input type="text" value={name} onChange={handleInput} />
      <h2 style={{ color: themeColor }}>Change color{themeColor ? ` to ${themeColor}` : ""}</h2>
    </>
  );
}