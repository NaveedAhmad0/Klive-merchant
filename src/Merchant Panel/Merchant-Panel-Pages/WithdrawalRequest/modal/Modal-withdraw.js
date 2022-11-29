import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import moment from "moment";

const Modal = ({ setIsOpen }) => {
	const [Name, setName] = useState("");
	const [WithdrawlAmount, setWithdrawlAmount] = useState(0);
	const [AccountNumber, setAccountNumber] = useState(0);
	const [IFSCcode, setIFSCcode] = useState("");
	const [BankName, setBankName] = useState("");
	const [comments, setcomments] = useState("");

	const merchId = localStorage.getItem("merchantUid");

	// let date = moment().format("MM-DD-YYYY hh:mm:ss");
	// console.log("date", date);

	async function onSubmit(event) {
		event.preventDefault();
		try {
			console.log(
				Name,
				WithdrawlAmount,
				AccountNumber,
				IFSCcode,
				BankName,
				comments
			);
			axios
				.post(
					`https://backend.klivepay.com/api/merchant/withdrawRequest?merchantId=${merchId}`,
					JSON.stringify({
						Name,
						WithdrawlAmount,
						AccountNumber,
						IFSCcode,
						BankName,
						comments,
					}),
					{
						headers: { "Content-Type": "application/json" },
						// withCredentials: true,
					}
				)
				.then((res) => {
					console.log(res?.data);
					alert(res?.data.message);
				});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<p className={styles.heading}> Withdrawal Request</p>
					</div>

					<div className="col d-flex mt-4 justify-content-center">
						<div className={styles.modalContent}>
							{/* <div className={styles.key}>
								<h5>Name</h5>
							</div> */}
							<div className={`mt-5${styles.value}`}>
								<label>Name :</label> <br />
								<input
									type="text"
									onChange={(e) => setName(e.target.value)}
									value={Name}
									style={{
										boxSizing: "border-box",
										width: "226px",
										height: "40px",
										left: "1124px",
										top: "674px",
										background: "#FFFFFF",
										border: "1px solid #CBCCD3",
										borderRadius: "4px",
										// marginTop: "25px",
									}}
								/>
							</div>
						</div>
						<div className={styles.modalContent}>
							{/* <div className={styles.key}>
								<h5>Withdrawal Amount</h5>
							</div> */}
							<div className={styles.value}>
								<label>Withdrawal Amount :</label> <br />
								<input
									type="number"
									onChange={(e) => setWithdrawlAmount(parseInt(e.target.value))}
									value={WithdrawlAmount}
									style={{
										boxSizing: "border-box",
										width: "226px",
										height: "40px",
										left: "1124px",
										top: "674px",
										background: "#FFFFFF",
										border: "1px solid #CBCCD3",
										borderRadius: "4px",
										// marginTop: "25px",
									}}
								/>
							</div>
						</div>
					</div>

					<div className="col d-flex mt-4 justify-content-center">
						<div className={styles.modalContent}>
							{/* <div className={styles.key}>
								<h5>Account Number</h5>
							</div> */}
							<div className={styles.value}>
								<label>Account Number :</label> <br />
								<div className="user-tranaction-inputs ">
									<input
										type="number"
										onChange={(e) => setAccountNumber(parseInt(e.target.value))}
										value={AccountNumber}
										style={{
											boxSizing: "border-box",
											width: "226px",
											height: "40px",
											left: "1124px",
											top: "674px",
											background: "#FFFFFF",
											border: "1px solid #CBCCD3",
											borderRadius: "4px",
										}}
									/>
								</div>
							</div>
						</div>
						<div className={styles.modalContent}>
							{/* <div className={styles.key}>
								<h5>IFSC Code</h5>
							</div> */}
							<div className={styles.value}>
								<div className="user-tranaction-inputs">
									<label>IFSC Code :</label> <br />
									<input
										type="text"
										onChange={(e) => setIFSCcode(e.target.value)}
										value={IFSCcode}
										style={{
											boxSizing: "border-box",
											width: "226px",
											height: "40px",
											left: "1124px",
											top: "674px",
											background: "#FFFFFF",
											border: "1px solid #CBCCD3",
											borderRadius: "4px",
											// marginTop: "25px",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col d-flex mt-4 justify-content-center">
						<div className={styles.modalContent}>
							{/* <div className={styles.key}>
								<h5>Account Number</h5>
							</div> */}
							<div className={styles.value}>
								<label>Bank Name :</label> <br />
								<div className="user-tranaction-inputs ">
									<textarea
										type="text"
										onChange={(e) => setBankName(e.target.value)}
										value={BankName}
										rows="4"
										style={{
											boxSizing: "border-box",
											width: "226px",
											height: "40px",
											left: "1124px",
											top: "674px",
											background: "#FFFFFF",
											border: "1px solid #CBCCD3",
											borderRadius: "4px",
										}}></textarea>
								</div>
							</div>
						</div>
						<div className={styles.modalContent}>
							{/* <div className={styles.key}>
								<h5>IFSC Code</h5>
							</div> */}
							<div className={styles.value}>
								<div className="user-tranaction-inputs">
									<label>Comments :</label> <br />
									<input
										type="text"
										onChange={(e) => setcomments(e.target.value)}
										value={comments}
										style={{
											boxSizing: "border-box",
											width: "226px",
											height: "40px",
											left: "1124px",
											top: "674px",
											background: "#FFFFFF",
											border: "1px solid #CBCCD3",
											borderRadius: "4px",
											// marginTop: "25px",
										}}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.modalActions}>
						<div className={styles.actionsContainer}>
							<button
								className={styles.deleteBtn}
								onClick={() => setIsOpen(false)}>
								Cancel
							</button>
							<button
								className={styles.confirmBtn}
								onClick={(e) => onSubmit(e)}>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="container">
				<div className="row w-70">
					<div className={styles.modalHeader}>
						<p className={styles.heading}>Manual Withdrawal Request</p>
					</div>
					<div className={styles.modal}>
						<div className="col-6 col d-flex">
							<div className="col-6">sdaf</div>
							<div className="col-6">sdaf</div>
						</div>
						<div className="col-6 col d-flex">
							<div className="col-6">sdaf</div>
							<div className="col-6">sdaf</div>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default Modal;
