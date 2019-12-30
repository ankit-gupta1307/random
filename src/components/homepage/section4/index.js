import React from 'react';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap'
import pic from '../../../images/img03.png';

export default  class Section4Home extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionAccess white secionFour bgCircle3Clear">
      	<Grid>
      		<Row>
      		  <Col lg={6} md={6} sm={6} xs={12}>
      		    <h1>Clean Energy for <span>80 Countries and Counting</span></h1>
              <Image src={pic} className="mobileVersion" alt="logo" responsive/>
      		    <p>With Cue, you join other committed companies to create a cost-optimized power syndicate. The more that join the network, the more amplified the social impact.</p>
      		    <Button className="headerButton textBlack inline-block">Green The Grid</Button>
      		  </Col>
      		  <Col lg={5} md={6} sm={6} xs={12} lgOffset={1}>
              <Image src={pic} className="destopVersion" alt="logo" responsive/>
      		  </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <h2 className="text-center">Only you can scale clean energy. Are you ready?</h2>
            </Col>
      		</Row>
      	</Grid>
      </section>
    );
  }
 }