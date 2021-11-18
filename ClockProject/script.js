let name = prompt("İsminizi Giriniz")
let welcome = document.querySelector("#welcome")
welcome.innerHTML = `${welcome.innerHTML} ${name}`


function dijitalSaat() {
    var dt = new Date();    // DATE() ile yeni bir tarih nesnesi oluşturuldu.
    var saat = dt.getHours();
    var dakika = dt.getMinutes();
    var saniye = dt.getSeconds();

    dakika = Tik(dakika);
    saniye = Tik(saniye);

    document.getElementById('dt').innerHTML = saat + ":" + dakika;
    document.getElementById('dt_saniye').innerHTML = saniye;

    if (saat > 12) { 
        document.getElementById('dt_saat').innerHTML = '😊'; 
    }
    else { 
        document.getElementById('dc_hour').innerHTML = '😴'; 
    }

    // her 1 saniyede bir yenileme yapılıyor.
    var time
    time = setInterval('dijitalSaat()', 1000);
}

function Tik(tikDegeri) {
    if (tikDegeri < 10) {
        tikDegeri = "0" + tikDegeri;
    }
    return tikDegeri;
}