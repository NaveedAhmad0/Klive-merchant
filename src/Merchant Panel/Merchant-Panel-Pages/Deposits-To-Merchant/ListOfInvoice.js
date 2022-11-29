import axios from "axios";
import React, { useEffect, useState } from "react";
// import AdminTable from "../../Admin-Panel-Components/Admin-Panel-Table/AdminTable";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import ClipLoader from "react-spinners/ClipLoader";
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

const ListOfInvoice = () => {
	const history = useHistory();

	const [ittems, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [invoiceRefId, setInvoiceRefId] = useState("");
	console.log("items is", ittems);
	const loginMail = localStorage.getItem("email");
	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios
					.get(
						`https://backend.klivepay.com/api/merchant/get-invoice?email=${loginMail}`
					)
					.then((response) => {
						// if (response == 200) {

						const sample = [];
						for (let i = 0; i < response.data.length; i += 1) {
							sample.push({
								id: response.data[i].id,
								invoiceRefId: response.data[i].invoiceRefId,
								QR: (
									<img
										src={`data:image/png;base64,${response.data[i].qrImage}`}
										alt="QR"
										width={190}
										style={{ borderRadius: "0" }}
									/>
								),
								amount: response.data[i].totalamount,
								status:
									response.data[i].status === true ? "completed" : "pending",
								redemptiondate: response.data[i].invoiceRefId,
							});
							setInvoiceRefId(response.data[i].invoiceRefId);
						}
						console.log("babla", invoiceRefId);
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
			dataField: "invoiceRefId",
			text: "Invoice Ref Id",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "QR",
			text: "QR code",
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
			text: "Payment Status",
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
							pathname: "/merchant/deposits-to-merchant",
							state: { invoiceId: row.id },
						});
						console.log("sent email", row.id);
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
			<div className="d-flex justify-content-between">
				<h2 className="text-primary bw-bold">Invoice List</h2>
				<div>
					<Link to="/merchant/createinvoice">
						<button className="btn btn-success">Create Invoice</button>
					</Link>
				</div>
			</div>

			{loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
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
			)}
		</div>
	);
};

export default ListOfInvoice;
