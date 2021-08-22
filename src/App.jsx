import './App.css';
import Header from './components/Header/Header';
import devImg from './assets/img/requisitos-desenvolvimento.svg';
import catCreepy from './assets/gifs/smiling-cat-creepy.gif';
import confetti from './assets/gifs/confetti-celebration.gif';
import alice from './assets/gifs/alice-falling.gif';
import eyesOnYou from './assets/gifs/i-got-my-eye-on-you.gif';

function App() {
	return (
		<article>
			<Header />

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
						Assim, esse post vem ser um guia útil para aqueles que estão
						perdidos e confusos, sobretudo a respeito daqueles conteúdos que
						precisam estudar e praticar, mas querem se tornar desenvolvedores e
						fazerem parte desta comunidade incrível do desenvolvimento web.
					</p>
					<p>
						Portanto, ao término desta introdução, te desejo uma boa leitura!
					</p>
				</section>

				<section>
					<h2>
						Desenvolvedores Web: O Que São, Onde Vivem E Do Que Se Alimentam?
					</h2>
					<p>
						Quando buscamos saber mais pelo desenvolvimento web, nos deparamos –
						muito das vezes – na velha e clássica cena da toca do coelho em
						Alice no País das Maravilhas, pois é difícil saber em que lugar nós
						vamos se meter, ainda mais quando o caminho é longo e difuso.
						Contudo, não se preocupe, porque eu vou dar uma palinha de como as
						coisas funcionam.
					</p>
					{/* <img src={alice} alt="Alice caindo em um buraco" /> */}
					<p>
						Basicamente, desenvolvedor web é quem desenvolve websites ou
						webpages, desde páginas de blog (como esta que você está lendo) até
						sistemas complexos, como os serviços das empresas Google e Facebook.
						Todo website/webpage está hospedado, isto é, armazenado em um lugar
						denominado servidor web que permitirá você fazer uma requisição
						(pedido) de uma cópia, por exemplo, daquele vídeo de gatinhos para a
						sua máquina local (computador/PC).{' '}
					</p>
					<img
						src={catCreepy}
						alt="Arrepiante gato sorridente"
						style={{ height: '350px', width: 'auto' }}
					/>
				</section>

				<section>
					<h2>Front-end VS Back-end</h2>
					<p>
						Nessa área, você tem 3 escolhas possíveis: ser desenvolvedor
						front-end, back-end ou os dois (full-stack). Os dois primeiros
						possuem características marcantes entre si, porém ambos precisam ter
						uma determinada base para que se sustente e se construa conhecimento
						ao longo do tempo. Pessoalmente, eu vejo que é fundamental você
						conhecer e aprender os dois, pois isso te tornará um bom
						desenvolvedor ao passo que compreende as duas dicotomias do
						desenvolvimento web, assim como vai expandir suas possíveis vagas de
						emprego e você pode descobrir o que verdadeiramente gosta
						experimentando ambas.
					</p>
					<p>
						<span className="marker">Desenvolvimento Front-end:</span> a parte
						em que o usuário visualiza e interage com o site, sendo referida
						muito das vezes por client-side, isto é, o lado do cliente
						(usuário). HTML, CSS e JavaScript são as linguagens que formam o
						tripé e a base do desenvolvimento lado cliente, elas são
						responsáveis, respectivamente, pela estrutura, estilo/design e
						comportamento da página web. Além disso, responsividade e
						performance do site são pontos cruciais considerados durante a fase
						de planejamento. Observa-se que, portanto, o desenvolvedor front-end
						é responsável por construir e manutenir as interfaces do usuário de
						uma aplicação web.
					</p>

					<p>
						<span className="marker">Desenvolvimento Back-end:</span> sendo
						considerada a parte “invisível” ou “intocável” pelo usuário, o
						back-end é o server-side (lado servidor) do website. Ele é o lugar
						por onde o desenvolvedor back-end cria as rotas das requisições
						feitas pelo lado cliente; faz conexão com o banco de dados; organiza
						e armazena os dados sensíveis dos usuários; e escreve API’s e
						bibliotecas para a aplicação.
					</p>
				</section>

				<section>
					<h2>Primeiros Passos</h2>
					<p>
						Tanto para aqueles que desejam seguir uma carreira como um
						desenvolvedor fron-end ou back-end, ambos precisam conhecer uma
						lista de tecnologias os quais tornaram a sua base para iniciar a sua
						jornada e, assim como, para compreender as tecnologias mais
						específicas do caminho que você escolher.
					</p>
					<p>
						Ademais, através da imagem abaixo, eu estruturei os conhecimentos
						necessários com base no roadmap de Kamran Ahmed.
					</p>
					<img className="dev" src={devImg} alt="" />
					<p>
						O primeiro requisito que, pessoalmente, julgo ser extremamente
						importante é o domínio da língua inglesa moderna, visto que grande
						parte dos conteúdos e tutoriais completos e de qualidade se
						encontram em inglês. Como é o caso da Mozilla Developer Network
						(MDN) Web Docs, apesar da documentação dela para desenvolvedores
						estar disponível em português brasileiro (o que é bom), percebe-se
						que a versão americana aborda os assuntos com mais detalhes e
						“adornos” contribuindo, desse modo, para a compreensão e formação
						intelectual do leitor.
					</p>
					<p>
						Como próximo passo, estude algoritmos junto com estruturas de dados,
						pois são dois conceitos que andam de mãos dadas. Considerando que um
						algoritmo consiste em uma série de instruções finitas e
						pré-definidas por algo ou alguém a fim de realizar uma tarefa, ele
						contribuirá para construir sua base lógica e compreender o
						pensamento computacional e, consequentemente, adotá-lo com o
						objetivo de resolver problemas por meio de escolhas inteligentes. Já
						as estruturas de dados fará você entender como os dados podem estar
						arranjados e organizados em uma aplicação e, como resultado,
						conseguir acessá-los e manipulá-los através de um algoritmo.
					</p>
					<p>
						Em terceiro lugar, Git é um sistema de controle de versionamento de
						código que será essencial para o seu desenvolvimento após aprender
						os pontos destacados acima, pois no dia a dia é comum que salvemos
						trechos de códigos em nossa máquina local e depois enviemos para um
						repositório remoto (servidor), a fim de que seja possível voltar uma
						ou mais mudanças atrás caso aquele seu cliente peça para desfazer o
						estado atual do projeto. Além disso, para conseguirmos trabalhar de
						forma eficiente com o Git, precisaremos de um repositório remoto
						para hospedar e compartilhar o nosso código com outros colegas devs,
						para essa finalidade em específico temos a rede social de
						desenvolvedores chamada GitHub. Portanto, nada de usar o Drive da
						Google para os seus projetos, viu?!
					</p>
					<img src={eyesOnYou} alt="Fitando os olhos em vocÊ" />
					<p>
						Embora eu tenha comentado sobre websites/webpages e webservers, é
						importante estudar a fundo como a internet funciona: entender o
						contexto de quando surgiu a WWW (World Wide Web); como acontece o
						tráfego de dados e os protocolos envolvidos; servidores DNS (Domain
						Name System) e entre outros tópicos. Relacionado com isso,
						HTTP/HTTPS e API’s são tecnologias que estão intrinsecamente ligadas
						com a internet. HTTP e HTTPS são protocolos de rede, enquanto que
						uma API (Application Programming Interface) é – em uma tradução
						livre – uma interface de programação de aplicações que serve como
						ponte entre aplicações, tornando o processo mais rápido e seguro.
					</p>
					<p>
						Por último, uma competência da qual eu não inseri na imagem é a
						capacidade do usuário buscar por informações na internet. Embora
						alguns (ou a maioria) possa achar isso como algo trivial, entretanto
						um desenvolvedor que saiba fazer boas pesquisas obterá,
						provavelmente, bons resultados que satisfaçam a sua necessidade,
						visto que um elemento que pode estar lhe causando dificuldades é
						saber como fazer uma pesquisa. Logo, conhecer e aprofundar nos
						conhecimentos e jargões da área contribuirão para resultados
						relevantes.
					</p>
				</section>

				<section>
					<h2>Considerações Finais</h2>
					<p>
						É preciso frisar que esse post não é nada mais ou nada menos que um
						conjunto de opiniões (minhas e de outros desenvolvedores) com uma
						pitada de experiência própria.
					</p>
					<p>
						Para aqueles que chegaram nesse artigo e leram até aqui, eu deixo o
						meu parabéns e agradecimento.
					</p>
					<img
						src={confetti}
						alt="Mulher soprando confete de papel em suas mãos"
					/>
				</section>

				<section>
					<h2>Recomendações</h2>
					<p>
						Como esse guia trata apenas do básico das carreiras no front e
						back-end e não apresentou as tecnologias específicas de cada área.
						Abaixo eu deixo algumas links que ajudarão tanto nesse começo
						perturbado quanto ao longo de sua evolução.
					</p>
					<ul>
						<li>
							<a
								className="link"
								target="_blanket"
								rel="noopener"
								href="https://developer.mozilla.org/pt-BR/docs/Web/Guide/Introduction_to_Web_development"
							>
								content
							</a>
						</li>
						<li>
							<a
								className="link"
								target="_blanket"
								rel="noopener"
								href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
							>
								content
							</a>
						</li>
						<li>
							<a
								className="link"
								target="_blanket"
								rel="noopener"
								href="https://roadmap.sh/"
							>
								content
							</a>
						</li>
						<li>
							<a
								className="link"
								target="_blanket"
								rel="noopener"
								href="https://www.youtube.com/watch?v=O76ZfAIEukE&list=PLGPYJFbQt4KQSo58W7edfsGwJzsLQ5ADS"
							>
								content
							</a>
						</li>
					</ul>
				</section>

				<section>
					<h2>Referências Bibliográficas</h2>
					<p>
						Abaixo deixo as referências dos sites que, de algum modo, me
						ajudaram a escrever o conteúdo desta página. Dê uma conferida nelas
						para aumentar o seu repertório.
					</p>
					<ul>
						<li>
							<a
								className="link"
								target="_blanket"
								rel="noopener"
								href="https://github.com/kamranahmedse/developer-roadmap"
							>
								content
							</a>
						</li>
						<li>
							<a
								className="link"
								target="_blanket"
								rel="noopener"
								href="https://roadmap.sh/"
							>
								content
							</a>
						</li>
						<li>
							<a
								className="link"
								target="_blanket"
								rel="noopener"
								href="https://www.geeksforgeeks.org/frontend-vs-backend/"
							>
								content
							</a>
						</li>
						<li>
							<a
								className="link"
								target="_blanket"
								rel="noopener"
								href="https://www.digitalhouse.com/br/blog/guia-de-desenvolvimento-web-tudo-o-que-voce-precisa-saber-antes-de-comecar-a-programar"
							>
								content
							</a>
						</li>
						<li>
							<a
								className="link"
								target="_blanket"
								rel="noopener"
								href="https://developer.mozilla.org/en-US/docs/Glossary/Algorithm"
							>
								content
							</a>
						</li>
						<li>
							<a
								className="link"
								target="_blanket"
								rel="noopener"
								href="https://developer.mozilla.org/en-US/docs/Glossary/Data_structure"
							>
								content
							</a>
						</li>
						<li>
							<a
								className="link"
								target="_blanket"
								rel="noopener"
								href="https://www.programiz.com/dsa"
							>
								content
							</a>
						</li>
					</ul>
				</section>
			</main>
		</article>
	);
}

export default App;
