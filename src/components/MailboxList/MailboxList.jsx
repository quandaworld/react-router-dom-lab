import { Link } from 'react-router';

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h1>Mailbox List</h1>
      
      {mailboxes.length === 0 ? (
        <p>No mailboxes available. Create a new one!</p>
      ) : (
        <div>
          {mailboxes.map((mailbox) => (
            <Link 
              to={`/mailboxes/${mailbox._id}`} 
              key={mailbox._id}
            >
              <div>Mailbox {mailbox._id}</div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default MailboxList;