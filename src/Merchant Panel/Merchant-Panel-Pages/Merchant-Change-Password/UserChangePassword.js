import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const ResetPassword = () => {
	const history = useHistory();
	const [newPassword, setNewPassword] = useState("");
	const [oldPassword, setOldPassword] = useState("");
	const [success, setSuccess] = useState(false);

	const email = localStorage.getItem("email");

	async function onSubmit(event) {
		event.preventDefault();

		try {
			const response = await axios
				.patch(
					`https://backend.klivepay.com/api/merchant/reset-password?email=${email}`,
					JSON.stringify({ newPassword, oldPassword }),
					{
						headers: { "Content-Type": "application/json" },
						// withCredentials: true,
					}
				)
				.then((res) => {
					if (res.data.code === 200) {
						alert("Password Changed successfully");
						history.push("/merchant/login");
					} else {
						alert(res.data.message);
					}
					console.log(res);
				});

			console.log(JSON.stringify(response?.data));

			// const accessToken = response?.data?.accessToken;
			// localStorage.setItem("token", response?.data?.accessToken);
			setOldPassword("");
			setNewPassword("");
			setSuccess(true);
		} catch (err) {
			console.log(err);
		}
		console.log(success);
	}
	// useEffect(() => {
	// 	if (success) {
	// 		alert("You have registered Succesfully!");
	// 	}
	// }, [success]);
	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="col-lg-8 mx-auto">
						<div className="auth-form-light text-left py-5 px-4 px-sm-5">
							<h4>Reset Password</h4>
							<form className="pt-3">
								<div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										id="password"
										placeholder="Old Password"
										onChange={(e) => setOldPassword(e.target.value)}
										value={oldPassword}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										id="password"
										placeholder="New Password"
										onChange={(e) => setNewPassword(e.target.value)}
										value={newPassword}
									/>
								</div>

								<div className="mt-3">
									<button
										// href="/merchant/login"
										onClick={(event) => onSubmit(event)}
										className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
										Reset Password
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
