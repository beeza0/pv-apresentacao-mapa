import React from 'react';
import './App.css';
import LocationIcon from "./components/LocationIcon";
import ModalInfo from "./components/ModalInfo";
import BeloHorizonte from "./assets/belo-horizonte.jpeg"
import ParaDeMinas from "./assets/para-de-minas.jpeg"
import Pitangui from "./assets/pitangui.jpeg"
import Nanuque from "./assets/nanuque.jpeg"
import Vitoria from "./assets/vitoria.jpeg"
import MontesClaros from "./assets/montes-claros.jpeg"
import PortoSeguro from "./assets/porto-seguro.jpeg"

function App() {

const [ openModal, setOpenModal ] = React.useState(false)
const [ modalState, setModalState ] = React.useState({})

const handleClose = () => setOpenModal(false)

  return (
    <div className="App">
      <ModalInfo modalState={modalState} handleClose={handleClose} open={openModal}
      />
      <div className="container">
        <div 
          className="city-icon" 
          data-city="Belo Horizonte" 
          style={{ top: "74.4vh", left: "34.7vw" }}
          onClick={() => {
            setOpenModal(true)
            setModalState({
              title: "Belo Horizonte",
              subtitle: "Sede Oficial",
              acts: ["06/02 e 07/02 - Atividades da Regional de Pará de Minas", "08/02 - Inauguração da Cooperativa em Pará de Minas", "24/03 - Curso Básico Presencial"],
              image: BeloHorizonte,
              imageWidth: 500
            })
          }}  
        >
          <LocationIcon color={"red"}/>
        </div>
        <div 
          className="city-icon" 
          data-city="Para de Minas" 
          style={{top: "74vh", left: "30vw"}}
          onClick={() => {
            setOpenModal(true)
            setModalState({
              title: "Pará de Minas",
              subtitle: "Sede de Alunos, localizada a 70 km de BH. Acabou de realizar um Curso Básico presencial em 20 de janeiro",
              acts: ["06/02 e 07/02 - Atividades da Regional", "08/02 - Inauguração da Cooperativa", "21/06 - Curso Básico Presencial"],
              image: ParaDeMinas,
              imageWidth: 600
            })
          }}  
        >
          <LocationIcon color={"green"}/>
        </div>
        <div 
          className="city-icon" 
          data-city="Pitangui" 
          style={{top: "71.5vh", left: "28vw"}}
          onClick={() => {
            setOpenModal(true)
            setModalState({
              title: "Pitangui",
              subtitle: "Localizada a 600 km de BH, 50 km de Pará de Minas. Os alunos frequentam a sede de Pará.",
              acts: [],
              image: Pitangui,
              imageWidth: 500
            })
          }}  
        >
          <LocationIcon color={"blue"}/>
        </div>
        <div 
          className="city-icon" 
          data-city="Nanuque" 
          style={{top: "40.5vh", left: "63.2vw"}}
          onClick={() => {
            setOpenModal(true)
            setModalState({
              title: "Nanuque",
              subtitle: "Ponto de Recepção, localizada a 600 km de BH.",
              acts: ["08/03 - Inauguração do ponto de Encontro", "10/03 - Curso Básico"],
              image: Nanuque,
              imageWidth: 600
            })
          }} 
        >
          <LocationIcon color={"green"}/>
        </div>
        <div 
          className="city-icon" 
          data-city="Vitória" 
          style={{top: "81.5vh", left: "63.3vw"}}
          onClick={() => {
            setOpenModal(true)
            setModalState({
              title: "Vitória",
              subtitle: "Em processo de reabertura depois de 10 anos, localizada a 644 km de BH.",
              acts: ["03/02 - Palestra de Básico", "17/02 - Exercício de Básico", "07/04 - Curso Básico"],
              image: Vitoria,
              imageWidth: 600
            })
          }}   
        >
          <LocationIcon color={"blue"}/>
        </div>
        <div 
          className="city-icon" 
          data-city="Montes Claros" 
          style={{top: "22.7vh", left: "35.35vw"}}
          onClick={() => {
            setOpenModal(true)
            setModalState({
              title: "Montes Claros",
              subtitle: "Em processo de abertura de ponto de encontro, localizada a 400 km de BH. Reforma a todo vapor, inauguração em breve! Segunda feira, dia 03/02, receberam autorização para solicitar atividades via Policon, que foi instalado recentemente",
              acts: ["10/03 - Clarividência eventual"],
              image: MontesClaros,
              imageWidth: 600
            })
          }} 
        >
          <LocationIcon color={"blue"}/>
        </div>
        <div 
          className="city-icon" 
          data-city="Porto Seguro" 
          style={{top: "18.1vh", left: "73.3vw"}}
          onClick={() => {
            setOpenModal(true)
            setModalState({
              title: "Porto Seguro / Eunápolis ",
              subtitle: "Em fase de conquista, levamos 3 alunos para o 2SC/2024. Período de convivência informal.",
              acts: ["04/02 - Atividade online"],
              image: PortoSeguro,
              imageWidth: 500
            })
          }} 
        >
          <LocationIcon color={"green"}/>
        </div>
      </div>
    </div>
  );
}

export default App;
