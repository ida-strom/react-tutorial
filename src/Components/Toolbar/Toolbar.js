import React from 'react';
import ButtonSecondaryComponent from '.././ButtonSecondary/ButtonSecondary'
import ButtonTertiaryComponent from '.././ButtonTertiary/ButtonTertiary'
import './Toolbar.css';

const Toolbar = props => (
	<header>
			<nav>
				<div className="nav-container">
					<div className="logo"><a href="#"></a></div>
					<ul>
						<li><a href=".././WhyCurology/WhyCurology">Why Curology</a></li>
						<li><a href="https://www.google.com">Reviews</a></li>
						<li><a href="#">Community</a></li></ul>
					<ul>
						<ButtonTertiaryComponent /> 
						<ButtonSecondaryComponent />

					</ul>	
				</div>
					
			</nav>
		</header>
);

export default Toolbar;

// <header className="toolbar">
// 		<nav className="toolbar_navigation">
// 			<div> </div>
// 			<div className="toolbar_logo"><a href="/">THE LOGO</a></div>
// 			<div className="toolbar_navigation-items">
// 				<ul>
// 					<li><a href="/">Products</a></li>
// 					<li><a href="/">Users</a></li>
// 				</ul>
// 			</div>		
// 		</nav>
// 	</header> 

// SECONDARY BUTTON OLD 
// <button className="secondary-button">
// 	<div className="secondary-button-style"><a href="#">
// 		Start trial
// 	</a></div>
// </button>

// LOGIN NAV ITEM OLD
// <li><a href="#"> Log in </a></li>
