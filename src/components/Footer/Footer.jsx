import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	margin: calc(6rem + 0.3vmax) 0 0;
	padding: calc(1rem + 1vmin) 0;
	row-gap: 2rem;

	font-size: calc(1.4rem + 0.5vmin);
	text-align: center;
	background-color: #2c3037;

	// shadow
	box-shadow: 0px -9px 9px -8px #31353a99;
	-webkit-box-shadow: 0px -9px 9px -8px #31353a99;

	span {
		display: flex;
		justify-content: center;
	}

	span.social-medias {
		column-gap: 2rem;
	}

	p {
		margin: 0;
		text-indent: 0;
	}

	span a i {
		color: white;
	}

	a,
	i {
		margin: 0;
	}

	i {
		font-size: calc(1.6rem + 0.8vmin);
	}

	.fa-heart {
		color: red;
	}
`;

export default function Footer() {
	return (
		<FooterWrapper>
			<span class="social-medias">
				<a
					href="http://github.com/luanmarques1789"
					target="_blanket"
					rel="noopener"
				>
					<i class="fab fa-github" />
				</a>
				&#11049;
				<a
					href="mailto:luanmarques1789@gmail.com"
					target="_blanket"
					rel="noopener"
				>
					<i class="fab fa-mailchimp" />
				</a>
				&#11049;
				<a
					href="https://www.instagram.com/luanmarques777/"
					target="_blanket"
					rel="noopener"
				>
					<i class="fab fa-instagram" />
				</a>
			</span>
			<span>
				<p>
					Made with <i class="fas fa-heart" />. Deployed with
					<a href="http://vercel.com" target="_blanket" rel="noopener">
						{' '}
						Vercel
					</a>
				</p>
			</span>
		</FooterWrapper>
	);
}
