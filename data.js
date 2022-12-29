const bcrypt = require('bcryptjs');

const data = {
	users: [
		{
			name: 'admin',
			email: 'admin@example.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: true,
		},
		{
			name: 'John',
			email: 'user@example.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: false,
		}
	],
	products: [
		{
			// _id: '1',
			name: 'Nike Slim shirt',
			slug: 'nike-slim-shirt',
			category: 'Shirts',
			image: '/images/p1.jpg', // 679 x 829
			price: 120,
			countInStock: 10,
			brand: 'Nike',
			rating: 4.5,
			numReviews: 10,
			description: 'high quality shirt',
		},
		{
			// _id: '2',
			name: 'Adidas Fit shirt',
			slug: 'adidas-fit-shirt',
			category: 'Shirts',
			image: '/images/p2.jpg', // 679 x 829
			price: 250,
			countInStock: 0,
			brand: 'Adidas',
			rating: 4.5,
			numReviews: 10,
			description: 'high quality product',
		},
		{
			// _id: '3',
			name: 'Nike Slim Pant',
			slug: 'nike-slim-pant',
			category: 'Pants',
			image: '/images/p3.jpg', // 679 x 829
			price: 25,
			countInStock: 15,
			brand: 'Nike',
			rating: 4.5,
			numReviews: 14,
			description: 'high quality product',
		},
		{
			// _id: '4',
			name: 'Adidas Fit Pant',
			slug: 'adidas-fit-pant',
			category: 'Pants',
			image: '/images/p4.jpg', // 679 x 829
			price: 65,
			countInStock: 5,
			brand: 'Puma',
			rating: 4.5,
			numReviews: 10,
			description: 'high quality product',
		},
	],
};

module.exports = data;