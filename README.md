# TripVault - Your All in One Travel Companion

TripVault is a collaborative trip and event management platform that consolidates all aspects of group travel planning into one unified workspace. From initial brainstorming to post trip memories, friends can plan itineraries, split expenses, share photos, and coordinate activities in real time eliminating the need to juggle multiple apps.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Authentication](#authentication)
- [Real-time Features](#real-time-features)
- [Settlement Algorithm](#settlement-algorithm)
- [Security Features](#security-features)

## Overview

TripVault is a modern expense management system designed for group trips. It helps users track expenses, split costs automatically, calculate settlements, manage trip-related activities collaboratively, and share memorable moments through photos and captures. Built with Next.js, Express.js, MongoDB, and Clerk authentication, it provides a seamless experience with real-time updates via Socket.io.

Whether you're planning a weekend getaway or an extended vacation, TripVault keeps your trip organized with expense tracking, settlement calculations, collaborative idea boards, and photo sharing capabilities - all in one place.

### Key Highlights

-  **Complete Expense Management** - Track, categorize, and split expenses effortlessly
-  **Smart Settlement Calculator** - Automatically calculates who owes whom with optimized transactions
-  **Real-time Updates** - Live synchronization across all users
-  **Comprehensive Analytics** - Visual insights into spending patterns
-  **Secure Authentication** - Clerk-powered authentication with JWT tokens
-  **Payment QR Codes** - Easy payment tracking with QR code uploads
-  **Receipt Management** - Upload and view expense receipts
-  **Export Functionality** - Export expenses as PDF or CSV
-  **Idea Board** - Collaborative trip planning with ideas and suggestions
-  **Transaction Logging** - Complete audit trail of all activities
-  **Captures & Moments** - Share photos and capture memorable trip moments with your group

## Features

### Expense Management
- Create, read, update, and delete expenses
- Category-based expense tracking (Food, Transport, Accommodation, Activities, Shopping, Other)
- Split expenses among multiple trip members
- Upload and view receipt images
- Date-based expense organization
- Per-person split amount calculation
- Export expenses as PDF or CSV

### Settlement System
- Automatic calculation of who owes whom
- Optimized algorithm to minimize transactions
- Mark settlements as paid
- Settlement history tracking
- Payment QR code integration
- Visual "from → to" representation

### Analytics & Reporting
- Budget vs Actual expenses comparison
- Category-wise expense breakdown
- Visual progress bars with color coding
- Spending statistics and trends
- Transaction log with filtering
- Export capabilities (PDF)

### Trip Management
- Create and manage multiple trips
- Add/remove trip members
- Budget tracking and monitoring
- Admin permissions and roles
- Trip details and statistics
- Member management

### Idea Board
- Collaborative trip planning
- Add ideas with location, time, and tags
- Search and filter ideas
- Delete ideas
- Trip specific idea management

### Captures & Moments
- Share photos and moments from your trip
- Upload multiple images per capture
- Add captions and descriptions
- View gallery of all trip captures
- Like and comment on captures
- Date and location tagging
- Real-time updates when new captures are added
- Filter captures by date or location

### User Management
- Clerk authentication integration
- User profile management
- Payment QR code upload
- Profile picture support
- Secure session management

### Real-time Features
- Live expense updates
- Real time settlement changes
- Instant payment notifications
- Live capture sharing and updates
- Socket.io based communication
- Room based messaging per trip
- Real time notifications for new captures, likes, and comments

### Transaction Logging
- Complete audit trail
- Activity type filtering
- User attribution
- Timestamp tracking
- Statistics and analytics

## Tech Stack

### Frontend
- **Framework**: Next.js 16.0.1
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, Lucide React
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Real-time**: Socket.io Client
- **Authentication**: Clerk Next.js
- **Notifications**: Sonner
- **Theming**: next-themes

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB with Mongoose 8.19.3
- **Authentication**: Clerk Backend
- **Real-time**: Socket.io 4.8.1
- **File Upload**: Multer
- **Export**: PDFKit, json2csv

### DevOps & Tools
- **Version Control**: Git
- **Package Manager**: npm
- **Development**: ESLint
- **Build Tool**: Next.js Build


## Installation

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (v6 or higher) - Local or MongoDB Atlas
- **npm** or **yarn**
- **Clerk Account** - For authentication

### Step 1: Clone the Repository

```bash
git clone https://github.com/tatwik-sai/TripVaultMernify.git
cd TripVaultMernify
```

### Step 2: Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` directory:

```env
DATABASE_URL=your_mongodb_url
PORT=8747
ORIGIN=your_frontend_arigin
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SIGNING_SECRET=your_clerk_signing_secret
```

Create the uploads directory:

```bash
mkdir uploads
```

Start MongoDB (if using local instance):

```bash
# macOS/Linux
mongod

# Windows
net start MongoDB

# Or using Docker
docker run -d -p 27017:27017 mongo
```

Start the backend server:

```bash
node index.js
```


### Step 3: Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file in the `frontend` directory:

```env
# Clerk Authentication (Replace with your own keys)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk Auth Routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/console
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/console

# Server URL
NEXT_PUBLIC_SERVER_URL=http://localhost:8747

# Project Links
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username/your-repository
NEXT_PUBLIC_REPOSITORY_URL=https://github.com/your-username/your-repository

# Contact Info (Optional)
NEXT_PUBLIC_MAIL_URL=mailto:contact@example.com
NEXT_PUBLIC_PHONE_URL=tel:+1234567890

# Demo URL (Optional)
NEXT_PUBLIC_DEMO_URL=https://www.youtube.com/watch?v=your-demo-link

```

Update `frontend/src/utils/constants.js` to set the API host:

```javascript
export const HOST = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
```

Start the development server:

```bash
npm run dev
```

The frontend will start on `http://localhost:3000`

#### Ngrok Setup
   - Create an account and download [Ngrok](https://ngrok.com/)
   - Open cmd and run the following commands (Get the credentials from website)
  
      ```bash
      ngrok config add-authtoken <YOUR_AUTH_TOKEN>
      ```
    - Choose the Static Domain and run the command

      ```bash
      ngrok http --url=<YOUR_STATIC_URL> 8747
      ```
    
#### Clerk Setup
   - Create an account on [Clerk](https://clerk.com/)
    - Create a new application with email and google enabled
    - Copy and store the PUBLIC and SECRET key
    - Go to **Configure** > **Webhooks** 
    - Add a new endpoint with ngrok static url subscribe to user events and create.
    - Copy the **Signing Secret** provided.

### MongoDB Connection

For **local MongoDB**:
```env
DATABASE_URL=mongodb://localhost:27017/tripvault
```

For **MongoDB Atlas**:
```env
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/tripvault
```

## Authentication

TripVault uses **Clerk** for authentication. The system supports:

- **Email/Password** authentication
- **Social OAuth** (Google)
- **JWT Token** validation
- **Webhook Integration** for user sync

### Authentication Flow

1. User signs up/signs in via Clerk
2. Clerk generates JWT token
3. Frontend sends token in Authorization header
4. Backend verifies token using Clerk SDK
5. User ID extracted from token for authorization

### Protected Routes

All routes except `/` and `/sign-in`, `/sign-up` are protected by Clerk middleware.

## Real-time Features

TripVault uses **Socket.io** for real-time updates:

### Real-time Updates

All users in a trip receive instant updates when:
- Expenses are added, updated, or deleted
- Settlements are marked as paid
- Members are added or removed
- New captures are shared
- Captures receive likes or comments

## Settlement Algorithm

The backend uses an optimized greedy algorithm to calculate settlements:

1. **Calculate Balances**: For each member, calculate net balance (paid - owed)
2. **Separate**: Split into creditors (positive) and debtors (negative)
3. **Sort**: Order both by amount (descending)
4. **Match**: Pair largest debtor with largest creditor
5. **Settle**: Transfer minimum of the two amounts
6. **Repeat**: Continue until all balanced

This minimizes the number of transactions needed for settlement.

## Security Features

-  Clerk JWT authentication
-  User authorization checks
-  Admin-only operations
-  File type validation
-  File size limits
-  CORS configuration
-  Input validation
-  SQL injection prevention (MongoDB)
