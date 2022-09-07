import React, { useState } from "react";
import Botones from "../Componentes/Botones.jsx";
import Contador from "../Componentes/Contador.jsx";



const Home = () => {
	const [numClic, setNumClic]= useState(0)

	const manejarClic=()=>{
		setNumClic(numClic + 1);
	}

	const reiniciarContador =()=>{
		setNumClic(0)
	}
	return (
		<div className="container-principal text-center">
			<div className="contenedor-titulo" >
				<h1>Contador de Clik</h1>	
			</div>
			<div className="container-contador">
				<Contador numClic={numClic}/>
				<Botones texto="clic" BotonDeClic={true} manejarClic={manejarClic}/>
				<Botones texto="reiniciar" BotonDeClic={false} manejarClic={reiniciarContador}/>
			</div>
			
				
		</div>

	);
};

export default Home;
