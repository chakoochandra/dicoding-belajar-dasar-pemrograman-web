var frekuensi = {
  "Hertz": Math.pow(1e3, 0),
  "Kilohertz": Math.pow(1e3, 1),
  "Megahertz": Math.pow(1e3, 2),
  "Gigahertz": Math.pow(1e3, 3),
};
var data = {
  "Bit": Math.pow(1e3, 0),
  "Kilobit": Math.pow(1e3, 1),
  "Megabit": Math.pow(1e3, 2),
  "Gigabit": Math.pow(1e3, 3),
  "Terabit": Math.pow(1e3, 4),
  "Petabit": Math.pow(1e3, 5),
  "Kibibit": Math.pow(1024, 1),
  "Mebibit": Math.pow(1024, 2),
  "Gibibit": Math.pow(1024, 3),
  "Tebibit": Math.pow(1024, 4),
  "Pebibit": Math.pow(1024, 5),
  "Bita": 8 * Math.pow(1e3, 0),
  "Kilobita": 8 * Math.pow(1e3, 1),
  "Megabita": 8 * Math.pow(1e3, 2),
  "Gigabita": 8 * Math.pow(1e3, 3),
  "Terabita": 8 * Math.pow(1e3, 4),
  "Petabita": 8 * Math.pow(1e3, 5),
  "Kibibita": 8 * Math.pow(1024, 1),
  "Mebibita": 8 * Math.pow(1024, 2),
  "Gibibita": 8 * Math.pow(1024, 3),
  "Tebibita": 8 * Math.pow(1024, 4),
  "Pebibita": 8 * Math.pow(1024, 5),
};
var transmisi = {
  "Bit per detik": Math.pow(1e3, 0),
  "Kilobit per detik": Math.pow(1e3, 1),
  "Megabit per detik": Math.pow(1e3, 2),
  "Gigabit per detik": Math.pow(1e3, 3),
  "Terabit per detik": Math.pow(1e3, 4),
  "Kilobita per detik": 8 * Math.pow(1e3, 1),
  "Megabita per detik": 8 * Math.pow(1e3, 2),
  "Gigabita per detik": 8 * Math.pow(1e3, 3),
  "Terabita per detik": 8 * Math.pow(1e3, 4),
  "Kibibit per detik": Math.pow(1024, 1),
  "Mebibit per detik": Math.pow(1024, 2),
  "Gibibit per detik": Math.pow(1024, 3),
  "Tebibit per detik": Math.pow(1024, 4),
};
var energi = {
  "Joule": 1,
  "Kilojoule": 1000,
  "Gram kalori": 4.184,
  "Kilokalori": 4184,
  "Watt jam": 3600,
  "Kilowatt jam": 3.6e6,
  "Elektronvolt": 6.242e18,
  "Satuan panas Britania": 1055,
  "Therm": 1.055e8,
  "Kaki-pon": 1.356,
};
var kecepatan = {
  "Mil per jam": 1,
  "Meter per detik": 2.237,
  "Knot": 1.151,
  "Kaki per detik": 1.467,
  "Kilometer per jam": 1.609,
};
var bahanBakar = {
  "Mil per galon (AS)": 1,
  "Mil per galon Imp.": 1.20095,
  "Kilometer per liter": 2.352,
};
var kemiringan = {
  "Derajat": 1,
  "Detik Busur": 3600,
  "Gradian": 200 / 180,
  "Menit Busur": 60,
  "Milliradian": 1000 * Math.PI / 180,
  "Radian": Math.PI / 180
};
var luas = {
  "Kilometer persegi": 1,
  "Meter persegi": 1e6,
  "Mil persegi": 2.59,
  "Yard persegi": 1.196e6,
  "Kaki persegi": 1.076e7,
  "Inci persegi": 1.55e9,
  "Hektare": 100,
  "Ekar": 247,
};
var massa = {
  "Ton": 1,
  "Kilogram": 1e3,
  "Gram": 1e6,
  "Miligram": 1e9,
  "Mikrogram": 1e12,
  "Ton panjang": 1.016,
  "Ton pendek": 1.102,
  "Stone": 157,
  "Pon": 2205,
  "Ons": 35274,
};
var panjang = {
  "Kilometer": 1,
  "Meter": 1e3,
  "Sentimeter": 1e5,
  "Milimeter": 1e6,
  "Mikrometer": 1e9,
  "Nanometer": 1e12,
  "Mil": 1.609,
  "Yard": 1094,
  "Kaki": 3281,
  "Inci": 39370,
  "Mil laut": 1.852,
};
var tekanan = {
  "Atmosfer": 1,
  "Bar": 1.013, //kali
  "Pascal": 101325,//kali
  "Pon gaya per inci persegi": 14.696,//kali
  "Ton": 760,//kali
};
var volume = {
  "Galon (AS)": 1,
  "Quart (AS)": 4,//kali
  "Pint (AS)": 8,//kali
  "Cangkir": 15.773,//kali
  "Ons cairan (AS)": 128,//kali
  "Sendok makan (AS)": 256,//kali
  "Sendok teh (AS)": 768,//kali
  "Meter Kubik": 264,
  "Liter": 3.785,//kali
  "Mililiter": 3785,//kali
  "Galon": 1.201,
  "Kuart (UK)": 3.331,//kali
  "Pint": 6.661,//kali
  "Cangkir (Imperial)": 13.3228,//kali
  "Ons cairan (UK)": 133.228,//kali
  "Sendok makan (Inggris)": 213.165,//kali
  "Sendok teh (Imperial)": 639,//kali
  "Kaki kubik": 7.481,
  "Inci kubik": 231,//kali
};
var waktu = {
  "Nanodetik": Math.pow(1e3, 0),
  "Mikrodetik": Math.pow(1e3, 1),
  "Milidetik": Math.pow(1e3, 2),
  "Detik": Math.pow(1e3, 3),
  "Menit": Math.pow(1e3, 3) * 60,
  "Jam": Math.pow(1e3, 3) * 60 * 60,
  "Hari": Math.pow(1e3, 3) * 60 * 60 * 24,
  "Pekan": Math.pow(1e3, 3) * 60 * 60 * 24 * 7,
  "Bulan": Math.pow(1e3, 3) * 60 * 60 * 24 * 30,
  "Tahun kalender": Math.pow(1e3, 3) * 60 * 60 * 24 * 365,
  "Dasawarsa": Math.pow(1e3, 3) * 60 * 60 * 24 * 365 * 10,
  "Abad": Math.pow(1e3, 3) * 60 * 60 * 24 * 365 * 100,
};

//jenis konversi
let satuans = {
  "Bahan Bakar": bahanBakar,
  "Data": data,
  "Energi": energi,
  "Frekuensi": frekuensi,
  "Kecepatan": kecepatan,
  "Kemiringan Bidang": kemiringan,
  "Luas": luas,
  "Massa": massa,
  "Panjang": panjang,
  "Tekanan": tekanan,
  "Transmisi Data": transmisi,
  "Volume": volume,
  "Waktu": waktu,
};

// Logic change dropdown
const selects = document.querySelectorAll("select");
for (let sel of selects) {
  sel.addEventListener("change", function (event) {
    //change event dropdown jenis konversi
    if (event.target.id == "jenis-konversi") {
      getSatuan(event.target.value);
      calculate();
      return;
    }

    //change event dropdown satuan1
    if (event.target.id == "satuan1") {
      calculate();
      return;
    }

    //change event dropdown satuan2
    if (event.target.id == "satuan2") {
      calculate();
      return;
    }
  });
}

//Logic on input value
const inputs = document.querySelectorAll("input");
for (let inp of inputs) {
  inp.addEventListener("input", function (event) {
    if (event.target.id == "input1") {
      calculate();
      return;
    }

    if (event.target.id == "input2") {
      calculate(true);
      return;
    }
  });
}

//rumus umum untuk semua jenis konversi dan satuannya
function formula(jenis, satuan1, satuan2, source, custom = []) {
  let reverse2 = custom.indexOf(satuan2) != -1;
  let reverse1 = custom.indexOf(satuan1) != -1;
  let konstanta2 = (reverse2 ? 1 / jenis[satuan2] : jenis[satuan2]);
  let konstanta1 = (reverse1 ? 1 / jenis[satuan1] : jenis[satuan1]);

  if (reverse2 || reverse1) {
    let konstanta = konstanta1 / konstanta2;
    return { result: source * konstanta, rumus: "kalikan dengan " + konstanta };
  } else {
    let konstanta = konstanta2 / konstanta1;
    return { result: source / konstanta, rumus: "bagi dengan " + konstanta };
  }
}

//prepare kalkulasi untuk dimasukkan ke dalam rumus umum
//reverse true bila source adalah input sebelah kanan
function calculate(reverse = false) {
  let sourceInput = reverse ? "input2" : "input1";
  let targetInput = reverse ? "input1" : "input2";

  let satuan1 = document.getElementById("satuan1").value;
  let satuan2 = document.getElementById("satuan2").value;
  let source = document.getElementById(sourceInput).value;

  //bila input bukan angka
  if (isNaN(source)) {
    alert("Input bukan angka!");
  }

  let custom = [];
  let jenis = document.getElementById("jenis-konversi").value;
  switch (jenis) {
    case "Bahan Bakar":
      custom = ["Mil per galon Imp."];
      break;
    case "Energi":
      custom = ["Elektronvolt"];
      break;
    case "Kecepatan":
      custom = ["Kaki per detik", "Kilometer per jam"];
      break;
    case "Kemiringan Bidang":
      custom = ["Derajat", "Detik Busur", "Gradian", "Menit Busur", "Milliradian", "Radian"];
      break;
    case "Luas":
      custom = ["Kilometer persegi", "Meter persegi", "Yard persegi", "Kaki persegi", "Inci persegi", "Hektare", "Ekar",];
      break;
    case "Massa":
      custom = ["Ton", "Kilogram", "Gram", "Miligram", "Mikrogram", "Ton pendek", "Stone", "Pon", "Ons",];
      break;
    case "Panjang":
      custom = ["Kilometer", "Meter", "Sentimeter", "Milimeter", "Mikrometer", "Nanometer", "Yard", "Kaki", "Inci",];
    case "Tekanan":
      custom = ["Atmosfer", "Bar", "Pascal", "Pon gaya per inci persegi", "Ton"];
      break;
    case "Volume":
      custom = ["Quart (AS)", "Pint (AS)", "Cangkir", "Ons cairan (AS)", "Sendok makan (AS)", "Sendok teh (AS)", "Liter", "Mililiter", "Kuart (UK)", "Pint", "Cangkir (Imperial)", "Ons cairan (UK)", "Sendok makan (Inggris)", "Sendok teh (Imperial)", "Inci kubik",];
  }

  let calc = formula(satuans[jenis], satuan1, satuan2, source, custom);
  document.getElementById(targetInput).value = calc.result;
  document.getElementById("span-rumus").textContent = calc.rumus;
}

//set option dropdown berdasarkan jenis konversi yang dipilih
function getOptions(types) {
  var str = "";
  for (var key in types) {
    str += "<option value='" + key + "'>" + key + "</option>";
  }
  return str;
}

//mengambil satuan berdasarkan jenis konversi
function getSatuan(type) {
  var str = getOptions(satuans[type]);
  document.getElementById("satuan1").innerHTML = str;
  document.getElementById("satuan2").innerHTML = str;
  document.getElementById("input1").value = "1";
}

//set initial value
let selectedJenis = "Kecepatan";
document.getElementById("jenis-konversi").innerHTML = getOptions(satuans);
document.getElementById("jenis-konversi").value = selectedJenis;
getSatuan(selectedJenis);
calculate();

//autofokus input1 saat load halaman
document.getElementById("input1").focus();
