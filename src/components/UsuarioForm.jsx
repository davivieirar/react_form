import React, { useState } from "react";

export const UsuarioForm = () => {
  // const [nome, setNome] = useState("");
  // const [email, setEmail] = useState("");
  // const [senha, setSenha] = useState("");

  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    senha: ''
  })
  const submeterForm = (event) => {
    event.preventDefault();
    console.log(usuario)
  };

const atualizarValor = (event) => {
  const id = event.target.id
  const valor = event.target.value
  setUsuario({ ...usuario, [id]: valor })
}


  return (
    <div className="container">
      <form className="col" onSubmit={submeterForm}>
        <h2>Cadastro de Usuários</h2>
        <hr />

        <div className={`col-md-20 mb-3`}>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            required
            value={usuario.nome}
            onChange={atualizarValor}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className={`col-md-20 mb-3`}>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            required
            value={usuario.email}
            onChange={atualizarValor}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className={`col-md-20 mb-3`}>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="senha"
            required
            value={usuario.senha}
            onChange={atualizarValor}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};
