import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Link } from "react-router-dom";
import "./NewInvoice.css";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
function CreateInvoice() {
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [billFrom, setbillFrom] = useState("");
	const [billTo, setbillTo] = useState("");
	const [status, setstatus] = useState("");
	const [customer, setcustomer] = useState("");
	const [totalamount, setTotalAmount] = useState({});
	const [expirydate, setExpirydate] = useState("");

	// const logindetails = { email, password };
	const merchantId = localStorage.getItem("merchantUid");

	function handleChange(e) {
		setExpirydate();
	}
	async function onSubmit(event) {
		event.preventDefault();
		console.log(
			email,
			mobile,
			billFrom,
			billTo,
			status,
			customer,
			expirydate,
			totalamount
		);
		// let { item, amount, quantity } = itemValues[0];
		// 44ba3429-c02c-430d-b6e9-2d51f6a2527f
		try {
			// for (let i = 0; i < itemValues.length; i++) {
			// }
			await axios
				.post(
					`https://backend.klivepay.com/api/merchant/create-invoice?merchantId=${merchantId}`,
					JSON.stringify({
						email,
						mobile,
						billFrom,
						billTo,
						status,
						customer,
						expirydate: moment(expirydate).format("YYYY-MM-DD hh:mm:ss"),
						totalamount,
					}),
					{
						headers: { "Content-Type": "application/json" },
						// withCredentials: true,
					}
				)
				.then((res) => {
					console.log(res?.data);

					// if (res.data.code == 200) {
					alert(res.data.message);
					// }
				});
			// }
		} catch (err) {
			console.log(err.message);
		}
		// try {
		// 	const response = await axios.post(
		// 		`http://27.131.178.239/api/merchant/create-invoice?merchantId=${merchantId}`,
		// 		JSON.stringify({
		// 			email,
		// 			mobile,
		// 			billFrom,
		// 			billTo,
		// 			status,
		// 			customer,
		// 			item,
		// 			amount,
		// 			quantity,
		// 			totalamount,
		// 		}),
		// 		{
		// 			headers: { "Content-Type": "application/json" },
		// 			// withCredentials: true,
		// 		}
		// 	);

		// 	console.log(JSON.stringify(response?.data));
		// 	alert("Invoice Added");
		// 	// setPassword("");
		// 	setSuccess(true);
		// } catch (err) {
		// 	if (!err?.response) {
		// 		setErrMsg("No Server Response");
		// 	} else if (err.response?.status === 400) {
		// 		setErrMsg("Invalid Credentialials");
		// 		setSuccess(false);
		// 	} else {
		// 		setErrMsg("Login failed");
		// 	}
		// 	console.log(err);
		// }
		// console.log(success);
	}

	return (
		<>
			<div className="header">
				<h3 className="header-title header-title1">New Invoice</h3>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="card">
							<div class="card-body">
								<div className="row">
									<div className="col-4">
										<h6 className="text-primary">General</h6>
										<label className="heading">Status :</label>
										<br />
										<input
											type="text"
											style={{
												boxSizing: "border-box",
												width: "226px",
												height: "40px",
												left: "1124px",
												top: "674px",
												background: "#FFFFFF",
												border: "1px solid #CBCCD3",
												borderRadius: "4px",
												// marginTop: "25px",
											}}
											// placeholder="Status"
											onChange={(e) => {
												setstatus(e.target.value);
											}}
											value={status}
										/>

										<br />
										<br />
										<label className="heading">Customer :</label>
										<br />
										<input
											type="text"
											style={{
												boxSizing: "border-box",
												width: "226px",
												height: "40px",
												left: "1124px",
												top: "674px",
												background: "#FFFFFF",
												border: "1px solid #CBCCD3",
												borderRadius: "4px",
												// marginTop: "25px",
											}}
											// placeholder="Customer"
											onChange={(e) => {
												setcustomer(e.target.value);
											}}
											value={customer}
										/>
									</div>

									<div className="col-4">
										<h6 className="text-primary">Billing</h6>
										<label className="heading">From :</label>
										<br />
										<input
											type="text"
											style={{
												boxSizing: "border-box",
												width: "226px",
												height: "40px",
												left: "1124px",
												top: "674px",
												background: "#FFFFFF",
												border: "1px solid #CBCCD3",
												borderRadius: "4px",
												// marginTop: "25px",
											}}
											onChange={(e) => setbillFrom(e.target.value)}
											value={billFrom}></input>
										<br />
										<br />
										<label className="heading">Email Address :</label>
										<br />
										<input
											type="text"
											placeholder=""
											style={{
												boxSizing: "border-box",
												width: "226px",
												height: "40px",
												left: "1124px",
												top: "674px",
												background: "#FFFFFF",
												border: "1px solid #CBCCD3",
												borderRadius: "4px",
												marginTop: "-1px",
											}}
											onChange={(e) => setEmail(e.target.value)}
											value={email}></input>
										<br />
										<br />
										<label className="heading">Phone Number :</label>
										<br />
										<input
											type="text"
											placeholder=""
											style={{
												boxSizing: "border-box",
												width: "226px",
												height: "40px",
												left: "1124px",
												top: "674px",
												background: "#FFFFFF",
												border: "1px solid #CBCCD3",
												borderRadius: "4px",
												marginTop: "-1px",
											}}
											onChange={(e) => setMobile(parseInt(e.target.value))}
											value={mobile}></input>
									</div>
									<div className="col-4">
										<h6 className="text-primary">Address</h6>
										<label className="heading">To :</label>
										<br />

										<input
											type="text"
											style={{
												boxSizing: "border-box",
												width: "226px",
												height: "40px",
												left: "1124px",
												top: "674px",
												background: "#FFFFFF",
												border: "1px solid #CBCCD3",
												borderRadius: "4px",
												// marginTop: "25px",
											}}
											onChange={(e) => setbillTo(e.target.value)}
											value={billTo}></input>
									</div>
								</div>
							</div>
						</div>
						<br />
					</div>

					{/* ....Right side Cards.... */}
				</div>
				<div className="row">
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="card" id="cardmerchant">
							<div class="card-body ">
								<div className="d-flex">
									<div className="col-6">
										<p className="heading">Total Amount :</p>
										<input
											type="number"
											style={{
												boxSizing: "border-box",
												width: "226px",
												height: "40px",
												left: "1124px",
												top: "674px",
												background: "#FFFFFF",
												border: "1px solid #CBCCD3",
												borderRadius: "4px",
												// marginTop: "25px",
											}}
											onChange={(e) => setTotalAmount(parseInt(e.target.value))}
											value={totalamount}
										/>
									</div>
									<div className="col-6">
										<p className="heading">QR Expiriy Date :</p>
										<input
											type="datetime-local"
											style={{
												boxSizing: "border-box",
												width: "226px",
												height: "40px",
												left: "1124px",
												top: "674px",
												background: "#FFFFFF",
												border: "1px solid #CBCCD3",
												borderRadius: "4px",
												// marginTop: "25px",
											}}
											onChange={(e) => setExpirydate(e.target.value)}
											value={expirydate}
										/>
										{/* <DateTimePicker
											onChange={(e) => {
												setExpirydate(e);
											}}
											value={expirydate}
										/> */}
									</div>
								</div>

								{/* <table class="table" id="tablebodyrow">
									<thead>
										<tr>
											<th scope="col-2" className="tablenone">
												sr
											</th>
											<th scope="col-2">item</th>
											<th scope="col-2">Cost</th>
											<th scope="col-2">Qty</th>
											<th scope="col-4">Total</th>
										</tr>
									</thead>
									<tbody className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
										{itemValues?.map((item, index) => (
											<tr
												className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12"
												key={index}>
												<td className="tablenone">{index + 1}</td>
												<td className="col-2">
													<u>
														<input
															type="text"
															name="item"
															onChange={(e) => handleFormChange(index, e)}
															value={item.item}
														/>
													</u>
												</td>
												<td className="col-2">
													<input
														type="text"
														name="amount"
														onChange={(e) => handleFormChange(index, e)}
														value={item.amount}
													/>
												</td>
												<td className="col-2">
													<input
														type="text"
														name="quantity"
														onChange={(e) => handleFormChange(index, e)}
														value={item.quantity}
													/>
												</td>
												<td className="col-2">
													total price :{item.totalPrice}
												</td>
											</tr>
										))}
										<tr>
											<th scope="row"></th>
											<td></td>
											<td>
												<b>Shipping</b>
											</td>
											<td></td>
											<td>
												<b>$5.00</b>
											</td>
										</tr>
										<tr>
											<th scope="row"></th>
											<td></td>
											<td>
												<b>Total</b>
											</td>
											<td></td>
											<td>
												<b>{totalamount}</b>
											</td>
										</tr>
									</tbody>
								</table> */}
								<div className="buttons">
									<div>
										{/* <button
											// onClick={() => addFormFields()}
											type="button"
											class="btn btn-outline-primary">
											Add items(s)
										</button>
										&nbsp;&nbsp;&nbsp;
										<button type="button" class="btn btn-outline-primary">
											Apply Coupan
										</button>
										&nbsp;&nbsp;&nbsp;
										<button type="button" class="btn btn-outline-success">
											Refund
										</button>
										&nbsp;&nbsp;&nbsp;&nbsp; */}
										<button
											type="button"
											class="btn btn-success mt-5 btn-block"
											onClick={(e) => onSubmit(e)}>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default CreateInvoice;
