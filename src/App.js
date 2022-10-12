import "./App.css";
import Form from "./Components/Form";
import axios from 'axios'

import { Box, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function App() {
  // const navigate = useNavigate();

  //  const submit = (values) => {
  //   navigate('/formtwo');
  //     console.log(values);
  //   }

  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Form onSubmit={submit}/>} />
         </Routes></div>Route path="/formtwo" element={<FormTwo />} /> 
       </Routes> */}
      <Center>
        <Box border="1px solid gray" w="500px" p="20px">
          <Form />
        </Box>
      </Center>
    </div>
  );
}

export default App;
