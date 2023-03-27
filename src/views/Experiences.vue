<template>
  <section class="experiences" id="experiences">
    <b-container>
      <h3 class="text-center font-weight-bold mb-5">
        Mes <span class="text-primary">Expériences</span>
      </h3>
      <b-row align-h="center">
        <h4 class="text-center font-weight-bold mb-5">
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
        <h4 class="text-center font-weight-bold mb-5">
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
      </b-row>
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
            "VueJS, Javascript. Amélioration de l'interface comptable pour la gestion de factures de copropriétés.",
        },
        {
          id: "0",
          company: "CERMIX, solutions expertes pour la construction",
          title: "STAGIAIRE - Développeur Web",
          description:
            "HTML, STRUTS, Java, Bootstrap,JavaScript, DWR. Utilisation du logiciel Eclipse pour développer en local et accéder au serveur Tomcat. Utilisation de Toad pour l'accès à la BDD",
        },
      ],
      experiencesPerso: [
        {
          id: "3",
          company: "IUT de Calais",
          title: "WYNALIA",
          description:
            "Projet de serveur Minecraft : HTML/CSS/PHP pour la V1 du site web, JAVA pour le bot et le serveur Discord, JAVA pour le plugin.",
        },
        {
          id: "2",
          company: "IUT de Calais",
          title: "Création d'entreprieses",
          description:
            "HTML/CSS/PHP. Création d'une copie de Facebook pour l'IUT, avec la mise en place d'une gestion d'entreprise.",
        },
        {
          id: "1",
          company: "IUT de Calais",
          title: "Mosaïque",
          description:
            "JAVA. Création d'une mosaïque basée sur une image, composée de captures d'écrans d'une / plusieurs vidéos.",
        },
        {
          id: "0",
          company: "MR PEABODY",
          title: "Site web",
          description:
            "HTML/CSS/PHP/JS/VueJS. Site web pour un groupe de musique.",
        },
      ],
    };
  },
};
</script>
