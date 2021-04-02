import React from 'react';
import styled from 'styled-components';

const WrapperDefault = styled.div`
	max-width: 100rem;
	width: 100%;
	height: 100%;
	flex-wrap: wrap;
  display: flex;
	background-color: #fff;
	padding: 3rem;
	margin-top: 10rem;
	border-radius: 20px;
	box-shadow: 0 0 15px 0 rgba(0,0,0,.2);
	position: relative;
`

interface WrapperType {
	children: object
}

const Wrapper = (props: WrapperType) => {
	return(
		<WrapperDefault>{props.children}</WrapperDefault>
	)
}

export default Wrapper;