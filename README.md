# 🍽️ Foodiary API

API for **Foodiary**, an application that helps people track their diet and nutrition through photos or audio of their meals.  
The system uses **Artificial Intelligence** to identify food items and automatically calculate macronutrients (proteins, carbohydrates, and fats), making nutritional tracking practical and intelligent.

---

## 🛠 Technologies Used

- **Node.js** + **TypeScript** — Back-end foundation  
- **Serverless Framework** — Deployment and management of serverless functions (AWS Lambda + API Gateway) + **serverless-offline** — Local simulation of the serverless environment  
- **AWS SDK** — Integration with AWS services  
  - **S3** → File storage  
  - **SQS** → Message queue for asynchronous processing  
- **Drizzle ORM** — Database modeling and management  
- **Neon** (Serverless PostgreSQL) — Scalable relational database  
- **OpenAI API** — Food recognition and macronutrient calculation powered by AI  
- **Zod** — Data validation and type safety  
- **bcryptjs** — Password hashing  
- **JWT (jsonwebtoken)** — User authentication  

---

## 🌐 API Endpoints

The following HTTP endpoints are available when running the project (either locally with `serverless-offline` or deployed on AWS):

- **Auth**
  - `POST /signup` → Register a new user  
  - `POST /signin` → Authenticate a user and return an access token  
  - `GET /me` → Get authenticated user information  

- **Meals**
  - `POST /meals` → Register a new meal (supports image or audio input, processed with AI)  
  - `GET /meals` → List all meals for the authenticated user  
  - `GET /meals/{mealId}` → Get details of a specific meal  

---

## ⚙️ How to Clone and Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/VitinhoSouza/foodiary-api.git
cd foodiary-api
```

2. **Install the dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a .env file based on .env.example and configure:

```
DATABASE_URL="postgresql://user:password@host:port/dbname"
JWT_SECRET="your_secret_key"
OPENAI_API_KEY="your_openai_api_key"
```

4. **Run Drizzle migrations**

```
npx drizzle-kit migrate
```

5. **Start the serverless offline environment**

```
npm run dev
```

## ☁️ AWS Resources (created on deploy)

When deploying to AWS with the Serverless Framework, the following resources are automatically created and managed:

- **S3 Bucket** (`UploadsBucket`)  
  - Stores uploaded meal images and files  
  - Triggers the `fileUploadedEvent` Lambda on object creation  

- **SQS Queue** (`MealsQueue`)  
  - Handles asynchronous meal processing tasks  
  - Configured with a **Dead Letter Queue (DLQ)** (`MealsDLQ`) for failed messages  

> ⚠️ **Note**: Locally, these resources are mocked when using `serverless-offline`.  
For a complete local simulation (including S3 and SQS), you may need tools like **LocalStack** or **MinIO**.  

6. **The server will be available at:**

```
👉 http://localhost:3000
```
