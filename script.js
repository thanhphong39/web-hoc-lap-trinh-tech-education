function kiemtra(){
    var loi = "";

    // ----------------------------------------------------------------

    var masv = document.getElementById("masv");
    if (masv.value == ""){
        masv.className = "loi";
        loi += "E-Mail học viên không được bỏ trống !!! <br>";
    }else if (masv.value.length != 7){
        masv.className = "loi";
        loi += "E-Mail học viên không dùng các kí tự =-*/_^#@ <br>";
    }else masv.className="txt";

    // ----------------------------------------------------------------

    var hoten = document.getElementById("hoten");
    if (hoten.value == ""){
        hoten.className = "loi";
        loi += "Tên sinh viên không được bỏ trống !!! <br>";
    }else if (hoten.value.length >30){
        hoten.className = "loi";
        loi += " Họ tên quá dài !!! <br>";
    }else hoten.className="txt";

    // ----------------------------------------------------------------

    var email = document.getElementById("email");
    if (email.value == ""){
        email.className = "loi";
        loi += "Mật Khẩu không được bỏ trống !!! <br>";
    }else email.className="txt";

    // ----------------------------------------------------------------

    dem=0;
    var arr_phai = document.getElementsByName("phai");
    for (var i=0; i<arr_phai.length;i++){
        if (arr_phai[i].checked == true)dem++;
    }if(dem == 0){
        document.getElementById("fs1").className="loi";
        loi += "Phải chọn giới tính !!!<br>"; 
    }else document.getElementById("fs1").className="";

    // ----------------------------------------------------------------

    dem=0;
    var arr_sothich = document.getElementsByName("st");
    for (var i=0; i<arr_sothich.length;i++){
        if (arr_sothich[i].checked == true)dem++;
    }if(dem == 0){
        document.getElementById("fs2").className="loi";
        loi += "Phải chọn ít nhát 1 sở thích !!!<br>"; 
    }else document.getElementById("fs2").className="";

    // ----------------------------------------------------------------

    var qt = document.getElementById("quoctich");
    if (qt.value == ""){
        qt.className = "loi";
        loi += "Phải chọn quốc tịch !!! <br>";
    }else qt.className="txt";

    // ----------------------------------------------------------------

    var gc = document.getElementById("ghichu");
    if (gc.value.length>200){
        gc.className = "loi";
        loi += "Ghi chú dưới 200 chữ !!! <br>";
    }else gc.className="txt";


    // ----------------------------------------------------------------

    if (loi != "") {
        document.getElementById('baoloi').innerHTML=loi;
        return false;
        
    }
}