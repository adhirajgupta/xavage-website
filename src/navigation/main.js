import React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
    Outlet,
    useNavigate,
} from 'react-router-dom';
import Landing from '../screens/LandingScreen/LandingScreen';
import Sponsor from '../screens/Information/SponsorScreen';
import InformationNavbar from '../screens/Information/InformationNavbar';
import EventPage from '../screens/EventPage/EventPage';
import ScrollToTop from '../ScrollToTop';
import CauseScreen from '../screens/Cause/CauseScreen';

const isAuthenticated = () => {
    // Add your authentication logic here
    // For example, check if a user token exists in localStorage or context
    return localStorage.getItem('utoken') !== null;
};


const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/auth/login" />;
};

const NotFound = () => {
    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

const Main = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<InformationNavbar />}>
                    <Route index element={<Landing />} />
                    <Route path="/cause" element={<CauseScreen />} />
                        <Route path="/sponsors" element={<Sponsor />} />

                    <Route path="event/:id" element={<EventPage />} />
                    
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default Main;
