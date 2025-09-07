
// load all pants
const LoadAllPants=()=>{
    fetch('https://openapi.programming-hero.com/api/plants')
    .then((res)=>res.json())
    .then((dat)=>{
        // console.log(dat)
        displayAllPlants(dat.plants);
    })
}
const displayAllPlants=(plant)=>{
     console.log(plant)
    const allPlantsContainer=document.getElementById('all-plants-container');
    plant.forEach((element) => {
        const plantsDiv=document.createElement('div')
        plantsDiv.innerHTML=`
       
        <div class="bg-white  h-96 p-2 rounded-md shadow-2xl">
        <div>
        <img src="${element.image}" alt="${element.name}" class="w-full h-40 object-cover rounded" />

        <h1 class="text-gray-800 inter-font font-semibold text-sm mt-1">${element.name}</h1>
        <p class="inter-font font-normal text-xs mt-2">${element.description}</p>
        </div>
        <div class="flex justify-between mt-3">
        <p class="inter-font font-normal text-sm bg-green-100 text-green-700
   rounded-2xl m-2 p-2">${element.category}</p>
        <span class="inter-font font-semibold text-sm m-2 p-2 text-gray-800">৳${element.price}</span>
        </div>
        <div>
        <button class="btn w-full rounded-3xl bg-green-700 text-white">Add to Cart</button>
        </div>
        </div>
        
        `;
        allPlantsContainer.appendChild(plantsDiv)
        
    });


}
LoadAllPants();