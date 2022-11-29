import axios from "axios";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import React, { useState, useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Modal from "./modal/Modal-withdraw";
import ClipLoader from "react-spinners/ClipLoader";
import { useHistory } from "react-router-dom";

const options = {
	paginationSize: 4,
	pageStartIndex: 1,
	alwaysShowAllBtns: true, // Always show next and previous button
	withFirstAndLast: false, // Hide the going to First and Last page button
	hideSizePerPage: true, // Hide the sizePerPage dropdown always
	hidePageListOnlyOnePage: true, // Hide the pagination list when only one page

	showTotal: false,

	disablePageTitle: true,
};

function WithdrawalRequest() {
	const history = useHistory();

	const [isOpen, setIsOpen] = useState(false);
	const [amount, setAmount] = useState(false);
	const [loading, setLoading] = useState(true);
	const [ittems, setItems] = useState([]);
	const [invoiceRefId, setInvoiceRefId] = useState("");

	const merchId = localStorage.getItem("merchantUid");

	console.log("items is", merchId);
	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios
					.get(
						`https://backend.klivepay.com/api/merchant/list-of-Withdraw-request?merchantId=${merchId}`
					)
					.then((response) => {
						const sample = [];
						for (let i = 0; i < response.data.length; i += 1) {
							sample.push({
								id: response.data[i].id,
								ReferalNumber: response.data[i].ReferalNumber,
								WithdrawCharges: response.data[i].WithdrawCharges,
								Name: response.data[i].BankDetails.Name,
								amount: response.data[i].amount,
								FinalAmount: response.data[i].FinalAmount,
								redemptiondate: response.data[i].ReferalNumber,
							});
							setInvoiceRefId(response.data[i].invoiceRefId);
						}
						setLoading(false);
						setTimeout(() => {
							setLoading(false);
						}, 3000);
						setItems(sample);
					});
			} catch (error) {
				console.log(error);
			}
		};
		(async () => await getUserDetails())();
	}, []);

	const { SearchBar } = Search;

	const columns = [
		{
			dataField: "id",
			text: "Id",
			sort: true,
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "Name",
			text: "Name ",
			classes: "deal-row-2",

			headerClasses: "deal-header",
		},
		{
			dataField: "ReferalNumber",
			text: "Referal Number",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "WithdrawCharges",
			text: "Withdraw Charges ",
			classes: "deal-row-2",

			headerClasses: "deal-header",
		},

		{
			dataField: "amount",
			text: "Amount",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "FinalAmount",
			text: "Final Amount",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "View",
			isDummyField: true,
			text: "View user",
			headerClasses: "deal-header",
			formatter: (cellContent, row) => {
				return customFunction(cellContent, row);
			},
		},
		// {
		// 	dataField: "name",
		// 	isDummyField: true,
		// 	text: "Edit role",
		// 	headerClasses: "deal-header",
		// 	formatter: (cellContent, row) => {
		// 		return customFunction(cellContent, row);
		// 	},
		// },
	];
	console.log("list of item", ittems);
	const customFunction = (cellContent, row) => {
		return (
			<h5>
				{/* <Link to="/admin/getUserProfile"> */}
				<button
					href
					alt="issueimageload"
					className="btn btn-success"
					// src={Edit}
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						history.push({
							pathname: "/merchant/ViewWithdrawal",
							state: { Id: row.id },
						});
					}}>
					view
				</button>
				{/* </Link> */}
			</h5>
		);
	};

	useEffect(() => {
		axios
			.get(
				`https://backend.klivepay.com/api/merchant/totalAmount?merchantId=${merchId}`
			)
			.then((res) => {
				setAmount(res.data);
			});
	}, []);

	return (
		<div>
			<div className="row page-title-header">
				<div className="col-12">
					<div className="page-header">
						<h1 className="text-primary">WITHDRAWAL REQUEST</h1>
					</div>
				</div>
			</div>
			{loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
				<>
					<div className="row">
						<div className="col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 grid-margin">
							<div className="d-flex newboxcss2 shadow-lg">
								<div className="wrapper">
									<h5 className="mb-0 font-weight-medium text-primary">
										Available for withdrawal
									</h5>
									<h3 className="mb-0 font-weight-semibold">{amount}</h3>
									<p className="mb-0">USD</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin ">
							<div className="d-flex newboxcss2 shadow-lg">
								<div className="wrapper">
									<h5 className="mb-0 font-weight-medium text-info">
										Current Balance
									</h5>
									<h3 className="mb-0 font-weight-semibold">{amount}</h3>
									<p className="mb-0">USD</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 grid-margin">
							<button
								className="btn btn-success btn-lg rounded-pill"
								onClick={() => setIsOpen(true)}>
								Request Withdrawal
							</button>
						</div>
						{isOpen && <Modal setIsOpen={setIsOpen} />}
					</div>

					{/* <MerchantTable /> */}

					<div className="row">
						<div className="col-md-12">
							<div className="row">
								<div className="col-md-12 grid-margin">
									<div className="card">
										<div className="card-body">
											<div className="table-responsive">
												<ToolkitProvider
													keyField="id"
													data={ittems}
													columns={columns}
													search>
													{(props) => (
														<div>
															<h3>Input something at below input field:</h3>
															<SearchBar
																{...props.searchProps}
																className="custome-search-field"
																style={{ color: "white" }}
																delay={500}
																placeholder="Search Something!!!"
															/>
															<hr />
															<BootstrapTable
																{...props.baseProps}
																headerClasses={{ backgroundColor: "red" }}
																pagination={paginationFactory(options)}
															/>
														</div>
													)}
												</ToolkitProvider>
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
				</>
			)}
		</div>
	);
}
export default WithdrawalRequest;
