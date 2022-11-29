import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Slipverification = () => {
	const location = useLocation();
	const [showData, setShowData] = useState([
		{
			transRef: "",
			transTime: "",
			displayName: "",
			type: "",
			displayNamee: "",
			payeeName: "",
			countryCode: "",
			ref1: "",
			amount: "",
			transactionId: "",
			fastEasySlipNumber: "",
			billPaymentRef1: "",
			billPaymentRef2: "",
			billPaymentRef3: "",
		},
	]);

	const merchId = localStorage.getItem("merchantUid");
	const slipVerification = location.state.slipVerification;
	console.log("m", slipVerification);
	console.log("mer", merchId);
	useEffect(() => {
		axios
			.get(
				`https://backend.klivepay.com/api/merchant/slipVerification?merchantId=${merchId}&slipVerification=${slipVerification}`
				// JSON.stringify({slipNumber})
			)
			.then((res) => {
				setShowData({
					transRef: res.data.transRef,
					transTime: res.data.transTime,
					displayName: res.data.receiver.displayName,
					type: res.data.receiver.account.type,
					displayNamee: res.data.sender.displayName,
					payeeName: res.data.sender.account.type,
					countryCode: res.data.countryCode,
					ref2: res.data.ref2,
					ref1: res.data.ref1,
					amount: res.data.amount,
				});
			});
		// console.log("refernceeeeeeee", referece2);
	}, []);

	return (
		<div className="row">
			<div className="col-md-12">
				<div className="row">
					<h2 className="text-primary">Payment Details</h2>
					<div className="col-md-12 grid-margin">
						<div className="card">
							<div className="card-body">
								<div className="container">
									<table className="table table-striped table-bordered">
										<tbody>
											<tr>
												<td>Event Code</td>
												<td>{showData.transRef}</td>
											</tr>
											<tr>
												<td>Trans Time</td>
												<td>{showData.transTime}</td>
											</tr>
											<tr>
												<td colspan="2" className="font-weight-bold">
													RECEIVER DETAILS :
												</td>
											</tr>
											<tr>
												<td>Display Name</td>
												<td>{showData.displayName}</td>
											</tr>
											<tr>
												<td>Reciever account type</td>
												<td>{showData.type}</td>
											</tr>
											<tr>
												<td colspan="2" className="font-weight-bold">
													SENDER DETAILS:{" "}
												</td>
											</tr>
											<tr>
												<td>Display Name</td>
												<td>{showData.displayNamee}</td>
											</tr>
											<tr>
												<td>Payee Name</td>
												<td>{showData.payeeName}</td>
											</tr>
											<tr>
												<td>Country Code</td>
												<td>{showData.countryCode}</td>
											</tr>
											<tr>
												<td>Ref1</td>
												<td>{showData.ref1}</td>
											</tr>
											<tr>
												<td>Ref2</td>
												<td>{showData.ref2}</td>
											</tr>
											<tr>
												<td>Amount</td>
												<td>{showData.amount}</td>
											</tr>
										</tbody>
									</table>
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

export default Slipverification;
