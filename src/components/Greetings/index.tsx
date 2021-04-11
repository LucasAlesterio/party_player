import React,{useState} from 'react'

import { Container, Input } from './styles'

const Greetings: React.FC = () => {
  const [file, setFile] = useState('');
  //C:/Users/lucas/Downloads/The.100.S07.1080p.BluRay.x264-BORDURE[rartv]/The.100.S07E05.1080p.BluRay.x264-BORDURE.mkv
  console.log(file);
  function selectMovie(event : any){
    if(event.target.files[0]){
      const thisFile = event.target.files[0].path
      setFile(thisFile);
    }
  }
  return (
    <Container>
      <input type="file" onChange={(event)=>selectMovie(event)}/>
      {file ? 
        <video width="750" height="500" controls >
          <source src={file} type="video/ogg"/>
        </video>
        :
        <h1>Video nao selecionado</h1>
      }
    </Container>
  )
}

export default Greetings
