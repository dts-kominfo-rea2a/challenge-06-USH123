// TODO: import module bila dibutuhkan di sini
const fs = require(`fs`);
const { setTimeout } = require("timers");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = function (fnCallback) {
  // Fungsi bacaData ini akan membaca 3 file json yang diberikan, kemudian akan memberikan hasil (data) kepada `fnCallback` berupa `array of string` dari message yang sudah dimodifikasi:
  const jsonFile = [file1, file2, file3];
  const jsonData = [];

  //read json files
  jsonFile.forEach((element, index) => {
    fs.readFile(
      element,
      {
        encoding: `utf8`,
      },
      (err, data) => {
        if (err) {
          fnCallback(`Data JSON tidak bisa di-parse`, null);
        }
        //fungsi
        jsonData[index] = ambilValue(JSON.parse(data));
      }
    );
  });

  setTimeout(() => fnCallback(null, jsonData), 3000);

  // function ambil value
  function ambilValue(element) {
    if (element[0]) {
      if (element[0].data) {
        return ambilValueAkhir(element[0].data);
      } else {
        return ambilValueAkhir(element[0]);
      }
    } else {
      return ambilValueAkhir(element);
    }
  }

  function ambilValueAkhir(element) {
    if (element.message) {
      return ambilKataKedua(element.message);
    } else {
      return fnCallback(`Tidak ada data yang bisa diambil`, null);
    }
  }

  //function ambil kata kedua
  function ambilKataKedua(element) {
    const kataKedua = element.split(` `);
    if (kataKedua.length < 2) {
      return fnCallback(`input kata kurang dari 2`, null);
    } else {
      return kataKedua[1];
    }
  }
};

// function fnCallback(err, data) {
//   if (err) {
//     console.log(`Terdapat Error: ${err}`);
//   } else {
//     return data;
//   }
//   /*fnCallback ini sendiri memiliki 2 parameter:
//   - `err` => error yang dapat ditemukan
//   - `data` => hasil dari proses baca file json (hasilAkhir)
//       - didapat dengan menggabungkan ketiga hasil yang ditemukan dari data1, data2, dan data3 kemudian dijadikan sebagai array of string
//       - Contoh dari hasil di atas, berdasar data1.json, data2.json, dan data3.json, `data`-nya adalah `['dunia', 'world', 'sekai']`*/
// }

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
