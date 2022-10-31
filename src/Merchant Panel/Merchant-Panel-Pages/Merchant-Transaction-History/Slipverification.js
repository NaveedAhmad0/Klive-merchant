import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
								<div className="container text-left">
									<div className="col-12 d-flex">
										<div className="col-6">Event Code</div>
										<div className="col-6">{showData.transRef}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">transTime</div>
										<div className="col-6">{showData.transTime}</div>
									</div>
									<div className="col-12 d-flex my-5">
										<div className="col-6 text-primary">RECIEVER DETAILS</div>
										{/* <div className="col-6">{sahowData.displayName}</div> */}
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">displayName</div>
										<div className="col-6">{showData.displayName}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">Reciever account type</div>
										<div className="col-6">{showData.type}</div>
									</div>
									<div className="col-12 d-flex my-5">
										<div className="col-6 text-primary">SENDER DETAILS</div>
										{/* <div className="col-6">{sahowData.displayName}</div> */}
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">displayName</div>
										<div className="col-6">{showData.displayNamee}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">payeeName</div>
										<div className="col-6">{showData.payeeName}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">countryCode</div>
										<div className="col-6">{showData.countryCode}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">Ref1</div>
										<div className="col-6">{showData.ref1}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">ref2</div>
										<div className="col-6">{showData.ref2}</div>
									</div>
									<div className="col-12 d-flex">
										<div className="col-6">amount</div>
										<div className="col-6">{showData.amount}</div>
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

export default Slipverification;
