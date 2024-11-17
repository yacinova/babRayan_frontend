import React, { useState } from "react";
import { X } from "lucide-react";
import "./don.css";

const DonationPage = () => {
  const [donationType, setDonationType] = useState("one-time");
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [cause, setCause] = useState("");
  const [comment, setComment] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const predefinedAmounts = [20, 50, 100, 200, 500];

  const causes = {
    education: {
      title: "Support Education",
      description: "Help provide quality education to children in need",
      image: "/api/placeholder/400/300",
    },
    CFI: {
      title: "CFI Program",
      description: "Provide nutritious meals to underprivileged children",
      image: "/api/placeholder/400/300",
    },
    palemier: {
      title: "École Palmier",
      description: "Support our local school development program",
      image: "/api/placeholder/400/300",
    },
  };

  const handleAmountChange = (value) => {
    if (typeof value === "number") {
      setAmount(value);
      setCustomAmount("");
      setShowDetails(true);
    } else {
      setAmount("custom");
    }
  };

  return (
    <div className="donation-page">
      <div className="header">
        <h1>Faire un Don</h1>
        <p>Ensemble, nous pouvons faire la différence dans la vie des enfants</p>
      </div>

      <div className="donation-container">
        <div className="logo-section">
          {/* Logo content here if needed */}
        </div>

        <div className="donation-form">
          <div className="form-header">Choisissez le montant</div>

          <div className="progress-dots">
            <div className={`dot ${donationType === "one-time" ? "active" : ""}`}></div>
            <div className={`dot ${donationType === "mensuelle" ? "active" : ""}`}></div>
            <div className="arrow">→</div>
          </div>

          <div className="donation-type">
            <button
              className={`type-button ${donationType === "one-time" ? "active" : ""}`}
              onClick={() => setDonationType("one-time")}
            >
              One-time
            </button>
            <button
              className={`type-button ${donationType === "monthly" ? "active" : ""}`}
              onClick={() => setDonationType("monthly")}
            >
              mensuelle
            </button>
          </div>

          <div className="amount-grid">
            {predefinedAmounts.map((value) => (
              <button
                key={value}
                className={`amount-button ${amount === value ? "active" : ""}`}
                onClick={() => handleAmountChange(value)}
              >
                MAD {value}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="MAD Montant personnalisé"
            className="custom-amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setAmount("custom");
            }}
          />

          <select
            className="cause-select"
            value={cause}
            onChange={(e) => setCause(e.target.value)}
          >
            <option value="">Choisissez votre cause</option>
            <option value="education">Education</option>
            <option value="CFI">CFI</option>
            <option value="palemier">Ecole Palmier</option>
          </select>

          <div className="comment-section">
            <input
              type="checkbox"
              id="comment"
              checked={comment}
              onChange={(e) => setComment(e.target.checked)}
            />
            <label htmlFor="comment">Écrivez-nous un commentaire</label>
          </div>

          <button className="next-button">
            Next
            <span className="arrow">→</span>
          </button>
        </div>
      </div>

      {/* Donation Details Modal */}
      <div className={`modal-overlay ${showDetails ? "active" : ""}`} onClick={() => setShowDetails(false)}>
        <div className="donation-details-card" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={() => setShowDetails(false)}>
            <X size={24} />
          </button>

          <img
            src={cause && causes[cause]?.image}
            alt="Donation cause"
            className="donation-image"
          />

          <h2 className="donation-details-title">
            {cause && causes[cause]?.title}
          </h2>

          <div className="donation-info-row">
            <span className="donation-info-label">Type de don</span>
            <span className="donation-info-value">
              {donationType === "one-time" ? "Unique" : "Mensuel"}
            </span>
          </div>

          <div className="donation-info-row">
            <span className="donation-info-label">Montant</span>
            <span className="donation-info-value">
              MAD {amount === "custom" ? customAmount : amount}
            </span>
          </div>

          <p className="donation-description">
            {cause && causes[cause]?.description}
          </p>

          <button className="confirm-button">
            Confirmer le don
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;