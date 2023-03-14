<template>
  <footer ref="footer">
    <b-container>
      <p class="text-center mb-2">
        Valentin MANTEZ 2023 | Made with
        <font-awesome-icon
          :icon="['fas', 'heart']"
          class="text-danger"
        ></font-awesome-icon>
        and <a href="" target="_blank"></a
        ><font-awesome-icon
          :icon="['fab', 'vuejs']"
          class="text-success"
        ></font-awesome-icon>
      </p>
      <b-form-row class="justify-content-center">
        <b-col cols="auto">
          <h4 class="mb-0">
            <a
              href="https://github.com/MasterZorigh"
              target="_blank"
              class="text-dark"
            >
              <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
            </a>
          </h4>
        </b-col>
        <b-col cols="auto">
          <h4 class="mb-0">
            <a
              href="https://www.linkedin.com/in/valentin-mantez-57a71b222/"
              target="_blank"
              class="text-dark"
            >
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
              ></font-awesome-icon>
            </a>
          </h4>
        </b-col>
      </b-form-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data: function () {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.footer.style.height = this.$refs.footer.clientHeight + "px";
    });
  },
};
</script>
