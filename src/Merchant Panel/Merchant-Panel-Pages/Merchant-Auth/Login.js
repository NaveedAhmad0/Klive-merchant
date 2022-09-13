import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";

function AdminLogin() {
	useEffect(() => {
		localStorage.clear();
	}, []);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);
	const [errMsg, setErrMsg] = useState("");
	// const logindetails = { email, password };

	// const navigate = Redirect();
	function handleChange(event) {
		setEmail(event.target.value);
	}
	function handleChangeone(event) {
		setPassword(event.target.value);
	}
	async function onSubmit(event) {
		event.preventDefault();
		console.log(email, password);
		try {
			const response = await axios.post(
				`https://backend.klivepay.com/api/merchant/login`,
				JSON.stringify({ email, password }),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			console.log(JSON.stringify(response?.data));

			const accessToken = response?.data?.accessToken;
			localStorage.setItem("token", accessToken);
			setEmail("");
			setPassword("");
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 400) {
				setErrMsg("Invalid Credentialials");
				setSuccess(false);
			} else {
				setErrMsg("Login failed");
			}
			console.log(err);
		}
		console.log(success);
	}
	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="col-lg-6 mx-auto">
						<div className="auth-form-light text-left py-5 px-4 px-sm-5">
							<div className="brand-logo">
								<h3 className={!errMsg ? "errMsg" : "text-danger"}>{errMsg}</h3>

								{/* <img
									src={require("../../../assets/images/logo.svg")}
									alt="logo"
								/> */}
							</div>
							<h4>Hello! let's get started</h4>
							<h6 className="font-weight-light">Sign in to continue.</h6>
							<Form className="pt-3">
								<Form.Group className="d-flex search-field">
									<Form.Control
										type="email"
										placeholder="Username"
										onChange={(event) => handleChange(event)}
										value={email}
										size="lg"
										className="h-auto"
									/>
								</Form.Group>
								<Form.Group className="d-flex search-field">
									<Form.Control
										type="password"
										placeholder="Password"
										onChange={(event) => handleChangeone(event)}
										value={password}
										size="lg"
										className="h-auto"
									/>
								</Form.Group>
								<div className="mt-3">
									{!success ? (
										<button
											onClick={(event) => onSubmit(event)}
											className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
											SIGN IN
										</button>
									) : (
										<Redirect to="/merchant/dashboard" />
									)}
								</div>
								<div className="my-2 d-flex justify-content-between align-items-center">
									<div className="form-check">
										<label className="form-check-label text-muted">
											<input type="checkbox" className="form-check-input" />
											<i className="input-helper"></i>
											Keep me signed in
										</label>
									</div>
									<Link
										to="/merchant/forgot-password"
										// onClick={(event) => event.preventDefault()}
										className="auth-link text-black">
										Forgot password?
									</Link>
								</div>
								<div className="mb-2">
									<button
										type="button"
										className="btn btn-block btn-facebook auth-form-btn">
										<i className="mdi mdi-facebook mr-2"></i>Connect using
										facebook
									</button>
								</div>
								<div className="text-center mt-4 font-weight-light">
									Don't have an account?{" "}
									<Link to="/merchant/registration" className="text-primary">
										Create
									</Link>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminLogin;
