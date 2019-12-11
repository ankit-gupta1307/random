import React, {Component} from 'react';

import Section1Home from './section1/';
import Section2Home from './section2/';
import Section3Home from './section3/';
import Section4Home from './section4/';
import Section5Home from './section5/';
import Section6Home from './section6/';



export default class HomePageContainer extends Component {

	render() {
		return (
			<React.Fragment>
				<Section1Home/>
		      <Section2Home/>
		      <Section3Home/>
		      <Section4Home/>
		      <Section5Home/>
		      <Section6Home/>
			</React.Fragment>
		)
	}
	
}