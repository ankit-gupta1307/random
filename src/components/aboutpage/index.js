import React, {Component} from 'react';

import Section1Home from './section1/';
import PageHeader from '../common/header/';
import Section1About from '../aboutpage/section1/';
import Section2About from '../aboutpage/section2/';
import Section3About from '../aboutpage/section3/';
import Section4About from '../aboutpage/section4/';
import Section5About from '../aboutpage/section5/';
import Section6Home from '../homepage/section6/';

export default class AboutPageContainer extends Component {

	render() {
		return (
			<React.Fragment>
				<PageHeader />
				<Section1About/>
			  <Section2About/>
			  <Section4About/>
			  <Section3About/>
			  <Section5About/>
			  <Section6Home/>
			</React.Fragment>
		)
	}
	
}