// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// const app = express();
// const port = 5000;

// // Set up storage for multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// // Endpoint to handle receipt upload
// app.post("/api/upload-receipt", upload.single("receipt"), async (req, res) => {
//   if (!req.file) {
//     return res
//       .status(400)
//       .json({ success: false, message: "No file uploaded." });
//   }

//   try {
//     // Simulate payment verification process
//     const receiptPath = path.join(__dirname, "uploads", req.file.filename);

//     // TODO: Implement actual payment verification logic here
//     // For example, you might send the receipt to a payment provider API
//     // and verify its authenticity.

//     // Mock verification result
//     const paymentVerified = true; // Replace with actual verification logic

//     if (paymentVerified) {
//       // Optionally, delete the file after processing
//       fs.unlinkSync(receiptPath);

//       return res.json({ success: true, message: "Payment confirmed!" });
//     } else {
//       return res
//         .status(400)
//         .json({ success: false, message: "Payment verification failed." });
//     }
//   } catch (error) {
//     console.error("Error processing receipt:", error);
//     return res
//       .status(500)
//       .json({ success: false, message: "Internal server error." });
//   }
// });

// // Serve static files (like your frontend)
// app.use(express.static(path.join(__dirname, "public")));

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
