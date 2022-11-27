import React from 'react';

// Bootstrap Imports
import { Row } from 'react-bootstrap';

import { MainBanner } from '../Components/Banner';
import Cards from '../Components/Cards';

export default function Home() {
	return (
		<>
			<MainBanner />
			<Row xs={1} md={3} className="g-4">
					<Cards
					image='./assets/close-up-photography-of-green-leaf-with-drops-of-water-544980_Compressed.jpg'
					title='Weather-Based Planting'
					description='Harvest Guardian will take the plants you have selected and alert you when they can be started based on you location and predicted weather.'
					linkTitle='Learn More'
					link='/about#weather'
				/>
				<Cards
					image='./assets/blur-close-up-focus-ground-401213_Compressed.jpg'
					title='Better Maintenance'
					description='Keep up on the watering and nutrient schedule to help keep a healthy and beautiful garden'
					linkTitle='Learn More'
					link='/about#maintenance'
				/>
				<Cards
					image='./assets/healthy-vegetables-hand-gardening-9301_Compressed.jpg'
					title='Harvest Progress'
					description='Keep track of when you should be able to harvest your crops based on the visual timeline for each crop added to your library'
					linkTitle='Learn More'
					link='/about#progress'
				/>
			</Row>
		</>
	);
}
