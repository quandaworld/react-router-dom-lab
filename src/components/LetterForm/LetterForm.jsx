import { useState } from "react";
import { useNavigate } from "react-router";

const LetterForm = ({ mailboxes, addLetter }) => {
  const [formData, setFormData] = useState({
    mailboxId: mailboxes.length > 0 ? mailboxes[0]._id : "",
    recipient: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const letterData = {
      ...formData,
      mailboxId: Number(formData.mailboxId),
    };

    addLetter(letterData);

    setFormData({
      mailboxId: mailboxes.length > 0 ? mailboxes[0]._id : "",
      recipient: "",
      message: "",
    });

    navigate(`/mailboxes/${letterData.mailboxId}`);
  };

  return (
    <>
      <h1>New Letter</h1>
      {mailboxes.length === 0 ? (
        <p>No mailboxes available. Please create a mailbox first.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Select Mailbox:</label>
          <select
            name="mailboxId"
            value={formData.mailboxId}
            onChange={handleChange}
            required
          >
            {mailboxes.map((mailbox) => (
              <option
                key={mailbox._id}
                value={mailbox._id}
              >
                Mailbox {mailbox._id}
              </option>
            ))}
          </select>

          <label>Recipient Name:</label>
          <input
            type="text"
            name="recipient"
            value={formData.recipient}
            placeholder="Recipient name"
            onChange={handleChange}
            required
          />

          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default LetterForm;
