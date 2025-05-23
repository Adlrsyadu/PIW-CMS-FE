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
    Chip,
    CircularProgress,
} from "@mui/material";
import {
    Add as AddIcon,
    Visibility as VisibilityIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { mockTours } from "../../utils/mockData";
import { generateImageUrl } from "../../utils/generateUrlImage";
import { VITE_BACKEND_URL } from "../../utils/core";

const TourList = () => {
    const navigate = useNavigate();
    const [tours, setTours] = useState(mockTours);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch(VITE_BACKEND_URL + "/rekreasi", {
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error(`Failed to fetch rekreasi: ${response.statusText}`);
                }
                const data = await response.json();
                setTours(data?.data);
            } catch (err) {
                setError(err.message || "Failed to fetch rekerasi");
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this rekreasi?")) {
            try {
                const response = await fetch(VITE_BACKEND_URL + `/rekreasi/${id}`, {
                    method: "DELETE",
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error(`Failed to delete tour: ${response.statusText}`);
                }
                setTours(tours.filter((tour) => tour.id !== id));
            } catch (error) {
                alert(error.message || "Failed to delete tour");
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
                    Tours
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => navigate("/tours/add")}
                >
                    Add New Tour
                </Button>
            </Box>

            {/* Tour List */}
            <Grid container spacing={3}>
                {tours.length > 0 ? (
                    tours.map((tour) => (
                        <Grid item xs={12} md={6} lg={4} key={tour.id}>
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
                                        backgroundImage: `url(${generateImageUrl(tour.image)})`,
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
                                            {tour.name}
                                        </Typography>
                                        <Box>
                                            <Tooltip title="View">
                                                <IconButton
                                                    size="small"
                                                    color="primary"
                                                    onClick={() => navigate(`/tours/${tour.id}`)}
                                                >
                                                    <VisibilityIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Edit">
                                                <IconButton
                                                    size="small"
                                                    color="secondary"
                                                    onClick={() =>
                                                        navigate(`/tours/edit/${tour.id}`)
                                                    }
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete">
                                                <IconButton
                                                    size="small"
                                                    color="error"
                                                    onClick={() => handleDelete(tour.id)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </Box>

                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                    >
                                        Price: Rp. {tour.harga}
                                    </Typography>

                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                        Tag : {tour.tag}
                                    </Box>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mt: 2, minHeight: "4em" }}
                                    >
                                        {tour.content.length > 100
                                            ? `${tour.content.substring(0, 100)}...`
                                            : tour.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <Paper elevation={2} sx={{ p: 4, borderRadius: 2, textAlign: "center" }}>
                            <Typography>No tours found.</Typography>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default TourList;
