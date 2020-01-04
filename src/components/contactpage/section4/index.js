import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import s1 from '../../../images/s1.png';
import s2 from '../../../images/s2.png';
import s3 from '../../../images/s3.png';
import s4 from '../../../images/s4.png';
import s5 from '../../../images/s5.png';
import s6 from '../../../images/s6.png';

export default  class Section4Contact extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionAbout4 auto offWhite workerTP">
      	<Grid>
      		<Row>
      		  <Col lg={4} md={4} sm={4} xs={12}>
      		  	<Image src={s1} className="sIcons"/>
      		    <h2>Application Builders</h2>
      		    <p>Build your blockchain application through the HST API framework to seamlessly get solar energy data, payback time, LCOE,IRR, and more.</p>
      		  </Col>
      		  <Col lg={4} md={4} sm={4} xs={12}>
      		  	<Image src={s2} className="sIcons"/>
      		    <h2>Solar Developers</h2>
      		    <p>Streamline your siting decisions, originate PPAs with corporate buyers, and evaluate more projects with our platform. Triage projects in your pipeline, and accelerate your RFP response times.</p>
      		  </Col>
      		  <Col lg={4} md={4} sm={4} xs={12}>
      		  	<Image src={s3} className="sIcons"/>
      		    <h2 className="textNoWrap">Equipment Manufacturers</h2>
      		    <p>Expand your sales funnel and highlight your product’s latest performance features on our platform. Connect with developers and contractors on the platform, or accelerate your internal development</p>
      		  </Col>
      		</Row>

          <Row className="marginRow">
            <Col lg={4} md={4} sm={4} xs={12}>
              <Image src={s4} className="sIcons"/>
              <h2>Contractors </h2>
              <p>Accelerate your estimation, equipment selection decisions, and pre-con design analysis with our platform. Seamlessly move to detailed design with optional support from HST.</p>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
              <Image src={s5} className="sIcons"/>
              <h2 className="paraDeskMT">Utilities</h2>
              <p>Get a window into how developers see project LCOEs at your sites. Evaluate the true price tenders should be priced at in your solar auctions</p>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
              <Image src={s6} className="sIcons"/>
              <h2>Investors </h2>
              <p>Explore how developers will view project LCOEs and high level cash flows on projects they are seeking funding for. Review a project portfolio’s financial performance and quickly determine which ones are investment grade.</p>
            </Col>
          </Row>

      	</Grid>
      </section>
    );
  }
 }