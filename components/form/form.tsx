import React from "react";
import { useForm } from "react-hook-form";

const FormTest = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstname" ref={register} /> {/* register an input */}
      <input name="lastname" ref={register({ required: true })} />
      {errors.lastname && "Last name is required."}
      <input name="age" ref={register({ pattern: /\d+/ })} />
      {errors.age && "Please enter number for age."}
      <input type="submit" />
    </form>
  );
};

export default FormTest;
