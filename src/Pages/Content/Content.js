import React from 'react';
import ButtonPrimaryComponent from '../../Components/ButtonPrimary/ButtonPrimary.js'

import './Content.css';


function Content() {
  return (
    <section className="section1">
				<div className="mainHeader">
					<div id="innerbox">
						<div id="container">
							<div className="section1-text">
								<h1 className="section1-text-box">
									<div id="title1" className="title-style">A custom bottle</div>
									<div id="title2" className="title-style">for your breakouts — </div>
									<div id="title3" className="title-style">and no one else’s</div>
								</h1>
							</div>
							<div className="section1-text-p">
								<p> Get a powerful custom cream mixed just for you </p>
							</div>	

							<ButtonPrimaryComponent />

							<div className="section1-text-p-2">
								<p> 30-day trial. Just cover $4.95 in shipping + handling </p>
							</div>
						</div>
					</div>
				</div>	
		</section> 
  );
}

export default Content;
