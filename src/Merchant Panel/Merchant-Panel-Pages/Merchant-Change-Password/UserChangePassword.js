import React from "react";
import { Form } from "react-bootstrap";

const UserChangePassword = () => {
	return (
		<div className="col-12 grid-margin stretch-card">
			<div className="card">
				<div className="text-center">
					<h4 className="mt-4 text-primary">
						Online
						<br />
						Payment
					</h4>
				</div>
				<div className="card-body">
					<form className="forms-sample">
						<Form.Group>
							<Form.Control
								type="password"
								className="form-control rounded"
								id="exampleInputName1"
								placeholder="Old Password"
							/>
						</Form.Group>
						<Form.Group>
							<Form.Control
								type="password"
								className="form-control rounded"
								id="exampleInputEmail3"
								placeholder="New Password"
							/>
						</Form.Group>
						<Form.Group>
							<Form.Control
								type="password"
								className="form-control rounded"
								id="exampleInputPassword4"
								placeholder="Confirm Password"
							/>
						</Form.Group>

						<div className="row ">
							<div className="mx-auto col-md-12">
								<button className="btn btn-success btn-lg btn-block rounded-pill">
									Change Password
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UserChangePassword;
