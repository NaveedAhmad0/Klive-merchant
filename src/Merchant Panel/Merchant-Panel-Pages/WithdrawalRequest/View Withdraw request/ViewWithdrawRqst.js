import axios from "axios";
import React, { useEffect, useState } from "react";
const ViewWithdrawal = () => {
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

	useEffect(() => {
		axios
			.get(`https://backend.klivepay.com/api/admin/withdraw-request`)
			.then((res) => {
				console.log("DATA", res);
				for (let i = 0; i < res.data.length; i++) {
					setShowData({
						id: res.data[i].id,
						ReferalNumber: res.data[i].ReferalNumber,
						amount: res.data[i].amount,
						WithdrawCharges: res.data[i].WithdrawCharges,
						FinalAmount: res.data[i].FinalAmount,
						Name: res.data[i].BankDetails.Name,
						AccountNumber: res.data[i].BankDetails.AccountNumber,
						IFSCcode: res.data[i].BankDetails.IFSCcode,
						BankName: res.data[i].BankDetails.BankName,
						comments: res.data[i].comments,

						// notes: res.data[i].note,
					});
				}
				console.log("DATA IS ", res.data.data);
			});
	}, []);

	return (
		<div className="row">
			<div className="col-md-12">
				<div className="row">
					<h2 className="text-primary">Request Details</h2>
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
												<td>ReferalNumber</td>
												<td>{showData.ReferalNumber}</td>
											</tr>
											<tr>
												<td>amount</td>
												<td>{showData.amount}</td>
											</tr>
											<tr>
												<td>WithdrawCharges</td>
												<td>{showData.WithdrawCharges}</td>
											</tr>
											<tr>
												<td>FinalAmount</td>
												<td>{showData.FinalAmount}</td>
											</tr>
											<tr>
												<td>Name</td>
												<td>{showData.Name}</td>
											</tr>
											<tr>
												<td>AccountNumber</td>
												<td>{showData.AccountNumber}</td>
											</tr>
											<tr>
												<td>IFSCcode</td>
												<td>{showData.IFSCcode}</td>
											</tr>
											<tr>
												<td>amount</td>
												<td>{showData.amount}</td>
											</tr>
											<tr>
												<td>BankName</td>
												<td>{showData.BankName}</td>
											</tr>
											<tr>
												<td>comments</td>
												<td>{showData.comments}</td>
											</tr>
										</tbody>
									</table>
									<br></br>
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

export default ViewWithdrawal;
