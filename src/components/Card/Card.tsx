import React from 'react';
import styled from 'styled-components';

const CardDefault = styled.div`
	display: flex;
	flex-direction: column;
	width: 25%;
	box-shadow: 0 0 1px #000;
	padding: 1rem;
`
const Headline = styled.h2`
	font-size: 4rem;
`
const Count = styled.div`
	font-size: 2rem;
`

interface CardType {
	label: string
	count: number
}

const Card = (props: CardType) => {
	return(
		<CardDefault>
			<Headline>{props.label}</Headline>
			<Count>{props.count}</Count>
		</CardDefault>
	)
}

export default Card;