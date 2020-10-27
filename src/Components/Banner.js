import React from 'react';
import { Button } from 'react-bootstrap';

export const MainBanner = (props) => {
	return (
		<div className='jumbotron'>
			<h1 className='section-title'>
				Garden <span>Smarter</span>
			</h1>

			<div className='center-buttons'>
				<Button href='#get_the_app' variant='success'>
					Get the App
				</Button>
			</div>
		</div>
	);
};
