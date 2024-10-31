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
          class="city-icon" 
          data-city="Belo Horizonte" 
          style={{ top: "74.4vh", left: "35.7vw" }}
          onClick={() => {
            setOpenModal(true)
            setModalState({
              title: "Belo Horizonte",
              subtitle: "Sede Oficial",
              acts: ["AV1 Telepresencial em 04/11", "IN Telepresencial em 02/12"],
              image: BeloHorizonte,
              imageWidth: 500
            })
          }}  
        >
          <LocationIcon color={"red"}/>
        </div>
        <div 
          class="city-icon" 
          data-city="Para de Minas" 
          style={{top: "74vh", left: "31vw"}}
          onClick={() => {
            setOpenModal(true)
            setModalState({
              title: "Pará de Minas",
              subtitle: "Sede de Alunos, localizada a 70 km de BH.",
              acts: ["IN Telepresencial em 02/12"],
              image: ParaDeMinas,
              imageWidth: 600
            })
          }}  
        >
          <LocationIcon color={"green"}/>
        </div>
        <div 
          class="city-icon" 
          data-city="Pitangui" 
          style={{top: "71.2vh", left: "29vw"}}
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
          class="city-icon" 
          data-city="Nanuque" 
          style={{top: "41.5vh", left: "62.2vw"}}
          onClick={() => {
            setOpenModal(true)
            setModalState({
              title: "Nanuque",
              subtitle: "Ponto de Recepção, localizada a 600 km de BH.",
              acts: ["BAS Telepresencial em 18/11"],
              image: Nanuque,
              imageWidth: 600
            })
          }} 
        >
          <LocationIcon color={"green"}/>
        </div>
        <div 
          class="city-icon" 
          data-city="Vitória" 
          style={{top: "81.5vh", left: "62.3vw"}}
          onClick={() => {
            setOpenModal(true)
            setModalState({
              title: "Vitória",
              subtitle: "Em processo de reabertura depois de 10 anos, localizada a 644 km de BH.",
              acts: ["Confecção de pirâmedes em 04/11", "Clarividência em 18/11", "Palestra Básico em 02/12", "BAS presencial em abril/2025"],
              image: Vitoria,
              imageWidth: 600
            })
          }}   
        >
          <LocationIcon color={"blue"}/>
        </div>
        <div 
          class="city-icon" 
          data-city="Montes Claros" 
          style={{top: "22.5vh", left: "36.3vw"}}
          onClick={() => {
            setOpenModal(true)
            setModalState({
              title: "Montes Claros",
              subtitle: "Em processo de abertura de ponto de encontro. Reforma a todo vapor, inauguração em breve!",
              acts: [],
              image: MontesClaros,
              imageWidth: 600
            })
          }} 
        >
          <LocationIcon color={"blue"}/>
        </div>
        <div 
          class="city-icon" 
          data-city="Porto Seguro" 
          style={{top: "18.8vh", left: "71.7vw"}}
          onClick={() => {
            setOpenModal(true)
            setModalState({
              title: "Porto Seguro / Eunápolis ",
              subtitle: "Em fase de conquista, levamos 3 alunos para o 2SC/2024. Não tem atividades marcadas no momento. Período de convivência informal.",
              acts: [],
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
