import React, { useState } from "react";
import PropTypes from "prop-types";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";


function Form(props) {

  const [page, setPage] = useState(1);

  const submit = (values) => {
    alert("submitted");
    console.log(values);
  }

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      {page === 1 && <FirstForm onSubmit={nextPage} />}
      {page === 2 && (
        <SecondForm previousPage={previousPage} onSubmit={submit} />
      )}
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
