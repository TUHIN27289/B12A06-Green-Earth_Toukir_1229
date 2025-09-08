// load all pants
const LoadAllPants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((dat) => {
      // console.log(dat)
      const singlePlant = dat.plants;
      removeActive();
      const allBtn=document.getElementById("ctg-all")
      allBtn.classList.add('active')
      displayAllPlants(singlePlant);
    });
};

// display all plants
const displayAllPlants = (plant) => {
  //  console.log(plant)
  const allPlantsContainer = document.getElementById("all-plants-container");
  allPlantsContainer.innerHTML = "";
  plant.forEach((element) => {
    const plantsDiv = document.createElement("div");
    plantsDiv.innerHTML = `
       
        <div class="bg-white  h-96 p-2 rounded-md shadow-2xl">
        <div>
        <img src="${element.image}" alt="${element.name}" class="w-full h-40 object-cover rounded" />

        <button onclick="loadPlantDetail(${element.id})" class="text-gray-800 inter-font font-semibold text-sm mt-1">${element.name}</button>
        <p class="inter-font font-normal text-xs mt-2">${element.description}</p>
        </div>
        <div class="flex justify-between mt-3">
        <p class="inter-font font-normal text-sm bg-green-100 text-green-700
   rounded-2xl m-2 p-2">${element.category}</p>
        <span class="inter-font font-semibold text-sm m-2 p-2 text-green-900">৳${element.price}</span>
        </div>
        <div>
        <button class="btn w-full rounded-3xl bg-green-700 text-white">Add to Cart</button>
        </div>
        </div>
        
        `;
    allPlantsContainer.appendChild(plantsDiv);
  });
};
// load all categories
const loadAllCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((dat) => {
    
      // console.log(dat.categories)
      displayAllCategory(dat.categories);
    });
};
//display all category
const displayAllCategory = (categories) => {
  // console.log(categories)
  const allCatagoriesContainer = document.getElementById(
    "all-catagories-container"
  );

  categories.forEach((element) => {
    const cateDiv = document.createElement("div");
    
    cateDiv.innerHTML = `
        <div class="mt-2">
        <button id="ctg-btn-${element.id}" onclick="displayPlanByCategory(${element.id})"  class="cat-btn inter-font font-normal  text-left text-gray-800 w-40 pt-2 pb-2 pl-4 rounded-lg  hover:bg-[#15803D] hover:text-white transition duration-200">${element.category_name}</button>
        </div>
        `;
    allCatagoriesContainer.appendChild(cateDiv);
  });
};
// display plants by category
const displayPlanByCategory = (id) => {
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((dat) => {
    //   console.log(dat.plants);
    removeActive();
    const clickCtgBtn=document.getElementById(`ctg-btn-${id}`)
    clickCtgBtn.classList.add('active')
    // console.log(clickCtgBtn)
      displayAllPlants(dat.plants);
    });
};
// load plants detail
const loadPlantDetail = (id) => {
  document.getElementById("plant-detail-modal").showModal();
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((dat) => {
      // console.log(dat.plants)
      displayPlantsDetail(dat.plants);
    });
};
// display plan detail

const displayPlantsDetail = (element) => {
  // console.log(element)
  const planDetaildiv = document.getElementById("plants-detail-container");
  planDetaildiv.innerHTML = `
    <div class="bg-white  h-[420px]  rounded-md ">
        
<button btn onclick="loadPlantDetail(${element.id})" class="text-gray-800 inter-font font-bold text-lg mb-3">${element.name}</button>
        <img src="${element.image}" alt="${element.name}" class="w-full h-64 object-cover rounded mb-2" />
 <p class="inter-font font-normal text-sm mb-2 "> <span class="inter-font font-semibold text-base">Category:</span> ${element.category}</p>
        <span class="inter-font font-normal text-sm mb-2"> <span class="inter-font font-semibold text-base"> Price: </span> ৳${element.price}</span>
        <p class="inter-font font-normal text-sm mt-2"> <span class="inter-font font-semibold text-base">Description: </span> ${element.description}</p>
        </div>
    `;
};

// remove active class
const removeActive=()=>{
    const catBtns=document.querySelectorAll(".cat-btn");
    catBtns.forEach((element)=>{
        element.classList.remove('active');
    })
}
loadAllCategories();
LoadAllPants();
// loadPlantDetail();
