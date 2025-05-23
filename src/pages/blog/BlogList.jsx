import { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Grid,
    IconButton,
    CircularProgress,
    Paper,
} from "@mui/material";
import {
    Add as AddIcon,
    Visibility as VisibilityIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { generateImageUrl } from "../../utils/generateUrlImage";
import { VITE_BACKEND_URL } from "../../utils/core";

const BlogList = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch blogs from API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(VITE_BACKEND_URL + "/berita/", {
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error(`Failed to fetch blogs: ${response.statusText}`);
                }
                const data = await response.json();
                setBlogs(data?.data);
            } catch (err) {
                setError(err.message || "Failed to fetch blogs");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog post?")) {
            try {
                const response = await fetch(VITE_BACKEND_URL + `/berita/${id}`, {
                    method: "DELETE",
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error(`Failed to delete blog: ${response.statusText}`);
                }
                setBlogs(blogs.filter((blog) => blog.id !== id));
            } catch (error) {
                alert(error.message || "Failed to delete blog");
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
                    Blog Posts
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => navigate("/blogs/add")}
                >
                    Add New Blog
                </Button>
            </Box>

            {/* Blog List */}
            <Grid container spacing={3}>
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <Grid item xs={12} key={blog.id}>
                            <Card elevation={2} sx={{ borderRadius: 2 }}>
                                <CardContent sx={{ p: 0 }}>
                                    <Grid container>
                                        <Grid item xs={12} md={3}>
                                            <Box
                                                sx={{
                                                    height: "100%",
                                                    minHeight: 200,
                                                    backgroundImage: `url(${generateImageUrl(
                                                        blog.image
                                                    )})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={9}>
                                            <Box sx={{ p: 3 }}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "flex-start",
                                                    }}
                                                >
                                                    <Typography
                                                        variant="h5"
                                                        component="h2"
                                                        gutterBottom
                                                    >
                                                        {blog.name}
                                                    </Typography>
                                                    <Box>
                                                        <IconButton
                                                            color="primary"
                                                            onClick={() =>
                                                                navigate(`/blogs/${blog.id}`)
                                                            }
                                                        >
                                                            <VisibilityIcon />
                                                        </IconButton>
                                                        <IconButton
                                                            color="secondary"
                                                            onClick={() =>
                                                                navigate(`/blogs/edit/${blog.id}`)
                                                            }
                                                        >
                                                            <EditIcon />
                                                        </IconButton>
                                                        <IconButton
                                                            color="error"
                                                            onClick={() => handleDelete(blog.id)}
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Box>
                                                </Box>

                                                <Typography
                                                    variant="body1"
                                                    color="text.secondary"
                                                    gutterBottom
                                                >
                                                    {blog.content}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
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

export default BlogList;
