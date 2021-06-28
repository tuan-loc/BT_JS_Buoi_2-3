const LUONG_CO_BAN = 100000;

function tinhLuong(){
    var soNgayLam = document.getElementById("soNgayLam").value;
    var luong = LUONG_CO_BAN * parseInt(soNgayLam);
    var spanEl = document.createElement("span");
    spanEl.innerHTML = "Lương: "+ luong;

    var luongEl = document.getElementById("luong");
    luongEl.innerHTML = ""
    luongEl.style.display = "block";
    luongEl.appendChild(spanEl);
}