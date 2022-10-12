import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./FormValidation";
import renderField from "./RenderField";
import { VStack, Box, Button} from "@chakra-ui/react";



function SecondForm(props) {
  const { handleSubmit, pristine, previousPage, submitting,reset } = props;

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={8}>
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
        />

        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
      
        <Field
          name="cPassword"
          type="Password"
          component={renderField}
          label="Confimred Password"
        />
      </VStack>

      <Box mt="20px">
        <Button type="button" className="previous" onClick={previousPage}>
          Previous
        </Button>
        <Button type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
        <Button type="submit" disabled={pristine || submitting} onClick={reset}>
         Reset
        </Button>
      </Box>
    </form>
  );
}

export default reduxForm({
  form: "Form", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(SecondForm);
