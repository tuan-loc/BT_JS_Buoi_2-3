function tinhTong(){
    var chuSo = +document.getElementById("chuSo").value;

    var so_hang_chuc = Math.floor(chuSo/10);
    var so_hang_dv = chuSo % 10;
    var tong = so_hang_chuc + so_hang_dv;
    
    var spanEl = document.createElement("span");
    spanEl.innerHTML = "Tổng 2 ký số của số vừa nhập là: " + tong;

    var tongEl = document.getElementById("tong");
    tongEl.innerHTML ="";
    tongEl.style.display = "block";
    tongEl.appendChild(spanEl);
}
