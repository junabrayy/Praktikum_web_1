// buat fungsi
// ambil nilai username
// ambil nilai password
// kita cek apakah username dan password benar dengan yang kita kasih nilai nya
// jika benar berikan arah berhaasil login dan arahkan ke file index
// jika password dan username kosong maka berikan alert password dan username kosong
// jika password dan username salah maka tampilkan username dan password salah

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "123456") {
        alert('Anda Berhasil Login');
        window.location="index.html"
        return false;
    }
    else if (username == "" || password=="") {
        alert("username atau password tidak boleh kosong")
        return false;
    }
    else{
        alert("Username atau Password yang anda inputkan salah")
    }

}