import Contact from "./Contact";
import { Outlet } from "react-router-dom";
import TileList from "./TileList";

// ADD REGEX FOR PHONE NUMBER
// PREVENT SAME NAME SUBMISSIONS

const ContactsPage = ({ contacts }) => {
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <Outlet />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tileObjects={contacts} />
      </section>
    </div>
  );
};
export default ContactsPage;
