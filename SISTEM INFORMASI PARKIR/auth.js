function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "ParkirSTTNF" && password == "nf12345") {
        alert('Anda Berhasil Login');
        window.location="index.html"
        return false;
    }
    else if(username == "" || password == "") {
        alert("username atau Password tidak boleh kosong");
        return false;
    }
    else {
        alert('username atau password yang anda input salah')
    }
}