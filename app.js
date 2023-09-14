// https://www.themealdb.com/api/json/v1/1/search.php?s=fish%20
const main = document.querySelector("main");
const loading = document.querySelector(".loading");

loading.classList.remove("hide");
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish%20")
  .then((response) => response.json())
  .then((fishItems) => {
    const newFishItems = fishItems.meals;
    newFishItems.forEach((fishItem) => {
      const div = document.createElement("div");
      div.classList.add("box");
      div.innerHTML = `
        <img src="${fishItem.strMealThumb}" alt="">
        <div class="info">
        <p class="id"><b>ID:</b> ${fishItem.idMeal}</p>
        <h6>Name: ${fishItem.strMeal.slice(0, 11)}</h6>
        <p class="category"><b>Category:</b> ${fishItem.strCategory}i</p>
        <P class="discription">${fishItem.strInstructions.slice(0, 60)}</P>
        `;
      main.appendChild(div);
    });
  })
  .catch((error) => console.log(error))
  .finally(() => {
    loading.classList.add("hide");
  });
