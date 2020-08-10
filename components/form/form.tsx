import React from "react";
import { useForm } from "react-hook-form";
import { Text, Input, Box, Button } from "theme-ui";

const FormTest = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      m={2}
      p={2}
      sx={{
        maxWidth: "500px",
      }}
    >
      <Text>Form</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input m={2} placeholder="First name" name="firstname" ref={register} />{" "}
        <Input
          m={2}
          placeholder="Last name"
          name="lastname"
          ref={register({ required: true })}
        />
        {errors.lastname && "Last name is required."}
        <Input
          m={2}
          placeholder="Age"
          name="age"
          ref={register({ pattern: /\d+/ })}
        />
        {errors.age && "Please enter number for age."}
        <Button m={2} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FormTest;
