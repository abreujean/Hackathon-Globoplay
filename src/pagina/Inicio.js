import React from 'react'
import ReactDOM from 'react-dom';
import Cabecalho from '../componentes/Cabecalho'
import ConteudoHome from '../componentes/ConteudoHome'
import Rodape from '../componentes/Rodape'

function Inicio() {
	return (
		<div className="Inicio">
			<Cabecalho></Cabecalho>
			<ConteudoHome></ConteudoHome>
			<Rodape></Rodape>
		</div>
	);
}

export default Inicio