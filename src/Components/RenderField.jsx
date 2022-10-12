import React from "react";
import { FormLabel, Input, Box, Text } from "@chakra-ui/react";

import zxcvbn from "zxcvbn";
import PasswordStrength from "./PasswordStrength";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning,reset },
}) => {
  //   const testResult = zxcvbn(input.value);
  //   const num = (testResult.score * 100) / 4;
  // console.log(num)

  //const passwordLabel=()=>{
  //   switch (testResult.score) {
  //     case 0:
  //       return "";
  //     case 1:
  //       return "Weak";

  //     case 2:
  //       return "Fear";

  //     case 3:
  //       return "Good";

  //     case 4:
  //       return "Strong";

  //     default:
  //       return "";
  //   }
  // }

  // const progressColor = () => {
  //   switch (testResult.score) {
  //     case 0:
  //       return "#828282";
  //     case 1:
  //       return "#EA1111";

  //     case 2:
  //       return "#FFAD00";

  //     case 3:
  //       return "#9bc158";

  //     case 4:
  //       return "#00b500";

  //     default:
  //       return "none";
  //   }
  // };

  // const changePasswordColor = () => ({
  //   //width: `${num}%`,
  //   backgroundColor: progressColor(),
  //   height: "7px",
  //   borderRadius: "8px",
  // });

  return (
    <Box>
      <FormLabel alignItems="flex-start">{label}</FormLabel>
      <Box>
        <Input {...input} placeholder={label} type={type} width="450px" />
        {label === "Password" && (
          <PasswordStrength label={label} error={error} />
        )}
        {/*       
          // <Box style={changePasswordColor() } mt="6px">
          //   <span style={{color:progressColor()}}>{passwordLabel()}</span>
          // </Box> */}

        <Text>
          {label === "Password" ? (touched = true) : touched}
          {touched &&
            ((error && (
              <Text
                style={{
                  color: "red",
                  fontSize: "12px",
                  alignItems: "flex-start",
                }}
              >
                {error}
              </Text>
            )) ||
              (warning && (
                <Text
                  style={{
                    color: "red",
                    fontSize: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  {warning}
                </Text>
              )))}
        </Text>
      </Box>
    </Box>
  );
};

export default renderField;
