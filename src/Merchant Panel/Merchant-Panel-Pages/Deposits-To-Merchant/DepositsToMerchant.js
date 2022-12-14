import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./NewInvoice.css";
import ClipLoader from "react-spinners/ClipLoader";
import { useLocation } from "react-router-dom";
import axios from "axios";

function DepositsToMerchant() {
	const location = useLocation();
	const [loading, setLoading] = useState(true);
	const [showData, setShowData] = useState([
		{
			invoiceRefId: "",
			mobile: "",
			billTo: "",
			billFrom: "",
			status: "",
			createdAt: "",
			amount: 0,
			quantity: null,
			totalamount: null,
			expirydate: null,
			qrRawData: null,
			qrImage: null,
		},
	]);

	const [note, setNote] = useState("");

	const invoiceId = location.state.invoiceId;

	useEffect(() => {
		axios
			.get(
				`https://backend.klivepay.com/api/merchant/invoice-details/${invoiceId}`
			)
			.then((res) => {
				console.log(res.data);
				setShowData({
					invoiceRefId: res.data.invoiceRefId,
					mobile: res.data.mobile,
					billTo: res.data.billTo,
					billFrom: res.data.billFrom,
					status: res.data.status,
					createdAt: res.data.createdAt,
					totalamount: res.data.totalamount,
					expirydate: res.data.expirydate,
					qrImage: res.data.qrImage,
					// notes: res.data.note,
				});
				setLoading(false);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			});
	}, []);

	return (
		<>
			<div className="header">
				<h3 className="header-title">Your Invoice</h3>
			</div>
			{loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
							<div className="card">
								<div className="card-body">
									<div className="d-flex justify-content-between">
										<h4 className="cardmaintitle">
											Order {showData.invoiceRefId} Details
										</h4>
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
										</div>

										<div className="col">
											<h6 className="text-primary">Billing</h6>
											<p>From :</p>
											<span className="text-center text-muted">
												{showData.billFrom}
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
											<p>To :</p>
											<span className="text-center text-muted">
												{showData.billTo}
											</span>
										</div>
									</div>
								</div>
							</div>
							<br />
							<div className="card" id="cardmerchant">
								<div className="card-body">
									{/* <table className="table" id="tablebodyrow">
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
										{showData.items
											? showData.items?.map((item, index) => (
													<tr key={item.item}>
														<td className="tablenone">1</td>
														<td>
															<u>{item.item}</u>
														</td>
														<td>{item.amount}</td>
														<td>{item.quantity}</td>
														<td>{item.amount * item.quantity}</td>
													</tr>
											  ))
											: "No data"}

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
								</table> */}
									<div className="d-flex justify-content-between">
										<div>
											<label>Total Amount</label>
											<br />
											<p>{showData.totalamount}</p>
										</div>
										<div>
											<label>QR Expiry Date</label>
											<br />
											<p>{showData.expirydate}</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* ....Right side Cards.... */}

						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
							<div className="card">
								<div className="card-header">PayPal Here</div>
								<div className="qrcode p-3">
									<img
										src={`data:image/png;base64,${showData.qrImage}`}
										alt="QR"
										width={190}
									/>
								</div>
							</div>
							<br />

							<div className="card">
								<div className="card-footer">
									Order Notes
									<hr></hr>
									<p>{showData.notes}</p>
									<hr></hr>
									<p className="heading">Add Notes :</p>
									<input
										type="text"
										placeholder="Add Note"
										onChange={(e) => setNote(e.target.value)}
										value={note}
									/>
									<div className="footerbuttons">
										<span className=" d-flex justify-content-around">
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
												// onClick={onSubmitNote}
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
			)}
		</>
	);
}
export default DepositsToMerchant;
