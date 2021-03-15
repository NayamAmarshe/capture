import React from "react";
import { Section } from "../styles";
import styled from "styled-components";

export default function FaqSection() {
	return (
		<Section>
			<Faq>
				<h2>
					Your Questions <span>FAQ</span>
				</h2>
				<div className="question">
					<h4>How Do I start?</h4>
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Architecto!
						</p>
					</div>
					<div className="faq-line"></div>
				</div>
				<div className="question">
					<h4>Lorem ipsum dolor sit amet.</h4>
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Architecto!
						</p>
					</div>
					<div className="faq-line"></div>
				</div>
				<div className="question">
					<h4>Lorem ipsum dolor sit amet.</h4>
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Architecto!
						</p>
					</div>
					<div className="faq-line"></div>
				</div>
			</Faq>
		</Section>
	);
}

const Faq = styled(Section)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #ccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 2rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;
