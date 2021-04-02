import React from 'react'
import Main from 'pages/Main'
import List from 'pages/List'
import styled from 'styled-components'
import SideMenu from 'components/SideMenu/SideMenu'

import {Switch, Route, withRouter} from 'react-router-dom';

const PageWrapperStyle = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background-color: #FCF7FB;
`

const PageWrapper = (props: any) => (
	<PageWrapperStyle>
		<SideMenu {...props} />
		<Switch>
			<Route exact path={'/'} component={Main}/>
			<Route exact path={'/list'} component={List}/>
		</Switch>
	</PageWrapperStyle>
)

export default withRouter(PageWrapper);