import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Paper, Button, CircularProgress } from "@mui/material";
import {
    ArrowBack as ArrowBackIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
} from "@mui/icons-material";
import { generateImageUrl } from "../../utils/generateUrlImage";
import { VITE_BACKEND_URL } from "../../utils/core";

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            setLoading(true);
            try {
                const response = await fetch(VITE_BACKEND_URL + `/event/${id}`, {
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error(`Failed to fetch blog: ${response.statusText}`);
                }
                const data = await response.json();
                setEvent(data?.data || data);
            } catch (err) {
                setError(err.message || "Failed to fetch blog");
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this blog post?")) {
            try {
                const response = await fetch(VITE_BACKEND_URL + `/event/${id}`, {
                    method: "DELETE",
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error(`Failed to delete blog: ${response.statusText}`);
                }
                navigate("/event");
            } catch (error) {
                setError(err.message || "Failed to delete event");
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
                    onClick={() => navigate("/event")}
                    sx={{ mt: 2 }}
                >
                    Back to events
                </Button>
            </Box>
        );
    }

    if (!blog) {
        return (
            <Box>
                <Typography variant="h5" color="error">
                    event post not found
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate("/event")}
                    sx={{ mt: 2 }}
                >
                    Back to Events
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
                    Event Details
                </Typography>
                <Box>
                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIcon />}
                        onClick={() => navigate("/event")}
                        sx={{ mr: 2 }}
                    >
                        Back to Events
                    </Button>
                    <EditIcon
                        color="secondary"
                        sx={{ cursor: "pointer", mr: 1 }}
                        onClick={() => navigate(`/events/edit/${blog.id}`)}
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
                        backgroundImage: `url(${generateImageUrl(blog.image)})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                <Box sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        {blog.name}
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                        {blog.content}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default BlogDetail;
