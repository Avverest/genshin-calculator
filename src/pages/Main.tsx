import React from 'react'
import styled from 'styled-components'
import {SidePanel} from 'components/SidePanel/SidePanel'

const MainStyle = styled.div`
	flex: auto;
	display: flex;
`
const WorkPlace = styled.div`
`

const Main = () => {
	return(
		<MainStyle>
			<h1>Main</h1>
		</MainStyle>
	)
}
export default Main;