import React from 'react'
import {NavLink, withRouter} from "react-router-dom";
import {SidePanel} from 'components/SidePanel/SidePanel'
import styled from 'styled-components'

type ObjInArr = {
	link: string
	name: string
}

const links: Array<ObjInArr> = [
	{link: '/', name: 'Main'},
	{link: '/list', name: 'List'}
]

const Block = styled.div`
	padding: 0.5rem 0;
	a {
		text-decoration: none;
  }
`

const SideMenu = (props: any) => {
	return(
		<SidePanel panelName={"SideMenu"}>
			{links.map((item: ObjInArr, idx: number) => <Block><NavLink to={item.link} key={idx.toString()}>{item.name}</NavLink></Block>)}
		</SidePanel>
	)
}

export default withRouter(SideMenu);