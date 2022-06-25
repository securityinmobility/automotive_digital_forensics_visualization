<template>
  <v-container fill-height>
    <v-container pa-0>
      <v-row>
        <v-col md3> </v-col>
        <v-col md3>
          <v-select
            v-model="selectedContext"
            :items="getContextOptions"
            label="Choose context"
            outlined
          ></v-select>
        </v-col>
        <v-col md3>
          <v-select
            v-model="selectedCarmodel"
            :items="getCarmodelOptions"
            label="Choose car model"
            outlined
          ></v-select>
        </v-col>
        <v-col md3> </v-col>
      </v-row>
      <v-row justify="center">
        <router-link to="/dataclasses" style="cursor: pointer; text-decoration: none; color: inherit;">
          <v-btn outlined text color="primary" @click="submitData()">
            Submit
          </v-btn>
        </router-link>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: "Home",
  data: () => ({
    selectedContext: "",
    selectedCarmodel: "",
  }),

  computed: {
    getCarmodel() {
      return this.$store.getters.getCarmodel;
    },
    getContext() {
      return this.$store.getters.getContext;
    },
    getContextOptions () {
      return this.$store.getters.getContextOptions;
    },
    getCarmodelOptions () {
      return this.$store.getters.getCarmodelOptions;
    }
  },

  methods: {
    submitData() {
      this.$store.commit("setContext", this.selectedContext),
      this.$store.commit("setCarmodel", this.selectedCarmodel),
        console.log(
          "[Home]: submitData Context" +
            this.selectedContext +
            "Carmodel" +
            this.selectedCarmodel
        ),
        console.log("[Home]:" + this.getCarmodel + this.getContext);
    },
  },
};
</script>