import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { Section, Description, Image } from "../styles";
import styled from "styled-components";

export default function ServicesSection() {
	return (
		<Services>
			<Description>
				<h2>
					High <span>quality</span> services
				</h2>
				<Cards>
					<Card>
						<div className="icon">
							<img src={clock} alt="Clock" />
							<h3>Efficient</h3>
						</div>
						<p>
							Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
						</p>
					</Card>
					<Card>
						<div className="icon">
							<img src={diaphragm} alt="Diaphragm" />
							<h3>Diaphragm</h3>
						</div>
						<p>
							Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Dicta,
							recusandae.
						</p>
					</Card>{" "}
					<Card>
						<div className="icon">
							<img src={money} alt="Money" />
							<h3>Affordable</h3>
						</div>
						<p>
							Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
							amet, consectetur adipisicing.
						</p>
					</Card>{" "}
					<Card>
						<div className="icon">
							<img src={teamwork} alt="Teamwork" />
							<h3>Team Work</h3>
						</div>
						<p>
							Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
							amet.
						</p>
					</Card>
				</Cards>
			</Description>
			<Image>
				<img src={home2} alt="Home" />
			</Image>
		</Services>
	);
}

const Services = styled(Section)`
	h2 {
		padding-bottom: 5rem;
	}
	p {
		width: 70%;
		padding: 2rem 0rem 4rem 0rem;
	}
`;

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Card = styled.div`
	flex-basis: 20rem;
	.icon {
		display: flex;
		align-items: center;
		h3 {
			margin-left: 1rem;
			background: white;
			color: black;
			padding: 1rem;
		}
	}
`;
