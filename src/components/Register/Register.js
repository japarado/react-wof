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
			<h1>Register Page</h1>
		);
	}
}
