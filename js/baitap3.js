const giaUSD = 235000;

function quyDoi(){
    var usd = document.getElementById("usd").value;
    var vnd = giaUSD * parseInt(usd);
    var spanEl = document.createElement("span");
    spanEl.innerHTML = usd + " USD = " + vnd + "VND";

    var vndEl = document.getElementById("vnd");
    vndEl.innerHTML = "";
    vndEl.style.display = "block";
    vndEl.appendChild(spanEl);
}
