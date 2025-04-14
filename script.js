const addButton = document.querySelector('#add');
const removeButton = document.querySelector('#remove')
const h1 = document.querySelector('h1')
const div = document.querySelector('#pg')
const div2 = document.querySelector('#image')


removeButton.onclick = function () {
    newP.remove()
    document.body.style.backgroundColor=""
}
addButton.onclick = function () {
    newP = document.createElement('p')
    newP.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil praesentium tempora labore maiores ipsa magni? Aperiam laboriosam possimus aliquid? Voluptatum, rem consequuntur iusto molestias ducimus in maxime? Placeat, eum nam!"
    div.appendChild(newP)
    image = document.createElement('img')
    image.src = "https://unsplash.com/photos/mountains-and-a-lake-under-a-cloudy-sky-4dfNWybkf10"
    image.style.width = "100px"
    image.style.height = "100px"
    div2.appendChild(image)
    document.body.style.backgroundColor = "green"
}