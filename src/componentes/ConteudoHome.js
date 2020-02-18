import React from 'react';
import banner from './img/banner-principal.jpg';
import slide1 from './img/slide1.png';
import slide2 from './img/slide2.png';
import bbb from './img/img-bbb.png';

const ConteudoHome = props => {
	return(
		<main>
		<div className="banner-principal">
			<img src={banner} className/>
		</div>

		<div className="acesso-meu-canal">
		<p>Acesse aqui um canal exclusivo pra você, <br/>personalize com sua preferência.</p>
		<br/>
		<div className="button-posicao">
		<button type="button" className="btn btn-light">Veja Mais</button>
		<button type="button" className="btn btn-light">Guia de Canais</button>
		</div>
		</div>
		

		<div className="slide1">
		<img src={slide1} className/>
		</div>

		<div className="slide2">
		<img src={slide2} className/>
		</div>

		<div className="bbb">
		<img src={bbb} className/>s
		</div>

		</main>
	);
}

export default ConteudoHome;