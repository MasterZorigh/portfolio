<template>
  <div class="container">
    <div class="row">
      <div class="mt-3 col-6">
        <h4>Se connecter</h4>
      </div>
      <b-form class="d-flex justify-content-center">
        <div class="mt-2 col-lg-7">
          <div class="row">
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Nom :"
                label-for="input-lastname"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.lastname"
                  required
                  class="mb-2"
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Prénom :"
                label-for="input-firstname"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  required
                  class="mb-2"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <b-form-group
                id="input-group-2"
                label="Adresse email :"
                label-for="input-mail"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.mail"
                  required
                  class="mb-2"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <b-form-group
                id="input-group-2"
                label="Mot de passe :"
                label-for="input-password"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  required
                  class="mb-2"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="mt-4 d-flex justify-content-evenly">
            <b-button type="submit" variant="primary" @click="showModal()"
              >Connexion</b-button
            >
            <b-button type="reset" variant="danger" @click="reset()"
              >Annuler</b-button
            >
          </div>
        </div>
      </b-form>
    </div>
  </div>

  <ModalDefault ref="coUserModal" @coUser="coUser" />
</template>

<script>
export default {
  name: "LoginComponent",
    data() {
        return {
        form: {
            lastname: "",
            firstname: "",
            email: "",
            password: "",
            confPassword: "",
        },
        modalTitre: "",
        modalDescr: "",
        modalButton: 0,
        };
    },

  methods: {
    showModal() {
      if (
        this.form.lastname !== "" &&
        this.form.firstname != "" &&
        this.form.email !== "" &&
        this.form.password !== ""
      ) {
        this.$refs.coUser.showModal(
          (this.modalTitre = "Connexion utilisateur"),
          (this.modalDescr = "Souhaitez-vous enregistrer ce profil ?"),
          (this.modalButton = 1)
        );
      }
    },
  },
};</script>
