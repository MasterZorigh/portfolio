<template>
  <section class="experiences" id="experiences">
    <b-container>
      <h3 class="text-center font-weight-bold mb-5">
        My <span class="text-primary">Experiences</span>
      </h3>
      <b-row align-h="center">
        <b-col lg="11">
          <ul class="timeline">
            <li
              v-for="experience in experiences"
              :key="experience.id"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <b-row align-h="between">
                <b-col md="6">
                  <p class="date small mb-2">
                    {{ experience.date_start }} &mdash;
                    {{ experience.date_end }}
                  </p>
                </b-col>
                <b-col md="6">
                  <div class="description">
                    <h6 class="font-weight-bold">
                      {{ experience.company }} <br /><span
                        class="text-primary"
                        >{{ experience.title }}</span
                      >
                    </h6>
                    <p>{{ experience.description }}</p>
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
      experiences: [
        {
          id: "4",
          company: "",
          title: "Freelance",
          description: "",
        },
        {
          id: "3",
          company: "",
          title: "Freelance",
          description: "",
        },
        {
          id: "2",
          company: "",
          title: "Freelance",
          description: "",
        },
        {
          id: "1",
          company: "",
          title: "Freelance",
          description: "",
        },
        {
          id: "0",
          company: "",
          title: "Freelance",
          description: "",
        },
      ],
    };
  },
};
</script>
