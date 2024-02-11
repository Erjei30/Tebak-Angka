var kesempatan = 5
let hasil = '';
var tanya = true

alert('game tebak angka dari 1 - 5 \nanda hanya mempunyai ' + kesempatan + ' kesempatan')
while (kesempatan >= 0) {
    var p = prompt('tebak angka dari 1 - 10 \nkesempatan tersisa : ' + kesempatan);
    var comp = Math.floor(Math.random() * 5) + 1;
    kesempatan--

    if (p == comp) {
        hasil = alert('benar!!! hasilnya adalah ' + comp)
        break;
    } else if (kesempatan == 0) {
        hasil = alert('maaf kesempatan anda sudah habis angka yang tidak ditemukan adalah : ' + comp)
        break;
    } else if (p > comp) {
        hasil = alert('angka yang anda masukan terlalu tinggi, angkanya adalah : ' + comp + '\nkesempatan anda : ' + kesempatan)
    } else if (p < comp) {
        hasil = alert('angka yang anda masukan terlalu rendai, angkanya adalah : ' + comp + '\nkesempatan anda : ' + kesempatan)
    } else {
        hasil = alert('please input int you motherfucker bitch \nkesempatan anda : ' + kesempatan);
        kesempatan--;
    }
}
