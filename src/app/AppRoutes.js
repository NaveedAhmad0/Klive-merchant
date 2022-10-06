import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

// const HomePage = lazy(() => import("../Homepage/HomePage"));
const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

// -------------------------------- MERCHANT PANEL IMPORTS ---------------------------------------------

const MerchantDashboard = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Merchant-Dashboard/MerchantDashboard"
	)
);
const MerchantRegistration = lazy(() =>
	import("../Merchant Panel/Merchant-Panel-Pages/Merchant-Auth/Register")
);
const MerchantLogin = lazy(() =>
	import("../Merchant Panel/Merchant-Panel-Pages/Merchant-Auth/Login")
);
const MerchantForgotPassowrd = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Components/Forgot password/MerchantForgotPassword"
	)
);

const MerchantProfile = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Merchant-Profile/MerchantProfile"
	)
);
const MerchantChangePassword = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Merchant-Change-Password/UserChangePassword"
	)
);
const GetMerchantProfile = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Components/Get user Profile/GetUserProfile"
	)
);

const MerchantUserDeposits = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Merchant-User-Deposits/MerchantUserDeposits"
	)
);

const MerchantTransactionHistory = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Merchant-Transaction-History/MerchantTransactionHistory"
	)
);

const DepositsToMerchant = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Deposits-To-Merchant/DepositsToMerchant"
	)
);
const CreateInvoice = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Deposits-To-Merchant/CreateInvoice"
	)
);
const ListOfInvoice = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Deposits-To-Merchant/ListOfInvoice"
	)
);

const WithdrawalRequest = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/WithdrawalRequest/WithdrawalRequest"
	)
);

class AppRoutes extends Component {
	render() {
		return (
			<Suspense fallback={<Spinner />}>
				<Switch>
					{/* <Route exact path="/homepage" component={HomePage} /> */}
					{/* <Route exact path="/homepage" component={UserLogin} /> */}
					<Route path="/basic-ui/buttons" component={Buttons} />
					<Route path="/basic-ui/dropdowns" component={Dropdowns} />

					<Route
						path="/form-Elements/basic-elements"
						component={BasicElements}
					/>

					<Route path="/tables/basic-table" component={BasicTable} />

					<Route path="/icons/mdi" component={Mdi} />

					<Route path="/charts/chart-js" component={ChartJs} />

					<Route path="/user-pages/login-1" component={Login} />
					<Route path="/user-pages/register-1" component={Register1} />

					{/*------------------------- MERCHANT PANEL ROUTES -------------------------- */}

					<Route path="/merchant/dashboard" component={MerchantDashboard} />
					{/* <Route path="/merchant/profile" component={MerchantProfile} /> */}
					<Route
						path="/merchant/reset-password"
						component={MerchantChangePassword}
					/>
					<Route
						path="/merchant/forgot-password"
						component={MerchantForgotPassowrd}
					/>
					<Route
						exact
						path="/merchant/registration"
						component={MerchantRegistration}
					/>

					<Route exact path="/merchant/login" component={MerchantLogin} />
					<Route
						path="/merchant/merchant-user-deposits"
						component={MerchantUserDeposits}
					/>

					<Route
						path="/merchant/transactionhistory"
						component={MerchantTransactionHistory}
					/>

					<Route
						path="/merchant/deposits-to-merchant"
						component={DepositsToMerchant}
					/>
					<Route path="/merchant/createinvoice" component={CreateInvoice} />
					<Route path="/merchant/listofinvoice" component={ListOfInvoice} />

					<Route
						path="/merchant/withdrawalrequest"
						component={WithdrawalRequest}
					/>
					<Route path="/merchant/profile" component={MerchantProfile} />

					{/*---------------------------- ERROR PAGE ------------------ */}

					<Route path="/error-pages/error-404" component={Error404} />
					<Route path="/error-pages/error-500" component={Error500} />

					<Redirect to="/merchant/login" />
				</Switch>
			</Suspense>
		);
	}
}

export default AppRoutes;
