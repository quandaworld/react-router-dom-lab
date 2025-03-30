import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();

  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  const selectedLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  return (
    <div className="mail-box">
      {selectedBox ? (
        <>
          <h1>Mailbox {selectedBox._id}</h1>
          <div>
            <h3>Details</h3>
            <div>
              <span>Owner: </span>
              <span>{selectedBox.boxOwner}</span>
            </div>
            <div>
              <span>Box Size: </span>
              <span>{selectedBox.boxSize}</span>
            </div>

            <div>
              <h3>Letters</h3>
              {selectedLetters.length === 0 ? (
                <p>No letters in this mailbox yet.</p>
              ) : (
                <div>
                  {selectedLetters.map((letter, index) => (
                    <div key={index}>
                      <p>{letter.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div>
          <h3>Mailbox Not Found!</h3>
          <p>The mailbox you are looking for does not exist.</p>
        </div>
      )}
    </div>
  );
}

export default MailboxDetails;
