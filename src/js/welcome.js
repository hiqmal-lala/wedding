import {data} from "../assets/data/data.js";
import {addClassElement, getQueryParameter, removeClassElement} from "../utils/helper.js";

const SAPAAN = 'Kepada Yth. Bapak/Ibu/Saudara/i';

/**
 * Mengambil nama tamu dari parameter ?to= pada URL.
 * Contoh: https://risalah.alfathimiyah.com/?to=KH.+Ahmad+Fauzi
 */
const getGuestName = () => {
    const raw = getQueryParameter('to');
    if (!raw) return '';

    try {
        return decodeURIComponent(String(raw).replace(/\+/g, ' ')).trim();
    } catch {
        return String(raw).replace(/\+/g, ' ').trim();
    }
};

export const welcome = () => {
    const welcomeElement = document.querySelector('.welcome');
    const homeElement = document.querySelector('.home');
    const navbarElement = document.querySelector('header nav');
    const audioSection = document.querySelector('.audio');

    if (!welcomeElement) return;

    const [, figureElement, guestElement, openButton] = welcomeElement.children;
    const [audioMusic, audioButton] = audioSection ? audioSection.children : [];
    const iconButton = audioButton ? audioButton.querySelector('i') : null;

    /* ---------- Gambar sampul ---------- */
    const renderFigure = () => {
        const coverImage = data?.bride?.couple;
        if (!figureElement || !coverImage) return;

        figureElement.innerHTML = `<img src="${coverImage}" alt="Undangan Lala & Hiqmal">`;
    };

    /* ---------- Nama tamu undangan ---------- */
    const renderGuestName = () => {
        if (!guestElement) return;

        const guestName = getGuestName();
        guestElement.innerHTML = `${SAPAAN}<br>`;

        if (guestName) {
            const span = document.createElement('span');
            span.textContent = guestName; // aman: ditampilkan sebagai teks, bukan HTML
            guestElement.appendChild(span);

            // Isi otomatis kolom nama di form ucapan (jika form tersebut ada)
            const nameInput = document.querySelector('#name');
            if (nameInput) nameInput.value = guestName;
        } else {
            guestElement.innerHTML += '<br>';
        }
    };

    /* ---------- Musik latar ---------- */
    const setAudioIcon = (playing) => {
        if (!iconButton) return;
        removeClassElement(iconButton, playing ? 'bx-play-circle' : 'bx-pause-circle');
        addClassElement(iconButton, playing ? 'bx-pause-circle' : 'bx-play-circle');
    };

    const playAudio = () => {
        if (!audioMusic) return;
        audioMusic.play()
            .then(() => setAudioIcon(true))
            .catch(() => setAudioIcon(false)); // browser bisa menolak autoplay
    };

    const pauseAudio = () => {
        if (!audioMusic) return;
        audioMusic.pause();
        setAudioIcon(false);
    };

    const initAudio = () => {
        if (!audioMusic || !audioButton || !data?.audio) return;

        audioMusic.innerHTML = `<source src="${data.audio}" type="audio/mp3">`;

        audioButton.addEventListener('click', () => {
            if (audioMusic.paused) {
                addClassElement(audioButton, 'active');
                playAudio();
            } else {
                removeClassElement(audioButton, 'active');
                pauseAudio();
            }
        });
    };

    /* ---------- Tombol "Lihat Undangan" ---------- */
    const initOpenButton = () => {
        if (!openButton) return;

        openButton.addEventListener('click', () => {
            addClassElement(document.body, 'active');
            addClassElement(welcomeElement, 'hide');

            setTimeout(() => {
                if (homeElement) addClassElement(homeElement, 'active');
                if (navbarElement) addClassElement(navbarElement, 'active');
                if (audioButton) addClassElement(audioButton, 'show');
                playAudio();
            }, 50);

            setTimeout(() => {
                if (audioButton) addClassElement(audioButton, 'active');
            }, 3000);
        });
    };

    /* ---------- Inisialisasi ---------- */
    renderFigure();
    renderGuestName();
    initAudio();
    initOpenButton();
    addClassElement(welcomeElement, 'active');
};