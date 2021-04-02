import React from 'react';
import styled from 'styled-components';

type SidepanelProps = {
	children: object
	panelName: string
}

const SidepanelBlock = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 15rem;
	box-shadow: 0 0 3px black;
	padding: 0 1rem;
`
const Title = styled.div`
	font-size: 4rem;
	margin-top: 2rem;
	text-transform: uppercase;
`

export const SidePanel = (props: SidepanelProps) => {
	return(
		<SidepanelBlock>
			<Title>{props.panelName}</Title>
			{props.children}
		</SidepanelBlock>
	)
}