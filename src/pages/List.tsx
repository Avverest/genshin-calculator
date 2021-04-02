import React from 'react'
import styled from 'styled-components'

const ListBlock = styled.div`
  flex: auto;
  display: flex;
`

const List = (props: any) => {
	return(
		<ListBlock>
			<h1>List</h1>
		</ListBlock>
	)
}
export default List;