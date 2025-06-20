import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Paper,
    CircularProgress,
    Alert,
} from "@mui/material";
import { Save as SaveIcon, ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { generateImageUrl } from "../../utils/generateUrlImage";
import { VITE_BACKEND_URL } from "../../utils/core";

const EditEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Form state
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");

    useEffect(() => {
        const fetchEvent = async () => {
            setLoading(true);
            try {
                const response = await fetch(VITE_BACKEND_URL + `/event/${id}`, {
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error(`Failed to fetch event: ${response.statusText}`);
                }
                const data = await response.json();
                setTitle(data?.data?.name || "");
                setDescription(data?.data?.content || "");
                setImagePreview(generateImageUrl(data?.data?.image));
            } catch (err) {
                setError(err.message || "Failed to fetch event");
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id]);

    // Handle image file change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || (!imageFile && !imagePreview)) {
            setError("Please fill out all required fields");
            return;
        }

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const formData = new FormData();
            formData.append("name", title);
            formData.append("content", description);
            if (imageFile) {
                formData.append("file", imageFile);
            }

            const response = await fetch(VITE_BACKEND_URL + `/event/${id}`, {
                method: "PUT",
                body: formData,
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error(`Failed to update event: ${response.statusText}`);
            }

            setSuccess("Event updated successfully");
            setTimeout(() => navigate("/events"), 1000);
        } catch (err) {
            setError(err.message || "Failed to update event");
        } finally {
            setLoading(false);
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
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate("/events")}
                    sx={{ mt: 2 }}
                >
                    Back to events
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
                    Edit Event
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate("/events")}
                >
                    Back to Events
                </Button>
            </Box>

            <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                {success && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        {success}
                    </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Event Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                variant="outlined"
                                multiline
                                rows={4}
                            />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            style={{ display: "flex", flexDirection: "column", gap: 30 }}
                        >
                            {imagePreview && (
                                <Box
                                    component="img"
                                    src={imagePreview}
                                    alt="Image Preview"
                                    sx={{ mt: 2, maxWidth: "50%" }}
                                />
                            )}
                            <Button
                                variant="contained"
                                component="label"
                                style={{ width: "fit-content" }}
                            >
                                Upload Image
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={handleImageChange}
                                />
                            </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button
                                    variant="outlined"
                                    sx={{ mr: 2 }}
                                    onClick={() => navigate("/events")}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    startIcon={
                                        loading ? (
                                            <CircularProgress size={20} color="inherit" />
                                        ) : (
                                            <SaveIcon />
                                        )
                                    }
                                    disabled={loading}
                                >
                                    {loading ? "Saving..." : "Save Changes"}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
};

export default EditEvent;
