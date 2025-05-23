import { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Grid,
    IconButton,
    Tooltip,
    Paper,
    CircularProgress,
} from "@mui/material";
import {
    Add as AddIcon,
    Visibility as VisibilityIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { generateImageUrl } from "../../utils/generateUrlImage";
import { VITE_BACKEND_URL } from "../../utils/core";

const LocationList = () => {
    const navigate = useNavigate();
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch blogs from API
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await fetch(VITE_BACKEND_URL + "/lokasi/", {
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error(`Failed to fetch locations: ${response.statusText}`);
                }
                const data = await response.json();
                setLocations(data?.data);
            } catch (err) {
                setError(err.message || "Failed to fetch blogs");
            } finally {
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    // Delete location (mock)
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog post?")) {
            try {
                const response = await fetch(VITE_BACKEND_URL + `/lokasi/${id}`, {
                    method: "DELETE",
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error(`Failed to delete lokasi: ${response.statusText}`);
                }
                setLocations(locations.filter((location) => location.id !== id));
            } catch (error) {
                alert(error.message || "Failed to delete lokasi");
            }
        }
    };

    if (loading) {
        return (
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography color="error">{error}</Typography>
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
                    Location List
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => navigate("/location/add")}
                >
                    Add New Location
                </Button>
            </Box>

            <Grid container spacing={3}>
                {locations?.length > 0 ? (
                    locations?.map((location) => (
                        <Grid item xs={12} md={6} lg={4} key={location.id}>
                            <Card
                                elevation={2}
                                sx={{
                                    borderRadius: 2,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 200,
                                        backgroundImage: `url(${generateImageUrl(location.image)})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                />

                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <Typography variant="h6" component="h2" gutterBottom>
                                            {location.name}
                                        </Typography>
                                        <Box>
                                            <Tooltip title="View">
                                                <IconButton
                                                    size="small"
                                                    color="primary"
                                                    onClick={() =>
                                                        navigate(`/location/${location.id}`)
                                                    }
                                                >
                                                    <VisibilityIcon />
                                                </IconButton>
                                            </Tooltip>

                                            <Tooltip title="Edit">
                                                <IconButton
                                                    size="small"
                                                    color="secondary"
                                                    onClick={() =>
                                                        navigate(`/location/edit/${location.id}`)
                                                    }
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </Tooltip>

                                            <Tooltip title="Delete">
                                                <IconButton
                                                    size="small"
                                                    color="error"
                                                    onClick={() => handleDelete(location.id)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </Box>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mt: 2, minHeight: "4em" }}
                                    >
                                        {location?.content.length > 100
                                            ? `${location.content.substring(0, 100)}...`
                                            : location.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <Paper elevation={2} sx={{ p: 4, borderRadius: 2, textAlign: "center" }}>
                            <Typography>No food items found.</Typography>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default LocationList;
