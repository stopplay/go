/**
 * @format
 * @flow
 */

import { useState } from 'react';

const useRegisterForm = (callback: Function): any => {
  const [formInputs, setFormInputs] = useState({
    name: '',
    surname: '',
    username: '',
    cpf: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = () => {
    callback();
  };

  const handleInputChange = (target: string, text) => {
    setFormInputs({ ...formInputs, [target]: text });
  };

  return {
    handleSubmit,
    handleInputChange,
    formInputs,
  };
};

export default useRegisterForm;
