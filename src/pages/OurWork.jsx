import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";

export default function OurWork() {
	return (
		<Work>
			<Movie>
				<h2>The Athelete</h2>
				<div className="line"></div>
				<Link>
					<img src={athlete} alt="Athlete" />
				</Link>
			</Movie>
			<Movie>
				<h2>The Racer</h2>
				<div className="line"></div>
				<Link>
					<img src={theracer} alt="Racer" />
				</Link>
			</Movie>
			<Movie>
				<h2>Goodtimes</h2>
				<div className="line"></div>
				<Link>
					<img src={goodtimes} alt="Goodtimes" />
				</Link>
			</Movie>
		</Work>
	);
}

const Work = styled.div`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	h2 {
		padding: 1rem 0rem;
	}
`;

const Movie = styled.div`
	padding-bottom: 10rem;
	.line {
		height: 0.5rem;
		background: #ccc;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;
