import React from 'react';
import img from '../../assets/img/melhores-tecnologias.svg';

export default function Header() {
	return (
		<header>
			<h1>GUIA DO DESENVOLVIMENTO WEB</h1>
			<p>
				UM GUIA GERAL E RÁPIDO PARA TE ORIENTAR NO COMEÇO DE SUA CARREIRA COMO
				DESENVOLVEDOR WEB
			</p>
			<picture>
				<img src={img} alt="" />
			</picture>
			<span>Artigo escrito por Luan M. Marques - 22 Agosto, 2021</span>
		</header>
	);
}
