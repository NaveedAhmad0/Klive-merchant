import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
const ProfileComponent = () => {
	const [email, setEmail] = useState("");
	const [merchantName, setMerchantName] = useState("");
	const [surName, setSurName] = useState("");
	const [mobile, setMobile] = useState("");
	const [address, setAddress] = useState("");
	const [province, setProvince] = useState("");
	const [district, setDistrict] = useState("");
	const [subDivision, setSubDivision] = useState("");
	const [pincode, setPincode] = useState("");
	const [success, setSuccess] = useState(false);
	const [nullVal, setNullVal] = useState({
		personType: "string",
		InitialShop: "string",
		firstName: "string",
		yearOfBirth: "string",
		monthOfBirth: "string",
		dayOfBirth: "string",
		shopType: "string",
		creditCard: true,
		weChat: true,
		livePayment: true,
		mobileBanking: true,
		trueWallet: true,
		shopeePay: true,
		alone: true,
		website: "string",
		facebook: "string",
		linkedin: "string",
		instagram: "string",
		other: "string",
		company: "string",
		bank: "string",
		bankAccount: 0,
		rnfCode: "string",
		domestic: "string",
		inter: "string",
		rateQrCode: "string",
		rateBarCode: "string",
		copyOfId: "string",
		logo: "string",
		bankBook: "string",
		otherDocument: "string",
	});

	const {
		personType,
		InitialShop,
		firstName,
		yearOfBirth,
		monthOfBirth,
		dayOfBirth,
		shopType,
		creditCard,
		weChat,
		livePayment,
		mobileBanking,
		trueWallet,
		shopeePay,
		alone,
		website,
		facebook,
		linkedin,
		instagram,
		other,
		company,
		bank,
		bankAccount,
		rnfCode,
		domestic,
		inter,
		rateQrCode,
		rateBarCode,
		copyOfId,
		logo,
		bankBook,
		otherDocument,
	} = nullVal;

	async function onSubmit(event) {
		event.preventDefault();
		console.log(
			email,
			surName,
			mobile,
			address,
			province,
			district,
			subDivision,
			pincode
		);

		try {
			const response = await axios.patch(
				`https://backend.klivepay.com/api/merchant/update-profile?email=merchant%40mail.com`,
				JSON.stringify({
					merchantName,
					surName,
					firstName,
					mobile,
					address,
					province,
					district,
					subDivision,
					pincode,
					personType,
					InitialShop,
					yearOfBirth,
					monthOfBirth,
					dayOfBirth,
					shopType,
					creditCard,
					weChat,
					livePayment,
					mobileBanking,
					trueWallet,
					shopeePay,
					alone,
					website,
					facebook,
					linkedin,
					instagram,
					other,
					company,
					bank,
					bankAccount,
					rnfCode,
					domestic,
					inter,
					rateQrCode,
					rateBarCode,
					copyOfId,
					logo,
					bankBook,
					otherDocument,
				}),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			console.log("mail", email);

			console.log(JSON.stringify(response?.data));

			// const accessToken = response?.data?.accessToken;
			// localStorage.setItem("token", response?.data?.accessToken);
			// setEmail("");
			// setUserName("");
			// setSurname("");
			// setSurname("");
			// setSurname("");
			// setSurname("");
			// setMobile("");
			// setAddress("");
			// setProvince("");
			// setDistrict("");
			// setSubDivision("");
			// setZipCode("");
			setSuccess(true);
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		if (success) {
			alert("Profile changed Succesfully!");
		}
	}, [success]);

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
							Email: <span className="text-primary">info@gmail.com</span>
						</p>
					</div>
				</div>
				<div className="card-body">
					<form className="form-sample">
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group className="row">
									<label htmlFor="exampleInputUsername1">System Username</label>
									<Form.Control
										type="text"
										id="exampleInputUsername1"
										onChange={(e) => setMerchantName(e.target.value)}
										value={merchantName}
										placeholder="info@gmilail.com"
										size="lg"
									/>
								</Form.Group>
							</div>
							{/* <div className="col-md-2"></div> */}
							<div className="col-md-5">
								<Form.Group>
									<label htmlFor="exampleSelectGender">Surname</label>
									<Form.Control
										type="text"
										id="exampleInputUsername1"
										onChange={(e) => setSurName(e.target.value)}
										value={surName}
										placeholder="info@gmilail.com"
										size="lg"
									/>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group className="row">
									<label htmlFor="exampleInputUsername1">
										Contact Phone Number
									</label>
									<Form.Control
										type="text"
										id="exampleInputUsername1"
										onChange={(e) => setMobile(parseInt(e.target.value))}
										value={mobile}
										placeholder="info@gmilail.com"
										// size="lg"
									/>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group className="row">
									<label htmlFor="exampleInputUsername1">Address</label>
									<Form.Control
										type="text"
										onChange={(e) => setAddress(e.target.value)}
										value={address}
										id="exampleInputUsername1"
										placeholder="Full Address"
										size="lg"
									/>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5 ">
								<Form.Group>
									<label htmlFor="exampleSelectGender">Province</label>
									<Form.Control
										type="text"
										onChange={(e) => setProvince(e.target.value)}
										value={province}
										id="exampleInputUsername1"
										placeholder="Full Address"
										size="lg"
									/>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group>
									<label htmlFor="exampleSelectGender">District/District</label>
									<Form.Control
										type="text"
										onChange={(e) => setDistrict(e.target.value)}
										value={district}
										id="exampleInputUsername1"
										placeholder="Full Address"
										size="lg"
									/>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group>
									<label htmlFor="exampleSelectGender">Sub-Division</label>
									<Form.Control
										type="text"
										onChange={(e) => setSubDivision(e.target.value)}
										value={subDivision}
										id="exampleInputUsername1"
										placeholder="Full Address"
										size="lg"
									/>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group>
									<label htmlFor="exampleSelectGender">Zip Code</label>
									<Form.Control
										type="text"
										onChange={(e) => setPincode(parseInt(e.target.value))}
										value={pincode}
										id="exampleInputUsername1"
										placeholder="Full Address"
										size="lg"
									/>
								</Form.Group>
							</div>
						</div>
						<div className="row ">
							<div className="mx-auto col-md-11">
								<button
									onClick={(event) => onSubmit(event)}
									className="btn btn-success btn-lg btn-block rounded-pill">
									Agree
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ProfileComponent;
