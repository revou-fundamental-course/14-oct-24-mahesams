

var dt = new Date();
document.getElementById("tanggalwaktu").innerHTML = dt.toLocaleString();

function validateForm() {

    let inputNamaawal = document.getElementById('nama-user').value;
    if(inputNamaawal == '') {
        alert('Mohon isi nama anda');
    } else {
    document.getElementById('nama-awal').innerHTML = inputNamaawal;
    console.log(inputNamaawal);
    }

    let inputNama = document.getElementById('nama-user').value;
    if(inputNama == '') {
        alert('Mohon isi nama anda');
    } else {
    document.getElementById('nama-js').innerHTML = inputNama;
    console.log(inputNama);
    }

    let inputTanggallahir = document.getElementById('tanggal-lahir').value;
    if(inputTanggallahir == '') {
        alert('Mohon isi tanggal lahir anda');
    } else {
        document.getElementById('tanggal-lahir-js').innerHTML = inputTanggallahir;
        console.log(inputTanggallahir);
    }

    let inputEmail = document.getElementById('email').value;
    if(inputEmail == '') {
        alert('Mohon isi email anda');
    } else {
        document.getElementById('email-js').innerHTML = inputEmail;
        console.log(inputEmail);
    }

    let inputPesan = document.getElementById('pesan').value;
    if(inputPesan == '') {
        alert('Mohon isi pesan yang ingin anda sampaikan kepada kami');
    } else {
        document.getElementById('pesan-js').innerHTML = inputPesan;
        console.log(inputPesan);
    }
}

let indexSlide = 0;

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('photo-banner');

    if (n > listImage.length - 1) {
        indexSlide = 0;
    }

    if (n < 0) {
        indexSlide = listImage.length - 1;
    }

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none'
        index++;
    }

    listImage[indexSlide].style.display = 'block'
    console.log(listImage);
    console.log(n);
}

setInterval(() => nextSlide(1), 4000)
