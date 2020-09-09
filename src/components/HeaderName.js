import React from 'react';
import { Subtitle } from './Subtitle';

export const HeaderName = (props) => {
  return (
    <>
      <h1>Hello{props.name ? `, ${props.name}` : ""}!</h1>
      <Subtitle name={props.name} />
    </>
  );
}