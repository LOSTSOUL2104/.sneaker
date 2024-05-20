import { QRCode } from "../assets/images";

const Payment = ({ product, setPaymentDone, setSelected }) => {
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
          <p className="pb-4 ">
            Make a Payment of{" "}
            <span className="font-semibold text-coral-red font-palanquin">
              {" "}
              {product?.price}
            </span>{" "}
            by scanning the QR code and upload the receipt below and we will
            notify you shortly
          </p>
          <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
          bg-coral-red text-white border-coral-red
      rounded-full ` } onClick={()=>{
        setPaymentDone(true);
        setSelected(null)
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
