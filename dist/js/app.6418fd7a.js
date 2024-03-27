(function(){"use strict";var a={901:function(a,t,e){var n=e(6848),i=function(){var a=this,t=a._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o=e(1656),s={},l=(0,o.A)(s,i,r,!1,null,null,null),u=l.exports,m=e(6178),c=function(){var a=this,t=a._self._c;return t("div",{staticClass:"home"},[t("NavbarZakat"),t("div",{staticClass:"container"},[t("div",[a._m(0),t("p",[a._v("Mari Berzakat")]),t("p",[a._v("خُذْ مِنْ أَمْوَٰلِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا وَصَلِّ عَلَيْهِمْ ۖ إِنَّ صَلَوٰتَكَ سَكَنٌ لَّهُمْ ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ ")]),t("P",[a._v(' "Ambillah zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan mensucikan mereka dan berdoalah untuk mereka. Sesungguhnya doa kamu itu (menjadi) ketenteraman jiwa bagi mereka. Dan Allah Maha Mendengar lagi Maha Mengetahui." (At-Taubah: 103) ')]),t("router-link",{staticClass:"nav-link",attrs:{to:"/ListZakat"}},[a._v("List Zakat")])],1)])],1)},d=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"d-flex justify-content-center align-items-center text-center"},[t("img",{staticClass:"hero",attrs:{src:"/main.jpg",alt:"Logo Vue.js"}})])}],p=function(){var a=this,t=a._self._c;return t("div",[t("div",[t("b-navbar",{staticClass:"bg-light",attrs:{toggleable:"lg",type:"light",variant:"info"}},[t("b-navbar-brand",{attrs:{href:"#"}},[a._v("My Zakat")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a._v("Home")]),t("router-link",{staticClass:"nav-link",attrs:{to:"/ListZakat"}},[a._v("List Zakat")]),t("router-link",{staticClass:"nav-link",attrs:{to:"/Input"}},[a._v("Input Zakat")]),t("router-link",{staticClass:"nav-link",attrs:{to:"/Logout"}},[a._v("Logout")])],1),t("b-navbar-nav",{staticClass:"ml-auto"})],1)],1)],1)])},g=[],f={name:"NavbarZakat"},b=f,_=(0,o.A)(b,p,g,!1,null,null,null),v=_.exports,k={name:"HomeView",components:{NavbarZakat:v}},h=k,y=(0,o.A)(h,c,d,!1,null,null,null),C=y.exports,D=function(){var a=this,t=a._self._c;return t("div",{staticClass:"Container"},[t("NavbarZakat"),t("div",{staticClass:"container"},[t("div",{staticClass:"container d-flex justify-content-center align-items-center vh-100"},[t("div",[t("h2",{staticClass:"mb-4"},[a._v("Data Zakat")]),t("p",[a._v("Jumlah keluarga membayar zakat: "+a._s(a.kesimpulan.jumlahKeluarga)+" keluarga ")]),t("p",[a._v("Jumlah jamaah membayar zakat: "+a._s(a.kesimpulan.jumlahJamah)+" Orang")]),t("p",[a._v("Jumlah seluruh zakat:Rp. "+a._s(a.kesimpulan.jumlahSeluruhZakat)+" ")]),t("p",[a._v("Jumlah seluruh sodakoh: Rp. "+a._s(a.kesimpulan.jumlahSeluruhSodakoh))]),t("p",[a._v("Jumlah seluruh fidyah: Rp. "+a._s(a.kesimpulan.jumlahSeluruhfidyah))]),t("p",[a._v("Jumlah seluruhnya: Rp. "+a._s(a.kesimpulan.jumlahSeluruhnya))])])]),t("TabelListZakat")],1)],1)},j=[],x=(e(4114),function(){var a=this,t=a._self._c;return t("div",[t("div",{staticClass:"input-group mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.searchQuery,expression:"searchQuery"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Cari berdasarkan nama keluarga atau anggota keluarga"},domProps:{value:a.searchQuery},on:{input:[function(t){t.target.composing||(a.searchQuery=t.target.value)},a.search]}}),t("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:a.clearSearch}},[a._v(" Bersihkan ")])]),t("div",[t("button",{staticClass:"btn btn-primary mb-3",on:{click:a.printPage}},[a._v("Print")])]),t("table",{staticClass:"table",attrs:{id:"zakatTable"}},[a._m(0),t("tbody",a._l(a.displayedZakats,(function(e,n){return t("tr",{key:e.uuid_zakat},[t("td",[a._v(a._s((a.currentPage-1)*a.pageSize+n+1))]),t("td",[a._v(a._s(e.uuid_zakat))]),t("td",[a._v(a._s(e.nama_kepala_keluarga))]),t("td",[t("ul",a._l(e.anggota_keluarga,(function(e){return t("div",{key:e.uuid},["kepala_keluarga"!==e.jabatan_di_keluarga?t("div",[a._v(" * "+a._s(e.nama)+" ")]):a._e()])})),0)]),t("td",[a._v("Rp. "+a._s(e.jumlah_pembayaran_zakat))]),t("td",[a._v("Rp. "+a._s(e.jumlah_pembayaran_fidyah))]),t("td",[a._v("Rp. "+a._s(e.jumlah_pembayaran_sodaqoh))]),t("td",[a._v("Rp. "+a._s(e.total_bayar))]),t("td",[t("button",{staticClass:"btn btn-danger",on:{click:function(t){return a.hapusItem(e.uuid_zakat)}}},[t("i",{staticClass:"fas fa-trash-alt"}),a._v(" Hapus ")])])])})),0)]),t("nav",{attrs:{"aria-label":"Page navigation"}},[t("ul",{staticClass:"pagination justify-content-center mt-4"},[t("li",{staticClass:"page-item",class:{disabled:1===a.currentPage}},[t("button",{staticClass:"page-link",on:{click:function(t){return a.goToPage(1)}}},[a._v("First")])]),t("li",{staticClass:"page-item",class:{disabled:1===a.currentPage}},[t("button",{staticClass:"page-link",on:{click:function(t){return a.goToPage(a.currentPage-1)}}},[a._v(" Previous ")])]),a._l(a.totalPages,(function(e){return t("li",{key:e,staticClass:"page-item",class:{active:e===a.currentPage}},[t("button",{staticClass:"page-link",on:{click:function(t){return a.goToPage(e)}}},[a._v(" "+a._s(e)+" ")])])})),t("li",{staticClass:"page-item",class:{disabled:a.currentPage===a.totalPages}},[t("button",{staticClass:"page-link",on:{click:function(t){return a.goToPage(a.currentPage+1)}}},[a._v(" Next ")])]),t("li",{staticClass:"page-item",class:{disabled:a.currentPage===a.totalPages}},[t("button",{staticClass:"page-link",on:{click:function(t){return a.goToPage(a.totalPages)}}},[a._v("Last")])])],2)])])}),w=[function(){var a=this,t=a._self._c;return t("thead",[t("tr",[t("th",{attrs:{scope:"col"}},[a._v("No")]),t("th",{attrs:{scope:"col"}},[a._v("uuid")]),t("th",{attrs:{scope:"col"}},[a._v("Keluarga")]),t("th",{attrs:{scope:"col"}},[a._v("Anggota Keluarga")]),t("th",{attrs:{scope:"col"}},[a._v("Zakat")]),t("th",{attrs:{scope:"col"}},[a._v("Fidyah")]),t("th",{attrs:{scope:"col"}},[a._v("Sodaqoh")]),t("th",{attrs:{scope:"col"}},[a._v("Total")]),t("th",{attrs:{scope:"col"}},[a._v("Action")])])])}],P=e(8355),N={name:"TabelListZakat",data(){return{zakats:[],currentPage:1,pageSize:10,searchQuery:"",filteredZakats:[],myI:0}},computed:{totalPages(){return Math.ceil(this.filteredZakats.length/this.pageSize)},displayedZakats(){const a=(this.currentPage-1)*this.pageSize,t=a+this.pageSize;return this.filteredZakats.slice(a,t)}},methods:{setZakats(a){this.zakats=a,this.filteredZakats=a},search(){this.filteredZakats=this.zakats.filter((a=>this.filterZakat(a))),this.currentPage=1},clearSearch(){this.searchQuery="",this.filteredZakats=this.zakats,this.currentPage=1},filterZakat(a){const t=this.searchQuery.toLowerCase();return a.nama_kepala_keluarga.toLowerCase().includes(t)||a.anggota_keluarga.some((a=>a.nama.toLowerCase().includes(t)))},hapusItem(a){confirm("Apakah Anda yakin ingin menghapus item ini?")&&P.A.delete(`http://103.155.117.238:5000/input-zakat/delete/${a}`).then((a=>{console.log("Item berhasil dihapus:",a.data),this.fetchData()})).catch((a=>{console.error("Terjadi kesalahan saat menghapus item:",a)}))},goToPage(a){a>=1&&a<=this.totalPages&&(this.currentPage=a)},printPage(){let a=document.getElementById("zakatTable").outerHTML;a=a.replace(/<th scope="col">Action<\/th>/,"");let t=new Date,e=t.toLocaleString("en-US"),n=window.open("","_blank");n.document.write(`\n    <html>\n      <head>\n        <title>Cetak Zakat</title>\n        <style>\n          /* Gaya cetak */\n          /* Sembunyikan tombol Print */\n          button { display: none; }\n          /* Atur ukuran font dan lebar kolom agar sesuai */\n          th, td { font-size: 12px; }\n          /* Hapus margin dan padding */\n          body { margin: 0; padding: 0; }\n          /* Beri padding pada tabel agar tercetak dengan baik */\n          table { width: 100%; border-collapse: collapse; }\n          th, td { border: 1px solid #000; padding: 8px; }\n          /* Gaya judul */\n          .judul { text-align: center; font-size: 16px; margin-bottom: 10px; }\n          /* Gaya waktu cetak */\n          .waktu-cetak { text-align: right; font-size: 10px; margin-top: 10px; }\n        </style>\n      </head>\n      <body>\n        <div class="judul">Daftar Zakat</div>\n        ${a}\n        <div class="waktu-cetak">Dicetak pada: ${e}</div>\n      </body>\n    </html>\n  `),n.document.close(),n.print(),n.close()},fetchData(){P.A.get("http://103.155.117.238:5000/input-zakat/search/all",{}).then((a=>this.setZakats(a.data.data))).catch((a=>alert("Gagal ambil data zakat "+a)))}},mounted(){this.fetchData()}},z=N,Z=(0,o.A)(z,x,w,!1,null,null,null),T=Z.exports;function $(a){const t=`; ${document.cookie}`,e=t.split(`; ${a}=`);if(2===e.length)return e.pop().split(";").shift()}var A={name:"ListZakat",components:{NavbarZakat:v,TabelListZakat:T},data(){return{kesimpulan:[]}},methods:{setKesimpulan(a){this.kesimpulan=a}},mounted(){const a=$("token");a||this.$router.push("/login"),P.A.get("http://103.155.117.238:5000/input-zakat/search/kesimpulan/",{}).then((a=>this.setKesimpulan(a.data.data))).catch((a=>console.log(a)))}},L=A,S=(0,o.A)(L,D,j,!1,null,null,null),M=S.exports,O=function(){var a=this,t=a._self._c;return t("div",[t("navbar-zakat"),t("div",{staticClass:"container"},[t("h1",{staticClass:"mt-5"},[a._v("Bio Data")]),t("form",{staticClass:"mt-4",on:{submit:function(t){return t.preventDefault(),a.postData.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"nama_lengkap"}},[a._v("No Tim Input : ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.tim,expression:"formData.tim"}],staticClass:"form-control",attrs:{type:"text",id:"nama_lengkap",required:""},domProps:{value:a.formData.tim},on:{input:function(t){t.target.composing||a.$set(a.formData,"tim",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"nama_lengkap"}},[a._v("Nama Lengkap:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.nama_lengkap,expression:"formData.nama_lengkap"}],staticClass:"form-control",attrs:{type:"text",id:"nama_lengkap",required:""},domProps:{value:a.formData.nama_lengkap},on:{input:function(t){t.target.composing||a.$set(a.formData,"nama_lengkap",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"nama_lengkap"}},[a._v("Bin :")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.bin,expression:"formData.bin"}],staticClass:"form-control",attrs:{type:"text",id:"nama_lengkap"},domProps:{value:a.formData.bin},on:{input:function(t){t.target.composing||a.$set(a.formData,"bin",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"nama_lengkap"}},[a._v("Binti :")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.binti,expression:"formData.binti"}],staticClass:"form-control",attrs:{type:"text",id:"nama_lengkap"},domProps:{value:a.formData.binti},on:{input:function(t){t.target.composing||a.$set(a.formData,"binti",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"tempat_lahir"}},[a._v("Tempat Lahir:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.tempat_lahir,expression:"formData.tempat_lahir"}],staticClass:"form-control",attrs:{type:"text",id:"tempat_lahir"},domProps:{value:a.formData.tempat_lahir},on:{input:function(t){t.target.composing||a.$set(a.formData,"tempat_lahir",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"tanggal_lahir"}},[a._v("Tanggal Lahir:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.tanggal_lahir,expression:"formData.tanggal_lahir"}],staticClass:"form-control",attrs:{type:"date",name:"begin",placeholder:"dd-mm-yyyy",value:"",min:"1777-01-01",max:"2035-12-31",id:"tanggal_lahir"},domProps:{value:a.formData.tanggal_lahir},on:{input:function(t){t.target.composing||a.$set(a.formData,"tanggal_lahir",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"alamat"}},[a._v("Alamat:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.alamat,expression:"formData.alamat"}],staticClass:"form-control",attrs:{type:"text",id:"alamat",required:""},domProps:{value:a.formData.alamat},on:{input:function(t){t.target.composing||a.$set(a.formData,"alamat",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"kelurahan"}},[a._v("Kelurahan:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.kelurahan,expression:"formData.kelurahan"}],staticClass:"form-control",attrs:{type:"text",id:"kelurahan"},domProps:{value:a.formData.kelurahan},on:{input:function(t){t.target.composing||a.$set(a.formData,"kelurahan",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"kecamatan"}},[a._v("Kecamatan:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.kecamatan,expression:"formData.kecamatan"}],staticClass:"form-control",attrs:{type:"text",id:"kecamatan"},domProps:{value:a.formData.kecamatan},on:{input:function(t){t.target.composing||a.$set(a.formData,"kecamatan",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"kota_atau_kabupaten"}},[a._v("Kota atau Kabupaten:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.kota_atau_kabupaten,expression:"formData.kota_atau_kabupaten"}],staticClass:"form-control",attrs:{type:"text",id:"kota_atau_kabupaten"},domProps:{value:a.formData.kota_atau_kabupaten},on:{input:function(t){t.target.composing||a.$set(a.formData,"kota_atau_kabupaten",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"no_hp_wa"}},[a._v("No. HP/WA:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.no_hp_wa,expression:"formData.no_hp_wa"}],staticClass:"form-control",attrs:{type:"text",id:"no_hp_wa"},domProps:{value:a.formData.no_hp_wa},on:{input:function(t){t.target.composing||a.$set(a.formData,"no_hp_wa",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"no_hp_alternatif"}},[a._v("No. HP Alternatif:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.no_hp_alternatif,expression:"formData.no_hp_alternatif"}],staticClass:"form-control",attrs:{type:"text",id:"no_hp_alternatif"},domProps:{value:a.formData.no_hp_alternatif},on:{input:function(t){t.target.composing||a.$set(a.formData,"no_hp_alternatif",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"email"}},[a._v("Email:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.email,expression:"formData.email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:a.formData.email},on:{input:function(t){t.target.composing||a.$set(a.formData,"email",t.target.value)}}})]),t("h2",{staticClass:"mt-4"},[a._v("Anggota Keluarga")]),a._l(a.formData.anggota_keluarga,(function(e,n){return t("div",{key:n,staticClass:"form-group mb-5"},[t("h3",[a._v(a._s(n+1))]),t("label",{attrs:{for:"nama_anggota"}},[a._v("Nama : ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.nama,expression:"anggota.nama"}],staticClass:"form-control",attrs:{type:"text",id:"nama_anggota"},domProps:{value:e.nama},on:{input:function(t){t.target.composing||a.$set(e,"nama",t.target.value)}}}),t("label",{attrs:{for:"bin"}},[a._v("Bin:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.bin,expression:"anggota.bin"}],staticClass:"form-control",attrs:{type:"text",id:"bin"},domProps:{value:e.bin},on:{input:function(t){t.target.composing||a.$set(e,"bin",t.target.value)}}}),t("label",{attrs:{for:"binti"}},[a._v("Binti:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.binti,expression:"anggota.binti"}],staticClass:"form-control",attrs:{type:"text",id:"binti"},domProps:{value:e.binti},on:{input:function(t){t.target.composing||a.$set(e,"binti",t.target.value)}}}),t("label",{attrs:{for:"jabatan_di_keluarga"}},[a._v("Hubungan di Keluarga anak/istri/orang tua:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.jabatan_di_keluarga,expression:"anggota.jabatan_di_keluarga"}],staticClass:"form-control",attrs:{type:"text",id:"jabatan_di_keluarga"},domProps:{value:e.jabatan_di_keluarga},on:{input:function(t){t.target.composing||a.$set(e,"jabatan_di_keluarga",t.target.value)}}})])})),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"sodakoh"}},[a._v("Sodakoh:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.sodakoh,expression:"formData.sodakoh"}],staticClass:"form-control",attrs:{type:"text",id:"sodakoh"},domProps:{value:a.formData.sodakoh},on:{input:function(t){t.target.composing||a.$set(a.formData,"sodakoh",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"zakat"}},[a._v("Zakat:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.zakat,expression:"formData.zakat"}],staticClass:"form-control",attrs:{readonly:"",type:"text",id:"zakat"},domProps:{value:a.formData.zakat},on:{input:function(t){t.target.composing||a.$set(a.formData,"zakat",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"sodakoh"}},[a._v("fidyah:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.fidyah,expression:"formData.fidyah"}],staticClass:"form-control",attrs:{type:"text",id:"fidyah"},domProps:{value:a.formData.fidyah},on:{input:function(t){t.target.composing||a.$set(a.formData,"fidyah",t.target.value)}}})]),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[a._v("Submit")])],2)])],1)},I=[],B={components:{NavbarZakat:v},data(){return{formData:{tim:"",uuid_masjid:"42274315",nama_lengkap:"",tempat_lahir:"",tanggal_lahir:"",bin:"",binti:"",alamat:"",kelurahan:"",kecamatan:"",kota_atau_kabupaten:"",no_hp_wa:"",no_hp_alternatif:"",email:"",anggota_keluarga:[{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""}],zakat:"45000",sodakoh:"",fidyah:""}}},mounted(){const a=$("token");a||this.$router.push("/login")},methods:{async postData(){try{const a=await fetch("http://103.155.117.238:5000/input-zakat/input/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}),t=await a.json();console.log(t),"ok"!=t.status?alert("Gagal menyimpan data "+t.message):alert("Berhasil Menyimpan Data"),this.resetForm()}catch(a){alert("Gagal menyimpan data "+a),console.error("Error:",a)}},resetForm(){this.formData={tim:"",uuid_masjid:"42274315",nama_lengkap:"",tempat_lahir:"",tanggal_lahir:"",bin:"",binti:"",alamat:"",kelurahan:"",kecamatan:"",kota_atau_kabupaten:"",no_hp_wa:"",no_hp_alternatif:"",email:"",anggota_keluarga:[{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""},{nama:"",bin:"",binti:"",jabatan_di_keluarga:""}],zakat:"45000",sodakoh:"",fidyah:""}}}},E=B,K=(0,o.A)(E,O,I,!1,null,"049341aa",null),J=K.exports,q=function(){var a=this,t=a._self._c;return t("div",{staticClass:"Container"},[t("NavbarZakat"),t("div",{staticClass:"container d-flex justify-content-center align-items-center",staticStyle:{height:"100vh"}},[t("div",[t("h2",{staticClass:"text-center mb-4"},[a._v("Login")]),t("form",{on:{submit:function(t){return t.preventDefault(),a.login.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleInputEmail1"}},[a._v("username:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.email,expression:"formData.email"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1",required:""},domProps:{value:a.formData.email},on:{input:function(t){t.target.composing||a.$set(a.formData,"email",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleInputPassword1"}},[a._v("Password:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.password,expression:"formData.password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",required:""},domProps:{value:a.formData.password},on:{input:function(t){t.target.composing||a.$set(a.formData,"password",t.target.value)}}})]),t("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[a._v("Login")])]),a.errorMessage?t("p",{staticClass:"text-danger mt-3"},[a._v(a._s(a.errorMessage))]):a._e()])])],1)},H=[],R={name:"LoginUser",components:{NavbarZakat:v},data(){return{formData:{email:"",password:""},errorMessage:""}},methods:{login(){P.A.post("http://103.155.117.238:5000/auth/login",this.formData).then((a=>{if("ok"===a.data.status){const{token:t}=a.data.data;this.saveTokenToCookie(t),this.$router.push("/ListZakat")}else this.errorMessage=a.data.message})).catch((a=>{this.errorMessage="Failed to login",console.error("Login error:",a)}))},saveTokenToCookie(a){const t=new Date;t.setDate(t.getDate()+1),document.cookie=`token=${a}; expires=${t.toUTCString()}; path=/`}}},F=R,G=(0,o.A)(F,q,H,!1,null,null,null),Q=G.exports,U=function(){var a=this,t=a._self._c;return t("div",[a._v("melakukan logout")])},V=[],W={name:"LogoutView",mounted(){this.deleteCookie("token"),this.$router.push("/")},methods:{deleteCookie(a){document.cookie=`${a}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`}}},X=W,Y=(0,o.A)(X,U,V,!1,null,null,null),aa=Y.exports;n["default"].use(m.Ay);const ta=[{path:"/",name:"home",component:C},{path:"/logout",name:"logout",component:aa},{path:"/login",name:"login",component:Q},{path:"/Input",name:"InputView",component:J},{path:"/ListZakat",name:"ListZakat",component:M},{path:"/about",name:"about",component:()=>e.e(594).then(e.bind(e,1417))}],ea=new m.Ay({mode:"history",base:"/",routes:ta});var na=ea,ia=e(1641),ra=e(4486);e(9313);n["default"].use(ia.vGs),n["default"].use(ra.hP),n["default"].config.productionTip=!1,new n["default"]({router:na,render:a=>a(u)}).$mount("#app")}},t={};function e(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return a[n].call(r.exports,r,r.exports,e),r.exports}e.m=a,function(){var a=[];e.O=function(t,n,i,r){if(!n){var o=1/0;for(m=0;m<a.length;m++){n=a[m][0],i=a[m][1],r=a[m][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||o>=r)&&Object.keys(e.O).every((function(a){return e.O[a](n[l])}))?n.splice(l--,1):(s=!1,r<o&&(o=r));if(s){a.splice(m--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var m=a.length;m>0&&a[m-1][2]>r;m--)a[m]=a[m-1];a[m]=[n,i,r]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.f={},e.e=function(a){return Promise.all(Object.keys(e.f).reduce((function(t,n){return e.f[n](a,t),t}),[]))}}(),function(){e.u=function(a){return"js/about.a376b287.js"}}(),function(){e.miniCssF=function(a){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){var a={},t="zakat:";e.l=function(n,i,r,o){if(a[n])a[n].push(i);else{var s,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),m=0;m<u.length;m++){var c=u[m];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+r){s=c;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,e.nc&&s.setAttribute("nonce",e.nc),s.setAttribute("data-webpack",t+r),s.src=n),a[n]=[i];var d=function(t,e){s.onerror=s.onload=null,clearTimeout(p);var i=a[n];if(delete a[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(a){return a(e)})),t)return t(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var a={524:0};e.f.j=function(t,n){var i=e.o(a,t)?a[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise((function(e,n){i=a[t]=[e,n]}));n.push(i[2]=r);var o=e.p+e.u(t),s=new Error,l=function(n){if(e.o(a,t)&&(i=a[t],0!==i&&(a[t]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,i[1](s)}};e.l(o,l,"chunk-"+t,t)}},e.O.j=function(t){return 0===a[t]};var t=function(t,n){var i,r,o=n[0],s=n[1],l=n[2],u=0;if(o.some((function(t){return 0!==a[t]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(l)var m=l(e)}for(t&&t(n);u<o.length;u++)r=o[u],e.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return e.O(m)},n=self["webpackChunkzakat"]=self["webpackChunkzakat"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(901)}));n=e.O(n)})();
//# sourceMappingURL=app.6418fd7a.js.map