import React from "react";
import home1 from "../img/home1.png";
import { Section, Description, Hide, Image } from "../styles";
export default function AboutSection() {
	return (
		<Section>
			<Description>
				<div className="title">
					<Hide>
						<h2>We work to make</h2>
					</Hide>
					<Hide>
						<h2>
							your <span>dreams</span> come
						</h2>
					</Hide>
					<Hide>
						<h2>true</h2>
					</Hide>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Praesentium, reprehenderit?
				</p>
				<button>Contact Us</button>
			</Description>
			<Image>
				<img src={home1} alt="" />
			</Image>
		</Section>
	);
}
