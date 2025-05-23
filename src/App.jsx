import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

// Layouts
import MainLayout from "./layouts/MainLayout.jsx";
import AuthLayout from "./layouts/AuthLayout";

// Authentication Pages
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

// Dashboard Pages
import Dashboard from "./pages/dashboard/Dashboard";

// Blog Pages
import BlogList from "./pages/blog/BlogList";
import AddBlog from "./pages/blog/AddBlog";
import EditBlog from "./pages/blog/EditBlog";
import BlogDetail from "./pages/blog/BlogDetail";

// Tour Pages
import TourList from "./pages/tour/TourList";
import AddTour from "./pages/tour/AddTour";
import TourDetail from "./pages/tour/TourDetail";

// Not Found Page
import NotFound from "./pages/NotFound";
import EditTour from "./pages/tour/EditTour";
import Profile from "./pages/profile/Profile";
import ListFood from "./pages/food/ListFood.jsx";
import AddFood from "./pages/food/AddFood.jsx";
import DetailFood from "./pages/food/DetailFood.jsx";
import EditFood from "./pages/food/EditFood.jsx";
import LocationList from "./pages/location/LocationList.jsx";
import AddLocation from "./pages/location/AddLocation.jsx";
import EditLocation from "./pages/location/EditLocation.jsx";
import LocationDetail from "./pages/location/LocationDetail.jsx";

const App = () => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    if (loading) {
        return null; // Or a loading spinner
    }

    return (
        <Routes>
            {/* Auth Routes */}
            <Route element={<AuthLayout />}>
                <Route
                    path="/signin"
                    element={!isAuthenticated ? <SignIn /> : <Navigate to="/dashboard" />}
                />
                <Route
                    path="/signup"
                    element={!isAuthenticated ? <SignUp /> : <Navigate to="/dashboard" />}
                />
            </Route>

            {/* Protected Routes */}
            <Route element={<MainLayout />}>
                <Route
                    path="/"
                    element={
                        isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />
                    }
                />
                <Route
                    path="/dashboard"
                    element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />}
                />

                <Route
                    path="/profile"
                    element={isAuthenticated ? <Profile /> : <Navigate to="/signin" />}
                />

                {/* Blog Routes */}
                <Route
                    path="/blogs"
                    element={isAuthenticated ? <BlogList /> : <Navigate to="/signin" />}
                />
                <Route
                    path="/blogs/add"
                    element={isAuthenticated ? <AddBlog /> : <Navigate to="/signin" />}
                />
                <Route
                    path="/blogs/edit/:id"
                    element={isAuthenticated ? <EditBlog /> : <Navigate to="/signin" />}
                />
                <Route
                    path="/blogs/:id"
                    element={isAuthenticated ? <BlogDetail /> : <Navigate to="/signin" />}
                />

                {/* Tour Routes */}
                <Route
                    path="/tours"
                    element={isAuthenticated ? <TourList /> : <Navigate to="/signin" />}
                />
                <Route
                    path="/tours/add"
                    element={isAuthenticated ? <AddTour /> : <Navigate to="/signin" />}
                />
                <Route
                    path="/tours/edit/:id"
                    element={isAuthenticated ? <EditTour /> : <Navigate to="/signin" />}
                />
                <Route
                    path="/tours/:id"
                    element={isAuthenticated ? <TourDetail /> : <Navigate to="/signin" />}
                />

                {/* Food Routes */}
                <Route
                    path="/food"
                    element={isAuthenticated ? <ListFood /> : <Navigate to="/signin" />}
                />
                <Route
                    path="/food/add"
                    element={isAuthenticated ? <AddFood /> : <Navigate to="/signin" />}
                />
                <Route
                    path="/food/:id"
                    element={isAuthenticated ? <DetailFood /> : <Navigate to="/signin" />}
                />
                <Route
                    path="/food/edit/:id"
                    element={isAuthenticated ? <EditFood /> : <Navigate to="/signin" />}
                />

                {/* Location Routes */}
                <Route
                    path="/location"
                    element={isAuthenticated ? <LocationList /> : <Navigate to="/signin" />}
                />
                <Route
                    path="/location/add"
                    element={isAuthenticated ? <AddLocation /> : <Navigate to="/signin" />}
                />
                <Route
                    path="/location/:id"
                    element={isAuthenticated ? <LocationDetail /> : <Navigate to="/signin" />}
                />
                <Route
                    path="/location/edit/:id"
                    element={isAuthenticated ? <EditLocation /> : <Navigate to="/signin" />}
                />
            </Route>

            {/* Not Found Route */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
