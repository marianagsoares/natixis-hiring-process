# 🚀 Natixis - Hiring Process

## 📋 About the Project

This repository contains automated tests developed for the Natixis technical challenge. The project includes API tests with Postman/Newman and E2E tests with Cypress for the Cypress Real World App platform.

---

## 🧪 First project: API Tests (Postman/Newman)

### 📋 Description

Collection of automated tests for the API with complete endpoint validations, including authentication, schemas, dynamic data, and performance metrics.

### 🔗 Tested Endpoints

#### Auth

| Method | Endpoint | Description | Status | Authentication |
|--------|----------|-------------|--------|----------------|
| `POST` | `/authenticate` | Authenticate user | ✅ 200 | ❌ Not Required |
| `POST` | `/forgot_password` | Send a token to user email | ✅ 200 | ❌ Not Required |
| `POST` | `/reset_password` | Reset user password | ✅ 200 | ❌ Not Required |

#### Users Collection

| Method | Endpoint | Description | Status | Authentication |
|--------|----------|-------------|--------|----------------|
| `GET` | `/users` | List all users | ✅ 200 | ✅ Required |
| `GET` | `/users/:id` | List a user by id | ✅ 200 | ✅ Required |
| `POST` | `/users` | Create a user | ✅ 201 | ❌ Not Required |
| `PUT` | `/users/:id` | Update a user by id | ✅ 200 | ✅ Required |
| `DELETE` | `/users/:id` | Delete a user by id | ✅ 200 | ✅ Required |

#### Products Collection

| Method | Endpoint | Description | Status | Authentication | Permissions |
|--------|----------|-------------|--------|----------------|-------------|
| `GET` | `/products` | List all products | ✅ 200 | ✅ Required | Admin |
| `GET` | `/products/:code` | List a product by code | ✅ 200 | ✅ Required | Admin |
| `POST` | `/products` | Create a product | ✅ 201 | ✅ Required | Admin |
| `PUT` | `/products/:code` | Update a product by code | ✅ 200 | ✅ Required | Admin |
| `DELETE` | `/products/:code` | Delete a product by code | ✅ 204 | ✅ Required | Admin |

### 🛠️ Step by step to run the tests

**Step 1: Import the Collection `mjv-final-project.postman_collection`**

1. Open Postman
2. Click on **"Import"**
3. Select the project collection file
4. Click on **"Import"**

**Step 2: Import the Environment**

1. In Postman, click on **"Import"**
2. Select the environment file `Local.postman_environment`
3. Click on **"Import"**

**Step 3: Configure the Environment**

1. Select the imported environment **"Local.postman_environment"**
2. Verify if the variables are configured:
   - `baseUrl`: API base URL

**Step 4: Run the Tests**

1. Hover over the collection
2. Click on the **"View more options"** button (three dots)
3. Click on **"Run"**
4. Select the desired tests
5. Select the correct environment
6. Click on **"Run [collection name]"**

### 🎯 Test Features

- ✅ **Authentication**: Token and credentials validation
- ✅ **Schema Validation**: JSON response structure
- ✅ **Dynamic Data**: Test data generation and manipulation
- ✅ **Performance**: API response time
- ✅ **Data Validation**: Required fields and formats
- ✅ **Status Codes**: HTTP response codes verification
- ✅ **Negative Tests**: Error scenario validation
- ✅ **Authorization**: Role-based access control validation

## 📈 Reports and Results

### 📊 Newman Report

- **Location**: `./newman/newman-report.html`
- Contains detailed API test results
- Includes performance and coverage metrics

---

## 🎭 Second project: E2E Tests (Cypress)

### 📋 Description

Automated tests for validating user registration and login functionality of the Cypress Real World App, including positive scenarios and exception handling.

### 🧪 Implemented Test Cases

#### **User Registration (Sign Up)**
- **TC001**: Successful user registration
- **TC002**: Validate error message when First Name field has fewer than 3 characters
- **TC003**: Validate error message when Last Name field has fewer than 3 characters
- **TC004**: Validate error message when Password field has fewer than 4 characters

#### **First User Login (Sign In)**
- **TC012**: Successful user login
- **TC014**: Validate error message when the username is correct and the password is incorrect
- **TC015**: Validate error message when the username is incorrect and the password is correct

### 🛠️ How to Run Cypress Tests

#### **Prerequisites**
- Node.js (version 14 or higher)
- npm

#### **Step 1: Install Dependencies**
```bash
cd cypress-realworld-app-frontend-testing
npm install
```

#### **Step 2: Run Tests (Interactive Mode)**
```bash
npm run test:ui
```

#### **Step 3: Run Tests (Headless Mode)**
```bash
npm run test
```

### ⚙️ Cypress Configuration

The project is configured with:
- **Base URL**: `http://localhost:3000`
- **Test Framework**: Cypress E2E Testing

**Note**: Make sure the Cypress Real World App is running locally on port 3000 before executing the tests.

---

## 🛠️ Technologies Used

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Newman](https://img.shields.io/badge/Newman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🖋 Author

<p align="center">Developed by Mariana Soares</p>

<div align="center">
   <br>
   <a href="mailto:marianasoares.ti@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
   <a href="https://www.linkedin.com/in/mariana-galindo-391413220/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
   <br>
</div>
