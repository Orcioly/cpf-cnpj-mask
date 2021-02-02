import React, { useState } from "react";
import ReactDOM from "react-dom";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";

const App = () => {

  const [cpfCnpj, setCpfCnpj] = useState("");
  const [mask, setMask] = useState("");

  return (
    <div>
      <CpfCnpj
        className="customizedInput"
        placeholder="Digite um CPF ou CNPJ"
        type="tel"
        value={cpfCnpj}
        onChange={(event, type) => {
          setCpfCnpj(event.target.value);
          setMask(type === "CPF");
        }}
      />
    </div>
  );
};

export default App;
