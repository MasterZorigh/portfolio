<template>
  <section class="experiences" id="experiences">
    <b-container>
      <div class="container">
        <div class="row">
          <div class="mt-3 col-7"></div>
          <h3 class="text-center font-weight-bold mb-5">
            Mes <span class="text-primary">Expériences</span>
          </h3>
          <h4 class="font-weight-bold mb-5">
            Projets professionnels
          </h4>
          <b-col lg="11">
            <ul class="timeline">
              <li
                v-for="experiencePro in experiencesPro"
                :key="experiencePro.id"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                <b-row align-h="between">
                  <b-col md="6">
                    <p class="date small mb-2">
                      {{ experiencePro.date_start }} &mdash;
                      {{ experiencePro.date_end }}
                    </p>
                  </b-col>
                  <b-col md="6">
                    <div class="description">
                      <h6 class="font-weight-bold">
                        {{ experiencePro.company }} <br /><span
                          class="text-primary"
                          >{{ experiencePro.title }}</span
                        >
                      </h6>
                      <p>{{ experiencePro.description }}</p>
                    </div>
                  </b-col>
                </b-row>
              </li>
            </ul>
          </b-col>
          <h4 class="font-weight-bold mb-5">
            Projets personnels et scolaires
          </h4>
          <b-col lg="11">
            <ul class="timeline">
              <li
                v-for="experiencePerso in experiencesPerso"
                :key="experiencePerso.id"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                <b-row align-h="between">
                  <b-col md="6">
                    <p class="date small mb-2">
                      {{ experiencePerso.date_start }} &mdash;
                      {{ experiencePerso.date_end }}
                    </p>
                  </b-col>
                  <b-col md="6">
                    <div class="description">
                      <h6 class="font-weight-bold">
                        {{ experiencePerso.company }} <br /><span
                          class="text-primary"
                          >{{ experiencePerso.title }}</span
                        >
                      </h6>
                      <p>{{ experiencePerso.description }}</p>
                    </div>
                  </b-col>
                </b-row>
              </li>
            </ul>
          </b-col>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "ExperiencesComponent",
  data: function () {
    return {
      experiencesPro: [
        {
          id: "1",
          company: "SERGIC",
          title: "ASSISTANT CHEF DE PROJET - Développeur Web",
          description:
            "Développeur fullstack. Refonte / Amélioration de l'interface de gestion comptable des factures de copropriétés (Rebirth | VueJS / Javascript) Projet webMethods : développement d'un nouveau système visant à remplacer l'AS400 grâce à l'outil webMethods.",
        },
        {
          id: "0",
          company: "CERMIX, solutions expertes pour la construction",
          title: "STAGIAIRE - Développeur Web",
          description:
            "Amélioration de l'ERP Phénix : HTML / Struts / Java / Bootstrap / Javascript / DWR. Utilisation du logiciel Eclipse pour développer en local et accéder au serveur Tomcat. Utilisation de Toad pour la BDD",
        },
      ],
      experiencesPerso: [
        {
          id: "3",
          company: "IUT de Calais",
          title: "WYNALIA",
          description:
            "PROJET WYNALIA, serveurs Minecraft (Plug-in / Discord / Site web). Web : HTML/CSS/PHP/JS/VueJS. Serveur : JAVA. Discord : JAVA.",
        },
        {
          id: "2",
          company: "IUT de Calais",
          title: "Création d'entreprieses",
          description:
            "Création d'une copie de Facebook pour l'IUT, avec la mise en place d'une gestion d'entreprise. HTML/CSS/PHP. ",
        },
        {
          id: "1",
          company: "IUT de Calais",
          title: "Mosaïque",
          description:
            "Création d'une mosaïque basée sur une image, composée de captures d'écrans d'une / plusieurs vidéos : JAVA. ",
        },
        {
          id: "0",
          company: "MR PEABODY",
          title: "Site web",
          description:
            "Développement du site web Mr Peabody : VueJS(vuetify) / PHP / MySQL. https://mrpeabody.fr/",
        },
      ],
    };
  },
};
</script>
