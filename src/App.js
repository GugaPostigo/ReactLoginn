import React, { useState } from "react";
import "./styles.css";
import img from "react-image";
import foto from "./undraw_predictive_analytics_re_wxt8.svg";

function login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <div className="container">
      <div className="form-image">
        <object data="./undraw_predictive_analytics_re_wxt8.svg"></object>
      </div>
      <div className="form">
        <form action="#">
          <div className="form-header">
            <div className="title">
              <h1>Faça login na sua conta</h1>
            </div>
            <div className="login-button">
              <button>
                <a href="#">Ainda não tem uma conta? Inscreva-se</a>
              </button>
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="email">E-mail</label>
            <input
              placeholder="Digite seu e-mail"
              required
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="senha">Senha</label>
            <input
              placeholder="Digite sua senha"
              required
              id="senha"
              type="password"
              name="senhha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="continue-button">
            <button>
              <a href="#">Continuar</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
