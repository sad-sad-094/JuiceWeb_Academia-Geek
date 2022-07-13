import { getData } from "../modules/getData.mjs";
import * as constantes from "../modules/constantes.mjs";



console.log(constantes);




const buy = document.getElementById("buynow");

const templateCardTravel = document.getElementById('templateCardTravel').content;
const box = document.querySelector('.cardbox');



buy.addEventListener('click', async() => {
    try {
        const data = await getData(constantes.url);
        console.log(data);
        printTravel(data, templateCardTravel, box);
    } catch (error) {
        console.log(error);
    }
});

const printTravel = (data, template, box) => {

    const divisa = "$";

    const fragment = document.createDocumentFragment();

    data.forEach(jugo => {

        const { imagen, nombre, descripcion, precio, } = jugo;

        template.querySelector("img").src = imagen;
        template.querySelector("h5").textContent = nombre;
        template.querySelector(".precio-card").textContent = divisa + precio;
        template.querySelector(".valoracion-card").textContent = descripcion;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
        console.log(template);
    });

    box.appendChild(fragment);
};