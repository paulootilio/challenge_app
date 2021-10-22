import React, { useState, useCallback } from "react";
import cs from "./styles.module.css";
import api from "../../services/api";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import {toast} from "react-toastify";


const OrderForm = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [device_model, setDeviceModel] = useState('');
  const [device_imei, setDeviceImei] = useState('');
  const [annual_price, setAnnualPrice] = useState('');
  const [payment_installments, setPaymentInstallments] = useState('');
  const [mask, setMask] = useState("");

  const notifySucesss = () => toast.success("Assinatura Cadastrada com sucesso");
  function notifyError(error) {
    toast.error(error);
  }

  function getError(type) {
    var types = {
      "user.cpf": "CPF",
      "user.email": "de E-mail",
      "user.name": "Nome",
      "device_model": "Modelo Dispositivo",
      "device_imei": "IMEI Dispositivo",
      "annual_price": "Preço Anual",
      default: "do formulário",
    };
    return "Por favor verifique o campo " + (types[type] || types["default"]) + "!";
  }

  // Função que realiza o post de createUserOder
  const createUserOder = useCallback(async () => {
    const body = 
    {
      order: { 
        device_model,
        device_imei,
        annual_price: parseFloat(annual_price),
        payment_installments: parseInt(payment_installments),
        user_attributes:
          {
            name,
            cpf,
            email,
          },
      }   
    };
    try {
      const { data: responseShow } = await api.post("subscription_order", body);
      setName('');
      setCpf("");
      setEmail("");
      setDeviceModel("");
      setDeviceImei("");
      setAnnualPrice("");
      setPaymentInstallments("");
      notifySucesss();
    } catch (error) {
      let { data } = error.response.data;
      let fitas = Object.entries(data);
      fitas.forEach( fita => {
        notifyError(getError(fita[0]));
      })
    }
  }, [
    name,
    cpf,
    email,
    device_model,
    device_imei,
    annual_price,
    payment_installments,
  ]);

  return (
    <div className={cs.form}>
      <h3>Cadastro</h3>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        className={cs.input}
        onChange={(e) => setName(e.target.value)}
      />
      <CpfCnpj
        placeholder="Digite um CPF ou CNPJ"
        value={cpf}
        onChange={(e, type) => {
          setCpf(e.target.value);
          setMask(type === "CPF");
        }}
      />
      {/* <InputMask
        placeholder="CPF"
        mask="999.999.999-99"
        onChange={(e) => setCpf(e.target.value)}
      /> */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        className={cs.input}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Modelo Dispositivo"
        value={device_model}
        className={cs.input}
        onChange={(e) => setDeviceModel(e.target.value)}
      />
      <input
        type="text"
        placeholder="IMEI Dispositivo"
        value={device_imei}
        className={cs.input}
        onChange={(e) => setDeviceImei(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preço Anual"
        value={annual_price}
        className={cs.input}
        onChange={(e) => setAnnualPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Total de Parcelas"
        value={payment_installments}
        className={cs.input}
        onChange={(e) => setPaymentInstallments(e.target.value)}
      />
      <button onClick={() => createUserOder()} className={cs.btn}>
        Criar
      </button>
    </div>
  );
};

export default OrderForm;
