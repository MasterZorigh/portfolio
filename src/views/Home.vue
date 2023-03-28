<template>
  <section class="home">
    <div class="container">
      <div class="row">
        <div class="mt-3 col-6">
          <div class="mt-4 d-flex justify-content-between">
            <h1>
              BIENVENUE, 
              <span class="text-primary">{{ name }}</span>
            </h1>
          </div>

          <div class="mt-2 col-lg-10 justify-content-between">
            <p>
              Je suis Valentin Mantez, développeur web et mobile. Actuellement
              en Licence Professionnelle en "Développement Internet et Mobile" à
              l'IUT de Calais, je suis aussi assistant chef de projet au sein du
              service informatique de chez SERGIC, dont le siège est basé à
              Wasquehal.
            </p>
            <p>
              Vous pouvez me contacter
              <a href="mailto:mantezvalentin@gmail.com">par mail</a>, ou alors
              accéder à mon CV en cliquant
              <a
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-499b8.appspot.com/o/CV_Valentin_MANTEZ.pdf?alt=media&token=5ca6faf5-2dda-4440-91e4-4fda06803651"
                target="_blank"
                >ici</a
              >.
            </p>
          </div>
        </div>
        <div class="col-lg-6 d-flex justify-content-end">
          <img
            src="@/assets/img/profile.jpg"
            alt="Valentin Mantez"
            class="img-fluid mx-auto my-0 h-100 object-fit-cover max-width-100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { ref, onBeforeMount } from "vue";
// import firebase from "firebase";
window.addEventListener("load", function () {
  document
    .getElementById("upload-form")
    .addEventListener("submit", function () {
      event.preventDefault();
      var form = event.target;

      var file = form.file.files[0];
      console.log(file);
      // [upload in storage here]
    });
});

export default {
  name: "HomeComponent",
  data() {
    return {
      cvUrl: "",
    };
  },
  // setup() {
  //   const name = ref("");
  //   // onBeforeMount(() => {
  //   //   firebase.auth().onAuthStateChanged((user) => {
  //   //     if (user) {
  //   //       name.value = user.displayName;
  //   //     }
  //   //   });
  //   // });
  //   // const Logout = () => {
  //   //   firebase.auth().signOut();
  //   // };
  //   // return { name, Logout };

  //   // onBeforeMount(() => {
  //   //   const user = firebase.auth().currentUser;
  //   //   if (user) {
  //   //     name.value = user.email.split("@")[0];
  //   //   }
  //   // });
  // },
};
</script>
