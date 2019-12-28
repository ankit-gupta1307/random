import React, {Component} from 'react';

import Section1Home from './section1/';
import PageHeader from '../common/header/';
import Section1Contact from '../contactpage/section1/';
import Section2Contact from '../contactpage/section2/';
import Section3Contact from '../contactpage/section3/';
import Section4Contact from '../contactpage/section4/';
import Section5Contact from '../contactpage/section5/';
import Section6Contact from '../contactpage/section6/';
import Section7Contact from '../contactpage/section7/';
import Section8Contact from '../contactpage/section8/';
import Section9Contact from '../contactpage/section9/';
import Section10Contact from '../contactpage/section10/';
import Section11View from '../contactpage/section11/';
import Section6Home from '../homepage/section6/';

export default class ContactPageContainer extends Component {

	render() {
		return (
			<React.Fragment>
				<PageHeader />
				<Section1Contact/>
			  <Section2Contact/>
			  <Section10Contact/>
			  <Section7Contact />
			  <Section8Contact />
			  <Section5Contact/>
			  <Section6Contact/>
			  <Section4Contact/>
			  <Section3Contact/>
			  <Section11View />
			  <Section9Contact />
			  <Section6Home/>
			</React.Fragment>
		)
	}
	
}