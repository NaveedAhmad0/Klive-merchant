// import axios from "axios";
// import React, { useState } from "react";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

// import MerchantTable from "../../Merchant-Panel-Components/Merchant-Panel-Table/MerchantTable";

// function DepositsToMerchant() {
// 	const [qrImage, setQrImage] = useState("");
// 	const [amount, setAmount] = useState("");
// 	const [authorization, setAuthorization] = useState("");

// 	const onSubmit = async (e) => {
// 		e.preventDefault();
// 		// if button enabled with JS hack
// 		console.log("sent data", amount, authorization);

// 		try {
// 			const res = await axios
// 				.post(
// 					`http://27.131.178.239/api/merchant/sandbox-QR30?merchantId=f0e7ebb2-e00e-4c75-a502-25335fe98818`,
// 					JSON.stringify({ amount, authorization }),
// 					{
// 						headers: { "Content-Type": "application/json" },
// 					}
// 				)
// 				.then((res) => {
// 					setQrImage(res.data.data.qrImage);
// 					console.log(res.data.data.qrImage);
// 					console.log("sent data", amount, typeof authorization);
// 				});
// 			console.log(res?.data);
// 			// console.log(res?.accessToken);
// 			console.log(JSON.stringify(res));
// 		} catch (err) {
// 			console.log(err);
// 			// errRef.current.focus();
// 		}
// 	};

// 	return (
// 		<div>
// 			<div className="row page-title-header">
// 				<div className="col-12">
// 					<div className="page-header">
// 						<h4 className="page-title">Invoice</h4>
// 						<input
// 							type="text"
// 							placeholder="amount"
// 							onChange={(e) => setAmount(parseInt(e.target.value))}
// 							value={amount}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="authorization"
// 							onChange={(e) => setAuthorization(e.target.value)}
// 							value={authorization}
// 						/>
// 						<button className="btn btn-primary" onClick={onSubmit}>
// 							submit
// 						</button>
// 					</div>

// 					<img src={`data:image/png;base64,${qrImage}`} alt="QR" />
// 				</div>
// 			</div>
// 			<MerchantTable />
// 		</div>
// 	);
// }
// export default DepositsToMerchant;

import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./NewInvoice.css";
import { MdQrCodeScanner } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

function DepositsToMerchant() {
	const [showData, setShowData] = useState([
		{
			email: "",
			invoiceRefId: "",
			mobile: "",
			billTo: "",
			billFrom: "",
			status: "",
			customer: "",
			createdAt: "",
			amount: 0,
			item: null,
			quantity: null,
			totalamount: null,
			expirydate: null,
			qrRawData: null,
			numberOfTimes: null,
			qrImage: null,
		},
	]);

	const loginMail = localStorage.getItem("email");

	useEffect(() => {
		// const loginemail = localStorage.getItem("email");
		axios
			.get(
				`http://27.131.178.239/api/merchant/get-invoice?email=test1%40mail.com`
			)
			.then((res) => {
				for (let i = 0; i < res.data.length; i += 1) {
					setShowData({
						email: res.data[i].email,
						invoiceRefId: res.data[i].invoiceRefId,
						mobile: res.data[i].mobile,
						billTo: res.data[i].billTo,
						billFrom: res.data[i].billFrom,
						status: res.data[i].status,
						customer: res.data[i].customer,
						createdAt: res.data[i].createdAt,
						amount: res.data[i].amount,
						item: res.data[i].item,
						quantity: res.data[i].quantity,
						totalamount: res.data[i].totalamount,
						expirydate: res.data[i].expirydate,
						qrImage: res.data[i].qrImage,
					});
					console.log("DATA IS ", res.data[i].qrImage);
				}
			});
	}, []);

	return (
		<>
			<div className="header">
				<h3 className="header-title">Your Invoice</h3>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
						<div class="card">
							<div class="card-body">
								<div className="d-flex justify-content-between">
									<h4 className="cardmaintitle">
										Order {showData.invoiceRefId} Details
									</h4>

									<Link to="/merchant/createinvoice">
										<button className="btn btn-success">Create Invoice</button>
									</Link>
								</div>
								<br />
								<div className="row">
									<div className="col">
										<h6 className="text-primary">General</h6>

										<div className="Boxes">
											<p className="heading">Date Created :</p>
											<span className="text-muted">{showData.createdAt}</span>
										</div>
										<br />
										<p className="heading ">
											Status :
											<span className="text-muted">{showData.status}</span>
										</p>
										<br />
										<p className="heading">
											Customer :
											<span className="text-muted">{showData.customer}</span>
										</p>
									</div>

									<div className="col">
										<h6 className="text-primary">Billing</h6>
										<span className="text-center text-muted">
											{showData.billFrom}
										</span>
										<br />
										<br />
										<p className="heading">Email Address :</p>
										<span className="text-center text-muted">
											{showData.email}
										</span>
										<br />
										<br />
										<p className="heading">Phone Number :</p>
										<span className="text-center text-muted">
											{showData.mobile}
										</span>
									</div>
									<div className="col">
										<h6 className="text-primary">Address</h6>
										<span className="text-center text-muted">
											{showData.billTo}
										</span>
									</div>
								</div>
							</div>
						</div>
						<br />
						<div class="card" id="cardmerchant">
							<div class="card-body">
								<table class="table" id="tablebodyrow">
									<thead>
										<tr>
											<th scope="col" className="tablenone">
												sr
											</th>
											<th scope="col">item</th>
											<th scope="col">Cost</th>
											<th scope="col">Qty</th>
											<th scope="col">Total</th>
										</tr>
									</thead>
									<tbody>
										{/* {sample.map((index) => ( */}
										<tr>
											<td className="tablenone">1</td>
											<td>
												<u>{showData.item}</u>
											</td>
											<td>{showData.amount}</td>
											<td>{showData.quantity}</td>
											<td>{showData.totalamount}</td>
										</tr>
										{/* ))} */}

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
												<b>{showData.totalamount + 5}</b>
											</td>
										</tr>
									</tbody>
								</table>
								<div className="buttons">
									<div>
										<button type="button" class="btn btn-outline-primary">
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
											style={{
												marginLeft: "10rem",
											}}>
											Recalculate
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* ....Right side Cards.... */}

					<div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
						<div
							class="card"
							// style={{
							// 	marginLeft: "20%",
							// 	width: "75%",
							// 	height: "263px",
							// 	background: "#FFFFFF",
							// 	borderRadius: "10px",
							// }}
						>
							<div class="card-header">PayPal Here</div>
							<div className="qrcode pb-5">
								<img
									src={`data:image/png;base64,${showData.qrImage}`}
									alt="QR"
									width={190}
								/>
							</div>
						</div>
						<br />

						<div
							class="card"
							// style={{
							// 	marginLeft: "20%",
							// 	width: "75%",
							// 	height: "263px",
							// 	background: "#FFFFFF",
							// 	borderRadius: "10px",
							// }}
						>
							<div class="card-footer">
								Order Notes
								<hr
								// style={{
								// 	width: "17.6rem",
								// 	marginLeft: "-20px",
								// 	opacity: "0.1",
								// }}
								></hr>
								<p>There are no notes yet</p>
								<hr
								// style={{
								// 	width: "17.6rem",
								// 	marginLeft: "-20px",
								// 	opacity: "0.1",
								// }}
								></hr>
								<p className="heading">Add Notes :</p>
								<input
									type="text"
									placeholder=""
									// style={{
									// 	boxSizing: "border-box",
									// 	width: "226px",
									// 	height: "40px",
									// 	left: "1124px",
									// 	top: "674px",
									// 	background: "#FFFFFF",
									// 	border: "1px solid #CBCCD3",
									// 	borderRadius: "4px",
									// 	marginTop: "-1px",
									// }}
								></input>
								<div className="footerbuttons">
									<span className=" d-flex justify-content-between ">
										<button
											type="button"
											className="btn btn-outline-primary dropdown-toggle"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											// style={{ width: "62%", height: "35px" }}
										>
											Private Note
										</button>
										&nbsp;&nbsp;&nbsp;&nbsp;
										<button
											type="button"
											className="btn btn-danger"
											// style={{ height: "35px" }}
										>
											Add
										</button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default DepositsToMerchant;
