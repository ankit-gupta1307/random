import React, {Component} from 'react';

import PageHeader from '../common/header/';

//import Section1Home from './section1/';
//import Section2Home from './section2/';
//import Section3Home from './section3/';
//import Section4Home from './section4/';
//import Section5Home from './section5/';

import Section6Home from './section6/';


import Section1About from '../aboutpage/section1/';
import Section2About from '../aboutpage/section2/';
import Section3About from '../aboutpage/section3/';
import Section4About from '../aboutpage/section4/';
import Section5About from '../aboutpage/section5/';




export default class HomePageContainer extends Component {

	render() {
		return (
			<React.Fragment>
					<PageHeader />

					{/*<Section1Home/>
		      <Section2Home/>
		      <Section3Home/>
		      <Section4Home/>
		      <Section5Home/>*/}

		      <Section1About/>
		      <Section2About/>
		      <Section3About/>
		      <Section4About/>
		      <Section5About/>

		      <Section6Home/>
			</React.Fragment>
		)
	}
	
}