import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Paper, Button, CircularProgress } from "@mui/material";
import {
    ArrowBack as ArrowBackIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
} from "@mui/icons-material";
import { mockLocations } from "../../utils/mockData";
import { generateImageUrl } from "../../utils/generateUrlImage";
import { VITE_BACKEND_URL } from "../../utils/core";

const LocationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            setLoading(true);
            try {
                const response = await fetch(VITE_BACKEND_URL + `/lokasi/${id}`, {
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error(`Failed to fetch blog: ${response.statusText}`);
                }
                const data = await response.json();
                setLocation(data?.data || []);
            } catch (err) {
                setError(err.message || "Failed to fetch blog");
            } finally {
                setLoading(false);
            }
        };

        fetchLocation();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this lokasi ?")) {
            try {
                const response = await fetch(VITE_BACKEND_URL + `/lokasi/${id}`, {
                    method: "DELETE",
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error(`Failed to delete lokasi: ${response.statusText}`);
                }
                navigate("/location");
            } catch (error) {
                setError(err.message || "Failed to delete lokasi");
            }
        }
    };

    if (loading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "400px",
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box>
                <Typography variant="h5" color="error">
                    {error}
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate("/blogs")}
                    sx={{ mt: 2 }}
                >
                    Back to location
                </Button>
            </Box>
        );
    }

    if (!location) {
        return (
            <Box>
                <Typography variant="h5" color="error">
                    Location not found
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate("/location")}
                    sx={{ mt: 2 }}
                >
                    Back to Locations
                </Button>
            </Box>
        );
    }

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Location Details
                </Typography>
                <Box>
                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIcon />}
                        onClick={() => navigate("/location")}
                        sx={{ mr: 2 }}
                    >
                        Back to Locations
                    </Button>
                    <EditIcon
                        color="secondary"
                        sx={{ cursor: "pointer", mr: 1 }}
                        onClick={() => navigate(`/location/edit/${location.id}`)}
                    />
                    <DeleteIcon color="error" sx={{ cursor: "pointer" }} onClick={handleDelete} />
                </Box>
            </Box>

            <Paper
                elevation={3}
                sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    mb: 4,
                }}
            >
                <Box
                    sx={{
                        height: 300,
                        backgroundImage: `url(${generateImageUrl(location.image)})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                <Box sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        {location.name}
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                        {location.content}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default LocationDetail;
