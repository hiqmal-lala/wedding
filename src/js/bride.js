import {data} from "../assets/data/data.js";
import {renderElement} from "../utils/helper.js";

export const bride = () => {
    const brideCouple = document.querySelector('.bride_couple ul');
    const brideListItem = (data) => (
        `<li data-aos="zoom-in" data-aos-duration="1000">
              <figure>
                   
              </figure>
             
              <p>"Dan di antara tanda-tanda <br>(kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, <br>dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) <br>bagi kaum yang berpikir."<br><b>(QS. Ar-Rum: 21)</b></p>
        </li>`
    )

    const brideData = [data.bride.L];

    renderElement(brideData, brideCouple, brideListItem);
}