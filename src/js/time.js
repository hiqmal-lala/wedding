import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [marriageDiv, receptionDiv] = timeContainer.querySelectorAll('div div');
    const mapLink = timeContainer.querySelector('a');
    const addressParagraph = timeContainer.querySelector('a + p');

    const createTimeListItem = (title, details) => (
        `<h3></h3>
         <p>AKAD NIKAH<br><b>Minggu, 03 Januari 2027<br>Pukul 15.00 WIB s.d. Selesai</b><br><br>
         RESEPSI<br><b>Minggu, 03 Januari 2027<br>Pukul 15.30 s.d. 21.00 WIB</b><br><br>
         
         LOKASI ACARA<br><b>KEDAI KERASA CILEDUG</b><br> Jl. H.Mencong, RT.002/RW.008, Paninggilan, Kec. Ciledug, Kota Tangerang, Banten 15225</p>`
    );

    marriageDiv.innerHTML = createTimeListItem('', data.time.marriage);

    mapLink.href = data.link.map;
};
