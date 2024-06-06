import ExternalServices from "./ExternalServices.js";
import List from "./List.js";

export async function searchMovie(element, word){
    element.innerHTML = "";
	let search = new ExternalServices(word);
    await search.getData();
	return search.data.Search;
}

export function renderList(dataList, element){
    const list = new List(dataList);
    list.prepareList(element);
}

export function removeAllAlerts() {
    const alerts = document.querySelectorAll(".alert");
    alerts.forEach(alert => document.querySelector("main").removeChild(alert));
}

export function alertMessage(message, scroll = true, duration = 3000) {
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.innerHTML = `<p>${message}</p><span>X</span>`;
    
    alert.addEventListener("click", function(e) {
        if(e.target.tagName == "SPAN") {
          main.removeChild(this);
        }
    })
    const main = document.querySelector("main");
    main.prepend(alert);
    
    if(scroll)
      window.scrollTo(0,0);
  }