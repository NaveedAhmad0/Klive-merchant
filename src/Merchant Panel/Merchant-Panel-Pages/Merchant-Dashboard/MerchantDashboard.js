import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
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

function UserDashboard() {
	const history = useHistory();
	const [loading, setLoading] = useState(true);
	const [ittems, setItems] = useState([]);
	const { SearchBar } = Search;

	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios
					.get(`https://backend.klivepay.com/api/admin/sandBox-transactionList`)
					.then((response) => {
						const sample = [];
						for (let i = 0; i < response.data.length; i += 1) {
							sample.push({
								id: response.data[i].transactionId,
								email: response.data[i].payerAccountNumber,
								QR: response.data[i].payerAccountName,
								amount: response.data[i].amount,
								status: response.data[i].transactionType,
							});
						}
						// console.log("babla", response.data.data.length);
						setItems(sample);
						setLoading(false);
						setTimeout(() => {
							setLoading(false);
						}, 3000);
						// }
						// const listItems = response.json();
					});
			} catch (error) {
				console.log(error);
			}
		};
		(async () => await getUserDetails())();
	}, []);

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

	return (
		<div>
			<div className="row page-title-header">
				<div className="col-12">
					<div className="page-header">
						<h4 className="pageUser-title">Dashboard</h4>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 grid-margin">
					<div className="card">
						<div className="card-body">
							<div className="row">
								<div className="col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 grid-margin">
									<div className="d-flex newboxcss">
										<div className="wrapper my-auto ml-auto ml-lg-3 mr-1">
											<svg
												stroke="currentColor"
												fill="currentColor"
												strokeWidth="0"
												viewBox="0 0 16 16"
												height="2em"
												width="2em"
												xmlns="http://www.w3.org/2000/svg">
												<path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path>
											</svg>
										</div>
										<div className="wrapper">
											<h4 className="mb-0 font-weight-medium text-white">
												Main Account
											</h4>
											<h3 className="mb-0 font-weight-semibold">32,451</h3>
											{/* <p className="mb-0 text-white">+14.00(+0.50%)</p> */}
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin ">
									<div className="d-flex newboxcss2 shadow-lg">
										<div className="wrapper">
											<h3 className="mb-0 font-weight-semibold">15,236</h3>
											<h5 className="mb-0 font-weight-medium text-primary">
												Impressions
											</h5>
											{/* <p className="mb-0 text-muted">+138.97(+0.54%)</p> */}
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin">
									<div className="d-flex newboxcss2 shadow-lg">
										<div className="wrapper">
											<h3 className="mb-0 font-weight-semibold">7,688</h3>
											<h5 className="mb-0 font-weight-medium text-primary">
												Conversion
											</h5>
											{/* <p className="mb-0 text-muted">+57.62(+0.76%)</p> */}
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin">
									<div className="d-flex newboxcss2 shadow-lg">
										<div className="wrapper">
											<h3 className="mb-0 font-weight-semibold">1,553</h3>
											<h5 className="mb-0 font-weight-medium text-primary">
												Downloads
											</h5>
											{/* <p className="mb-0 text-muted">+138.97(+0.54%)</p> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-12">
					<div className="page-header">
						<h4 className="pageUser-title">Transaction History</h4>
					</div>
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
													<h3>Search:</h3>
													<SearchBar
														{...props.searchProps}
														className="custome-search-field"
														style={{ color: "white" }}
														delay={500}
														placeholder="Enter Transaction Number"
													/>
													<hr />
													<BootstrapTable
														{...props.baseProps}
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
		</div>
	);
}
export default UserDashboard;
