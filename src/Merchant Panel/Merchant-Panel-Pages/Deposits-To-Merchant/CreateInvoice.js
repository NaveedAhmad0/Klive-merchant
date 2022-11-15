import axios from "axios";
import React, { useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./NewInvoice.css";
import moment from "moment";
function CreateInvoice() {
	const [mobile, setMobile] = useState("");
	const [totalamount, setTotalAmount] = useState({});
	const [expirydate, setExpirydate] = useState("");
	const merchantId = localStorage.getItem("merchantUid");
	console.log(merchantId);
	async function onSubmit(event) {
		event.preventDefault();
		console.log(mobile, expirydate, totalamount);
		// 44ba3429-c02c-430d-b6e9-2d51f6a2527f
		try {
			await axios
				.post(
					`https://backend.klivepay.com/api/merchant/create-invoice?merchantId=${merchantId}`,
					JSON.stringify({
						mobile,
						expirydate: moment(expirydate).format("YYYY-MM-DD hh:mm:ss"),
						totalamount,
					}),
					{
						headers: { "Content-Type": "application/json" },
					}
				)
				.then((res) => {
					console.log(res?.data);
					alert(res.data.message);
					setTotalAmount("");
					setExpirydate("");
					setMobile("");
				});
			// }
		} catch (err) {
			console.log(err.message);
		}
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
										<label className="heading">Total Amount :</label>
										<br />
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

									<div className="col-4">
										<h6 className="text-primary">Billing</h6>

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
										<label className="heading">QR Expiriy Date :</label> <br />
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
									</div>
								</div>
								<div className="buttons">
									<div>
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
						<br />
					</div>
					{/* ....Right side Cards.... */}
				</div>
				{/* <div className="row">
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
									</div>
								</div>

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
								</table>
								<div className="buttons">
									<div>
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
				</div> */}
			</div>
		</>
	);
}
export default CreateInvoice;
