<template>
  <v-container>
    <v-row align-content="center" justify-content="center">
      <Datatypes_Firmware v-if="allDatatypes == 'Datatypes_Firmware'" />
      <Datatypes_Security v-if="allDatatypes == 'Datatypes_Security'" />
      <Datatypes_Safety v-if="allDatatypes == 'Datatypes_Safety'" />
      <Datatypes_User v-if="allDatatypes == 'Datatypes_User'" />
      <Datatypes_Communication
        v-if="allDatatypes == 'Datatypes_Communication'"
      />
    </v-row>
  </v-container>
</template>

<script>
import Datatypes_Firmware from "./Datatypes_Firmware.vue";
import Datatypes_Security from "./Datatypes_Security.vue";
import Datatypes_Safety from "./Datatypes_Safety.vue";
import Datatypes_User from "./Datatypes_User.vue";
import Datatypes_Communication from "./Datatypes_Communication.vue";

export default {
  components: {
    Datatypes_Firmware,
    Datatypes_Security,
    Datatypes_Safety,
    Datatypes_User,
    Datatypes_Communication,
  },
  computed: {
    allDatatypes() {
      return this.$store.getters.allDatatypes;
    },
  },
};
</script>