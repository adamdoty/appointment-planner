import { useForm } from "react-hook-form";

const ContactForm = ({ onSubmit, contacts }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const existingNames = contacts.map((contact) => contact.name);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", {
            required: true,
            validate: (value) => existingNames.find((name) => name === value),
          })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="alert">Name is required.</p>
        )}
        {errors.name?.type === "validate" && (
          <p className="alert">Contact already exists.</p>
        )}
      </div>
      <div>
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          {...register("phone", {
            required: true,
            pattern: /[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
          })}
          id="phone"
          type="tel"
          className="form-control"
        />
        {errors.phone?.type === "required" && (
          <p className="alert">Phone is required.</p>
        )}
        {errors.phone?.type === "pattern" && (
          <p className="alert">Format: 123-456-7890</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          {...register("email", { required: true })}
          id="email"
          type="email"
          className="form-control"
        />
        {errors.email?.type === "required" && (
          <p className="alert">Email is required.</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
