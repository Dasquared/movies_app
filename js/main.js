import { searchMovie, renderList} from "./utils.js"


const form = document.querySelector(".main-input");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const value = document.querySelector("#fn").value;
    const div = document.querySelector(".main-result");
    const data = await searchMovie(div, value);
    renderList(data, div);
});