import React from 'react';
import styled from 'styled-components';
import img from '../../assets/img/melhores-tecnologias.svg';

const HeaderWrapper = styled.header`
	display: flex;
	flex-flow: column;
	padding: 2rem 0 3.2rem;

	img {
		max-width: 250px;
		display: flex;
		margin: 3rem auto;
		box-shadow: none;
	}

	div {
		display: flex;
		flex-direction: column;
	}

	@media screen and (min-width: 790px) {
		justify-content: center;
		align-items: center;
		flex-flow: row;
		padding: 2vmax calc(1rem + 2vmin);

		div {
			width: calc(35rem + 10vmax);
			padding: 3rem 0 3rem 3rem;
			order: 2;
			/* background-color: #f5f; */
		}

		img {
			max-width: 300px;
		}
	}
`;

const Title = styled.h1`
	margin: 2.5rem 0;
	text-align: center;
	font-size: calc(2.2rem + 2.2vmin);
	font-family: 'Fira Sans', sans-serif;
	font-weight: 500;
	color: #18dcdc;
`;

const SubTitle = styled.p`
	text-align: center;
	font-size: calc(1.4rem + 1vmin);
	font-family: 'Fira Sans', sans-serif;
	font-weight: 400;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

// const Span = styled.span`
// 	font-size: calc(1.2rem + 0.5vmin);
// 	margin: 0 0 2rem;
// `;

export default function Header() {
	return (
		<HeaderWrapper>
			<div>
				<Title>GUIA DO DESENVOLVIMENTO WEB</Title>
				<SubTitle>
					Um guia público e rápido para te orientar no começo de sua carreira
					como desenvolvedor web
				</SubTitle>
			</div>
			<picture>
				<img src={img} alt="Miniatura de pessoas sentadas em um laptop" />
			</picture>
			{/* <Span>Artigo escrito por Luan M. Marques - 22 Agosto, 2021</Span> */}
		</HeaderWrapper>
	);
}
