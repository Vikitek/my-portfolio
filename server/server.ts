import "dotenv/config";

import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import contactRoutes from "./routes/contactRoutes";


const app = express();

const PORT = process.env.PORT || 5000;

// ================================
// MIDDLEWARE
// ================================

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://victor-adama-portfolio.vercel.app",
    ],
  }),
);

app.use(express.json({ limit: "10kb" }));

// ================================
// HEALTH CHECK
// ================================

app.get("/api", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API is running 🚀",
  });
});

// ================================
// CONTACT ROUTES
// ================================

app.use("/api/contact", contactRoutes);

// ================================
// NOT FOUND HANDLER
// ================================

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found.",
  });
});

// ================================
// ERROR HANDLER
// ================================

app.use(
  (
    error: Error & { status?: number; type?: string },
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    if (error.type === "entity.parse.failed") {
      res.status(400).json({
        success: false,
        message: "Invalid JSON in request body.",
      });
      return;
    }

    if (error.type === "entity.too.large") {
      res.status(413).json({
        success: false,
        message: "Request body is too large.",
      });
      return;
    }

    const status =
      error.status && error.status >= 400 && error.status < 500
        ? error.status
        : 500;

    if (status === 500) {
      console.error("Unexpected API error:", error.message);
    }

    res.status(status).json({
      success: false,
      message:
        status === 500 ? "An unexpected server error occurred." : error.message,
    });
  },
);

// ================================
// DATABASE + SERVER STARTUP
// ================================

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
};

startServer();
