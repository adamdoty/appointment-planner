const Contact = ({ contact }) => {
  return (
    <tr key={contact.id}>
      <td key={contact.name}>{contact.name}</td>
      <td key={contact.phone}>{contact.phone}</td>
      <td key={contact.email}>{contact.email}</td>
    </tr>
  );
};

export default Contact;
