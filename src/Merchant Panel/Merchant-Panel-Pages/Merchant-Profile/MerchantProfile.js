import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./merchantProfile.module.css";
import Compress from "compress.js";
import ClipLoader from "react-spinners/ClipLoader";

const UserProfile = () => {
	const compress = new Compress();
	//Get profile
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(true);
	// const [fields, setFields] = useState({});
	const [showData, setShowData] = useState([
		{
			email: "",
			merchantName: "",
			merchantId: "",
			merchantNameEnglish: "",
			surName: "",
			yearOfBirth: "",
			dayOfBirth: "",
			monthOfBirth: "",
			showpersonType: "",
			mobile: 0,
			rnfCode: "",
			address: "",
			province: "",
			district: "",
			subDivision: "",
			pincode: 0,
			instagram: "",
			facebook: "",
			linkedin: "",
			website: "",
			other: "",
			InitialShop: "",
			firstName: "",

			personType: "",
			shopType: "",
			creditCard: true,
			weChat: true,
			livePayment: true,
			mobileBanking: true,
			trueWallet: true,
			shopeePay: true,
			alone: true,

			company: "",
			bank: "",
			bankAccount: 0,
			domestic: "",
			inter: "",
			rateQrCode: "",
			rateBarCode: "",
			copyOfId: "",
			logo: "",
			bankBook: "",
			otherDocument: "",
		},
	]);

	let fields = showData;

	console.log(
		"typeof fields",
		Object.values(fields).every((o) => o !== null)
	);
	function handleValidation() {
		let fields = showData;
		let formIsValid = false;

		console.log("AKSHDKJHSDKJHAKSHDK", Object.keys(fields).length);
		//Name
		if (
			Object.values(fields).every((o) => o !== null) &&
			Object.values(fields).every((o) => o !== "")
		) {
			formIsValid = true;
		}
		return formIsValid;
	}
	const loginemail = localStorage.getItem("email");
	useEffect(() => {
		// const loginemail = localStorage.getItem("email");
		axios
			.get(
				`https://backend.klivepay.com/api/merchant/get-profile?email=${loginemail}`
			)
			.then((res) => {
				setShowData({
					email: res.data.merchant.email,
					mobile: res.data.merchant.mobile,
					merchantName: res.data.merchant.merchantName,
					merchantId: res.data.merchant.merchantId,
					merchantNameEnglish: res.data.merchant.merchantNameEnglish,
					firstName: res.data.merchant.firstName,
					address: res.data.merchant.address,
					InitialShop: res.data.merchant.InitialShop,
					yearOfBirth: res.data.merchant.yearOfBirth,
					dayOfBirth: res.data.merchant.dayOfBirth,
					district: res.data.merchant.district,
					surName: res.data.merchant.surName,
					province: res.data.merchant.province,
					bankBook: res.data.merchant.bankBook,
					copyOfId: res.data.merchant.copyOfId,
					logo: res.data.merchant.logo,
					otherDocument: res.data.merchant.otherDocument,
					monthOfBirth: res.data.merchant.monthOfBirth,
					subDivision: res.data.merchant.subDivision,
					pincode: res.data.merchant.pincode,
					instagram: res.data.merchant.instagram,
					facebook: res.data.merchant.facebook,
					linkedin: res.data.merchant.linkedin,
					website: res.data.merchant.website,
					other: res.data.merchant.other,
					shopType: res.data.merchant.shopType,
					bank: res.data.merchant.bank,
					rateBarCode: res.data.merchant.rateBarCode,
					rateQrCode: res.data.merchant.rateQrCode,
					domestic: res.data.merchant.domestic,
					bankAccount: res.data.merchant.bankAccount,
					company: res.data.merchant.company,
					inter: res.data.merchant.inter,
					rnfCode: res.data.merchant.rnfCode,
					personType: res.data.merchant.personType,
					creditCard: res.data.merchant.creditCard,
					weChat: res.data.merchant.weChat,
					livePayment: res.data.merchant.livePayment,
					mobileBanking: res.data.merchant.mobileBanking,
					trueWallet: res.data.merchant.trueWallet,
					shopeePay: res.data.merchant.shopeePay,
					alone: res.data.merchant.alone,
				});
				setLoading(false);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
				console.log("DATA IS ", res.data.merchant);
			});
	}, []);

	async function onSubmit(event) {
		event.preventDefault();
		if (handleValidation()) {
			try {
				const response = await axios
					.patch(
						`https://backend.klivepay.com/api/merchant/update-profile?email=${loginemail}`,
						JSON.stringify({
							merchantId: showData.merchantId,
							merchantNameEnglish: showData.merchantNameEnglish,
							merchantName: showData.merchantName,
							personType: showData.personType,
							InitialShop: showData.InitialShop,
							firstName: showData.firstName,
							surName: showData.surName,
							yearOfBirth: showData.yearOfBirth,
							monthOfBirth: showData.monthOfBirth,
							dayOfBirth: showData.dayOfBirth,
							mobile: parseInt(showData.mobile),
							address: showData.address,
							province: showData.province,
							district: showData.district,
							subDivision: showData.subDivision,
							pincode: parseInt(showData.pincode),
							shopType: showData.shopType,
							creditCard: showData.creditCard,

							copyOfId: showData.copyOfId,
							logo: showData.logo,
							bankBook: showData.bankBook,
							otherDocument: showData.otherDocument,
							weChat: showData.weChat,
							livePayment: showData.livePayment,
							mobileBanking: showData.mobileBanking,
							trueWallet: showData.trueWallet,
							shopeePay: showData.shopeePay,
							alone: showData.alone,
							website: showData.website,
							facebook: showData.facebook,
							linkedin: showData.linkedin,
							instagram: showData.instagram,
							other: showData.other,
							company: showData.company,
							bank: showData.bank,
							bankAccount: parseInt(showData.bankAccount),
							rnfCode: showData.rnfCode,
							domestic: showData.domestic,
							inter: showData.inter,
							rateQrCode: showData.rateQrCode,
							rateBarCode: showData.rateBarCode,
						}),
						{
							headers: { "Content-Type": "application/json" },
							// withCredentials: true,
						}
					)
					.then((res) => {
						if (res.data.code === 200) {
							alert("Form submitted");
						}
					});
				setSuccess(true);
				console.log("JSON.stringify(", response);
			} catch (err) {
				console.log(err);
			}
		} else {
			alert("Form has errors.");
		}
	}
	// useEffect(() => {
	// 	if (success) {
	// 		alert("Profile changed Succesfully!");
	// 	}
	// }, [success]);
	console.log(showData.shopType);
	return (
		<div className="col-12 grid-margin">
			<h4 className="card-title">user Personal Information</h4>
			{loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
				<div className="card">
					<div className={`card-body ${styles.usercardbody}`}>
						<h4 className={`text-center ${styles.userHeading}`}>Profile</h4>
						<div className="row mt-5">
							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<form className="needs-validation" novalidate>
									<div className="form-group">
										<label className={styles.userLabel}>merchant ID</label>
										<input
											type="text"
											name="merchantId"
											onChange={(e) => {
												setShowData({
													...showData,
													merchantId: e.target.value,
												});
											}}
											id="validationCustom01"
											required
											value={showData.merchantId}
											className={`form-control ${styles.userInputs}`}
										/>

										{fields["merchantId"] == null ||
										fields["merchantId"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
									<div className="form-group">
										<label
											for="validationDefault01"
											className={styles.userLabel}>
											merchant name
										</label>
										<input
											type="text"
											name="merchantName"
											onChange={(e) => {
												setShowData({
													...showData,
													merchantName: e.target.value,
												});
											}}
											id="validationCustom01"
											required
											value={showData.merchantName}
											className={`form-control ${styles.userInputs}`}
											placeholder="name"
										/>

										{fields["merchantName"] == null ||
										fields["merchantName"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
								</form>
							</div>

							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<form>
									<div className="form-group">
										<label className={styles.userLabel}>
											{" "}
											merchant name english
										</label>
										<input
											type="text"
											className={`form-control ${styles.userInputs}`}
											onChange={(e) => {
												setShowData({
													...showData,
													merchantNameEnglish: e.target.value,
												});
											}}
											value={showData.merchantNameEnglish}
										/>

										{fields["merchantNameEnglish"] == null ||
										fields["merchantNameEnglish"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
									<div className="form-group">
										<label className={styles.userLabel}>Email address</label>
										<input
											type="email"
											className={`form-control ${styles.userInputs}`}
											onChange={(e) => {
												setShowData({
													...showData,
													email: e.target.value,
												});
											}}
											value={showData.email}
										/>

										{fields["email"] == null || fields["email"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
								</form>
							</div>
						</div>

						<div>
							<label className={styles.userLabel}> person type</label>

							<div style={{ display: "flex" }}>
								<div class="form-check form-check-inline">
									<input
										type="radio"
										name="individual"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													personType: "individual",
												});
											}
										}}
										checked={
											showData.personType === "individual" ? true : false
										}
										class="form-check-input"
										value="individual"
									/>
									<label className={styles.userLabel}>individual</label>
								</div>
								<div class="form-check form-check-inline">
									<input
										class="form-check-input"
										type="radio"
										name="person"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													personType: "corporate",
												});
											}
										}}
										checked={showData.personType === "corporate" ? true : false}
										value="corporate"
									/>
									<label className={styles.userLabel}>corporate</label>
								</div>
								<br />
							</div>
							{/* <br /> */}
							{fields["personType"] == null || fields["personType"] == "" ? (
								<span className="text-danger">Field can't be empty</span>
							) : (
								""
							)}
						</div>
						<br />

						<div class="form-group">
							<label className={styles.userLabel}>
								Intial shop(up to 10 characters)
							</label>
							<input
								type="email"
								name="InitialShop"
								onChange={(e) => {
									setShowData({
										...showData,
										InitialShop: e.target.value,
									});
								}}
								value={showData.InitialShop}
								className={`form-control ${styles.userInputs}`}
								// placeholder={InitialShop}
							/>

							{fields["InitialShop"] == null || fields["InitialShop"] == "" ? (
								<span className="text-danger">Field can't be empty</span>
							) : (
								""
							)}
						</div>

						<div className="row">
							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div className="form-group">
									<label className={styles.userLabel}>first name</label>
									<input
										type="year"
										name="firstName"
										onChange={(e) => {
											setShowData({
												...showData,
												firstName: e.target.value,
											});
										}}
										value={showData.firstName}
										className={`form-control ${styles.userInputs}`}
										// placeholder={firstName}
									/>

									{fields["firstName"] == null || fields["firstName"] == "" ? (
										<span className="text-danger">Field can't be empty</span>
									) : (
										""
									)}
								</div>
							</div>

							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div className="form-group">
									<label className={styles.userLabel}>sur name</label>
									<input
										type="text"
										onChange={(e) => {
											setShowData({
												...showData,
												surName: e.target.value,
											});
										}}
										value={showData.surName}
										className={`form-control ${styles.userInputs}`}
										// placeholder={surName}
									/>

									{fields["surName"] == null || fields["surName"] == "" ? (
										<span className="text-danger">Field can't be empty</span>
									) : (
										""
									)}
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
								<div className="form-group">
									<label className={styles.userLabel}>year of birth</label>
									<input
										type="year"
										name="yearOfBirth"
										onChange={(e) => {
											setShowData({
												...showData,
												yearOfBirth: e.target.value,
											});
										}}
										value={showData.yearOfBirth}
										className={`form-control ${styles.userInputs}`}
										// placeholder={yearOfBirth}
									/>

									{fields["yearOfBirth"] == null ||
									fields["yearOfBirth"] == "" ? (
										<span className="text-danger">Field can't be empty</span>
									) : (
										""
									)}
								</div>
							</div>

							<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
								<div className="form-group">
									<label className={styles.userLabel}>month of birth</label>
									<input
										type="day"
										name="monthOfBirth"
										onChange={(e) => {
											setShowData({
												...showData,
												monthOfBirth: e.target.value,
											});
										}}
										value={showData.monthOfBirth}
										className={`form-control ${styles.userInputs}`}
										// placeholder={monthOfBirth}
									/>

									{fields["monthOfBirth"] == null ||
									fields["monthOfBirth"] == "" ? (
										<span className="text-danger">Field can't be empty</span>
									) : (
										""
									)}
									{fields["monthOfBirth"] > 12 ? (
										<span className="text-danger">
											Should be less than or equals to 12
										</span>
									) : (
										""
									)}
								</div>
							</div>

							<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
								<div className="form-group">
									<label className={styles.userLabel}>day of birth</label>
									<input
										type="day"
										name="dayOfBirth"
										onChange={(e) => {
											setShowData({
												...showData,
												dayOfBirth: e.target.value,
											});
										}}
										value={showData.dayOfBirth}
										className={`form-control ${styles.userInputs}`}
										// placeholder={dayOfBirth}
									/>

									{fields["dayOfBirth"] == null ||
									fields["dayOfBirth"] == "" ? (
										<span className="text-danger">Field can't be empty</span>
									) : (
										""
									)}
									{fields["dayOfBirth"] > 31 ? (
										<span className="text-danger">
											Should be less than or equals to 31
										</span>
									) : (
										""
									)}
								</div>
							</div>
						</div>

						<div class="form-group">
							<label className={styles.userLabel}>contact number</label>
							<input
								type="number"
								onChange={(e) => {
									setShowData({
										...showData,
										mobile: parseInt(e.target.value),
									});
								}}
								value={showData.mobile}
								className={`form-control ${styles.userInputs}`}
								// placeholder={mobile}
							/>

							{fields["mobile"] == null || fields["mobile"] == "" ? (
								<span className="text-danger">Field can't be empty</span>
							) : (
								""
							)}
						</div>

						<div class="form-group">
							<label className={styles.userLabel}>address</label>
							<input
								type="text"
								onChange={(e) => {
									setShowData({
										...showData,
										address: e.target.value,
									});
								}}
								value={showData.address}
								className={`form-control ${styles.userInputs}`}
								// placeholder={address}
							/>

							{fields["address"] == null || fields["address"] == "" ? (
								<span className="text-danger">Field can't be empty</span>
							) : (
								""
							)}
						</div>

						<div className="row mt-5">
							<div className="row">
								<form className="d-flex justify-content-between">
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group ">
											<label className={styles.userLabel}>provience</label>
											<input
												type="email"
												onChange={(e) => {
													setShowData({
														...showData,
														province: e.target.value,
													});
												}}
												value={showData.province}
												className={`form-control ${styles.userInputs}`}
												// placeholder={province}
											/>

											{fields["province"] == null ||
											fields["province"] == "" ? (
												<span className="text-danger">
													Field can't be empty
												</span>
											) : (
												""
											)}
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group ">
											<label className={styles.userLabel}>sub division</label>
											<input
												type="text"
												onChange={(e) => {
													setShowData({
														...showData,
														subDivision: e.target.value,
													});
												}}
												value={showData.subDivision}
												className={`form-control ${styles.userInputs}`}
												// placeholder={subDivision}
											/>

											{fields["subDivision"] == null ||
											fields["subDivision"] == "" ? (
												<span className="text-danger">
													Field can't be empty
												</span>
											) : (
												""
											)}
										</div>
									</div>
								</form>
							</div>

							<div className="row">
								<form className="d-flex">
									<div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<label className={styles.userLabel}>district</label>
										<input
											type="text"
											onChange={(e) => {
												setShowData({
													...showData,
													district: e.target.value,
												});
											}}
											value={showData.district}
											className={`form-control ${styles.userInputs}`}
											// placeholder={district}
										/>

										{fields["district"] == null || fields["district"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
									<div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<label className={styles.userLabel}>pincode</label>
										<input
											type="number"
											onChange={(e) => {
												setShowData({
													...showData,
													pincode: parseInt(e.target.value),
												});
											}}
											value={showData.pincode}
											className={`form-control ${styles.userInputs}`}
											placeholder="123456"
										/>

										{fields["pincode"] == null || fields["pincode"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
								</form>
							</div>
						</div>

						<div className="row">
							<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
								<label className={styles.userLabel}> shop type</label>
								<div style={{ display: "flex" }}>
									<div className={`form-check form-check-inline`}>
										<input
											className="form-check-input"
											type="radio"
											name="shop"
											//value="social"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														shopType: "social",
													});
												}
											}}
											checked={showData.shopType === "social" ? true : false}
										/>
										<label className={styles.userLabel}>social</label>
									</div>
									<div class="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														shopType: "website",
													});
												}
											}}
											checked={showData.shopType === "website"}
											name="shop"
											//value="website"
										/>
										<label className={styles.userLabel}>website</label>
									</div>

									<br />
									{fields["shopType"] == null ? (
										<span className="text-danger">Field can't be empty</span>
									) : (
										""
									)}
								</div>

								<label className={styles.userLabel}>live payment</label>
								<div style={{ display: "flex" }}>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="livepayment"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														livePayment: true,
													});
												}
											}}
											defaultChecked={showData.livePayment === false}
											value="yes"
											checked={showData.livePayment === true ? true : false}
										/>
										<label className={styles.userLabel}>yes</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="livepayment"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														livePayment: false,
													});
												}
											}}
											defaultChecked={showData.livePayment === false}
											value="no"
											checked={showData.livePayment === false ? true : false}
										/>
										<label className={styles.userLabel}>no</label>
									</div>

									<br />
									{fields["livePayment"] == null ? (
										<span className="text-danger">Field can't be empty</span>
									) : (
										""
									)}
								</div>

								<label className={styles.userLabel}>shopee pay</label>
								<div style={{ display: "flex" }}>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														shopeePay: true,
													});
												}
											}}
											defaultChecked={showData.shopeePay === false}
											name="shopeepay"
											value="yes"
											checked={showData.shopeePay === true ? true : false}
										/>
										<label className={styles.userLabel}>yes</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="shopeepay"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														shopeePay: false,
													});
												}
											}}
											defaultChecked={showData.shopeePay === false}
											value="no"
											checked={showData.shopeePay === false ? true : false}
										/>
										<label className={styles.userLabel}>no</label>
									</div>

									<br />
									{fields["shopeePay"] == null ? (
										<span className="text-danger">Field can't be empty</span>
									) : (
										""
									)}
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
								<label className={styles.userLabel}>credit card</label>
								<div style={{ display: "flex" }}>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														creditCard: true,
													});
												}
											}}
											name="creditcard"
											value={showData.creditCard}
											defaultChecked={showData.creditCard === false}
											checked={showData.creditCard === true ? true : false}
										/>
										<label className={styles.userLabel}>yes</label>
									</div>
									<div class="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											onChange={(e) => {
												if (e.target.checked === false) {
													setShowData({
														...showData,
														creditCard: false,
													});
												}
											}}
											name="creditcard"
											value="no"
											defaultChecked={showData.creditCard === false}
											checked={showData.creditCard === false ? true : false}
										/>
										<label className={styles.userLabel}>no</label>
									</div>

									<br />
									{fields["creditCard"] == null ? (
										<span className="text-danger">Field can't be empty</span>
									) : (
										""
									)}
								</div>

								<label className={styles.userLabel}>mobile banking</label>
								<div style={{ display: "flex" }}>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														mobileBanking: true,
													});
												}
											}}
											name="mbank"
											value="yes"
											defaultChecked={showData.mobileBanking === false}
											checked={showData.mobileBanking === true ? true : false}
										/>
										<label className={styles.userLabel}>yes</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														mobileBanking: false,
													});
												}
											}}
											defaultChecked={showData.mobileBanking === false}
											name="mbank"
											value="no"
											checked={showData.mobileBanking === false ? true : false}
										/>
										<label className={styles.userLabel}>no</label>
									</div>

									<br />
									{fields["mobileBanking"] == null ? (
										<span className="text-danger">Field can't be empty</span>
									) : (
										""
									)}
								</div>

								<label className={styles.userLabel}>alone</label>
								<div style={{ display: "flex" }}>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														alone: true,
													});
												}
											}}
											defaultChecked={showData.alone === false}
											name="alone"
											checked={showData.alone === true ? true : false}
											value="yes"
										/>
										<label className={styles.userLabel}>yes</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="alone"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														alone: false,
													});
												}
											}}
											defaultChecked={showData.alone === false}
											checked={showData.alone === false ? true : false}
											value="no"
										/>
										<label className={styles.userLabel}>no</label>
									</div>
								</div>

								<br />
								{fields["alone"] == null ? (
									<span className="text-danger">Field can't be empty</span>
								) : (
									""
								)}
							</div>
							<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
								<label className={styles.userLabel}>we chat payment</label>
								<div style={{ display: "flex" }}>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														weChat: true,
													});
												}
											}}
											defaultChecked={showData.weChat === false}
											name="wechat"
											checked={showData.weChat === true ? true : false}
											value="yes"
										/>
										<label className={styles.userLabel}>yes</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="wechat"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														weChat: false,
													});
												}
											}}
											defaultChecked={showData.weChat === false}
											checked={showData.weChat === false ? true : false}
											value="no"
										/>
										<label className={styles.userLabel}>no</label>
									</div>

									<br />
									{fields["weChat"] == null ? (
										<span className="text-danger">Field can't be empty</span>
									) : (
										""
									)}
								</div>

								<label className={styles.userLabel}>true wallet</label>
								<div style={{ display: "flex" }}>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="twallet"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														trueWallet: true,
													});
												}
											}}
											defaultChecked={showData.trueWallet === false}
											checked={showData.trueWallet === true ? true : false}
											value="yes"
										/>
										<label className={styles.userLabel}>yes</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="twallet"
											onChange={(e) => {
												if (e.target.checked === true) {
													setShowData({
														...showData,
														trueWallet: false,
													});
												}
											}}
											defaultChecked={showData.trueWallet === false}
											value="no"
											checked={showData.trueWallet === false ? true : false}
										/>
										<label className={styles.userLabel}>no</label>
									</div>
									<br />
									{fields["trueWallet"] == null ? (
										<span className="text-danger">Field can't be empty</span>
									) : (
										""
									)}
								</div>
							</div>
						</div>

						<div className="row mt-5">
							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<form>
									<div className="form-group">
										<label className={styles.userLabel}>web site</label>
										<input
											type="text"
											name="website"
											onChange={(e) => {
												setShowData({
													...showData,
													website: e.target.value,
												});
											}}
											value={showData.website}
											className={`form-control ${styles.userInputs}`}
											// placeholder={website}
										/>

										{fields["website"] == null || fields["website"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
									<div className="form-group">
										<label className={styles.userLabel}>linked in</label>
										<input
											type="text"
											name="linkedin"
											onChange={(e) => {
												setShowData({
													...showData,
													linkedin: e.target.value,
												});
											}}
											value={showData.linkedin}
											className={`form-control ${styles.userInputs}`}
											// placeholder={linkedin}
										/>

										{fields["linkedin"] == null || fields["linkedin"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>

									<div className="form-group">
										<label className={styles.userLabel}>other</label>
										<input
											type="text"
											name="other"
											onChange={(e) => {
												setShowData({
													...showData,
													other: e.target.value,
												});
											}}
											value={showData.other}
											className={`form-control ${styles.userInputs}`}
											// placeholder={other}
										/>

										{fields["other"] == null || fields["other"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
								</form>
							</div>

							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<form>
									<div className="form-group">
										<label className={styles.userLabel}>facebook</label>
										<input
											type="text"
											name="facebook"
											onChange={(e) => {
												setShowData({
													...showData,
													facebook: e.target.value,
												});
											}}
											value={showData.facebook}
											className={`form-control ${styles.userInputs}`}
											// placeholder={facebook}
										/>

										{fields["facebook"] == null || fields["facebook"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
									<div className="form-group">
										<label className={styles.userLabel}>instagram</label>
										<input
											type="text"
											name="instagram"
											onChange={(e) => {
												setShowData({
													...showData,
													instagram: e.target.value,
												});
											}}
											value={showData.instagram}
											className={`form-control ${styles.userInputs}`}
											// placeholder={instagram}
										/>

										{fields["instagram"] == null ||
										fields["instagram"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
								</form>
							</div>
						</div>

						<div className="row mt-5">
							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<form>
									<div className="form-group">
										<label className={styles.userLabel}>
											copy of id card (Up to 5mb)
										</label>
										<input
											type="file"
											onChange={(e) => {
												const files = [...e.target.files];
												compress
													.compress(files, {
														size: 1,
														quality: 0.4,
														maxWidth: 500,
														maxHeight: 500,
														resize: true,
														rotate: false,
													})
													.then((data) => {
														showData.copyOfId = data[0].prefix + data[0].data;
													});
											}}
											// value={showData.copyOfId}
											className={`form-control ${styles.userInputs}`}
											placeholder="file"
										/>

										{fields["copyOfId"] == null || fields["copyOfId"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>

									<div className="form-group">
										<label className={styles.userLabel}>book bank</label>
										<input
											type="file"
											onChange={(e) => {
												const files = [...e.target.files];
												compress
													.compress(files, {
														size: 1,
														quality: 0.4,
														maxWidth: 500,
														maxHeight: 500,
														resize: true,
														rotate: false,
													})
													.then((data) => {
														showData.bankBook = data[0].prefix + data[0].data;
													});
											}}
											className={`form-control ${styles.userInputs}`}
											placeholder="file"
										/>

										{fields["bankBook"] == null || fields["bankBook"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>

									<div className="form-group">
										<label className={styles.userLabel}>company</label>
										<input
											type="text"
											onChange={(e) => {
												setShowData({
													...showData,
													company: e.target.value,
												});
											}}
											value={showData.company}
											className={`form-control ${styles.userInputs}`}
											placeholder="company"
										/>

										{fields["company"] == null || fields["company"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>

									<div className="form-group">
										<label className={styles.userLabel}>bank account</label>
										<input
											type="number"
											onChange={(e) => {
												setShowData({
													...showData,
													bankAccount: parseInt(e.target.value),
												});
											}}
											value={showData.bankAccount}
											className={`form-control ${styles.userInputs}`}
											placeholder="bank account"
										/>

										{fields["bankAccount"] == null ||
										fields["bankAccount"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
									<div className="form-group">
										<label className={styles.userLabel}>domestic</label>
										<input
											type="text"
											onChange={(e) => {
												setShowData({
													...showData,
													domestic: e.target.value,
												});
											}}
											value={showData.domestic}
											className={`form-control ${styles.userInputs}`}
											placeholder="Domestic"
										/>

										{fields["domestic"] == null || fields["domestic"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>

									<div className="form-group">
										<label className={styles.userLabel}>rate of QR code</label>
										<input
											type="text"
											onChange={(e) => {
												setShowData({
													...showData,
													rateQrCode: e.target.value,
												});
											}}
											value={showData.rateQrCode}
											className={`form-control ${styles.userInputs}`}
											placeholder="QR code"
										/>

										{fields["rateQrCode"] == null ||
										fields["rateQrCode"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
								</form>
							</div>

							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<form>
									<div className="form-group">
										<label className={styles.userLabel}>logo</label>
										<input
											type="file"
											onChange={(e) => {
												const files = [...e.target.files];
												compress
													.compress(files, {
														size: 1,
														quality: 0.4,
														maxWidth: 500,
														maxHeight: 500,
														resize: true,
														rotate: false,
													})
													.then((data) => {
														showData.logo = data[0].prefix + data[0].data;
													});
											}}
											// value={showData.logo}
											className={`form-control ${styles.userInputs}`}
											placeholder="file"
										/>

										{fields["logo"] == null || fields["logo"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
									<div className="form-group">
										<label className={styles.userLabel}>other document</label>
										<input
											type="file"
											onChange={(e) => {
												const files = [...e.target.files];
												compress
													.compress(files, {
														size: 1,
														quality: 0.4,
														maxWidth: 500,
														maxHeight: 500,
														resize: true,
														rotate: false,
													})
													.then((data) => {
														showData.otherDocument =
															data[0].prefix + data[0].data;
													});
											}}
											// value={showData.otherDocument}
											className={`form-control ${styles.userInputs}`}
											placeholder="file"
										/>

										{fields["otherDocument"] == null ||
										fields["otherDocument"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>

									<div className="form-group">
										<label className={styles.userLabel}>Bank</label>
										<input
											type="text"
											onChange={(e) => {
												setShowData({
													...showData,
													bank: e.target.value,
												});
											}}
											value={showData.bank}
											className={`form-control ${styles.userInputs}`}
											placeholder="bank"
										/>
										{fields["bank"] == null || fields["bank"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
									<div className="form-group">
										<label className={styles.userLabel}>rnf code</label>
										<input
											type="text"
											onChange={(e) => {
												setShowData({
													...showData,
													rnfCode: e.target.value,
												});
											}}
											value={showData.rnfCode}
											className={`form-control ${styles.userInputs}`}
											placeholder="Rnf Code"
										/>
										{fields["rnfCode"] == null || fields["rnfCode"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>

									<div className="form-group">
										<label className={styles.userLabel}>inter</label>
										<input
											type="text"
											onChange={(e) => {
												setShowData({
													...showData,
													inter: e.target.value,
												});
											}}
											value={showData.inter}
											className={`form-control ${styles.userInputs}`}
											placeholder="Inter"
										/>

										{fields["inter"] == null || fields["inter"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
									<div className="form-group">
										<label className={styles.userLabel}>rate of bar code</label>
										<input
											type="text"
											onChange={(e) => {
												setShowData({
													...showData,
													rateBarCode: e.target.value,
												});
											}}
											value={showData.rateBarCode}
											className={`form-control ${styles.userInputs}`}
											placeholder="Bar code"
										/>

										{fields["rateBarCode"] == null ||
										fields["rateBarCode"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
								</form>
							</div>
						</div>
						{/* <button type="button" className={`btn ${styles.userBtn}`}>Finish</button> */}

						<button
							type="button"
							disabled={
								Object.values(fields).every((o) => o === null) &&
								Object.values(fields).every((o) => o === "")
									? true
									: false
							}
							onClick={(event) => onSubmit(event)}
							className={`btn ${styles.userBtn}`}>
							Finishh
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserProfile;
