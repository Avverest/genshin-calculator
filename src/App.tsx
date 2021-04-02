import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/Button/Button';
import Wrapper from 'components/Wrapper/Wrapper';
import Card from 'components/Card/Card';
import Avatar from 'components/Avatar/Avatar';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Icon } from 'components/Icon/Icon';

const AppStyle = styled.div`
	display: flex;
	width: 100vw;
	min-height: 100vh;
	flex-direction: column;
	align-items: center;
	background-color: #FCF7FB;
`

function App() {
	return (
		<AppStyle>
			<h1>Someshit</h1>
		</AppStyle>
	);
}

export default App;
