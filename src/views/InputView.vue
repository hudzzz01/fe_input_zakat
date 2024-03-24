<template>
  <div class="container">
    <navbar-zakat />
    <h1 class="mt-5">Bio Data</h1>
    <form @submit.prevent="postData" class="mt-4">
      <div class="form-group">
        <label for="nama_lengkap">Nama Lengkap:</label>
        <input
          type="text"
          id="nama_lengkap"
          v-model="formData.nama_lengkap"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="tempat_lahir">Tempat Lahir:</label>
        <input
          type="text"
          id="tempat_lahir"
          v-model="formData.tempat_lahir"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="tanggal_lahir">Tanggal Lahir:</label>
        <input
          type="text"
          id="tanggal_lahir"
          v-model="formData.tanggal_lahir"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="alamat">Alamat:</label>
        <input
          type="text"
          id="alamat"
          v-model="formData.alamat"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="kelurahan">Kelurahan:</label>
        <input
          type="text"
          id="kelurahan"
          v-model="formData.kelurahan"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="kecamatan">Kecamatan:</label>
        <input
          type="text"
          id="kecamatan"
          v-model="formData.kecamatan"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="kota_atau_kabupaten">Kota atau Kabupaten:</label>
        <input
          type="text"
          id="kota_atau_kabupaten"
          v-model="formData.kota_atau_kabupaten"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="no_hp_wa">No. HP/WA:</label>
        <input
          type="text"
          id="no_hp_wa"
          v-model="formData.no_hp_wa"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="no_hp_alternatif">No. HP Alternatif:</label>
        <input
          type="text"
          id="no_hp_alternatif"
          v-model="formData.no_hp_alternatif"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="form-control"
          required
        />
      </div>

      <h2 class="mt-4">Anggota Keluarga</h2>
      <div
        class="form-group  mb-5"
        v-for="(anggota, index) in formData.anggota_keluarga"
        :key="index"
      >
        <label for="nama_anggota">Nama:</label>
        <input
          type="text"
          id="nama_anggota"
          v-model="anggota.nama"
          class="form-control"
        />

        <label for="bin">Bin:</label>
        <input
          type="text"
          id="bin"
          v-model="anggota.bin"
          class="form-control"
        />

        <label for="binti">Binti:</label>
        <input
          type="text"
          id="binti"
          v-model="anggota.binti"
          class="form-control"
        />

        <label for="jabatan_di_keluarga">Jabatan di Keluarga:</label>
        <input
          type="text"
          id="jabatan_di_keluarga"
          v-model="anggota.jabatan_di_keluarga"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="zakat">Zakat:</label>
        <input
          type="text"
          id="zakat"
          v-model="formData.zakat"
          class="form-control"
         
        />
      </div>

      <div class="form-group">
        <label for="sodakoh">Sodakoh:</label>
        <input
          type="text"
          id="sodakoh"
          v-model="formData.sodakoh"
          class="form-control"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import NavbarZakat from "../components/NavbarZakat.vue";
export default {
  components: { NavbarZakat },
  data() {
    return {
      formData: {
        uuid_masjid: "88226111",
        nama_lengkap: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        alamat: "",
        kelurahan: "",
        kecamatan: "",
        kota_atau_kabupaten: "",
        no_hp_wa: "",
        no_hp_alternatif: "",
        email: "",
        anggota_keluarga: [
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
        ],
        zakat: "",
        sodakoh: "",
      },
    };
  },
  methods: {
    async postData() {
      try {
        // Kirim data ke API
        const response = await fetch(
          "http://localhost:5000/input-zakat/input/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.formData),
          }
        );

        // Handle response dari API
        const responseData = await response.json();
        console.log(responseData); // Tampilkan response dari API (opsional)

        // Reset formulir setelah pengiriman berhasil
        alert("Berhasil Menyimpan Data");
        this.resetForm();
      } catch (error) {
        alert("Gagal menyimpan data " + error);
        console.error("Error:", error);
      }
    },
    resetForm() {
      // Reset nilai formulir
      this.formData = {
        uuid_masjid: "88226111",
        nama_lengkap: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        alamat: "",
        kelurahan: "",
        kecamatan: "",
        kota_atau_kabupaten: "",
        no_hp_wa: "",
        no_hp_alternatif: "",
        email: "",
        anggota_keluarga: [
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
          { nama: "", bin: "", binti: "", jabatan_di_keluarga: "" },
        ],
        zakat: "",
        sodakoh: "",
      };
    },
  },
};
</script>

<style scoped>
/* Styles khusus untuk komponen ini */
</style>
