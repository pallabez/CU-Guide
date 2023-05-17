<template>
  <!-- <aside class="sidebar">

    <div class="img-container c-row">
      <img loading="lazy" src="/images/Chandigarh_University_Seal.png" alt="CU LOGO" width="200px" />
    </div>
    <div class="menu-container">
      <ul>
        <li class="card">
          <a class="card__link" href="#">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </a>
        </li>
        <li class="card">
          <a class="card__link" href="https://lms.cuchd.in/" target="_blank">
            <i class="fas fa-book"></i>
            <span>Courses</span>
          </a>
        </li>
        <li class="card">
          <a class="card__link" href="https://www.cuchd.in/admissions/course-fee.php" target="_blank">
            <i class="fas fa-wallet"></i>
            <span>Academic Fees</span>
          </a>
        </li>
        <li class="card">
          <a class="card__link" href="https://uims.cuchd.in/uims/" target="_blank">
            <i class="fas fa-calendar-day"></i>
            <span>Events</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="menu-footer c-row">
      <i class="fas fa-copyright"></i>
      <span>Made by Back Benchers</span>
    </div>
  </aside> -->

  <v-navigation-drawer v-model="drawer">
    <v-sheet color="primary-darken-1" class="pa-4">
      <v-avatar class="mb-4" color="white" size="64" />

      <div class="email">21BCS1351@cuchd.in</div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item v-for="[icon, text, link, target] in links" :key="icon" link :href="link" :target=target>
        <template v-slot:prepend>
          <v-icon color="primary">{{ icon }}</v-icon>
        </template>

        <v-list-item-title>{{ text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      ['mdi-home', 'Home', '/', '_self'],
      ['mdi-bell', 'Notifiactions', '/notifications', '_self'],
      // ['mdi-delete', 'Trash', '/notifications', '_self'],
      ['mdi-cash-multiple', 'Academic Fees', 'https://www.cuchd.in/admissions/course-fee.php', '_blank'],
      ['mdi-account-multiple', 'Contact Info', '/notifications', '_self']
    ],
  }),
}
</script>


<style scoped>
.email {
  color: white;
}
</style>