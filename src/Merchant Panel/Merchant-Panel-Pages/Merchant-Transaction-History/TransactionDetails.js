import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Modal from "./modal/Modal-withdraw";
import ClipLoader from "react-spinners/ClipLoader";

const TransactionDetails = () => {
	const history = useHistory();
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(true);

	const [showData, setShowData] = useState([
		{
			eventCode: "",
			transactionType: "",
			payeeProxyId: "",
			payeeProxyType: "",
			payeeAccountNumber: "",
			payeeName: "",
			payerAccountNumber: "",
			payerName: "",
			amount: "",
			transactionId: "",
			fastEasySlipNumber: "",
			billPaymentRef1: "",
			billPaymentRef2: "",
			billPaymentRef3: "",
		},
	]);

	const location = useLocation();

	const referece1 = location.state.referece1;
	const referece2 = location.state.referece2;
	const date = moment(location.state.date).format("YYYY-MM-DD");
	const merchId = localStorage.getItem("merchantUid");

	useEffect(() => {
		console.log("DAE", merchId);
		axios
			.get(
				`https://backend.klivepay.com/api/merchant/payment-inquiry?merchantId=${merchId}&date=${date}&reference1=${referece1}&reference2=${referece2}`
			)
			.then((res) => {
				console.log("DATA", res.data);
				for (let i = 0; i < res.data.data.length; i++) {
					setShowData({
						eventCode: res.data.data[i].eventCode,
						transactionType: res.data.data[i].transactionType,
						payeeProxyId: res.data.data[i].payeeProxyId,
						payeeProxyType: res.data.data[i].payeeProxyType,
						payeeAccountNumber: res.data.data[i].payeeAccountNumber,
						payeeName: res.data.data[i].payeeName,
						payerAccountNumber: res.data.data[i].payerAccountNumber,
						payerName: res.data.data[i].payerName,
						amount: res.data.data[i].amount,
						transactionId: res.data.data[i].transactionId,
						fastEasySlipNumber: res.data.data[i].fastEasySlipNumber,
						billPaymentRef1: res.data.data[i].billPaymentRef1,
						billPaymentRef2: res.data.data[i].billPaymentRef2,
						billPaymentRef3: res.data.data[i].billPaymentRef3,
						// notes: res.data[i].note,
					});
					console.log("DATA IS ", res.data.data);
					setLoading(false);
					setTimeout(() => {
						setLoading(false);
					}, 3000);
				}
			});
		console.log("refernceeeeeeee", referece2);
	}, []);

	return (
		<div className="row">
			<div className="col-md-12">
				<div className="row">
					<h2 className="text-primary">Payment Details</h2>
					<div className="col-md-12 grid-margin">
						{loading ? (
							<div className="row" style={{ height: "500px" }}>
								<div className="col-12 text-center my-auto">
									<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
								</div>
							</div>
						) : (
							<div className="card">
								<div className="card-body">
									<div className="container">
										<table class="table table-striped table-bordered">
											<tbody>
												<tr>
													<td>Event Code</td>
													<td>{showData.eventCode}</td>
												</tr>
												<tr>
													<td>Transaction Type</td>
													<td>{showData.transactionType}</td>
												</tr>
												<tr>
													<td>Payee Proxy Id</td>
													<td>{showData.payeeProxyId}</td>
												</tr>
												<tr>
													<td>Payee Proxy Type</td>
													<td>{showData.payeeProxyType}</td>
												</tr>
												<tr>
													<td>PayeeAccount Number</td>
													<td>{showData.payeeAccountNumber}</td>
												</tr>
												<tr>
													<td>Payee Name</td>
													<td>{showData.payeeName}</td>
												</tr>
												<tr>
													<td>Payer Account Number</td>
													<td>{showData.payerAccountNumber}</td>
												</tr>
												<tr>
													<td>Payer Name</td>
													<td>{showData.payerName}</td>
												</tr>
												<tr>
													<td>Amount</td>
													<td>{showData.amount}</td>
												</tr>
												<tr>
													<td>Transaction Id</td>
													<td>{showData.transactionId}</td>
												</tr>
												<tr>
													<td>Fast Easy SlipNumber</td>
													<td>{showData.fastEasySlipNumber}</td>
												</tr>
												<tr>
													<td>Bill Payment Ref1</td>
													<td>{showData.billPaymentRef1}</td>
												</tr>
												<tr>
													<td>Bill Payment Ref2</td>
													<td>{showData.billPaymentRef2}</td>
												</tr>
												<tr>
													<td>Bill Payment Ref3</td>
													<td>{showData.billPaymentRef3}</td>
												</tr>
											</tbody>
										</table>
										<br></br>
										<button
											type="button"
											className="btn btn-primary btn-block"
											onClick={() => setIsOpen(true)}>
											Slip verification Details
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			{isOpen && <Modal setIsOpen={setIsOpen} />}
			<div className="col-md-4">
				<div className="row"></div>
			</div>
		</div>
	);
};

export default TransactionDetails;
