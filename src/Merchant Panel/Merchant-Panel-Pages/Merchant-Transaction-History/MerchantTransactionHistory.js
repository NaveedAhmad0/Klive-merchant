import axios from "axios";
import React, { useEffect, useState } from "react";
// import AdminTable from "../../Admin-Panel-Components/Admin-Panel-Table/AdminTable";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import MerchantForm from "../../Merchant-Panel-Components/Merchant-Panel-Form/Merchant-Form";
import MerchantTable from "../../Merchant-Panel-Components/Merchant-Panel-Table/MerchantTable";

import { Link, useHistory } from "react-router-dom";
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

function MerchantTransactionHistory() {
	const history = useHistory();
	const [ittems, setItems] = useState([]);
	const [invoiceRefId, setInvoiceRefId] = useState("");

	console.log("items is", ittems);
	const merchantId = localStorage.getItem("merchantUid");
	const loginMail = localStorage.getItem("email");

	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios
					.get(
						`https://backend.klivepay.com/api/merchant/sandBox-transactionList?merchantId=${merchantId}`
					)
					.then((response) => {
						// if (response == 200) {

						const sample = [];
						for (let i = 0; i < response.data.data.length; i += 1) {
							sample.push({
								id: response.data.data[i].t_transaction_id,
								email: response.data.data[i].t_payee_account_number,
								QR: response.data.data[i].t_payer_account_name,
								amount: response.data.data[i].t_amount,
								status: response.data.data[i].t_transaction_type,
								redemptiondate: response.data.data[i].t_bill_payment_ref1,
								referece2: response.data.data[i].t_bill_payment_ref2,
								date: response.data.data[i].t_transaction_dateand_time,
								payeeProxiId: response.data.data[i].t_payee_proxy_id,
							});
							setInvoiceRefId(response.data.data[i].t_id);
						}
						// console.log("babla", response.data.data.length);
						setItems(sample);
						// }
						// const listItems = response.json();
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
			text: "Txn Id",
			sort: true,
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "email",
			text: "Account no",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "QR",
			text: "Sender",
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
			dataField: "status",
			text: "Status",
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
							pathname: "/merchant/transactionDetails",
							state: {
								referece1: row.redemptiondate,
								referece2: row.referece2,
								date: row.date,
							},
						});
						console.log("sent email", row.date);
					}}>
					view
				</button>
				{/* </Link> */}
			</h5>
		);
	};
	// list.map((list)=>{})
	return (
		<div>
			<div className="row page-title-header">
				<div className="col-12">
					<div className="page-header">
						<h4 className="page-title">Transaction History</h4>
					</div>
				</div>
			</div>

			<MerchantForm />
			<div>
				{/* <div className="d-flex justify-content-between">
					<h2 className="text-primary bw-bold">Invoice List</h2>
					<div>
						<Link to="/merchant/createinvoice">
							<button className="btn btn-success">Create Invoice</button>
						</Link>
					</div>
				</div> */}

				{/* {ittems.map((item) => (
				<AdminTable key={item.id} list={item} />
			))} */}
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
														{ittems.length > 0 ? (
															<BootstrapTable
																{...props.baseProps}
																headerClasses={{ backgroundColor: "red" }}
																pagination={paginationFactory(options)}
															/>
														) : (
															<div className="text-center text-danger">
																<h4>No Transactoin History</h4>
															</div>
														)}
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
			</div>
		</div>
	);
}
export default MerchantTransactionHistory;
