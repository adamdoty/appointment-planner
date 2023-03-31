import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import AppointmentsPage from "./components/AppointmentsPage";
import AppointmentForm from "./components/AppointmentsForm";
import Root from "./components/Root";
import ContactsPage from "./components/ContactsPage";
import ContactForm from "./components/ContactForm";

import "./App.css";
import startingContacts from "./data/startingContacts";
import startingAppointments from "./data/startingAppointments";

function App() {
  const [contacts, setContacts] = useState(startingContacts);
  const [appointments, setAppointments] = useState(startingAppointments);

  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route
          path="/appointments"
          element={
            <AppointmentsPage appointments={appointments} contacts={contacts} />
          }
        >
          <Route
            path="/appointments"
            element={
              <AppointmentForm
                appointments={appointments}
                contacts={contacts}
                onSubmit={(data) => setAppointments([...appointments, data])}
              />
            }
          />
        </Route>
        <Route path="/contacts" element={<ContactsPage contacts={contacts} />}>
          <Route
            path="/contacts"
            element={
              <ContactForm
                onSubmit={(data) => setContacts([...contacts, data])}
                contacts={contacts}
              />
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
