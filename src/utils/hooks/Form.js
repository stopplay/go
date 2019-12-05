/**
 * @format
 * @flow
 */

import { useState } from 'react';

const useForm = (state: Object, callback: Function): any => {
  const [formInputs, setFormInputs] = useState(state);

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

export default useForm;
