<template>
  <div class="container">
    <div class="row">
      <div class="mt-3 col-6">
        <h4>Enregistrement</h4>
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
          <div class="row">
            <div class="col">
              <b-form-group
                id="input-group-2"
                label="Confirmer mot de passe :"
                label-for="input-confPassword"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.confPassword"
                  required
                  class="mb-2"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="mt-4 d-flex justify-content-evenly">
            <b-button type="submit" variant="primary" @click="showModal()"
              >Valider</b-button
            >
            <b-button type="reset" variant="danger" @click="reset()"
              >Annuler</b-button
            >
          </div>
          <div class="mt-4 d-flex justify-content-center">
            <b-button type="submit" variant="primary" @click="signIntWithGoogle"
              >Se connecter avec Google</b-button
            >
          </div>
        </div>
      </b-form>
    </div>
  </div>

  <ModalDefault ref="addUser" @addUser="addUser" />
</template>

<script>
// import firebase from "firebase/app";
// import "firebase/auth";
// import * as firebaseui from "firebaseui";

// import { ref } from "vue";
// import firebase from "firebase";

export default {
  name: "AuthenticationComponent",
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
  // setup() {
  //   const email = ref("");
  //   const password = ref("");

  //   const Login = () => {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(email.value, password.value)
  //       .then((data) => console.log(data))
  //       .catch((error) => alert(error.message));
  //   };

  //   return {
  //     Login,
  //     email,
  //     password,
  //   };
  // },
  // mounted() {
  //   const uiConfig = {
  //     signInSuccessUrl: "/dashboard",
  //     signInOptions: [
  //       firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     ],
  //     tosUrl: "/terms-of-service",
  //     privacyPolicyUrl: "/privacy-policy",
  //   };

  //   const ui = new firebaseui.auth.AuthUI(firebase.auth());
  //   ui.start("#firebaseui-auth-container", uiConfig);
  // },
  methods: {
    showModal() {
      if (
        this.form.lastname !== "" &&
        this.form.firstname != "" &&
        this.form.email !== "" &&
        this.form.password !== "" &&
        this.form.confPassword != ""
      ) {
        this.$refs.addUser.showModal(
          (this.modalTitre = "Enregistrement utilisateur"),
          (this.modalDescr = "Souhaitez-vous enregistrer ce profil ?"),
          (this.modalButton = 1)
        );
      }
    },

    reset() {
      this.form.lastname = "";
      this.form.firstname = "";
      this.form.email = "";
      this.form.password = "";
      this.form.confPassword = "";
    },
  },
};
</script>
