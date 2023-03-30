import "./App.css";
import { useState } from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AppointmentsPage } from "./components/AppointmentsPage";
import { ContactsPage } from "./components/ContactsPage";
import Root from "./components/Root";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Route>
  )
);

function App() {
  //Default state variables
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
