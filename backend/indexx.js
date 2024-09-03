import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;
const dataFile = path.join(__dirname, "data.json"); // Ensure this path is correct

app.use(cors());
app.use(bodyParser.json());

const loadData = () => {
  try {
    if (fs.existsSync(dataFile)) {
      const data = fs.readFileSync(dataFile, "utf-8");
      return JSON.parse(data);
    }
    return { users: [] };
  } catch (error) {
    console.error("Error loading data:", error);
    return { users: [] };
  }
};

const saveData = (data) => {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    console.log("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

app.post("/api/signin", (req, res) => {
  const { username, password } = req.body;
  console.log("Sign In Request:", { username, password });
  const data = loadData();
  const user = data.users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ message: "Sign in successful" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

app.post("/api/signup", (req, res) => {
  const { username, password } = req.body;
  console.log("Sign Up Request:", { username, password });
  const data = loadData();

  if (data.users.find((u) => u.username === username)) {
    res.status(400).json({ message: "Username already exists" });
  } else {
    data.users.push({ username, password });
    saveData(data);
    res.json({ message: "User created successfully" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
