import { useState } from "react";

const SignInSignUpModal = ({ isOpen, onClose, onSignIn }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    await fetch("http://localhost:5000/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    // Assuming sign-in was successful
    onSignIn(true); // Notify parent component of successful sign-in
    onClose();
  };

  const handleSignUp = async () => {
    await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    // Assuming sign-up was successful
    setIsSignIn(true); // Switch to sign-in mode after successful sign-up
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-overlay fixed inset-0 bg-gray-600 opacity-50"></div>
      <div className="modal-content bg-blue w-96 p-8 rounded-full shadow-lg relative">
        <span
          className="absolute top-2 right-2 text-gray-600 cursor-pointer"
          onClick={() => {
            onClose();
          }}
        >
          &times;
        </span>
        <h2 className="text-2xl font-semibold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded-full mb-10 text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded-full mb-10 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignIn ? (
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600"
            onClick={handleSignIn}
          >
            Sign in
          </button>
        ) : (
          <button
            className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600"
            onClick={handleSignUp}
          >
            Sign up
          </button>
        )}
        <p className="text-center mt-6 antialiased">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => {
              setIsSignIn(!isSignIn);
            }}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInSignUpModal;
