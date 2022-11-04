import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router';
import {HashRouter as Router} from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import {useSelector} from './reducers';
import ErrorBoundary from './components/ErrorBoundary';
import Createcollection from './views/Createcollection';
import Lists from './views/Lists';
import Collections from './views/Collections';
import Wallet from './views/Wallet';
import Layout from './components/Layout';

// views code split
const Loading = () => <div>Loading!...</div>;
const HomeView = React.lazy(() => import('./views/HomeView' /* webpackChunkName: "home-view" */));
const LoginView = React.lazy(() => import('./views/LoginView' /* webpackChunkName: "login-view" */));
const SecretView = React.lazy(() => import('./views/SecretView' /* webpackChunkName: "secret-view" */));
const BrokenView = React.lazy(() => import('./views/BrokenView' /* webpackChunkName: "broken-view" */));
const ErrorView = React.lazy(() => import('./views/ErrorView' /* webpackChunkName: "error-view" */));

const App: React.FC = () => {
	const isLoggedIn = useSelector((state) => state.app.isLoggedIn);
	return (
		<Router>
					<ErrorBoundary onError={ErrorView}>
							<Suspense fallback={<Loading />}>
								<Layout />
								<Routes>
									<Route path="/" element={<HomeView />} />
									<Route path="/Createcollection" element={<Createcollection />} />
									<Route path="/Collections" element={<Collections />} />
									<Route path="/Lists" element={<Lists />} />
									<Route path="/Wallet" element={<Wallet />} />
									<Route path="/login" element={<LoginView />} />
									<Route path="/secret" element={<PrivateComponent isValid={isLoggedIn} failPath="/login" element={<SecretView />} />} />
									<Route path="/broken" element={<BrokenView />} />
									<Route path="/_error" element={<ErrorView error={new Error('demo error')} onClear={() => console.log('reset')} />} />
								</Routes>
							</Suspense>
					</ErrorBoundary>
		</Router>
	);
};

export default App;
