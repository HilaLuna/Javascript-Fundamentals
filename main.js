const meyveler = ["uzum","muz","kivi","armut","kavun","karpuz"] //!köşeli parantezler verdiğimiz anda arkada new array çalışıyor.
const arabalar = new Array("bmw","mercedes","audi","togg","renault")

/* sabit dizilerde içi değiştirilebilir ama nesne olarak yeni atama yapılamaz.*/ 

meyveler.pop() //sondan çıkartır
meyveler.push("karpuz") //sona ekler
meyveler[5] = "elma" //!sondaki karpuzu çıkardı elma koydu 
meyveler.shift()//baş kısımdan çıkar - üzümü çıkardı
meyveler.unshift("uzum") //!başa ekle
document.write(`meyveler concat: ${meyveler.concat(arabalar)} </br>`)

const sayilar = [[10,20,9],[74,5,64],[91,8,3]]

document.write(`sayilar: ${sayilar.flat()} </br>`) /* birden çok boyutlu iç içe 
dizileri tek boyut haline ard arda getirir.*/

//sıralama yapar
document.write(`meyveler sort: ${meyveler.sort()} </br>`)

const yeniSayilar = [2,8,4,324,8,90,23,45,7]

//sayıların sıralanması için içine karşılaştırma fonksiyonu gönderilmeli. Tek basamaklı değil, daha fazlası için zorunludur.
document.write(`yeniSayilar sort: ${yeniSayilar.sort(function(a,b){return a-b})} </br>`)

//!ters çevirmek
document.write(`meyveler reverse: ${meyveler.reverse()} </br>`)

document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)
document.write(`yeniSayilar: ${yeniSayilar} </br>`)
document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

yeniSayilar.forEach(forEachIleGez) //elimizde olan bir dizinin tüm elemanlarını tek tek gezmeyi sağlar.

function forEachIleGez(deger, sira, dizi){ //forEach'te geriye bir şey dönmüyor. 
    document.write(`deger: ${deger} ..sira: ${sira} ...${dizi} </br>`)

}

/* map ile forEach fonksiyonu arasındaki fark ikisi de elemanların değerinin, sırasının
veya o sayı kadar dönmesini sağlıyor veya dönüşte diziyi de bize veriyor.
Dizinin her bir elemanı üzerinden dönerken geriye yeni bir dizi çevirir öncekileri de yanına alarak. */

const mapIleGelenSayilar = yeniSayilar.map(mapIleGez) //bu map her dönüşte yeni bir dizi oluşturuyor.

const flatMapIleGelenSayilar = yeniSayilar.flatMap(mapIleGez)/*her bir döndüğünde önceki diziyi yok sayarak yeni bir dizi
oluşturmasın ki program tek tek çevirip yorulmasın. FlatMap hepsini kendi içinde tutup en son sonuç olarak getirip 
bırakıyor ve bir dizi veriyor. Yani dizinin tüm elemanlarını gezerek sonuç olarak bir dizi geriye çevirir.*/

function mapIleGez(deger, sira, dizi){
    return deger * 2
}

document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)
document.write(`mapIleGelenSayilar: ${mapIleGelenSayilar} </br>`)
document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

//dizi ayraçlarını belirttiğimiz şekilde yaparak tek bir metin/string haline getiriyor.Yani örneğim meyve kelimelerini arka arkaya yazıyor.
const meyvelerYeni = meyveler.join(' ') //bu o meyve kelimelerinin virgülle değil boşlukla ayrılmasını söylüyor.Tek tırnakların içine ne koyarsan öyle ayırıyor kelimeleri.
document.write(`meyvelerYeni: ${meyvelerYeni} </br>`)

//belirtilen kurali sağlayan dizi elemanlarını geriye çevirerek bir dizi oluşturur.
const filterIleSayilar = mapIleGelenSayilar.filter(filterIleGez)

function filterIleGez(deger, sira, dizi){
    return deger >= 16
}
document.write(`filterIleSayilar: ${filterIleSayilar} </br>`)

let tarih = new Date() //! new ile nesne örneği oluşturulur.

document.write(`tarih: ${tarih} </br>`)

document.write(`tarih getFullYear: ${tarih.getFullYear()} </br>`)

document.write(`tarih getDate: ${tarih.getDate()} </br>`)

document.write(`tarih toUTCString: ${tarih.toUTCString()} </br>`)

document.write(`tarih getTime: ${tarih.getTime()} </br>`)

document.write(`tarih getMonth: ${tarih.getMonth()} </br>`)

tarih.setFullYear(2016)
document.write(`tarih getDate: ${tarih.toUTCString()} </br>`)

/* Elinizde tarih objesi olsun, bunun tarihini önce ekrana yazdır, sonra 3 ay 
geri giderek tekrar tarihi ekrana yazdır*/

tarih.setMonth(8)
document.write(`tarih: ${tarih.toUTCString()} </br>`)

document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

//MATH

let fiyat = 234.5426

let fiyatCeil = Math.ceil(fiyat) //fiyatı yukarı yuvarladı
document.write(`fiyatCeil: ${fiyatCeil} </br>`)

let fiyatFloor = Math.floor(fiyat) //fiyatı aşağı yuvarladı
document.write(`fiyatFloor: ${fiyatFloor} </br>`)

let fiyatRound = Math.round(fiyat) //fiyatı en yakın değere yuvarladı
document.write(`fiyatRound: ${fiyatRound} </br>`)

let fiyatTrunc = Math.trunc(fiyat) //fiyatı en yakın değere yuvarlar
document.write(`fiyatTrunc: ${fiyatTrunc} </br>`)

document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

//RANDOM
//! 0 ile 1 arasında rastgele değer oluşturuyor.
let rastgeleSayi = Math.random()
//document.write(`rastgeleSayi: ${rastgeleSayi} </br>`)

document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

//Ternary Operator
let yas = 30 
let sonuc = yas >20 ? "gencsin" : "cocuksun" //? soru işareti if ve else için kullanılıyor.

//document.write(`sonuc: ${sonuc} </br>`)

let ad //? undefined olur
let kullaniciAdi = ad ?? "isimsiz" // iki soru işareti şu: solundaki içi tanımlı değilse sağ taraf çalışsın demek.

//document.write(`ad: ${ad} </br>`)
//document.write(`kullaniciAdi: ${kullaniciAdi} </br>`)

document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

//IF ELSE
const sayi1 = 4
const sayi2 = 5

if (sayi1 ==4){ //? if varsa kural gelecek demektir ve kural parantezler içinde yazılır. Eğer o kural sağlanıyorsa süslü parantezler arasında kalan alan çalışır.
   // document.write(`sayi1 4 tur </br>`)
}

if (sayi2==4) {
   // document.write(`sayi2 4 tur </br>`)

}else {
   // document.write(`sayi2 4 degildir </br>`)
}

if (sayi1==3) {
    //document.write(`sayi1 3 tur </br>`)

}else if(sayi1==4) {
    //document.write(`sayi1 4 tur </br>`)
}else{
    //document.write(`sayi1 3 ve 4 degildir </br>`)
}

/* 
Kullanıcıdan alınan 2 adet sayıdan büyük olanı bulup ekrana yazdıran 
bir fonksiyon yazınız.
*/
//! sınıftan birinin yaptığı
let deger1 = Number(prompt("ilk sayi gir"))
let deger2 = Number(prompt("ikinci sayi gir"))

if (deger1 > deger2){
   // document.write(`sayi 1 sayi 2 den buyuktur </br>`)
}else if(deger1 < deger2){
    //document.write(`sayi 1 sayi 2 den kucuktur </br>`)
}else{
    //document.write(`esittir </br>`)
}
//! sınıftan birinin yaptığı

//!Hocanın yaptığı
function karsilastir(){
    let ilkSayi = Number(prompt("ilk sayi?"))
    let ikinciSayi = Number(prompt("ikinci sayi?"))

    if (ilkSayi == ikinciSayi){
        document.write(`sayilar esittir </br>`)
    } else if (ilkSayi > ikinciSayi){
        document.write(`ilkSayi buyuktur ${ilkSayi} </br>`)
    } else {
        document.write(`ikinciSayi buyuktur ${ikinciSayi} </br>`)
    }
}
//karsilastir()
//!Hocanın yaptığı

/* 
Bilgisayar 0 ile 100 arasında rastgele bir değer üretmektedir. Kullanıcı dışardan
bir değer giriyor, eğer kullanıcının girdiği değer ile pc'nin ürettiği değer
aynı ise ekrana kazandınız;
değilse kaybettiniz yazan bir fonksiyon yazınız. 
*/
//! Sınıftan bir öğrencinin yaptığı
let randomSayi = parseInt(Math.random() *100)
// document.write(`randomSayi: ${randomSayi} </br>`)

let tahminiSayi = Number(prompt("sayiyi gir"))

if (randomSayi == tahminiSayi){
   // document.write(`kazandiniz </br>`)
}else {
   // document.write(`kaybettiniz </br>`)
}
//! Sınıftan bir öğrencinin yaptığı

//!Hocanın yaptığı
function sayiTahmin(){
    let mSayi = parseInt(Math.random()*100)
    console.log(mSayi)
    let oSayi = Number(prompt("sayi?"))
    if (oSayi ==mSayi) {
      document.write(`kazandiniz </br>`)
    }else {
       document.write(`kaybettiniz </br>`)
    }

}
// sayiTahmin()

//!Hocanın yaptığı

/* 
Kullanıcıdan kullanıcı adı ve şifre alınız. Elinizde bulunan kullanıcı adı
ve şifre ile aynı ise ekrana "giriş başarılı", değilse "tekrar deneyiniz" yazan bir 
fonksiyon yazınız. 
*/
//! Sınıftan bir öğrencinin yaptığı

function kullaniciGiris(){
    let kullAdi = String(prompt("Kullanici adi:"))
    let sifre = String(prompt("Sifre gir"))

    if (kullAdi == sifre){
        document.write(`giris basarili </br>`)
    }else {
        document.write(`tekrar deneyiniz </br>`)
    }
}
//kullaniciGiris()
//! Sınıftan bir öğrencinin yaptığı

//! Hocanın yaptığı

const benimKAdi = "can"
const benimSifre = "123"

function girisDogrula() {
    const kAdi = prompt('kullanici adi gir?')
    const sifre = prompt('sifre gir?')
    if (kAdi == benimKAdi && benimSifre == sifre){
        console.log('giris basarili')
    }else {
        console.log('tekrar deneyiniz')
    }
}
//girisDogrula()

//! Hocanın yaptığı

document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

// Switch case: bir dizi eşitliğe bakıyor

const gun = 4
switch (gun) {
    case 0:
        document.write(`Pazar </br>`)
        break;
        case 1:
        document.write(`Pazartesi </br>`)
        break;
        case 2:
        document.write(`Sali </br>`)
        break;
        case 3:
        document.write(`Carsamba </br>`)
        break;
        case 4:
        document.write(`Persembe </br>`)
        break; //kır demek yani benden sonraki case'lere bakma demek
        case 5:
        document.write(`Cuma </br>`)
        break;
        case 6:
        document.write(`Cumartesi </br>`)
        break;
    default: //eğer yukarda 8 yazsaydı case'lerin hiçbiri çalışmayacağı için default'a giriyor.
        document.write(`bilinmeyen gun </br>`)
        break;

}

// DÖNGÜLER
// For

const meyveler1 = ["uzum", "muz", "kivi", "armut", "kavun", "karpuz"]

document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)
document.write(` meyveler1: ${meyveler1} </br>`)
document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

for (let sira = 0; sira < meyveler1.length; sira++) { //! ++ demek kendi değerini 1 artır demek.
    document.write(` sira: ${sira} ${meyveler1[sira]} </br>`)

}

document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

/* 
Bir asker döngüsel olarak 10 defa şınav çekiyor ve her çektiği şınavın kaçıncı
şınav olduğunu söylüyor. Bunu bir döngüyle belirtiniz.
*/

//! Sınıftan bir öğrencinin yaptığı
const sinavSayisi = 11

for (i = 1; i < sinavSayisi; i++) {
    document.write(` Şınav sayısı: ${i} </br>`)

}
//! Sınıftan bir öğrencinin yaptığı

document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

//! Hocanın yaptığı
  for (let index = 1; index < 11; index++) {
    if (index==4){continue} //döngü sonuna gider
    if (index==7){break} //döngüyü kırar
    document.write(` sinav ${index} </br>`)

  }
  //! Hocanın yaptığı

  document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

  for (const deger in meyveler1) {
    document.write(` deger ${deger} ${meyveler1[deger]} </br>`)

  }
  document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

  for (const deger of meyveler1) {
    document.write(` deger ${deger} </br>`)
  }
  document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

  //While döngüsü
  let sayac = 1
  while (sayac<5){
    document.write(` sayac ${sayac} </br>`)
    sayac++
  }

  document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

  // do while
  let yeniSayac = 1 //yani buraya 8 de girsen, 5'ten küçük olduğu halde çalıştırır, çünkü kural aşağıda.
  do {
    document.write(` yeniSayac ${yeniSayac} </br>`)
    yeniSayac++
  } while (yeniSayac<5);
  /* do while'ın while döngüsünden farkı aşağıda kontrol ediyor, yanı sonrasında. 
  Örneğin süslü parentezler arasını çalıştırıyor, sonra soruyor 1 5'ten küçük mü,
  evet o zaman süslü parentez içini tekrar çalıştır gibi tek tek soruyor tüm rakamları.
  While'da önce kurala bakıyor, sonra çalıştırıyor, do while da önce çalıştırıyor,
  sonra kurala bakıp kontrol ediyor.*/

  document.write(`-- - - - - - - - - - - -- - - -- - - - -- - - </br>`)

//! Egzersiz!!!
  /* 
  Kullanıcı bilgisayar ile sayı tahmini oyunu oynamaktadır. Kullanıcının 3 hakkı
  vardır. Eğer kullanıcı sayıyı doğru tahmin ederse, ekrana "kazandınız", yanlış tahmin
  eder ve hakları bittiyse "kaybettiniz" ama hala hakları varsa, kullanıcının tahmini ile
  bilgisayarın ürettiği sayıyı karşılaştırırsak, kullanıcının daha büyük veya daha küçük
  değer girmesi gerektiğini söyleyen bir fonksiyon veya kod bloğu yazınız (0-100 arasındaki sayılar)
  */

  const mSayi = parseInt(Math.random()*100) //! mSayi= makine sayı
  let hak = 1
  console.log(mSayi)

  function sayiTahminOyunu(){
    const kSayi = Number(prompt('tahmini gir'))
    if (kSayi == mSayi) {
        console.log('kazandiniz')
    }else{
        if (hak<3) {
            hak++
            if (kSayi>mSayi) {
                console.log('kucuk gir')
            }else{
                console.log('buyuk gir')
            }
            sayiTahminOyunu()
        }else{
            console.log('kaybettiniz')
        }
    }
}
sayiTahminOyunu()










