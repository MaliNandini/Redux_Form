import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./FormValidation";
import renderField from "./RenderField";
import { VStack, Box, Button } from "@chakra-ui/react";

function FirstForm(props) {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Box border="2px solide red">
        <VStack spacing={8}>
          <Field
            name="firstName"
            type="text"
            component={renderField}
            label="First Name"
          />
          <Field
            name="lastName"
            type="text"
            component={renderField}
            label="Last Name"
          />
        </VStack>

        <Box mt="20px">
          <Button type="submit">Next</Button>
        </Box>
      </Box>
    </form>
  );
}

export default reduxForm({
  form: "Form", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(FirstForm);
