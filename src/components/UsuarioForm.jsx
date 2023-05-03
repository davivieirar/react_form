import React from "react";

export const UsuarioForm = () => {
  return (
    <div className="container">
      <form className="col">
        <h2>Cadastro de Usuários</h2>
        <hr/>

        <div class={`col-md-20 mb-3`}>
          <label for="name" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="name" value="" required />
          <div class="valid-feedback">Looks good!</div>
        </div>

        <div class={`col-md-20 mb-3`}>
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            id="email"
            value=""
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>

        <div class={`col-md-20 mb-3`}>
          <label for="password" class="form-label">
            First name
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            value=""
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>

        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>

      </form>
    </div>
  );
};
