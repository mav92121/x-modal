import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="container">
        <h1>User Details Modal</h1>
        <button onClick={() => setShowModal(true)}>Open Form</button>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
}

export default App;
