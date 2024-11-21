import React, { useState, useEffect } from "react";
import 'animate.css';
import { X, CreditCard, Check, Loader2, AlertCircle } from "lucide-react";
import { Card, Slider, Drawer, Input, Radio, Form } from 'antd';
import logo from "../../../assets/Logo.png";
import pic1 from "../../../assets/donation/don500.jpg";
import pic2 from "../../../assets/donation/don800.jpg";
import pic3 from "../../../assets/donation/don1900.jpg";
import pic4 from "../../../assets/donation/don-personaliser.jpg";
import "./don.css";

// const CreditCardBrandIcon = ({ brand }) => {
//   return (
//     <div className={`card-brand-icon ${brand}`}>
//       {brand === "visa" && (
//         <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1434CB">
//           <path d="M21.4789 15.5837V15.4637H21.4389L21.3589 15.6237L21.2789 15.4637H21.2389V15.5837H21.2689V15.5037L21.3389 15.6437H21.3789L21.4489 15.5037V15.5837H21.4789ZM21.0489 15.5837V15.4937H21.1289V15.4637H20.9389V15.4937H21.0189V15.5837H21.0489Z" />
//           <path d="M9.197 9.197C9.197 11.697 11.697 14.197 14.197 14.197C16.697 14.197 19.197 11.697 19.197 9.197C19.197 6.697 16.697 4.197 14.197 4.197C11.697 4.197 9.197 6.697 9.197 9.197Z" />
//         </svg>
//       )}
//       {brand === "mastercard" && (
//         <svg className="w-8 h-8" viewBox="0 0 24 24">
//           <circle cx="8" cy="12" r="6" fill="#EB001B" />
//           <circle cx="16" cy="12" r="6" fill="#F79E1B" />
//         </svg>
//       )}
//       {brand === "amex" && (
//         <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#2E77BC">
//           <path d="M22 4H2C1.447 4 1 4.447 1 5V19C1 19.553 1.447 20 2 20H22C22.553 20 23 19.553 23 19V5C23 4.447 22.553 4 22 4Z" />
//         </svg>
//       )}
//     </div>
//   );
// };

const DonationPage = () => {
  const [donationType, setDonationType] = useState("Ponctuel");
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  // const [showPayment, setShowPayment] = useState(false);
  // const [cardNumber, setCardNumber] = useState("");
  // const [expiryDate, setExpiryDate] = useState("");
  // const [cvv, setCvv] = useState("");
  // const [cardBrand, setCardBrand] = useState("");
  // const [isProcessing, setIsProcessing] = useState(false);
  // const [paymentSuccess, setPaymentSuccess] = useState(false);
  // const [paymentError, setPaymentError] = useState("");
  const [formError, setFormError] = useState("");
  //yassss
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [open, setOpen] = useState(false);

  const predefinedAmounts = [
    {
      value: 500,
      description:
        "Je couvre les frais d'hygiène, de santé et une alimentation saine",
      image: pic1,
    },
    {
      value: 800,
      description:
        "Je soutiens les frais de scolarité et les activités extra-scolaires",
      image: pic2,
    },
    {
      value: 1900,
      description: "Je couvre tous les frais mensuels de l'enfant",
      image: pic3,
    },
  ];

  const showDrawer = () => {
    setOpen(true);
  };


  const renderPaymentMethodLogo = (method) => {
    const commonStyles = { width: '60px', height: 'auto', objectFit: 'contain' };
    switch (method) {
      case 'paypal':
        return "🅿️"; // Replace with actual PayPal logo
      case 'stripe':
        return "💳"; // Replace with actual Stripe logo
      case 'cmi':
        return "🏦"; // Replace with actual CMI logo
      default:
        return null;
    }
  };
  const onClose = () => {
    setOpen(false);
  };
  const drawerContent = (
    <div className="donation-drawer">
      <div className="thank-you-section">
        <h2 style={{ color: '#003049', marginBottom: '20px', textAlign: 'center' }}>
          Merci pour votre générosité! 🙏
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.1em', color: '#666', marginBottom: '30px' }}>
          Votre don de <span style={{ color: '#F77F00', fontWeight: 'bold' }}>{customAmount} DH</span> en tant que don
          <span style={{ color: '#F77F00', fontWeight: 'bold' }}> {donationType === 'monthly' ? 'mensuel' : 'unique'}</span> va
          faire une réelle différence dans la vie des enfants. 💝
        </p>
      </div>

      <div className="donation-type-section">
        <h3 style={{ color: '#003049', marginBottom: '15px' }}>Type de donateur</h3>
        <Radio.Group
          onChange={(e) => setIsAnonymous(e.target.value)}
          value={isAnonymous}
          className="custom-radio-group"
        >
          <div className="d-flex w-100">
            <Radio value={false}>Donateur <b>identifié</b> </Radio>
            <Radio value={true}>Donateur <b>anonyme</b></Radio>
          </div>
        </Radio.Group>
      </div>

      {!isAnonymous && (
        <Form layout="vertical" className="donor-info-form">
          <h3 style={{ color: '#003049', marginTop: '20px', marginBottom: '15px' }}>
            Vos informations
          </h3>
          <Form.Item
            label="Nom complet"
            required
            className="form-item"
          >
            <Input placeholder="Entrez votre nom complet" />
          </Form.Item>
          <Form.Item
            label="Email"
            required
            className="form-item"
          >
            <Input placeholder="Entrez votre email" type="email" />
          </Form.Item>
          <Form.Item
            label="Téléphone"
            required
            className="form-item"
          >
            <Input placeholder="Entrez votre numéro de téléphone" />
          </Form.Item>
        </Form>
      )}

      <div className="payment-section">
        <h3 style={{ color: '#003049', marginTop: '20px', marginBottom: '15px' }}>
          Méthode de paiement
        </h3>
        <div className="payment-methods">
          {['stripe', 'paypal', 'cmi'].map((method) => (
            <div
              key={method}
              className={`payment-method-card ${paymentMethod === method ? 'selected' : ''}`}
              onClick={() => setPaymentMethod(method)}
            >
              <div className="payment-logo">
                {renderPaymentMethodLogo(method)}
              </div>
              <span className="payment-name">
                {method.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        className="proceed-payment-btn"
        onClick={() => {
          // Handle payment processing
          console.log('Processing payment...');
        }}
      >
        Procéder au paiement
      </button>
    </div>
  );
  // useEffect(() => {
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

  //   setCardBrand(detectCardBrand(cardNumber));
  // }, [cardNumber]);

  const handleAmountChange = (value) => {
    setFormError("");
    if (typeof value === "number") {
      setAmount(value);
      setCustomAmount("");
    } else {
      setAmount("custom");
    }
  };

  // const formatCardNumber = (value) => {
  //   const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  //   const matches = v.match(/\d{4,16}/g);
  //   const match = (matches && matches[0]) || "";
  //   const parts = [];

  //   for (let i = 0, len = match.length; i < len; i += 4) {
  //     parts.push(match.substring(i, i + 4));
  //   }

  //   if (parts.length) {
  //     return parts.join(" ");
  //   } else {
  //     return value;
  //   }
  // };

  // const handleCardNumberChange = (e) => {
  //   const formattedValue = formatCardNumber(e.target.value);
  //   if (formattedValue.length <= 19) {
  //     setCardNumber(formattedValue);
  //   }
  // };

  // const handleConfirmDonation = () => {
  //   setShowDetails(false);
  //   setShowPayment(true);
  // };

  const handleNextClick = () => {
    setFormError("");

    if (!amount && !customAmount) {
      setFormError("Please select or enter a donation amount");
      return;
    }

    if (
      amount === "custom" &&
      (!customAmount || isNaN(customAmount) || parseFloat(customAmount) <= 0)
    ) {
      setFormError("Please enter a valid donation amount");
      return;
    }

    setShowDetails(true);
  };

  // const handlePayment = async () => {
  //   setIsProcessing(true);
  //   setPaymentError("");

  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     if (Math.random() > 0.5) {
  //       throw new Error("Payment failed. Please try again.");
  //     }
  //     setPaymentSuccess(true);

  //     // Reset form after successful payment
  //     setTimeout(() => {
  //       setShowPayment(false);
  //       setPaymentSuccess(false);
  //       setCardNumber("");
  //       setExpiryDate("");
  //       setCvv("");
  //       setAmount("");
  //       setCustomAmount("");
  //       setDonationType("Ponctuel");
  //     }, 2000);
  //   } catch (error) {
  //     setPaymentError(error.message);
  //   } finally {
  //     setIsProcessing(false);
  //   }
  // };

  return (
    <div className="donation-page">
      <div className="wrap">
        <div className="donation-form">
          <div className="form-header">Choisissez le montant</div>

          <div className="progress-dots">
            <div
              className={`dot ${donationType === "Ponctuel" ? "active" : ""}`}
            ></div>
            <div
              className={`dot ${donationType === "monthly" ? "active" : ""}`}
            ></div>
            <div className="arrow">→</div>
          </div>

          <div className="donation-type animate-slide-up">
            <button
              className={`type-button ${
                donationType === "Ponctuel" ? "active" : ""
              }`}
              onClick={() => setDonationType("Ponctuel")}
            >
              Ponctuel
            </button>
            <button
              className={`type-button ${
                donationType === "monthly" ? "active" : ""
              }`}
              onClick={() => setDonationType("monthly")}
            >
              Mensuelle
            </button>
          </div>

          <div className="amount-grid animate-fade-in">
            {predefinedAmounts.map((item) => (
              <button
                key={item.value}
                className={`amount-button ${
                  amount === item.value ? "active" : ""
                }`}
                onClick={() => handleAmountChange(item.value)}
              >
                MAD {item.value}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="MAD Montant personnalisé"
            className="custom-amount animate-slide-up"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setAmount("custom");
            }}
          />

          {formError && (
            <div className="error-message animate-shake">
              <AlertCircle size={20} />
              <span>{formError}</span>
            </div>
          )}

          <button
            className="next-button animate-bounce-in"
            onClick={handleNextClick}
          >
            Suivant <span className="arrow">→</span>
          </button>
        </div>

        <div className="header">
          <h1 className="animate__animated animate__swing">Faire un Don</h1>
          <p className="animate__animated animate__pulse">
            Ensemble, nous pouvons faire la différence dans la vie des enfants
          </p>
        </div>
      </div>

      {/* Payment Modal */}
      {/* <div className={`modal-overlay ${showPayment ? "active" : ""}`}>
        <div className="payment-card">
          <button
            className="close-button"
            onClick={() => setShowPayment(false)}
          >
            <X size={24} />
          </button>

          {paymentSuccess ? (
            <div className="success-message animate-success">
              <div className="success-icon">
                <Check size={48} className="text-green-500" />
              </div>
              <h2>Payment Successful!</h2>
              <p>Thank you for your donation.</p>
            </div>
          ) : (
            <>
              <div className="payment-header">
                <h2>Payment Details</h2>
                <p className="payment-amount">
                  MAD {amount === "custom" ? customAmount : amount}
                </p>
              </div>

              <div className="payment-form">
                <div className="form-group">
                  <label>Card Information</label>
                  <div className="card-input-wrapper">
                    {cardBrand ? (
                      <CreditCardBrandIcon brand={cardBrand} />
                    ) : (
                      <CreditCard className="card-icon" size={20} />
                    )}
                    <input
                      type="text"
                      placeholder="2555 **** **** 7812"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      className="card-number-input"
                      maxLength="19"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={(e) => {
                        if (e.target.value.length <= 5) {
                          setExpiryDate(e.target.value.replace(/[^0-9/]/g, ""));
                        }
                      }}
                      className="expiry-input"
                      maxLength="5"
                    />
                  </div>

                  <div className="form-group half">
                    <label>CVV</label>
                    <input
                      type="password"
                      placeholder="***"
                      value={cvv}
                      onChange={(e) => {
                        if (e.target.value.length <= 3) {
                          setCvv(e.target.value.replace(/[^0-9]/g, ""));
                        }
                      }}
                      className="cvv-input"
                      maxLength="3"
                    />
                  </div>
                </div>

                {paymentError && (
                  <div className="error-message animate-shake">
                    <AlertCircle size={20} />
                    <span>{paymentError}</span>
                  </div>
                )}

                <button
                  className={`pay-now-button ${
                    isProcessing ? "processing" : ""
                  }`}
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="processing-content">
                      <Loader2 className="animate-spin" size={20} />
                      Processing...
                    </span>
                  ) : (
                    "Pay Now"
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div> */}

<Drawer
        style={{ zIndex: 9999999 }}
        className="custom-drawer"
        title={
          <div style={{ color: '#003049', fontSize: '1.5em' }}>
            Continuation du DON 🕊️
          </div>
        }
        onClose={onClose}
        open={open}
        width={420}
      >
        {drawerContent}
      </Drawer>

      {/* Details Modal */}
      <div
        className={`modal-overlay ${showDetails ? "active" : ""}`}
        onClick={() => setShowDetails(false)}
      >
        <div
          className="donation-details-card"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-button"
            onClick={() => setShowDetails(false)}
          >
            <X size={24} />
          </button>

          <img
            src={(() => {
              const selectedAmount = predefinedAmounts.find(
                (a) => a.value === amount
              );
              return selectedAmount ? selectedAmount.image : pic4;
            })()}
            alt="Donation cause"
            className="donation-image"
          />

          <div className="donation-info-row">
            <span className="donation-info-label">Type de don</span>
            <span className="donation-info-value">
              {donationType === "Ponctuel" ? "Ponctuel" : "Mensuel"}
            </span>
          </div>

          <div className="donation-info-row">
            <span className="donation-info-label">Montant</span>
            <span className="donation-info-value">
              MAD {amount === "custom" ? customAmount : amount}
            </span>
          </div>

          <div className="donation-description">
            {(() => {
              const selectedAmount = predefinedAmounts.find(
                (a) => a.value === amount
              );
              return selectedAmount ? selectedAmount.description : "";
            })()}
          </div>

          <button className="confirm-button" onClick={showDrawer}>
            Je procede 
          </button>
        </div>
      </div>

      {/* Logo section */}
      <div className="red-logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default DonationPage;
