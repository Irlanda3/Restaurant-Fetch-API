const container = document.querySelector(".container");

const fetchData = () => {
  fetch("http://example-data.draftbit.com/restaurants")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      container.innerHTML = data.map(
        (restuarant) =>
          `<div class="card-restaurants">
            <div class="card-restaurant-deading">
                <h2>${restuarant.name}</h2>
            
            <div class="card-
        
        
        </div>`
      );
    })
    .catch((err) => console.log(err));
};

fetchData();
