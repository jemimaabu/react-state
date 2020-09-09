import React from 'react';

export const Subtitle = (props) => {

  return (
    <h2>Thanks for listening{props.name ? `, ${props.name}` : ""}!</h2>
  );
}