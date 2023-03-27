<template>
  <section class="skills bg-gray" id="skills">
    <b-container>
      <h3 class="text-center font-weight-bold mb-5">
        Mes Connaissances &amp; <span class="text-primary">Compétences</span>
      </h3>
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
