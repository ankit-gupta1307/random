import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import pic from '../../../images/aboutUsBanner.png';

export default  class Section1About extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionAbout1 white bg bgCircle4About1n2">
      	<Grid>
          <div className="overlay"></div>
      		<Row>
      			<Col lg={12} md={12} sm={12} xs={12}>
      				<Image src={pic} responsive/>
      			</Col>
      		  <Col lg={10} md={12} sm={12} xs={12} lgOffset={1}>
      		    <h1 className="fontWeightBold">Our mission is to solve climate change by scaling clean energy to 1 billion people.</h1>
      		    <p>As companies expand, their carbon footprint and environmental impact grows. The demand for clean energy projects to mitigate this increasing footprint is soaring. Our suite of digital solutions engages companies of any size to purchase radically more clean energy and make the world cleaner.</p>
      		  </Col>
      		</Row>
      	</Grid>
      </section>
    );
  }
 }