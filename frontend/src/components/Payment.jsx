import { useState } from "react";
import { QRCode } from "../assets/images";

const Payment = ({ product, setPaymentDone, setSelected }) => {
  const [receipt, setReceipt] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleReceiptChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validImageTypes.includes(file.type)) {
        setError(
          "Invalid file type. Please upload an image file (JPEG, PNG, GIF)."
        );
        setReceipt(null);
      } else {
        setError("");
        setReceipt(file);
      }
    }
  };

  const handleUpload = async () => {
    if (!receipt) {
      alert("Please upload a valid receipt.");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("receipt", receipt);

    try {
      const response = await fetch("/api/upload-receipt", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Payment confirmed!");
        setPaymentDone(true);
        setSelected(null);
      } else {
        alert("Failed to confirm payment. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading receipt:", error);
      alert("Error uploading receipt. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full pt-10 transition-all duration-400 max-lg:text-center">
      <h1 className="text-4xl font-bold font-montserrat">
        Make your payment for{" "}
        <span className="text-coral-red"> {product?.name}</span>
      </h1>
      <div className="flex items-center justify-center w-full h-full max-lg:flex-col">
        <div className="flex items-center justify-center w-full h-full pt-10">
          <img src={QRCode} className="h-64" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full px-20 pt-10 text-3xl font-semibold text-center lg:pb-10 font-palanquin">
          <p className="pb-4">
            Make a Payment of{" "}
            <span className="font-semibold text-coral-red font-palanquin">
              {" "}
              {product?.price}
            </span>{" "}
            by scanning the QR code and upload the receipt below and we will
            notify you shortly
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleReceiptChange}
            className="mb-4 border p-2"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
              bg-coral-red text-white border-coral-red rounded-full`}
            onClick={handleUpload}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Receipt"}
          </button>
          <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
              bg-coral-red text-white border-coral-red rounded-full mt-4`}
            onClick={() => {
              setPaymentDone(true);
              setSelected(null);
            }}
          >
            Finish Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
