// import React, { useState, useEffect } from "react";
// import { X, CreditCard, Check, Loader2 } from "lucide-react";
// import "./don.css";

// const PaymentPage = ({ amount, customAmount, cause, comment }) => {
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [cardBrand, setCardBrand] = useState("");
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [paymentError, setPaymentError] = useState("");

//   const formatCardNumber = (value) => {
//     const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
//     const matches = v.match(/\d{4,16}/g);
//     const match = (matches && matches[0]) || "";
//     const parts = [];
//     for (let i = 0, len = match.length; i < len; i += 4) {
//       parts.push(match.substring(i, i + 4));
//     }
//     return parts.length ? parts.join(" ") : value;
//   };

//   const detectCardBrand = (number) => {
//     const cleanNumber = number.replace(/\D/g, "");
//     if (cleanNumber.startsWith("4")) {
//       return "visa";
//     } else if (/^5[1-5]/.test(cleanNumber)) {
//       return "mastercard";
//     } else if (/^3[47]/.test(cleanNumber)) {
//       return "amex";
//     }
//     return "";
//   };

//   useEffect(() => {
//     setCardBrand(detectCardBrand(cardNumber));
//   }, [cardNumber]);

//   const handleCardNumberChange = (e) => {
//     const formattedValue = formatCardNumber(e.target.value);
//     if (formattedValue.length <= 19) {
//       setCardNumber(formattedValue);
//     }
//   };

//   const handlePayment = async () => {
//     setIsProcessing(true);
//     setPaymentError("");

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       if (Math.random() > 0.5) {
//         throw new Error("Payment failed. Please try again.");
//       }
//       setPaymentSuccess(true);
//       setTimeout(() => {
//         setPaymentSuccess(false);
//       }, 2000);
//     } catch (error) {
//       setPaymentError(error.message);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="payment-page">
//       <div className="payment-card">
//         <button className="close-button">
//           <X size={24} />
//         </button>

//         {paymentSuccess ? (
//           <div className="success-message">
//             <div className="success-icon">
//               <Check size={48} className="text-green-500" />
//             </div>
//             <h2>Payment Successful!</h2>
//             <p>Thank you for your donation.</p>
//           </div>
//         ) : (
//           <>
//             <div className="payment-header">
//               <h2>Payment Details</h2>
//             </div>

//             <div className="card-details">
//               <div className="card-input">
//                 <input
//                   type="text"
//                   placeholder="Card Number"
//                   value={cardNumber}
//                   onChange={handleCardNumberChange}
//                 />
//                 <CreditCard className="card-icon" />
//               </div>

//               <div className="expiry-cvv">
//                 <input
//                   type="text"
//                   placeholder="MM/YY"
//                   value={expiryDate}
//                   onChange={(e) => setExpiryDate(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="CVV"
//                   value={cvv}
//                   onChange={(e) => setCvv(e.target.value)}
//                 />
//               </div>

//               {paymentError && (
//                 <div className="error-message">
//                   <span>{paymentError}</span>
//                 </div>
//               )}
//             </div>

//             <div className="payment-summary">
//               <div className="summary-row">
//                 <span>Amount</span>
//                 <span>{amount === "custom" ? customAmount : amount} MAD</span>
//               </div>
//               <div className="summary-row">
//                 <span>Cause</span>
//                 <span>{cause}</span>
//               </div>
//               <div className="summary-row">
//                 <span>Comment</span>
//                 <span>{comment ? "Yes" : "No"}</span>
//               </div>
//             </div>

//             <button
//               className={`pay-button ${isProcessing ? "loading" : ""}`}
//               onClick={handlePayment}
//               disabled={isProcessing}
//             >
//               {isProcessing ? (
//                 <Loader2 className="loading-icon" size={20} />
//               ) : (
//                 "Pay Now"
//               )}
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;
