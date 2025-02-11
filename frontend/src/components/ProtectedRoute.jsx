import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useSelector((state) => state.auth);

  console.log("ProtectedRoute - User:", user); // Debugging
  console.log("ProtectedRoute - Loading:", loading); // Debugging

  if (loading) {
    return <div className="loading-spinner">Loading...</div>; // Show a loading spinner while checking authentication
  }

  if (!user) {
    console.log("Redirecting to login..."); // Debugging
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return children; // Render the protected component
};

export default ProtectedRoute;