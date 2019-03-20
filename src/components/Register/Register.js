import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Register extends Component
{
	state = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		passwordConfirm: "",
	}

	render()
	{
		return(
			<div className="container-fluid body body--px-0 body--gradient-blue body--vh-100 p-5"> 
				<div className="body__inner"> 
					<div className="strip strip--flex">

						<div className="strip__logo">
							<img className="strip__img" src="#" alt="LOGO"/>
						</div>

						<div className="strip__prompt">
							<p>The prompt</p>
						</div>

					</div>
				</div>
			</div>
		);
	}
}
