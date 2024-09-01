import React from 'react';
import './FootPanel.css'

import {Container} from 'react-bootstrap';
const FooterPanel = () => {

  return (
    <Container fluid className='fluid'>
    <div className='footer'>
      <div className="foot-panel2">
        <div className='one'>
          <div className='foot-head'>Get to Know Us</div>
          <br></br>
          <div>Careers</div>
          <br />
          <div>Blog</div>
          <br />
          <div>About Music </div>
          <br />
          <div> Relations</div>
          <br />
          <div>Music Services</div>
        </div>
        <div className='two'>
          <div className='foot-head'>Responsibility</div>
          <br></br>
          <div>Community</div>
          <br />
          <div>Ethical Sourcing</div>
          <br />
          <div>Environment</div>
          <br />
          <div>Diversity</div>
        </div>
        <div className='three'>
          <div className='foot-head'>Quick Links</div>
          <br></br>
          <div>Subscription</div>
          <br></br>
          <div>Season's trends</div>
          <br />
          <div>Careers</div>
          <br />
          <div>Customer help/support</div>
          <br />
          <div>FAQs</div>
        </div>
        <div className='four'>
          <div className='foot-head'>Social Media</div>
          <br></br>
        
          <div>INSTAGRAM</div>
          <br />
          <div>FACEBOOK</div>
          <br />
          <div>TWITTER</div>
        </div>
      </div>

      <div className="horizontal-line"></div>
      <div className="foot-panel4">
        <br></br>
        <div className="pages">
          <div>Conditions of use</div>
          <div>Privacy Notice</div>
          <div>Your Ads privacy Choices</div>
        </div>
        <div className="copyright">
          @ 2023,MUSIC STREAMING SERVICE , Inc. or its affiliates
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
    </Container>
  );
};

export default FooterPanel;



























