import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
const TransactionDetails = () => {
	const history = useHistory();

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

	const invoiceId = location.state.invoiceId;
	const referece2 = location.state.referece2;
	const date = new Date(location.state.date);
	const merchId = location.state.merchId;

	useEffect(() => {
		console.log("DAE", date);
		axios
			.get(
				`https://backend.klivepay.com/api/merchant/payment-inquiry?merchantId=${merchId}&date=${date}&reference1=${invoiceId}&reference2=${referece2}`
			)
			.then((res) => {
				console.log("DATA", res.data.data);
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
						<div className="card">
							<div className="card-body">
								<div className="container text-left">
									<div className="col-12 d-flex">
										<div className="col-6">Event Code</div>
										<div className="col-6">{showData.eventCode}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">transactionType</div>
										<div className="col-6">{showData.transactionType}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">payeeProxyId</div>
										<div className="col-6">{showData.payeeProxyId}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">payeeProxyType</div>
										<div className="col-6">{showData.payeeProxyType}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">payeeAccountNumber</div>
										<div className="col-6">{showData.payeeAccountNumber}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">payeeName</div>
										<div className="col-6">{showData.payeeName}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">payerAccountNumber</div>
										<div className="col-6">{showData.payerAccountNumber}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">payerName</div>
										<div className="col-6">{showData.payerName}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">amount</div>
										<div className="col-6">{showData.amount}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">transactionId</div>
										<div className="col-6">{showData.transactionId}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">fastEasySlipNumber</div>
										<div className="col-6">{showData.fastEasySlipNumber}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">billPaymentRef1</div>
										<div className="col-6">{showData.billPaymentRef1}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">billPaymentRef2</div>
										<div className="col-6">{showData.billPaymentRef2}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">billPaymentRef3</div>
										<div className="col-6">{showData.billPaymentRef3}</div>
									</div>
									<div className="col-12 mt-5 text-left">
										{/* <Link to="/merchant/slip-verification"> */}
										<button
											className="btn btn-primary"
											onClick={() => {
												// eslint-disable-next-line no-restricted-globals
												history.push({
													pathname: "/merchant/slip-verification",
													state: {
														invoiceId: showData.fastEasySlipNumber,
														merchId: merchId,
													},
												});
												console.log("sent email", showData.fastEasySlipNumber);
											}}>
											slip verification Details
										</button>
										{/* </Link> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="row"></div>
			</div>
		</div>
	);
};

export default TransactionDetails;
