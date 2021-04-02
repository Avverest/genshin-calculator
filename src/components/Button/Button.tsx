import React from 'react';
import styled from 'styled-components';

const color = {
	text: "#000",
	bg: "#fff",
	buttonColor: "#f00"
}

const ButtonDefault = styled.button`
  background: none;
  outline: none;
  padding: 0.5rem 1.5rem;
  border: solid 1px ${color.text};
  font-size: 2rem;
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
	transition: background-color 500ms ease,
							color 500ms ease;
  &:hover {
    background-color: ${color.buttonColor};
    color: ${color.bg};
  }
`
interface ButtonType {
	children: string
	hello?: () => void
}

export const Button = (props: ButtonType) => {
	return(
		<ButtonDefault onClick={props.hello}>{props.children}</ButtonDefault>
	)
}

