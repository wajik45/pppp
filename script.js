// tombol

const ul = document.querySelector('nav ul');

document.body.addEventListener('click', function(e) {
	if (e.target.className == 'layer') {
		ul.classList.toggle('toggle');
	} else if (ul.classList.contains('toggle')) {
		if (e.target == ul) {
			ul.className = 'toggle';
		} else if (e.target != ul) {
			ul.classList.remove('toggle');
		}
	}
});

// paralaque



window.onscroll = () => {

	const judulKiri = document.querySelector('.oleh h2');
	const namaKanan = document.querySelector('.oleh ul');

	const judul = document.querySelector('.pala .judul');
	const jj = document.querySelector('.pala');
	const kotak = document.querySelectorAll('.peta .kotak');

	const judulSatu = document.querySelector('article h2');
	const garisJsatu = document.querySelector('article hr');

	const ending = document.querySelector('.ending h1');

	judulKiri.classList.add('judul-kiri');
	namaKanan.classList.add('nama-kanan');
	
	jj.classList.add('opasiti');
	jj.classList.add('judul-kiri');
	kotak.forEach(function(semua) {
		semua.classList.add('opasiti');
		semua.classList.add('nama-kanan');
	});

	judulSatu.classList.add('judul-kiri');
	garisJsatu.classList.add('nama-kanan');

	ending.style.transform = 'scale(0)';

	if (this.scrollY >= 66 && this.scrollY <= 1020) {

		judulKiri.classList.remove('judul-kiri');
		namaKanan.classList.remove('nama-kanan');

	} else if (this.scrollY >= 1020 && this.scrollY <= 1500) {

		jj.classList.remove('opasiti');
		jj.classList.remove('judul-kiri');

		kotak.forEach(function(semua) {
			semua.classList.remove('opasiti');
			semua.classList.remove('nama-kanan');
		});

	} else if (this.scrollY >= 1800 && this.scrollY <= 3000) {

		judulSatu.classList.remove('judul-kiri');
		garisJsatu.classList.remove('nama-kanan');

	} else if (this.scrollY >= 3600) {
		ending.style.transform = 'scale(2)';
	}
};