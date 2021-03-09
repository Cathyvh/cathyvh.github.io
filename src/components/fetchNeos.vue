<template>
  <div>
    <div class="fetch-neos">
      <div class="cal-search">
        <b-calendar
          selected-variant="primary"
          nav-button-variant="light-secondary"
          v-model="startDate"
          locale="en-US"
        ></b-calendar>
        <a
          href="#scroll"
          v-smooth-scroll
          class="btn-secondary button"
          @click="loadNeo"
          >Search</a
        >
      </div>
    </div>
    <!-- <div v-if="(this.startDate = undefined)">
      <b-alert show variant="warning">Choose a date</b-alert>
    </div> -->
    <div class="results" id="scroll">
      <div class="card-container">
        <b-card
          class="cards"
          style="background-color: rgba(20, 33, 61, 0.75)"
          :key="neo.id"
          v-for="neo in neos"
        >
          <img
            v-if="neo.estimated_diameter.meters.estimated_diameter_min > 100"
            src="../assets/happy-big.png"
            alt=""
          />
          <img
            v-else-if="
              neo.estimated_diameter.meters.estimated_diameter_min < 25
            "
            src="../assets/happy-small.png"
            alt=""
          />
          <img v-else src="../assets/happy-medium.png" alt="" />
          <b-card-text class="card-text">
            <ul>
              <li>
                <h5>Estimated diameter:</h5>
                min
                <span>{{
                  neo.estimated_diameter.meters.estimated_diameter_min
                }}</span
                >m <br />
                max
                <span>{{
                  neo.estimated_diameter.meters.estimated_diameter_max
                }}</span
                >m
              </li>
              <li>
                <h5>Relative velocity:</h5>
                <span>{{
                  neo.close_approach_data[0].relative_velocity
                    .kilometers_per_second
                }}</span>
                km/s
              </li>
              <li>
                <h5>Distance from Earth:</h5>
                <span>
                  {{
                    neo.close_approach_data[0].miss_distance.kilometers
                  }}</span
                >
                km
              </li>
              <li>
                <h5>Aproached earth at:</h5>
                <span>
                  {{
                    neo.close_approach_data[0].close_approach_date_full
                  }}</span
                >
              </li>
              <li>
                <h5>Was it potentially hazardous?</h5>
                <span>{{ neo.is_potentially_hazardous_asteroid }}</span>
              </li>
            </ul>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fetchNeos",
  props: {
    message: String,
  },

  data() {
    return {
      neos: [],
    };
  },
  methods: {
    loadNeo() {
      fetch(this.url)
        .then((response) => response.json())
        .then((result) => {
          const data = result.near_earth_objects;
          this.neos = data[this.startDate];
          console.log(this.neos);
        });
    },
    // currentDate() {
    //   var formattedDate = new Date().toJSON().slice(0, 10);
    //   console.log(formattedDate);
    //   return formattedDate;
    // },
  },

  computed: {
    url() {
      return `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.startDate}&end_date=${this.startDate}&api_key=pWcOGPziboocs8YhHzsny4nvjHKHONdz3VyIPTbm`;
    },
    startDate: {
      get() {
        return this.$store.state.startDate;
      },
      set(startDate) {
        this.$store.commit("setStartDate", startDate);
      },
    },
  },
};
</script>
<style scoped>
.results {
  margin: 50px auto 250px auto;
  max-width: 1300px;
}
.card-container {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2.5rem;
}
.card-container > * {
  width: 100%;
  max-width: 25rem;
}
.fetch-neos {
  display: flex;
  flex-direction: column;
}
.cal-search {
  margin: 3em 0;
  display: flex;
  flex-direction: column;
  align-self: center;
}
.button {
  margin-top: 2em;
}

img {
  width: 20em;
}
.card-text {
  color: white;
}
ul {
  list-style-type: none;
  text-align: left;
}
li {
  margin-bottom: 1.5em;
}
h5,
span {
  font-weight: bold;
}
@media (max-width: 400px) {
  img {
    width: 15em;
  }
  li {
  }
  .card-container {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
}
</style>
