<template>
  <section class="skills bg-gray" id="skills">
    <b-container>
      <div class="container">
        <div class="row">
          <h3 class="text-center font-weight-bold mb-5">
            Mes Connaissances &amp;
            <span class="text-primary">Compétences</span>
          </h3>
          <div class="col-11">
            <ul class="timeline">
              <li
                v-for="skill in skills"
                :key="skill.id"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                <b-row>
                  <b-col md="6">
                    <img
                      class="img-fluid mx-auto my-0"
                      style="max-height: 10vh"
                      :src="skill.icon"
                      alt="Icon for {{ skill.title }}"
                    />
                  </b-col>
                  <b-col md="6">
                    <div class="description">
                      <h6 class="font-weight-bold">{{ skill.title }} <br /></h6>
                    </div>
                  </b-col>
                </b-row>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "SkillsComponent",
  data: function () {
    return {
      skills: [
        {
          id: "0",
          title: "HTML5",
          icon: require("./../assets/img/skills/html5.png"),
          text: "",
        },
        {
          id: "1",
          title: "CSS3",
          icon: require("./../assets/img/skills/css3.png"),
          text: "",
        },
        {
          id: "2",
          title: "Javascript",
          icon: require("./../assets/img/skills/js.png"),
          text: "",
        },
        {
          id: "3",
          title: "Bootstrap",
          icon: require("./../assets/img/skills/bootstrap.png"),
          text: "",
        },
        {
          id: "4",
          title: "NodeJS",
          icon: require("./../assets/img/skills/nodejs.png"),
          text: "",
        },
        {
          id: "5",
          title: "PHP",
          icon: require("./../assets/img/skills/php.png"),
          text: "",
        },
        {
          id: "6",
          title: "VueJs",
          icon: require("./../assets/img/skills/vue.png"),
          text: "",
        },
        {
          id: "7",
          title: "Laravel",
          icon: require("./../assets/img/skills/laravel.png"),
          text: "",
        },
        {
          id: "8",
          title: "MySQL",
          icon: require("./../assets/img/skills/mysql.png"),
          text: "",
        },
        {
          id: "9",
          title: "Git",
          icon: require("./../assets/img/skills/git.png"),
          text: "",
        },
      ],
    };
  },
};
</script>
