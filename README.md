# 🚚 PT JEJE HARAPAN TRANSINDO - Shipment Tracker

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-3.4-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-2.1-FFD859?style=for-the-badge&logo=vue.js&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Modern Logistics Management System for PT JEJE HARAPAN TRANSINDO**

[Live Demo](#) | [Report Bug](#) | [Request Feature](#)

</div>

---


## 🎯 About The Project

PT JEJE HARAPAN TRANSINDO Shipment Tracker is a modern, responsive web application designed to streamline logistics operations. Built with Vue 3 Composition API and TailwindCSS, this application provides real-time shipment tracking, transporter assignment, and comprehensive shipment management capabilities.

### ✨ Key Highlights

- **Real-time Tracking**: Monitor all shipments with live status updates
- **Intuitive UI/UX**: Professional design with smooth animations and transitions
- **Mobile Responsive**: Fully optimized for desktop, tablet, and mobile devices
- **State Management**: Efficient state handling using Pinia
- **Modern Architecture**: Built with Vue 3 Composition API for better performance

---

## 🚀 Features

### ✅ Base Case Implementation

#### 1. **List View Page**
- ✅ Display all shipments in an elegant card layout
- ✅ Show Shipment ID, Origin, Destination, and Status
- ✅ Visual status indicators (Assigned/Pending)
- ✅ Quick access to detailed view
- ✅ Real-time statistics dashboard

#### 2. **Detail Page**
- ✅ Comprehensive shipment information display
- ✅ Visual route representation with origin/destination markers
- ✅ Vehicle type information
- ✅ Transporter assignment functionality
- ✅ Success/failure message notifications
- ✅ Professional layout with image headers

#### 3. **State Management**
- ✅ Pinia store for centralized state management
- ✅ Reactive data flow between components
- ✅ Persistent state across navigation

#### 4. **Routing**
- ✅ Vue Router implementation
- ✅ Named routes for easy navigation
- ✅ Dynamic route parameters
- ✅ Back navigation support

#### 5. **Mock API**
- ✅ Static JSON data structure
- ✅ Simulated API delays
- ✅ Mock transporter assignment API

### 🎁 Bonus Case Implementation

#### A. **Real-time Update Simulation**
- ✅ Auto-refresh shipment data every 30 seconds
- ✅ Status update simulation
- ✅ Live statistics updates

#### B. **Responsive Design**
- ✅ Mobile-first approach
- ✅ Tablet optimization
- ✅ Desktop enhanced experience
- ✅ Touch-friendly interactions

#### C. **Form Validation**
- ✅ Transporter dropdown validation
- ✅ Empty field prevention
- ✅ User-friendly error messages
- ✅ Loading states during submission

#### D. **Enhanced UX Features**
- ✅ Professional hero section with logistics imagery
- ✅ Animated loading states
- ✅ Hover effects and transitions
- ✅ Color-coded status badges
- ✅ Toast notifications for actions

---

## 🛠 Tech Stack

### Core Technologies

- **Frontend Framework**: Vue.js 3.4+ (Composition API)
- **Build Tool**: Vite 5.0+
- **State Management**: Pinia 2.1+
- **Routing**: Vue Router 4.0+
- **Styling**: TailwindCSS 3.4+
- **Icons**: Heroicons (SVG)
- **Images**: Unsplash API

### Development Tools

- **Package Manager**: npm / yarn / pnpm
- **Code Quality**: ESLint + Prettier
- **Version Control**: Git


## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 16.x or higher
- **npm**: Version 8.x or higher (comes with Node.js)
- **Git**: For version control

Check your installations:

```bash
node --version
npm --version
git --version
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/pt-jeje-shipment-tracker.git
cd pt-jeje-shipment-tracker
```

2. **Install dependencies**

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

3. **Configure TailwindCSS** (if not auto-configured)

The project comes with TailwindCSS pre-configured. If you need to customize:

```bash
# tailwind.config.js is already set up
# postcss.config.js is already configured
```

### Running the Application

#### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at: **http://localhost:5173**

#### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

#### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

---

## 📖 Usage Guide

### 1. **Accessing the Dashboard**

When you first open the application, you'll see:
- Hero section with company branding and logistics imagery
- Quick statistics (Total Shipments, Assigned, Pending)
- Grid of all active shipments

### 2. **Viewing Shipment Details**

To view detailed information about a shipment:

1. Click the **"View Details"** button on any shipment card
2. You'll be redirected to the detail page showing:
   - Complete route information with visual markers
   - Vehicle type details
   - Current assignment status
   - Transporter assignment interface

### 3. **Assigning a Transporter**

To assign a transporter to a shipment:

1. Navigate to the shipment detail page
2. Select a transporter from the dropdown menu
3. Click the **"Assign Transporter"** button
4. Wait for confirmation message
5. The status will update automatically

### 4. **Navigating Back**

Use the **"Back to Dashboard"** button at the top of the detail page to return to the main list.

### 5. **Real-time Updates**

The dashboard automatically refreshes every 30 seconds to show the latest shipment data.


