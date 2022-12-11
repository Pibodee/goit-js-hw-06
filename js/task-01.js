const numberOfCategories = document.querySelectorAll('.item')
console.log("Number of categories: ", numberOfCategories.length)


numberOfCategories.forEach(category =>{
    console.log("category: ", category.firstElementChild.textContent)
    console.log("elements: ", category.lastElementChild.children.length)
})
