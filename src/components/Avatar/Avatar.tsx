import React from 'react';
import styled from "styled-components";

const AvatarStyle = styled.div`
	position: absolute;
	width: 15rem;
	height: 15rem;
	z-index: 1;
	background-color: red;
	border-radius: 50%;
	color: white;
	font-size: 10rem;
	display: flex;
	align-items: center;
	justify-content: center;
	top: -10rem;
`

interface AvatarType {
}

const Avatar = (props: AvatarType) => {
	return(
		<AvatarStyle>A</AvatarStyle>
	)
}
export default Avatar;