import { useState } from "react";
import { Button } from "../components";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setStatus("Please enter an email address");
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log("Response data:", data); // Debugging line

      if (!response.ok) {
        throw new Error(data.message || "Failed to subscribe");
      }

      setStatus(data.message);
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error); // Debugging line
      setStatus(error.message);
    }
  };

  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="email"
          placeholder="subscribe@sneakers.com"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Subscribe" fullWidth onClick={handleSubscribe} />
        </div>
      </div>
      {status && <p>{status}</p>}
    </section>
  );
};

export default Subscribe;
