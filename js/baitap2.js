function tinhTB(){
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    var num3 = +document.getElementById("num3").value;
    var num4 = +document.getElementById("num4").value;
    var num5 = +document.getElementById("num5").value;

    var trungBinh = (num1 + num2 + num3 + num4 + num5)/5;
    var spanEl =document.createElement("span");
    spanEl.innerHTML = "Trung bình 5 số là: " + trungBinh;

    var trungBinhEl = document.getElementById("trungBinh");
    trungBinhEl.innerHTML = "";
    trungBinhEl.style.display = "block";
    trungBinhEl.appendChild(spanEl);
}