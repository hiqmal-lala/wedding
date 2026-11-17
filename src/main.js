import {home} from "./js/home.js";
import {bride} from "./js/bride.js";
import {time} from "./js/time.js";
import {galeri} from "./js/galeri.js";
import {wishas} from "./js/wishas.js";
import {navbar} from "./js/navbar.js";
import {welcome} from "./js/welcome.js?v=3";

// Jalankan tiap bagian terpisah: jika satu error, bagian lain tetap jalan
const run = (name, fn) => {
    try {
        fn();
    } catch (err) {
        console.error(`[${name}] gagal dijalankan:`, err);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    run('welcome', welcome);
    run('navbar', navbar);
    run('home', home);
    run('bride', bride);
    run('time', time);
    run('galeri', galeri);
    run('wishas', wishas);

    // AOS dimuat dari luar; lewati jika gagal dimuat/diblokir
    if (window.AOS) run('AOS', () => AOS.init());
});