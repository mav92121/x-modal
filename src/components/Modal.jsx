const Modal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("form data -> ", data);
    if (data.phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    if (new Date(data.date) > new Date()) {
      alert("Invalid date of birth");
      return;
    }
  };
  return (
    <div
      className="modal"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "10px",
        width: "45%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      <div className="modal-content">
        <h1>Fill Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="entity">
            <h4>Username:</h4>
            <input name="username" required type="text" />
          </div>
          <div className="entity">
            <h4>Email:</h4>
            <input name="email" required type="email" />
          </div>
          <div className="entity">
            <h4>Phone Number:</h4>
            <input name="phone" required type="number" />
          </div>
          <div className="entity">
            <h4>Date of Birth:</h4>
            <input name="date" required type="date" />
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
