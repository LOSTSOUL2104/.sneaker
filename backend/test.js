
import fetch from "node-fetch"; // Ensure you have node-fetch installed: npm install node-fetch

const testSignUp = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "testuser", password: "testpassword" }),
    });

    const data = await response.json();
    console.log("Sign Up Response:", data);

    if (!response.ok) {
      console.error("Error Response:", data.message);
    }
  } catch (error) {
    console.error("Error during sign up test:", error);
  }
};

testSignUp();
