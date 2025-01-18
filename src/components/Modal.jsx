// eslint-disable-next-line react/prop-types
const Modal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Invalid email");
      return;
    }

    // Phone number validation
    if (!/^\d{10}$/.test(data.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // Date of Birth validation
    const inputDate = new Date(data.date);
    const today = new Date();
    if (inputDate > today) {
      alert("Invalid date of birth");
      return;
    }

    console.log("form data -> ", data);
    alert("Form submitted successfully!");
    onClose(); // Close the modal on successful submission
  };

  return (
    <div
      className="modal"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose} // Close the modal when clicking outside
    >
      <div
        className="modal-content"
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "45%",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <h1>Fill Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="entity">
            <h4>Username:</h4>
            <input id="username" name="username" required type="text" />
          </div>
          <div className="entity">
            <h4>Email:</h4>
            <input id="email" name="email" required type="email" />
          </div>
          <div className="entity">
            <h4>Phone Number:</h4>
            <input id="phone" name="phone" required type="text" />
          </div>
          <div className="entity">
            <h4>Date of Birth:</h4>
            <input id="dob" name="date" required type="date" />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
