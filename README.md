<h1 align="center">Online Menu</h1>
</br>
</br>
<h3>🖥️ Overview</h3>
------------
<p>This is a Rest API that provides CRUD functionality (Create, Read, Update and Delete) products in a restaurant menu. This API also includes an authentication system using JWT (JSON Web Token).</p>
</br>
<h3>🦾 Technologies</h3>
------------
<ul>
  <li>Node.js: a JavaScript runtime built on Chrome's V8 JavaScript engine.</li>
  <li>Express.js: a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</li>
  <li>MongoDB: a cross-platform document-oriented database program that uses JSON-like documents with optional schemas.</li>
  <li>Mongoose: an Object Data Modeling (ODM) library for MongoDB and Node.js.</li>
  <li>JWT: a JSON-based open standard for creating access tokens that assert some number of claims.</li>
  <li>Joi: a validator library that can be used to validate user inputs and other data in Node.js.</li>
</ul>
</br>
<h3>Prerequisites</h3>
------------
<ul>
  <li>Node.js: 16.x.x</li>
  <li>Docker-compose: 3.9</li>
</ul>
</br>
<h3>Setup</h3>
------------
<ul>
  <li>Clone the repository: git clone git@github.com:your-username/online_menu.git</li>
  <li>Go to the project directory: cd fabrica_de_startup_test</li>
  <li>Install dependencies: npm install</li>
  <li>Start the application: npm run dev</li>
</ul>
</br>
<h3>Running with Docker</h3>
------------
<ul>
 <li>Clone the repository: git clone git@github.com:your-username/online_menu.git</li>
 <li>Go to the project directory: cd fabrica_de_startup_test</li>
 <li>Build the Docker image: docker-compose build</li>
 <li>Start the containers: docker-compose up -d</li>
</ul>
</br>
<h3>Endpoints</h3>
------------
<h5>Auth</h5>
<ul>
  <li>POST /auth/login: login with email and password to get a token</li>
</ul>
<h5>Categoria</h5>
<ul>
  <li>GET /category: get all categories</li>
</ul>
<h5>Produto</h5>
<ul>
  <li>GET /product: get all products</li>
  <li>GET /product/:id: get a product by id</li>
  <li>POST /product: create a new product</li>
  <li>PATCH /product/:id: update a product by id</li>
  <li>DELETE /product/:id: delete a product by id</li>
</ul>


