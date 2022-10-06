import axios from "axios";
import React, { useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Link } from "react-router-dom";
import "./NewInvoice.css";

function CreateInvoice() {
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [billFrom, setbillFrom] = useState("");
	const [billTo, setbillTo] = useState("");
	const [status, setstatus] = useState("");
	const [customer, setcustomer] = useState("");
	const [totalamount, settotalamount] = useState("");
	const [itemValues, setItemValues] = useState([
		{
			amount: 0,
			item: "",
			quantity: "",
			totalPrice: 0,
		},
	]);
	// const [totalPrice, settotalPrice] = useState("0");
	const [success, setSuccess] = useState(false);
	const [errMsg, setErrMsg] = useState("");
	// const logindetails = { email, password };
	const { amount, item, quantity, totalPrice } = itemValues;
	const merchantId = localStorage.getItem("merchantUid");

	// const navigate = Redirect();
	let addFormFields = () => {
		setItemValues([
			...itemValues,
			{ amount: 0, item: "", quantity: "", totalPrice: 0 },
		]);
	};
	let handleFormChange = (i, e) => {
		let newFormValues = [...itemValues];
		newFormValues[i][e.target.name] = e.target.value;
		setItemValues(newFormValues);
		const product = itemValues.find((data) => data.name == e.target.name);
		setItemValues([
			...itemValues,
			{
				totalPrice: itemValues.reduce(
					(total, item) => total + item.amount * item.quantity,
					0
				),
			},
		]);
	};

	async function onSubmit(event) {
		event.preventDefault();
		console.log(
			email,
			mobile,
			billFrom,
			billTo,
			status,
			customer,
			amount,
			item,
			quantity,
			totalamount
		);
		try {
			const response = await axios.post(
				`http://27.131.178.239/api/merchant/create-invoice?merchantId=${merchantId}`,
				JSON.stringify({
					email,
					mobile,
					billFrom,
					billTo,
					status,
					customer,
					amount,
					item,
					quantity,
					totalamount,
				}),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			console.log(JSON.stringify(response?.data));

			setEmail("");
			// setPassword("");
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
		<>
			<div className="header">
				<h3 className="header-title header-title1">New Invoice</h3>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="card">
							<div class="card-body">
								<h4 className="cardmaintitle">Order #12345 Details</h4>

								<br />
								<div className="row">
									<div className="col-4">
										<h6 className="text-primary">General</h6>
										<p className="heading">Status :</p>
										<input
											type="text"
											placeholder="Status"
											onChange={(e) => {
												setstatus(e.target.value);
											}}
											value={status}
										/>

										<br />
										<p className="heading">Customer :</p>
										<input
											type="text"
											placeholder="Customer"
											onChange={(e) => {
												setcustomer(e.target.value);
											}}
											value={customer}
										/>
									</div>

									<div className="col-4">
										<h6 className="text-primary">Billing</h6>
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
												marginTop: "25px",
											}}
											onChange={(e) => setbillFrom(e.target.value)}
											value={billFrom}></input>
										<br />
										<br />
										<p className="heading">Email Address :</p>
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
										<p className="heading">Phone Number :</p>
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
											onChange={(e) => setMobile(e.target.value)}
											value={mobile}></input>
									</div>
									<div className="col-4">
										<h6 className="text-primary">Address</h6>
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
												marginTop: "25px",
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
							<div class="card-body">
								<table class="table" id="tablebodyrow">
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
										{itemValues?.map((e, index) => (
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
															value={itemValues.item}
														/>
													</u>
												</td>
												<td className="col-2">
													<input
														type="text"
														name="amount"
														onChange={(e) => handleFormChange(index, e)}
														value={itemValues.amount}
													/>
												</td>
												<td className="col-2">
													<input
														type="text"
														name="quantity"
														onChange={(e) => handleFormChange(index, e)}
														value={itemValues.quantity}
													/>
												</td>
												<td className="col-2">
													total price :{itemValues.totalPrice}
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
												<b>
													{itemValues.totalPrice > 0
														? itemValues.totalPrice + 5
														: 0}
												</b>
											</td>
										</tr>
									</tbody>
								</table>
								<div className="buttons">
									<div>
										<button
											onClick={() => addFormFields()}
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
										&nbsp;&nbsp;&nbsp;&nbsp;
										<button
											type="button"
											class="btn btn-success"
											onClick={(e) => onSubmit(e)}
											style={{
												marginLeft: "10rem",
											}}>
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
