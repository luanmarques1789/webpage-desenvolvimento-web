import React from 'react';
import styled from 'styled-components';

const Summ = styled.div`
	background-color: #00c5c5b3;
	padding: 4rem;
	border: 1px solid #999a9e;
	border-radius: 3.5px;
	margin-top: 5rem;

	h2 {
		margin: 0 0 3rem;
	}

	ul {
		margin: 0;
	}
`;

const Li = styled.li`
	margin: 0;
	list-style: none;
	line-height: 1.5;

	a {
		color: white;
		margin: 0;
	}

	a:hover {
		color: #61dafb;
	}
`;

const Span = styled.span`
	color: #61dafb;
`;

export default function Summary() {
	return (
		<Summ>
			<div>
				<h2>Sumário</h2>
			</div>
			<ul>
				<Li>
					<a href="#sec1">
						<Span>1. </Span>
						Desenvolvedores Web: O Que São, Onde Vivem E Do Que Se Alimentam?
					</a>
				</Li>
				<Li>
					<a href="#sec2">
						<Span>2. </Span>Front-end VS Back-end
					</a>
				</Li>
				<Li>
					<a href="#sec3">
						<Span>3. </Span>Primeiros Passos
					</a>
				</Li>
				<Li>
					<a href="#sec4">
						<Span>4. </Span>Considerações Finais
					</a>
				</Li>
				<Li>
					<a href="#sec5">
						<Span>5. </Span>Recomendações
					</a>
				</Li>
				<Li>
					<a href="#sec6">
						<Span>6. </Span>Referências Bibliográficas
					</a>
				</Li>
			</ul>
		</Summ>
	);
}
