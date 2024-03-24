<template>
  <div>
    <div class="card">
      <h5 class="card-header">
        {{ index + 1 }}. zakat Id : {{ zakat.uuid_zakat }}

        <a
          href="#"
          class="btn btn-primary float-right"
          @click="hapusItem(zakat.uuid_zakat)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash3-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
            />
          </svg>
        </a>
      </h5>
      <div class="card-body">
        <h5 class="card-title">
          Kepala Keluarga: {{ zakat.nama_kepala_keluarga }}
        </h5>
        <p class="card-text">anggota {{ zakat.jumlah_anggota_keluarga }} :</p>
        <div v-for="anggota in zakat.anggota_keluarga" :key="anggota.uuid">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">
                    {{ anggota.nama }}
                    <span v-if="anggota.bin"> bin {{ anggota.bin }} </span>
                    <span v-if="anggota.binti">
                      binti {{ anggota.binti }}
                    </span>
                  </h5>
                  <p class="card-text">
                    status : {{ anggota.jabatan_di_keluarga }}
                  </p>
                  <div>
                    <a href="#" class="btn btn-dark mr-1">edit</a>
                    <a href="#" class="btn btn-primary">hapus</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="card-text">
          Jumlah Zakat : {{ zakat.jumlah_pembayaran_zakat }}
        </p>
        <p class="card-text">
          Jumlah Sodakoh : {{ zakat.jumlah_pembayaran_sodaqoh }}
        </p>
        <p class="card-text">Jumlah total bayar : {{ zakat.total_bayar }}</p>
        <a href="#" class="btn btn-dark">Edit</a>
        <a href="#" class="btn btn-primary">Hapus</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CardZakat",
  props: ["zakat", "index"],
  methods: {
    hapusItem(id) {
      // Konfirmasi penghapusan item
      if (confirm("Apakah Anda yakin ingin menghapus item ini?")) {
        // Kirim permintaan DELETE ke API menggunakan Axios
        axios
          .delete(`http://localhost:5000/input-zakat/delete/${id}`)
          .then((response) => {
            // Handle jika permintaan berhasil
            console.log("Item berhasil dihapus:", response.data);
            // Lakukan pembaruan pada tampilan aplikasi Anda, misalnya dengan menghapus item dari array zakats
            window.location.reload();
        })
          .catch((error) => {
            // Handle jika terjadi kesalahan
            console.error("Terjadi kesalahan saat menghapus item:", error);
          });
      }
    },
  },
};
</script>

<style></style>
