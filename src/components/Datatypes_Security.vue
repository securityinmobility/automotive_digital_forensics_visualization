<template>
  <v-container fill-height fluid>
    <v-row></v-row>
    <v-row p-5>
      <router-link to="/dataclasses" style="cursor: pointer; text-decoration: none; color: inherit;">
          <v-btn text color="primary"><v-icon>arrow_back</v-icon></v-btn>
        </router-link>
    </v-row>
    <v-row align-content="center" justify-content="center">
      <v-col>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1900 870"
        >
          <circle
            id="Ellipse_9"
            data-name="Ellipse 9"
            class="sec_color"
            cx="950"
            cy="753"
            r="70"
          />
          <text class="cls-8" transform="translate(920 760)">Gateway</text>
          <circle
            id="Ellipse_9-2"
            data-name="Ellipse 9-2"
            class="sec_color"
            cx="1225.4"
            cy="594"
            r="70"
          />
          <circle
            id="Ellipse_9-3"
            data-name="Ellipse 9-3"
            class="sec_color"
            cx="1225.4"
            cy="276"
            r="70"
          />
          <circle
            id="Ellipse_9-4"
            data-name="Ellipse 9-4"
            class="sec_color"
            cx="950"
            cy="117"
            r="70"
          />
          <circle
            id="Ellipse_9-5"
            data-name="Ellipse 9-5"
            class="sec_color"
            cx="674.6"
            cy="276"
            r="70"
          />
          <circle
            id="Ellipse_9-6"
            data-name="Ellipse 9-6"
            class="sec_color"
            cx="674.6"
            cy="594"
            r="70"
          />
          <circle
            id="Ellipse_1"
            data-name="Ellipse 1"
            class="sec_color"
            cx="950"
            cy="435"
            r="173"
          />
          <text class="cls-9" transform="translate(913.6 443)">Security</text>
          <text class="cls-8" transform="translate(1183.62 590)">
            Immobilizer
          </text>
          <text class="cls-8" transform="translate(1199.08 611)">System</text>
          <text class="cls-8" transform="translate(1179.6 283)">
            Infotainment
          </text>
          <text class="cls-10" transform="translate(913.19 103)">
            <tspan class="cls-11">T</tspan>
            <tspan x="6.82" y="0">elematics</tspan>
          </text>
          <text class="cls-10" transform="translate(923.32 124)">Control</text>
          <text class="cls-10" transform="translate(934.93 145)">Unit</text>
          <text class="cls-8" transform="translate(640.4 272)">
            End-
            <tspan class="cls-12" x="31.36" y="0">P</tspan>
            <tspan x="41.35" y="0">oint</tspan>
          </text>
          <text class="cls-8" transform="translate(650.93 293)">
            D
            <tspan class="cls-12" x="10.49" y="0">e</tspan>
            <tspan x="18.87" y="0">vice</tspan>
          </text>
          <text class="cls-8" transform="translate(649.32 580)">Battery</text>
          <text class="cls-8" transform="translate(647.78 601)">Related</text>
          <text class="cls-8" transform="translate(648.08 622)">System</text>
        </svg>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Datatypes_Security",
};
</script>
<style>
.sec_color {
  fill: #59828d;
  opacity: 0.25;
}
.sec_color,
.cls-8,
.cls-9,
.cls-10 {
  isolation: isolate;
}
.cls-8,
.cls-10 {
  font-size: 16px;
}
.cls-8,
.cls-9,
.cls-10 {
  fill: #707070;
}
.cls-8,
.cls-9 {
  font-family: Roboto-Regular, Roboto;
}
.cls-9 {
  font-size: 20px;
}
.cls-10 {
  font-family: SegoeUI, Segoe UI;
}
.cls-11 {
  letter-spacing: -0.1em;
}
.cls-12 {
  letter-spacing: -0.01em;
}
</style>