# 🍽️ MessMaster

**MessMaster** is a full-stack MERN application designed to optimize hostel mess operations, track daily food waste, manage inventory, and leverage AI to predict future food requirements. Built for hackathon speed and scalability.

---

## ✨ Key Features

* **Predictive Waste Oracle:** Calculates expected food wastage based on historical data, weather, events, and meal types to optimize cooking quantities.
* **AI-Powered Insights:** Integrates Google's Gemini AI to generate automated cook performance reviews, inventory reorder suggestions, and daily operational insights.
* **Role-Based Dashboards:** Distinct interfaces for Mess Staff (Analytics, Inventory, Waste Logging) and Students (QR-code accessible feedback portal).
* **Advanced Analytics:** Visualizes waste trends, menu correlations, and energy logs using Recharts.
* **Smart Inventory Management:** Track stock levels, categorize items, and receive low-stock alerts.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite, Tailwind CSS, Framer Motion, Recharts, Zustand (State Management)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB & Mongoose
* **AI Integration:** Google Gemini API
* **Authentication:** JSON Web Tokens (JWT)

---

## 📂 Project Structure

This project uses a mono-repo architecture:

```text
MessMaster/
├── client/       # React frontend (Vite)
├── server/       # Node.js backend (Express)
├── package.json  # Root scripts for running both simultaneously
└── README.md