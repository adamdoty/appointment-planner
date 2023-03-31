import { useForm } from "react-hook-form";

const AppointmentForm = ({ onSubmit, appointments, contacts }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const existingNames = appointments.map((appointment) => appointment.title);

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div>
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          {...register("title", {
            required: true,
            validate: (value) => existingNames.find((title) => title === value),
          })}
          id="title"
          type="text"
          className="form-control"
        />
        {errors.title?.type === "required" && (
          <p className="alert">Title is required.</p>
        )}
        {errors.title?.type === "validate" && (
          <p className="alert">Appointment already exists.</p>
        )}
      </div>
      <div>
        <label htmlFor="contacts" className="form-label">
          Contact
        </label>
        <select {...register("contacts")} name="contacts" id="contact-select">
          <option value="">--Please choose an option--</option>
          {contacts.map((contact) => (
            <option key={contact.id} value={contact.name}>
              {contact.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          {...register("date", {
            required: true,
            pattern: /[0-9]{2}-[0-9]{2}-[0-9]{2}$/,
            min: getTodayString(),
          })}
          id="date"
          type="date"
          className="form-control"
        />
        {errors.date?.type === "required" && (
          <p className="alert">Date is required.</p>
        )}
        {errors.date?.type === "pattern" && (
          <p className="alert">Format: 2023-03-31</p>
        )}
        {errors.date?.type === "min" && (
          <p className="alert">Must be {getTodayString()} or later.</p>
        )}
      </div>
      <div>
        <label htmlFor="time" className="form-label">
          Time
        </label>
        <input
          {...register("time", {
            required: true,
            pattern: /[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}$/,
          })}
          id="time"
          type="time"
          className="form-control"
        />
        {errors.time?.type === "required" && (
          <p className="alert">Time is required.</p>
        )}
        {errors.date?.type === "pattern" && (
          <p className="alert">Format: 14:59</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;
