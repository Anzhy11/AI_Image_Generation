# ALX Porfolio Project - AI Image Generation App

<a href="https://ai-image-generator-alx.netlify.app/">
    <img src="https://i.imgur.com/R3SITjN.png" alt="AI-image-Generator" title="AI_Image_Generator">
</a>

AI Image Generation App using DALL·E API
This project is an AI Image Generation app that utilizes the DALL·E API for generating images. DALL·E is a deep learning model developed by OpenAI that can generate images from textual descriptions.

## Table of content

- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Getting Started](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend installation](#backend-installation)
  - [Backend Configuration](#backend-configuration)
  - [Frontend Installation](#frontend-installation)
  - [Frontend Configuration](#frontend-configuration)
- [Usage](#usage)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Futures](#future)
- [Authors](#authors)
  - [Ahmed Adebayo](#ahmed-adebay)
  - [Aminat Adebayo](#aminat-adebayo)
- [Acknowledgments](#acknowledgements)
- [Contact](#contact)

## Technologies Used

- DALL·E API
- Cloudinary
- MERN stack (MongoDB, Express.js, React.js, Node.js)

## Screenshots

<img width=50% src="https://i.imgur.com/93KrDYu.png">

<img width=50% src="https://i.imgur.com/UYtzpLE.png">

<img width=50% src="https://i.imgur.com/UVMONxR.png">

<img width=50% src="https://i.imgur.com/VX4u53m.png">

## Getting Started

## Prerequisites

- Node.js (version 12 or above)
- npm (version 6 or above)

## Installation

Clone the repository:

```
git clone https://github.com/Anzhy11/AI_Image_Generation.git
```

### Backend installation

Navigate to the project directory:

```
cd ai-image-generation-app/server
```

Install dependencies:

```
npm install
```

### Backend Configuration

Visit MongoDB Atlas to get a MongoDB URI. Follow the MongoDB documentation to get the URI.
To use the DALL·E API, you need to obtain an API key from OpenAI. Follow the OpenAI documentation to create an account and generate an API key.
To use the Cloudinary cloud storage, you need to obtain a Cloudinary cloud name, API key, and API secrete from Cloudinary. Follow the Cloudinary documentation to create an account and generate details.

Once you have the details, create a .env file in the project root directory and add the following line:

```
MONGODB_URL= your-mongodb-uri
OPENAI_API_KEY = your-openapi-key
CLOUDINRY_CLOUD_NAME = your-cloudinary-cloud-name
CLOUDINRY_API_KEY = your-cloudinary-api-key
CLOUDINRY_API_SECRETE = your-cloudinary-api-secret
```

Replace your-\* with your details.

### Frontend Installation

Navigate to the project directory:

```
cd ai-image-generation-app/client
```

Install dependencies:

```
npm install
```

### Frontend Configuration

Change the fetch url to your backend url.

## Usage

Open two separate terminals

### Backend

Start the application:

```
npm start
```

### Frontend

Start the application:

```
npm run dev
```

Open your web browser and navigate to http://localhost:3000 to access the AI Image Generation app.

Enter a textual description in the provided input field.

Click the "Generate Image" button to generate an image based on the description.

The generated image will be displayed on the screen.

Click the share button to share the image.

## Features:

- Generate high-quality images based on textual descriptions
- Easy-to-use interface for entering descriptions and viewing generated images
- Fast and efficient image generation using the DALL·E API
- Image cloud storage using Cloudinary

## Authors:

- Ahmed Adebayo: [GitHub](https://github.com/anzhy11) || [Article](https://www.linkedin.com/pulse/building-ai-image-generator-using-mern-stack-dalle-api-ahmed-adebayo) || [LinkedIn](https://www.linkedin.com/in/ahmed-adebayo-a84676236)
- Aminat Adebayo: [GitHub](https://github.com/aminat27)

License
This project is licensed under the MIT License.

## Acknowledgements

OpenAI for developing the DALL·E model and providing the API.
Cloudinary for cloud storage.
React for the UI framework.
Node.js and Express for the server-side implementation.

## Contact

For any questions or inquiries, please contact a.adelat@gmail.com.
