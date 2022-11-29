import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const ViewWithdrawal = () => {
	const location = useLocation();
	const [loading, setLoading] = useState(true);
	const [showData, setShowData] = useState([
		{
			id: 0,
			ReferalNumber: "",
			amount: 0,
			WithdrawCharges: 0,
			FinalAmount: 0,

			Name: "",
			AccountNumber: 0,
			IFSCcode: "",
			BankName: "",
			comments: "",
		},
	]);
	const merchantId = location.state.Id;

	useEffect(() => {
		axios
			.get(
				`https://backend.klivepay.com/api/merchant/withdraw-request-byId?id=${merchantId}`
			)
			.then((res) => {
				console.log("DATA", res);
				// for (let i = 0; i < res.data.length; i++) {
				setShowData({
					id: res.data.result.id,
					ReferalNumber: res.data.result.ReferalNumber,
					amount: res.data.result.amount,
					WithdrawCharges: res.data.result.WithdrawCharges,
					FinalAmount: res.data.result.FinalAmount,
					Name: res.data.result.BankDetails.Name,
					AccountNumber: res.data.result.BankDetails.AccountNumber,
					IFSCcode: res.data.result.BankDetails.IFSCcode,
					BankName: res.data.result.BankDetails.BankName,
					comments: res.data.result.comments,
				});
				setLoading(false);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			});
	}, []);

	return (
		<div className="row">
			<div className="col-md-12">
				<div className="row">
					<h2 className="text-primary">Request Details</h2>
					{loading ? (
						<div className="row" style={{ height: "500px" }}>
							<div className="col-12 text-center my-auto">
								<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
							</div>
						</div>
					) : (
						<div className="col-md-12 grid-margin">
							<div className="card">
								<div className="card-body">
									<div className="container">
										<table class="table table-striped table-bordered">
											<tbody>
												<tr>
													<td>Id</td>
													<td>{showData.id}</td>
												</tr>
												<tr>
													<td>Referal Number</td>
													<td>{showData.ReferalNumber}</td>
												</tr>
												<tr>
													<td>Amount</td>
													<td>{showData.amount}</td>
												</tr>
												<tr>
													<td>Withdraw Charges</td>
													<td>{showData.WithdrawCharges}</td>
												</tr>
												<tr>
													<td>Final Amount</td>
													<td>{showData.FinalAmount}</td>
												</tr>
												<tr>
													<td>Name</td>
													<td>{showData.Name}</td>
												</tr>
												<tr>
													<td>Account Number</td>
													<td>{showData.AccountNumber}</td>
												</tr>
												<tr>
													<td>IFSC code</td>
													<td>{showData.IFSCcode}</td>
												</tr>
												<tr>
													<td>Amount</td>
													<td>{showData.amount}</td>
												</tr>
												<tr>
													<td>Bank Name</td>
													<td>{showData.BankName}</td>
												</tr>
												<tr>
													<td>Comments</td>
													<td>{showData.comments}</td>
												</tr>
											</tbody>
										</table>
										<br></br>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="col-md-4">
				<div className="row"></div>
			</div>
		</div>
	);
};

export default ViewWithdrawal;
