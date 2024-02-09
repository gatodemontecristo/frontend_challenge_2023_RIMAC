import { useState } from "react";

export const useFormulario = () => {
  const [dniValue, setDNIValue] = useState({ documento: "", error: true });
  const [numberValue, setNumberValue] = useState({ numero: "", error: true });
  const [typeDocValue, setTypeDocValue] = useState("pasaporte");
  const [conditionValue1, setConditionValue1] = useState(false);
  const [conditionValue2, setConditionValue2] = useState(false);
  const [errorValue, setErrorValue] = useState(false);

  const onDNIChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    const validation = `${typeDocValue == "dni" ? 8 : 12}`;
    if (result.length <= validation) {
      if (parseInt(result).toString().length == validation)
        setDNIValue({ documento: result, error: false });
      else setDNIValue({ documento: result, error: true });
    }
  };
  const onNumberChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    if (result.length <= 10) {
      if (parseInt(result).toString().length == 10)
        setNumberValue({ numero: result, error: false });
      else setNumberValue({ numero: result, error: true });
    }
  };
  const onTypeDocChange = ({ target }) => {
    setTypeDocValue(target.value);
    setDNIValue({ documento: "", error: true });
  };

  const onConditionChange1 = () => {
    setConditionValue1(!conditionValue1);
  };
  const onConditionChange2 = () => {
    setConditionValue2(!conditionValue2);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      !dniValue.error &&
      !numberValue.error &&
      conditionValue1 &&
      conditionValue2
    ) {
      setErrorValue(false);
    } else {
      setErrorValue(true);
    }
  };

  return {
    onDNIChange,
    onNumberChange,
    onTypeDocChange,
    onConditionChange1,
    onConditionChange2,
    dniValue,
    numberValue,
    typeDocValue,
    conditionValue1,
    conditionValue2,
    errorValue,
    onSubmit
  };
};
