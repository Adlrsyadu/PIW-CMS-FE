// Mock blogs data
export const mockBlogs = [
    {
        id: "1",
        title: "Top 10 Travel Destinations for 2023",
        content:
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p><p>Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>",
        excerpt:
            "Discover the most beautiful places to visit this year and plan your next adventure.",
        coverImage:
            "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        author: "John Doe",
        category: "Travel",
        tags: ["travel", "destinations", "2023"],
        createdAt: new Date(2023, 9, 15),
        updatedAt: new Date(2023, 9, 15),
        published: true,
        views: 345,
    },
    {
        id: "2",
        title: "Best Foods Around the World",
        content:
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p><p>Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>",
        excerpt: "A culinary journey through different cultures and their iconic dishes.",
        coverImage:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        author: "Jane Smith",
        category: "Food",
        tags: ["food", "cuisine", "culture"],
        createdAt: new Date(2023, 9, 12),
        updatedAt: new Date(2023, 9, 12),
        published: true,
        views: 238,
    },
    {
        id: "3",
        title: "Tips for Budget Traveling",
        content:
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p><p>Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>",
        excerpt: "Learn how to travel the world without breaking the bank with these easy tips.",
        coverImage:
            "https://images.pexels.com/photos/6249089/pexels-photo-6249089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        author: "Mike Johnson",
        category: "Travel",
        tags: ["budget", "travel", "tips"],
        createdAt: new Date(2023, 9, 8),
        updatedAt: new Date(2023, 9, 8),
        published: true,
        views: 427,
    },
    {
        id: "4",
        title: "The Rise of Sustainable Tourism",
        content:
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p><p>Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>",
        excerpt: "How responsible travel is shaping the future of the tourism industry.",
        coverImage:
            "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        author: "Sarah Lewis",
        category: "Sustainability",
        tags: ["eco-friendly", "sustainable", "tourism"],
        createdAt: new Date(2023, 9, 5),
        updatedAt: new Date(2023, 9, 5),
        published: true,
        views: 183,
    },
    {
        id: "5",
        title: "Photography Tips for Travelers",
        content:
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p><p>Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>",
        excerpt: "Capture stunning travel memories with these professional photography techniques.",
        coverImage:
            "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        author: "Alex Green",
        category: "Photography",
        tags: ["photography", "travel", "tips"],
        createdAt: new Date(2023, 9, 2),
        updatedAt: new Date(2023, 9, 2),
        published: true,
        views: 275,
    },
];

// Mock tours data
export const mockTours = [
    {
        id: "1",
        title: "Paris Walking Tour",
        description:
            "Explore the romantic streets of Paris with our expert guide. Visit iconic landmarks, charming cafes, and hidden gems that most tourists miss.",
        duration: 3,
        price: 49.99,
        location: "Paris, France",
        image: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        maxGroupSize: 12,
        difficulty: "easy",
        startDates: [new Date(2023, 10, 15), new Date(2023, 11, 5), new Date(2024, 0, 10)],
        createdAt: new Date(2023, 9, 16),
        updatedAt: new Date(2023, 9, 16),
        featured: true,
        bookings: 24,
    },
    {
        id: "2",
        title: "Tokyo Food Experience",
        description:
            "Savor the authentic flavors of Tokyo in this culinary adventure. From street food to high-end sushi, experience the diverse food culture of Japan's capital.",
        duration: 4,
        price: 79.99,
        location: "Tokyo, Japan",
        image: "https://images.pexels.com/photos/161401/tokyo-night-view-picture-city-landscape-161401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        maxGroupSize: 8,
        difficulty: "medium",
        startDates: [new Date(2023, 10, 20), new Date(2023, 11, 12), new Date(2024, 0, 15)],
        createdAt: new Date(2023, 9, 10),
        updatedAt: new Date(2023, 9, 10),
        featured: true,
        bookings: 18,
    },
    {
        id: "3",
        title: "New York City Explorer",
        description:
            "Discover the iconic landmarks and vibrant neighborhoods of the Big Apple. From Central Park to Brooklyn Bridge, experience the energy of NYC.",
        duration: 5,
        price: 89.99,
        location: "New York, USA",
        image: "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        maxGroupSize: 15,
        difficulty: "medium",
        startDates: [new Date(2023, 10, 8), new Date(2023, 11, 20), new Date(2024, 0, 5)],
        createdAt: new Date(2023, 9, 5),
        updatedAt: new Date(2023, 9, 5),
        featured: true,
        bookings: 32,
    },
    {
        id: "4",
        title: "Bali Paradise Island",
        description:
            "Relax on pristine beaches, explore ancient temples, and immerse yourself in the rich culture of Bali. Perfect for those seeking both adventure and relaxation.",
        duration: 7,
        price: 129.99,
        location: "Bali, Indonesia",
        image: "https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        maxGroupSize: 10,
        difficulty: "easy",
        startDates: [new Date(2023, 10, 25), new Date(2023, 11, 15), new Date(2024, 0, 20)],
        createdAt: new Date(2023, 8, 28),
        updatedAt: new Date(2023, 8, 28),
        featured: false,
        bookings: 15,
    },
    {
        id: "5",
        title: "Hiking the Swiss Alps",
        description:
            "Challenge yourself with breathtaking hikes through the majestic Swiss Alps. Experience stunning mountain views, crystal-clear lakes, and charming villages.",
        duration: 6,
        price: 149.99,
        location: "Swiss Alps, Switzerland",
        image: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        maxGroupSize: 8,
        difficulty: "difficult",
        startDates: [new Date(2023, 10, 10), new Date(2023, 11, 8), new Date(2024, 5, 12)],
        createdAt: new Date(2023, 8, 20),
        updatedAt: new Date(2023, 8, 20),
        featured: false,
        bookings: 9,
    },
];

export const mockFoods = [
    {
        id: "1",
        title: "Spaghetti Carbonara",
        description: "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
        price: 12.99,
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "2",
        title: "Margherita Pizza",
        description: "Traditional pizza with fresh tomatoes, mozzarella cheese, and basil.",
        price: 10.99,
        image: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "3",
        title: "Caesar Salad",
        description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        price: 8.99,
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
];

// Mock locations data
export const mockLocations = [
    {
        id: "1",
        title: "Sunny Beach",
        description: "A beautiful sunny beach with golden sand and clear waters.",
        image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "2",
        title: "Mountain Retreat",
        description: "A peaceful mountain retreat surrounded by nature.",
        image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "3",
        title: "City Skyline",
        description: "A vibrant city skyline with modern architecture.",
        image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "4",
        title: "Forest Trail",
        description: "A scenic forest trail perfect for hiking and nature walks.",
        image: "https://images.pexels.com/photos/4827/nature-forest-industry-rails.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "5",
        title: "Desert Dunes",
        description: "Expansive desert dunes with stunning sunset views.",
        image: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "6",
        title: "Lakeside Cabin",
        description: "A cozy cabin by the lake surrounded by trees.",
        image: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "7",
        title: "Historic Castle",
        description: "An ancient castle with rich history and stunning views.",
        image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "8",
        title: "Tropical Paradise",
        description: "A tropical paradise with palm trees and crystal-clear water.",
        image: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "9",
        title: "Snowy Mountains",
        description: "Snow-covered mountains perfect for winter sports.",
        image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "10",
        title: "Countryside Farm",
        description: "A charming countryside farm with rolling hills.",
        image: "https://images.pexels.com/photos/4827/nature-forest-industry-rails.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
];
