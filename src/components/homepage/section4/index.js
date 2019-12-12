import React from 'react';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap'
import logo from '../../../images/img03.png';

export default  class Section4Home extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionAccess white">
      	<Grid>
      		<Row>
      		  <Col lg={6}>
      		    <h1>Clean Energy for 80 Countries and Counting</h1>
      		    <p>With Cue, you join other committed companies to create a cost-optimized power syndicate. The more that join the network, the more amplified the social impact.</p>
      		    <Button className="headerButton textBlack inline-block">Green The Grid</Button>
      		  </Col>
      		  <Col lg={5} lgOffset={1}>
              <img src={logo} className="App-logo" alt="logo" />
      		  </Col>
      		</Row>
      	</Grid>
      </section>
    );
  }
 }