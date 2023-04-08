<h1 align="center">Online Menu</h1>
</br>
</br>
</br>
<h3>🖥️ Overview</h3>
------------
<p>This is a Rest API that provides CRUD functionality (Create, Read, Update and Delete) products in a restaurant menu. This API also includes an authentication system using JWT (JSON Web Token).</p>
</br>
<h3>🦾 Technologies</h3>
-Node.js: a JavaScript runtime built on Chrome's V8 JavaScript engine.
-Express.js: a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
-MongoDB: a cross-platform document-oriented database program that uses JSON-like documents with optional schemas.
-Mongoose: an Object Data Modeling (ODM) library for MongoDB and Node.js.
-JWT: a JSON-based open standard for creating access tokens that assert some number of claims.
-Joi: a validator library that can be used to validate user inputs and other data in Node.js.
</br>
<h3>Prerequisites</h3>
-Node.js: 16.x.x
-Docker-compose: 3.9
</br>
<h3>Setup</h3>
-Clone the repository: git clone git@github.com:RicardoCaselati/online_menu.git
-Go to the project directory: cd fabrica_de_startup_test
-Install dependencies: npm install
-Start the application: npm run dev
</br>
<h3>Running with Docker</h3>
-Clone the repository: git clone git@github.com:RicardoCaselati/online_menu.git
-Go to the project directory: cd fabrica_de_startup_test
-Build the Docker image: docker-compose build
-Start the containers: docker-compose up -d
</br>
<h3>Endpoints</h3>
</br>
<h5>Auth</h5>
-POST /auth/login: login with email and password to get a token
</br>
<h5>Categoria</h5>
-GET /category: get all categories
</br>
<h5>Produto</h5>
-GET /product: get all products
-GET /product:id: get a product by id
-POST /product: create a new product
-PATCH /product/:id: update a product by id
-DELETE /product:id: delete a product by id



