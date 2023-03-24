import {useState} from 'react'

import {Container,Contain,Heading,Button} from './styledComponents'

const LightDarkMode=()=>{
        const [light,setLight]=useState(true)

        const onClickButton=()=>{
            setLight(prevState=>(!prevState))
        }

        return(
            <Container>
                <Contain colour={light}>
                    <Heading colour={light}>Click To Change Mode</Heading>
                    <Button onClick={onClickButton}>{light ? "Light Mode":"Dark Mode"}</Button>
                </Contain>
            </Container>
        )
}

export default LightDarkMode