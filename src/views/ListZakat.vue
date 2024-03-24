<template>
  <div class="Container">
    <NavbarZakat />
    <div class="container">
      <div
        class="container d-flex justify-content-center align-items-center vh-100"
      >
        <div>
          <h2 class="mb-4">Data Zakat</h2>
          <p>Jumlah keluarga membayar zakat:</p>
          <p>Jumlah jamaah membayar zakat:</p>
          <p>Jumlah seluruh zakat:</p>
          <p>Jumlah seluruh sodakoh:</p>
          <p>Jumlah seluruhnya:</p>
        </div>
      </div>

      <div class="row">
        <div
          class="col-sm-4"
          v-for="(zakat, index) in zakats"
          :key="zakat.uuid_zakat"
        >
          <CardZakat :zakat="zakat" :index="index" class="mb-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarZakat from "@/components/NavbarZakat.vue";
import CardZakat from "@/components/CardZakat.vue";
import axios from "axios";
export default {
  name: "ListZakat",
  components: {
    NavbarZakat,
    CardZakat,
  },
  data() {
    return {
      zakats: [],
    };
  },
  methods: {
    setZakats(data) {
      this.zakats = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:5000/input-zakat/search/all/", {})
      .then((response) => this.setZakats(response.data.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
