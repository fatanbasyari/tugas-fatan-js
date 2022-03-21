// no1
function sekolah(nama){
    if (nama == "SMK YADIKA SOREANG") {
        console.log(true);
 }
else {
    console.log(false);
 }
}
sekolah("SMK YADIKA SOREANG ");

// no2
const number = [10,9,8,7,6,5,4,3,2,1,0]
const upperNum = number.filter(el => {
    return el <=10;
})
console.log(upperNum);

// no3
function perulangan(mulai, berhenti) {
    for (var i = mulai; i <= berhenti; i++){
        console.log(i);
    }
}
perulangan (0,10);

// no4
const nama = [
    { nama: `fatan` , kelas : `XI RPL 1`},
    { nama: `arul` , kelas : `XI RPL 1`},
    { nama: `arpi` , kelas : `XI RPL 1`},
    { nama: `adjie` , kelas : `XI RPL 1`},
    { nama: `deni` , kelas : `XI RPL 1`},
]
function tampil() {
    const map = nama.map (item => {
        const kosong = {};
        kosong[item.nama] = item.kelas;
        return kosong;
    });
    console.log(map);
}
tampil()

// no5
const number = [150,75,18,27,82]
    const kali = number.map(item =>{
      return item * 10
    })
    console.log(kali);

//no6
const number = [150,75,18,27,82]
    const kali = number.map(item =>{
      return item / 2
    })
    console.log(kali);

//no7
const nama = ["fatan", "basyari", "fatan", "fatan", "baasyari", "fatin", "fatan"]
      const filter = nama.filter(objek =>{
        return objek == "fatan";
      });
      console.log(filter);

//no8
class tigaP {
  constructor (pagi, siang, malam) {
    this.Pagi = pagi;
    this.Siang = siang;
    this.Malam = malam;
  };
};
const tigaP1 = new tigaP("Mandi", "Makan", "Tidur")
console.log(tigaP1);

//no9
var num = Math.floor(Math.random() * 50)
console.log(num);

//no10
const nama = [
    { nama: `ahmad`, kelas: `XI RPL 2` },
    { nama: `arul`, kelas: `XI RPL 1` },
    { nama: `raffa`, kelas: `XI RPL 1` },
    { nama: `fatan`, kelas: `XI RPL 1` },
    { nama: `arpi`, kelas: `XI RPL 1` },
  ]
  console.log(nama);