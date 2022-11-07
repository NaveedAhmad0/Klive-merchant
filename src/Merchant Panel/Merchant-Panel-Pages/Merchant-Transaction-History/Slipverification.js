import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Slipverification = () => {
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

	const location = useLocation();

	const invoiceId = location.state.invoiceId;
	const merchId = location.state.merchId;

	useEffect(() => {
		axios
			.get(
				`https://backend.klivepay.com/api/merchant/slipVerification?merchantId=${merchId}&slipVerification=202210273O2brONjCpkC6NaeE`
			)
			.then((res) => {
				// console.log("DATA", res.data.data);
				// for (let i = 0; i < res.data.data.length; i++) {
				setShowData({
					transRef: res.data.data.transRef,
					transTime: res.data.data.transTime,
					displayName: res.data.data.receiver.displayName,
					type: res.data.data.receiver.account.type,
					displayNamee: res.data.data.sender.displayName,
					payeeName: res.data.data.sender.account.type,
					countryCode: res.data.data.countryCode,
					ref2: res.data.data.ref2,
					ref1: res.data.data.ref1,
					amount: res.data.data.amount,
					// transactionId: res.data.data.transactionId,
					// fastEasySlipNumber: res.data.data.fastEasySlipNumber,
					// billPaymentRef1: res.data.data.billPaymentRef1,
					// billPaymentRef2: res.data.data.billPaymentRef2,
					// billPaymentRef3: res.data.data.billPaymentRef3,
					// notes: res.data.note,
				});
				// console.log("DATA IS ", res.data.data);
				// }
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
												<td>transTime</td>
												<td>{showData.transTime}</td>
											</tr>
											<tr>
												<td colspan="2" className="font-weight-bold">
													RECEIVER DETAILS :
												</td>
											</tr>
											<tr>
												<td>displayName</td>
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
												<td>displayName</td>
												<td>{showData.displayNamee}</td>
											</tr>
											<tr>
												<td>payeeName</td>
												<td>{showData.payeeName}</td>
											</tr>
											<tr>
												<td>countryCode</td>
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
