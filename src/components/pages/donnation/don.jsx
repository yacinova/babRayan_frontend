import React, { useState, useEffect } from "react";
import { X, CreditCard, Check, Loader2, AlertCircle } from "lucide-react";
import { Card, Slider, Drawer, Input, Radio, Form } from 'antd';
import logo from "../../../assets/Logo.png";
import pic1 from "../../../assets/donation/don500.jpg";
import pic2 from "../../../assets/donation/don800.jpg";
import pic3 from "../../../assets/donation/don1900.jpg";
import pic4 from "../../../assets/donation/don-personaliser.jpg";
import "./don.css";



const DonationPage = () => {
  const [donationType, setDonationType] = useState("Ponctuel");
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [formError, setFormError] = useState("");
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
    setShowDetails(false);
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
          Votre don de <span style={{ color: '#F77F00', fontWeight: 'bold' }}>{amount === "custom" ? customAmount : amount} DH</span> en tant que don
          <span style={{ color: '#F77F00', fontWeight: 'bold' }}> {donationType === "Ponctuel" ? "ponctuel" : "mensuel"}</span> va
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

  const handleAmountChange = (value) => {
    setFormError("");
    if (typeof value === "number") {
      setAmount(value);
      setCustomAmount("");
    } else {
      setAmount("custom");
    }
  };


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



  return (
    <div className="donation-page">

      <div className="header">
        <h1 className="animate__animated animate__swing">Faire un Don</h1>
        <p className="animate__animated animate__pulse">
          Ensemble, nous pouvons faire la différence dans la vie des enfants
        </p>
      </div>

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
          <div className="donation-description">
            {(() => {
              const selectedAmount = predefinedAmounts.find(
                (a) => a.value === amount
              );
              return selectedAmount ? selectedAmount.description : "";
            })()}
          </div>



          <div className="donation-info-row">
            <span className="donation-info-label">Type de don</span>
            <span className="donation-info-value">
              {donationType === "Ponctuel" ? "Ponctuel" : "Mensuel"}
            </span>
          </div>

          <div className="donation-info-row">
            <span className="donation-info-label">Montant</span>
            <span className="donation-info-value" style={{ color: "#D62828" }}>
              MAD {amount === "custom" ? customAmount : amount}
            </span>
          </div>



          <button className="confirm-button" onClick={showDrawer}>
            Je procede
          </button>
        </div>
      </div>

      {/* Logo section */}
      <div className="red-logo">
        <img src={logo} alt="logo" />

        <div className="donation-form">
          <div className="form-header">Choisissez le montant</div>



          <div className="donation-type animate-slide-up d-flex justify-content-center">
            <button
              className={`type-button ${donationType === "Ponctuel" ? "active" : ""
                }`}
              onClick={() => setDonationType("Ponctuel")}
            >
              Ponctuel
            </button>
            <button
              className={`type-button ${donationType === "monthly" ? "active" : ""
                }`}
              onClick={() => setDonationType("monthly")}
            >
              Mensuel
            </button>
          </div>

          <div className="amount-grid animate-fade-in">
            {predefinedAmounts.map((item) => (
              <button
                key={item.value}
                className={`amount-button ${amount === item.value ? "active" : ""
                  }`}
                onClick={() => handleAmountChange(item.value)}
              >
                MAD {item.value}
              </button>
            ))}
          </div>

          <input type="text" placeholder="MAD Montant personnalisé" className="custom-amount animate-slide-up" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setAmount("custom"); }} />

          {formError && (
            <div className="error-message animate-shake">
              <AlertCircle size={20} /> <span>{formError}</span>
            </div>
          )}
          <button className="next-button animate-bounce-in" onClick={handleNextClick} >
            Choisir <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
