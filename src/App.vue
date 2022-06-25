<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>
        <span class="hidden-sm-and-up">
          <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
        </span>
        {{ appTitle }}
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      appTitle: "ADFDataVis",
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/", icon: "home" },
        { title: "Dataclasses", path: "/dataclasses", icon: "dashboard" },
      ],
    };
  },
};
</script>