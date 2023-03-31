import { Outlet } from "react-router-dom";
import AppointmentForm from "./AppointmentsForm";
import TileList from "./TileList";

const AppointmentsPage = ({ appointments, contacts }) => {
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <Outlet />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tileObjects={appointments} />
      </section>
    </div>
  );
};

export default AppointmentsPage;
