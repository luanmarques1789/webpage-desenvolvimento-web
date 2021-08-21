import './App.css';
import headerImg from './img/melhores-tecnologias.svg';

function App() {
	return (
		<article>
			<header className="">
				<h1>GUIA DO DESENVOLVIMENTO WEB</h1>
				<picture>
					<img src={headerImg} alt="" />
				</picture>
				<span>Artigo escrito por Luan M. Marques - 21 Agosto, 2021</span>
			</header>
			<main>
				<section>
					<p>
						Dado a abrangência do ciberespaço e a presença das ciberculturas
						(bolhas sociais) na internet, percebe-se cada vez mais há pessoas
						interessadas na bolha de desenvolvimento web pelo Brasil. Pessoas
						que, de alguma forma, se sentiram interessadas e influenciadas pela
						cultura da comunidade de desenvolvedores e programadores na
						internet.
					</p>
					<p>
						Assim esse post vem ser um guia útil para aqueles que estão perdidos
						e confusos, sobretudo a respeito daqueles conteúdos que precisam
						estudar e praticar, mas querem se tornar desenvolvedores web e
						fazerem parte dessa comunidade incrível do desenvolvimento web.
					</p>
				</section>
				<section>
					<h2>
						Desenvolvedores Web: O Que São, Onde Vivem e Do Que Se Alimentam?
					</h2>
				</section>
			</main>
		</article>
	);
}

export default App;
