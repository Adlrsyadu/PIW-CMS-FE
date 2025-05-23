import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Chip,
} from '@mui/material';
import {
  Article as ArticleIcon,
  Map as MapIcon,
  Restaurant as RestaurantIcon,
  LocationOn as LocationOnIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data
const chartData = [
  { name: 'Jan', blogs: 4, tours: 2, foods: 3, locations: 5 },
  { name: 'Feb', blogs: 3, tours: 5, foods: 4, locations: 4 },
  { name: 'Mar', blogs: 2, tours: 7, foods: 5, locations: 3 },
  { name: 'Apr', blogs: 9, tours: 4, foods: 6, locations: 6 },
  { name: 'May', blogs: 5, tours: 8, foods: 7, locations: 7 },
  { name: 'Jun', blogs: 7, tours: 10, foods: 8, locations: 8 },
];

const recentBlogs = [
  { id: '1', title: 'Top 10 Travel Destinations', views: 345, date: new Date(2023, 9, 15) },
  { id: '2', title: 'Best Foods Around the World', views: 238, date: new Date(2023, 9, 12) },
  { id: '3', title: 'Tips for Budget Traveling', views: 427, date: new Date(2023, 9, 8) },
];

const recentTours = [
  { id: '1', title: 'Paris Walking Tour', bookings: 24, date: new Date(2023, 9, 16) },
  { id: '2', title: 'Tokyo Food Experience', bookings: 18, date: new Date(2023, 9, 10) },
  { id: '3', title: 'New York City Explorer', bookings: 32, date: new Date(2023, 9, 5) },
];

const recentFoods = [
  { id: '1', title: 'Spaghetti Carbonara', date: new Date(2023, 9, 14) },
  { id: '2', title: 'Margherita Pizza', date: new Date(2023, 9, 11) },
  { id: '3', title: 'Caesar Salad', date: new Date(2023, 9, 9) },
];

const recentLocations = [
  { id: '1', title: 'Sunny Beach', date: new Date(2023, 9, 13) },
  { id: '2', title: 'Mountain Retreat', date: new Date(2023, 9, 10) },
  { id: '3', title: 'City Skyline', date: new Date(2023, 9, 7) },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [totalTours, setTotalTours] = useState(0);
  const [totalFoods, setTotalFoods] = useState(0);
  const [totalLocations, setTotalLocations] = useState(0);
  
  useEffect(() => {
    // In a real app, this would be an API call
    setTotalBlogs(25);
    setTotalTours(18);
    setTotalFoods(15);
    setTotalLocations(10);
  }, []);
  
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'medium' }}>
        Dashboard
      </Typography>
      
      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 2,
              bgcolor: 'primary.main',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <ArticleIcon sx={{ fontSize: 40 }} />
              <Typography variant="h4">{totalBlogs}</Typography>
            </Box>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Total Blogs
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 2,
              bgcolor: 'secondary.main',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <MapIcon sx={{ fontSize: 40 }} />
              <Typography variant="h4">{totalTours}</Typography>
            </Box>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Total Tours
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 2,
              bgcolor: 'warning.main',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <RestaurantIcon sx={{ fontSize: 40 }} />
              <Typography variant="h4">{totalFoods}</Typography>
            </Box>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Total Foods
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 2,
              bgcolor: 'success.main',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <LocationOnIcon sx={{ fontSize: 40 }} />
              <Typography variant="h4">{totalLocations}</Typography>
            </Box>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Total Locations
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Chart */}
      <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Content Creation
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="blogs" name="Blogs" fill="#1976d2" />
            <Bar dataKey="tours" name="Tours" fill="#00796b" />
            <Bar dataKey="foods" name="Foods" fill="#f57c00" />
            <Bar dataKey="locations" name="Locations" fill="#388e3c" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
      
      {/* Recent Content */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Blogs
              </Typography>
              <List>
                {recentBlogs.map((blog, index) => (
                  <Box key={blog.id}>
                    <ListItem
                      button
                      onClick={() => navigate(`/blogs/${blog.id}`)}
                      sx={{ py: 1.5 }}
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                          <ArticleIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={blog.title}
                        secondary={
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                            <Chip
                              size="small"
                              label={`${blog.views} views`}
                              color="primary"
                              variant="outlined"
                              sx={{ mr: 1 }}
                            />
                            <Typography variant="caption" color="text.secondary">
                              {format(blog.date, 'MMM d, yyyy')}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < recentBlogs.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Tours
              </Typography>
              <List>
                {recentTours.map((tour, index) => (
                  <Box key={tour.id}>
                    <ListItem
                      button
                      onClick={() => navigate(`/tours/${tour.id}`)}
                      sx={{ py: 1.5 }}
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'secondary.main' }}>
                          <MapIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={tour.title}
                        secondary={
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                            <Chip
                              size="small"
                              label={`${tour.bookings} bookings`}
                              color="secondary"
                              variant="outlined"
                              sx={{ mr: 1 }}
                            />
                            <Typography variant="caption" color="text.secondary">
                              {format(tour.date, 'MMM d, yyyy')}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < recentTours.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Foods
              </Typography>
              <List>
                {recentFoods.map((food, index) => (
                  <Box key={food.id}>
                    <ListItem
                      button
                      onClick={() => navigate(`/food/${food.id}`)}
                      sx={{ py: 1.5 }}
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'warning.main' }}>
                          <RestaurantIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={food.title}
                        secondary={
                          <Typography variant="caption" color="text.secondary">
                            {format(food.date, 'MMM d, yyyy')}
                          </Typography>
                        }
                      />
                    </ListItem>
                    {index < recentFoods.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Locations
              </Typography>
              <List>
                {recentLocations.map((location, index) => (
                  <Box key={location.id}>
                    <ListItem
                      button
                      onClick={() => navigate(`/location/${location.id}`)}
                      sx={{ py: 1.5 }}
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'success.main' }}>
                          <LocationOnIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={location.title}
                        secondary={
                          <Typography variant="caption" color="text.secondary">
                            {format(location.date, 'MMM d, yyyy')}
                          </Typography>
                        }
                      />
                    </ListItem>
                    {index < recentLocations.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
