import React,{useState} from 'react'

import { InputStyle } from './styles'

const Input: React.FC = () => {
    const [file, setFile] = useState('');
    console.log(file);
    return (
        <Container>
            <InputStyle type="file">Ola </InputStyle>
            <button>Ola</button>
            <h1>djsaidjiasjidja</h1>
        </Container>
    )
}
export default Input