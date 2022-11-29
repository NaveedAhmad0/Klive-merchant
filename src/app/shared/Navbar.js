import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Trans } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
	let history = useHistory();
	const toggleOffcanvas = () => {
		document.querySelector(".sidebar-offcanvas").classList.toggle("active");
	};
	const toggleRightSidebar = () => {
		document.querySelector(".right-sidebar").classList.toggle("open");
	};

	return (
		<nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
			<div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
				<a
					className="navbar-brand brand-logo-mini align-self-center d-lg-none"
					href="!#"
					onClick={(evt) => evt.preventDefault()}>
					<img src={require("../../assets/images/logo-mini.svg")} alt="logo" />
				</a>
				<button
					className="navbar-toggler navbar-toggler align-self-center"
					type="button"
					onClick={() => document.body.classList.toggle("sidebar-icon-only")}>
					<i className="mdi mdi-menu"></i>
				</button>
				<ul className="navbar-nav navbar-nav-left header-links align-self-center">
					<li className="nav-item font-weight-semibold d-none  d-md-flex">
						Help : +050 2992 709
					</li>
					<li className="nav-item dropdown language-dropdown"></li>
				</ul>

				<ul className="navbar-nav navbar-nav-right">
					<li className="nav-item  nav-profile border-0 pl-4">
						<Dropdown>
							<Dropdown.Menu className="navbar-dropdown preview-list"></Dropdown.Menu>
						</Dropdown>
					</li>
					<li className="nav-item  nav-profile border-0"></li>

					<li className="nav-item  nav-profile border-0">
						<Dropdown>
							<Dropdown.Toggle className="nav-link count-indicator bg-transparent">
								{/* <img
									className="img-xs rounded-circle"
									src={require("../../assets/images/faces/face8.jpg")}
									alt="Profile"
								/> */}
								<FontAwesomeIcon className="fa-1x" icon={faUser} />
							</Dropdown.Toggle>
							<Dropdown.Menu className="preview-list navbar-dropdown pb-3">
								<Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0">
									<Link
										to="/merchant/reset-password"
										style={{ textDecoration: "none", color: "black" }}>
										Change Password
									</Link>
								</Dropdown.Item>
								{/* <Dropdown.Item
									className="dropdown-item preview-item d-flex align-items-center border-0"
									onClick={(evt) => evt.preventDefault()}>
									<Trans>Check Inbox</Trans>
								</Dropdown.Item> */}
								<Dropdown.Item
									className="dropdown-item preview-item d-flex align-items-center border-0"
									onClick={(evt) => {
										evt.preventDefault();
										localStorage.clear();
										history.push("/merchant/login");
									}}>
									<Trans>Sign Out</Trans>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>
				</ul>
				<button
					className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
					type="button"
					onClick={toggleOffcanvas}>
					<span className="mdi mdi-menu"></span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
