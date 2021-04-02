import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

const IconWrapper = styled.div`
	font-size: 2.5rem;
`

interface IconType {
	name?: any
}

export const Icon = (props: IconType) => (
	<IconWrapper>
		<FontAwesomeIcon icon={props.name}/>
	</IconWrapper>
)

