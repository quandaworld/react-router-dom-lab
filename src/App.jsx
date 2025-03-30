import { useState } from "react";
import { Route, Routes } from "react-router";
import LetterForm from "./components/LetterForm/LetterForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (formData) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxOwner: formData.boxOwner,
      boxSize: formData.boxSize
    };
    setMailboxes([...mailboxes, newMailbox]);
  };
  
  const addLetter = (formData) => {
    const newLetter = {
      mailboxId: formData.mailboxId,
      recipient: formData.recipient,
      message: formData.message
    };
    setLetters([...letters, newLetter]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<main><h1>Post Office</h1></main>}
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addBox={addBox} />}
        />
        <Route
          path="/new-letter"
          element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        
      </Routes>
    </>
  );
};

export default App;
