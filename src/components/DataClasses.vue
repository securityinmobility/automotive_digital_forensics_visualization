<template>
  <v-container fill-height>
    <v-row>
      <router-link
        to="/"
        style="cursor: pointer; text-decoration: none; color: inherit"
      >
        <v-btn text color="primary"><v-icon>arrow_back</v-icon></v-btn>
      </router-link>
      <v-col>
        <v-select
          v-model="selectedContext"
          :items="getContextOptions"
          label="Choose context"
          outlined
          @input="submitDataContext()"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          v-model="selectedCarmodel"
          :items="getCarmodelOptions"
          label="Choose car model"
          outlined
          @input="submitDataCarmodel()"
        ></v-select>
      </v-col>
      <v-col></v-col>
      <v-col></v-col>
      <v-col></v-col>
    </v-row>
    <v-container>
      <v-container>
        <v-row>
          <v-col>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="290"
              height="290"
              viewBox="0 0 290 290"
            >
              <router-link
                to="/datacomponents"
                style="cursor: pointer"
                @click.native="
                  $store.commit('setDatatype', 'Datatypes_Firmware')
                "
              >
                <circle
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  cx="100"
                  cy="100"
                  :r="radiusFirmware"
                  transform="translate(45 45)"
                  fill="#8b956d"
                  opacity="0.25"
                />
                <text
                  fill="#707070"
                  font-size="25"
                  font-family="Roboto"
                  x="90"
                  y="150"
                >
                  Firmware
                </text>
              </router-link>
            </svg>
          </v-col>
          <v-col>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="290"
              height="290"
              viewBox="0 0 290 290"
            >
              <router-link
                to="/datacomponents"
                style="cursor: pointer"
                @click.native="
                  $store.commit('setDatatype', 'Datatypes_Security')
                "
              >
                <circle
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  cx="100"
                  cy="100"
                  :r="radiusSecurity"
                  transform="translate(45 45)"
                  fill="#59828d"
                  opacity="0.25"
                />
                <text
                  fill="#707070"
                  font-size="25"
                  font-family="Roboto"
                  x="100"
                  y="150"
                >
                  Security
                </text>
              </router-link>
            </svg>
          </v-col>
          <v-col>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="290"
              height="290"
              viewBox="0 0 290 290"
            >
              <router-link
                to="/datacomponents"
                style="cursor: pointer"
                @click.native="$store.commit('setDatatype', 'Datatypes_Safety')"
              >
                <circle
                  id="Ellipse_3"
                  data-name="Ellipse 3"
                  cx="100"
                  cy="100"
                  :r="radiusSafety"
                  transform="translate(45 45)"
                  fill="#5e4e74"
                  opacity="0.25"
                />
                <text
                  fill="#707070"
                  font-size="25"
                  font-family="Roboto"
                  x="110"
                  y="150"
                >
                  Safety
                </text>
              </router-link>
            </svg>
          </v-col>
          <v-col>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="290"
              height="290"
              viewBox="0 0 290 290"
            >
              <router-link
                to="/datacomponents"
                style="cursor: pointer"
                @click.native="$store.commit('setDatatype', 'Datatypes_User')"
              >
                <circle
                  id="Ellipse_4"
                  data-name="Ellipse 4"
                  cx="100"
                  cy="100"
                  :r="radiusUser"
                  transform="translate(45 45)"
                  fill="#af6d8e"
                  opacity="0.25"
                />
                <text
                  fill="#707070"
                  font-size="25"
                  font-family="Roboto"
                  x="120"
                  y="150"
                >
                  User
                </text>
              </router-link>
            </svg>
          </v-col>
          <v-col
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="290"
              height="290"
              viewBox="0 0 290 290"
            >
              <router-link
                to="/datacomponents"
                style="cursor: pointer"
                @click.native="
                  $store.commit('setDatatype', 'Datatypes_Communication')
                "
              >
                <circle
                  id="Ellipse_5"
                  data-name="Ellipse 5"
                  cx="100"
                  cy="100"
                  :r="radiusCommunication"
                  transform="translate(45 45)"
                  fill="#b1376c"
                  opacity="0.25"
                />
                <text
                  fill="#707070"
                  font-size="25"
                  font-family="Roboto"
                  x="55"
                  y="150"
                >
                  Communication
                </text>
              </router-link>
            </svg>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    datatype: "",
    radiusFirmware: "100",
    radiusSecurity: "100",
    radiusSafety: "100",
    radiusUser: "100",
    radiusCommunication: "100",
    selectedContext: "",
    selectedCarmodel: "",
  }),

  computed: {
    allDatatypes() {
      return this.$store.getters.allDatatypes;
    },
    getCarmodel() {
      return this.$store.getters.getCarmodel;
    },
    getContext() {
      return this.$store.getters.getContext;
    },
    getRadius1() {
      return this.$store.getters.getRadius1;
    },
    getRadius2() {
      return this.$store.getters.getRadius2;
    },
    getContextOptions() {
      return this.$store.getters.getContextOptions;
    },
    getCarmodelOptions() {
      return this.$store.getters.getCarmodelOptions;
    }
  },

  methods: {
    submitDataContext() {
      this.$store.commit("setContext", this.selectedContext);
      console.log("[Dataclasses Context] " + this.getContext);
    },
    submitDataCarmodel() {
      console.log("[Dataclasses Carmodel 1] " + this.selectedCarmodel);
      this.$store.commit("setCarmodel", this.selectedCarmodel);
      console.log("[Dataclasses Carmodel 2] " + this.getCarmodel);
    },
    adaptCircleSize() {
      if (
        this.getContext == "Accident (Question of guilt)" &&
        this.getCarmodel == "Tesla Model 3 (2015)"
      ) {
        this.radiusFirmware = this.getRadius1;
        this.radiusSafety = this.getRadius2;
        this.radiusSecurity = this.getRadius1;
        this.radiusUser = this.getRadius2;
        this.radiusCommunication = this.getRadius2;
        console.log("mounted");
      } else if (
        this.getContext == "Theft" &&
        this.getCarmodel == "Tesla Model 3 (2015)"
      ) {
        this.radiusUser = this.getRadius2;
        this.radiusCommunication = this.getRadius2;
        this.radiusFirmware = this.getRadius1;
        this.radiusSecurity = this.getRadius2;
        this.radiusSafety = this.getRadius1;
        console.log("mounted");
      }
    },
  },

  mounted() {
    // Code that will run only after the
    // entire view has been rendered
    this.selectedContext = this.getContext;
    this.selectedCarmodel = this.getCarmodel;

    this.adaptCircleSize();
  },

  updated() {
    this.adaptCircleSize();
  },
};
</script>