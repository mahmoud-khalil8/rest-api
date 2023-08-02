# REST API

This is a Node.js CRUD REST API for managing products. It provides endpoints to create, update, delete, and read product data.

## Features

- Create a new product
- Update an existing product
- Delete a product
- Retrieve product information

## Technologies Used

- Node.js
- Express.js:
- Prisma => PostgreSQL
## API Design

The REST API follows a standard design pattern for CRUD operations on products. It utilizes HTTP methods and corresponding endpoints:

- `POST /product`: Create a new product
- `PUT /product/:id`: Update an existing product by ID
- `DELETE /product/:id`: Delete a product by ID
- `GET /product/:id`: Retrieve product information by ID
- `GET /product`: Retrieve all products
---------------------------------------------------------------
- Postman
- ![Screenshot_1](https://github.com/mahmoud-khalil8/rest-api/assets/78821632/40a190e8-bc19-4760-9e9f-557b9f1a3fec)
- thunder client
![Screenshot_3](https://github.com/mahmoud-khalil8/rest-api/assets/78821632/ae271203-f545-4bac-b129-3fc8820b3c0b)

![Screenshot_4](https://github.com/mahmoud-khalil8/rest-api/assets/78821632/4f548e29-3312-48ff-a42a-fcdc7b763425)

## Database

The API uses PostgreSQL as the database management system. Prisma is employed as the ORM tool for handling database operations. The database schema includes a `products` table to store product information.
