import { createContext, useContext, useState, useEffect } from "react";

// Create context
const AuthContext = createContext(undefined);

// Provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Check if user is already logged in (from local storage)
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    // Login function - posts to API endpoint
    const login = async (email, password) => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch("http://localhost:5555/user/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Failed to sign in");
            }

            const data = await response.json();
            const { user } = data;

            // Set user data or flag as authenticated
            const userData = { email }; // Minimal user data, adjust as needed
            localStorage.setItem("user", JSON.stringify(userData));
            setUser(user);
        } catch (err) {
            setError(err.message || "Invalid email or password");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Signup function (mock or real implementation)
    const signup = async (name, email, password) => {
        // Simulate API call or implement real signup
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const userData = {
            id: "1",
            name,
            email,
            role: "admin",
        };

        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };

    // Logout function
    const logout = async () => {
        try {
            await fetch("http://localhost:5555/user/signout", {
                method: "GET",
                credentials: "include",
            });
        } catch (error) {
            console.error("Error during signout:", error);
        }
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                loading,
                error,
                login,
                signup,
                logout,
                setUser,
                setError,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
