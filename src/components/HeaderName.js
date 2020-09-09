import React from 'react';

export const HeaderName = (props) => {
  return (
    <h1>Hello{props.name ? `, ${props.name}` : ""}!</h1>
  );
}