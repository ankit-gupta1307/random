import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import pic from '../../../images/tag.png';

export default  class Section9Contact extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="auto white sectionPrice bgSectionPrice">
        <Grid>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12} className="priceList">
              <h1>Pricing </h1>
              <p>Tailored pricing for any budget</p>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>

              <div className="priceBox">
                <div className="boxHeader blue">
                  <h1>Per Project</h1>
                </div>

                <Image src={pic} />

                <div className="boxHeader subHeading">
                  <h1>Unlimited Users and Unlimited Runs</h1>
                </div>

                <ul>
                  <li>PPA Origination</li>
                  <li>Unlimited Layouts</li>
                  <li>8760 Energy Files</li>
                  <li>Search Log Files</li>
                  <li>Bills of Materials</li>
                  <li>Financial Models and More.</li>
                </ul>

                <p>*Earn Discounts with Volume Purchases and by Originating Projects</p>
                <Button>Let's Go </Button>

              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
 }