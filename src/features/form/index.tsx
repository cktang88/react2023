import React from "react";
import { useForm } from "react-hook-form";

type SignupData = {
  firstName: string | null;
  lastName: string;
  age: number;
};

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: SignupData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} /> {/* register an input */}
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register("age", { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
}
export default SignupForm;
