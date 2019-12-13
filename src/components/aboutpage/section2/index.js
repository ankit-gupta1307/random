import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

export default  class Section2About extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionAbout2 white bg">
      	<Grid>
      		<Row>
      		  <Col lg={5} lgOffset={0}>
      		    {/*<h1 className="textWhite textSizeSmall">Let's create a zero carbon world together</h1>*/}
      		  </Col>
      		</Row>
      	</Grid>
      </section>
    );
  }
 }