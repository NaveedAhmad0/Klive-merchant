import React, { useState } from "react";
import styles from "./Modal.module.css";
import { useHistory } from "react-router-dom";

const Modal = ({ setIsOpen }) => {
	const [slipVerification, setSlipVerification] = useState("");
	const history = useHistory();

	// let date = moment().format("MM-DD-YYYY hh:mm:ss");
	// console.log("date", date);

	// async function onSubmit(event) {
	// 	event.preventDefault();
	// 	try {
	// 		console.log(Name);
	// 		axios
	// 			.post(
	// 				`https://backend.klivepay.com/api/merchant/withdrawRequest?merchantId=${merchId}`,
	// 				JSON.stringify({
	// 					Name,
	// 				}),
	// 				{
	// 					headers: { "Content-Type": "application/json" },
	// 					// withCredentials: true,
	// 				}
	// 			)
	// 			.then(() => {
	// 				history.push({
	// 					pathname: "/merchant/slip-verification",
	// 					state: {
	// 						invoiceId: showData.fastEasySlipNumber,
	// 						merchId: merchId,
	// 					},
	// 				});
	// 			});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}

	//eslint-disable-next-line no-restricted-globals

	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<p className={styles.heading}>Enter Slip verification Number</p>
					</div>

					<div className="col d-flex mt-4 justify-content-center">
						<div className={styles.modalContent}>
							{/* <div className={styles.key}>
								<h5>Name</h5>
							</div> */}
							<div className={`mt-5${styles.value}`}>
								<label>Slip No. :</label> <br />
								<input
									type="text"
									onChange={(e) => setSlipVerification(e.target.value)}
									value={slipVerification}
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
								<br />
								<div
									className="d-flex justify-content-around"
									style={{ width: "200px", alignContent: "end" }}>
									<button
										className="btn btn-danger mt-3"
										onClick={() => setIsOpen(false)}>
										Cancel
									</button>
									<button
										className="btn btn-success mt-3"
										onClick={(e) => {
											history.push({
												pathname: "/merchant/slip-verification",
												state: {
													slipVerification: slipVerification,
												},
											});
										}}>
										Submit
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.modalActions}>
						<div className={styles.actionsContainer}>
							{/* <button
								className={styles.deleteBtn}
								onClick={() => setIsOpen(false)}>
								Cancel
							</button>
							<button
								className={styles.confirmBtn}
								onClick={(e) => onSubmit(e)}>
								Submit
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
