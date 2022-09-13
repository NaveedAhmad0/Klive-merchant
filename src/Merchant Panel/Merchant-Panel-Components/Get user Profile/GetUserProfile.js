import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const GetUserProfile = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [mobile, setMobile] = useState("");
	const [address, setAddress] = useState("");
	const [province, setProvince] = useState("");
	const [district, setDistrict] = useState("");
	const [subDivision, setSubDivision] = useState("");
	const [zipCode, setZipCode] = useState("");

	// const { email, mobile } = values;

	useEffect(() => {
		axios
			.get(
				"https://backend.klivepay.com/api/merchant/get-profile?email=merchant%40mail.com"
			)

			.then((res) => {
				setEmail(res.data.merchant.email);
				setMobile(res.data.merchant.mobile);
				setName(res.data.merchant.name);
				setSurname(res.data.merchant.surname);
				setAddress(res.data.merchant.address);
				setProvince(res.data.merchant.province);
				setDistrict(res.data.merchant.district);
				setSubDivision(res.data.merchant.subDivision);
				setZipCode(res.data.merchant.zipCode);
				console.log("DATA IS ", res.data.merchant);
			});
	}, []);

	return (
		<div className="col-12 grid-margin">
			<h4 className="card-title">Personal Information</h4>

			<div className="card">
				<div className="row flex-column mt-5 mx-auto">
					<img
						className="img-lg mx-auto rounded-circle"
						src={require("../../../assets/images/faces/face8.jpg")}
						alt="Profile"
					/>
					<div className="mt-2 mx-auto">
						<p>
							Merchant Code: <span className="text-primary">M010303</span>
						</p>
						<p className="mx-auto">
							Email: <span className="text-primary">{email}</span>
						</p>
					</div>
				</div>
				<div className="card-body">
					<form className="form-sample">
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group className=" d-flex">
									<h5 htmlFor="exampleInputUsername1" className="text-primary">
										System Username :-
									</h5>
									<h6 className="ms-2">{name}</h6>
								</Form.Group>
							</div>
							{/* <div className="col-md-2"></div> */}
							<div className="col-md-5">
								<Form.Group className="d-flex">
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Surname :-
									</h5>
									<h6 className="ms-2">{surname}</h6>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group className="row">
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Mobile :-
										<span className="text-black ms-1">{mobile}</span>
									</h5>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group className="row">
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Address :-
									</h5>
									<h6 className="ms-2">{address}</h6>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5 ">
								<Form.Group>
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Province :-
									</h5>
									<h6 className="ms-2">{province}</h6>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group>
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										District :-
									</h5>
									<h6 className="ms-2">{district}</h6>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group>
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Sub-Division :-
									</h5>
									<h6 className="ms-2">{subDivision}</h6>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group>
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Zip Code :-
									</h5>
									<h6 className="ms-2">{zipCode}</h6>
								</Form.Group>
							</div>
						</div>
						<div className="row ">
							<div className="mx-auto col-md-11">
								<Link to="/merchant/profile" className="text-white">
									<button className="btn btn-success btn-lg btn-block rounded-pill">
										Edit profile
									</button>
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default GetUserProfile;
