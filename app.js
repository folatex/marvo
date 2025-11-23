const image2=document.getElementById("image2")
image2.addEventListener("mouseover",()=>{
    image2.style.backgroundImage = "url()"
    image2.textContent="some case study"
    image2.style.display="flex"
    image2.style.textAlign="center"
    image2.style.color = "#f5ee84"
    image2.style.backgroundColor = "#474306"
    image2.style.alignItems = "center"
    image2.style.justifyContent = "center"
    image2.style.fontSize = "40px"
    image2.style.alignItems = "center"

})
image2.addEventListener("mouseout", () => {
    image2.textContent = ""
    image2.style.display = "block"
    image2.style.color = "#f5ee84"
    image2.style.backgroundColor = "transparent"
    image2.style.backgroundImage="url(images/Rectangle8.jpg)"

})


const image3 = document.getElementById("image3")
image3.addEventListener("mouseover", () => {
    image3.style.backgroundImage = "url()"
    image3.textContent = "some case study"
    image3.style.display = "flex"
    image3.style.textAlign = "center"
    image3.style.color = "#f5ee84"
    image3.style.backgroundColor = "#474306"
    image3.style.alignItems = "center"
    image3.style.justifyContent = "center"
    image3.style.fontSize = "40px"
    image3.style.alignItems = "center"

})
image3.addEventListener("mouseout", () => {
    image3.textContent = ""
    image3.style.display = "block"
    image3.style.color = "#f5ee84"
    image3.style.backgroundColor = "transparent"
    image3.style.backgroundImage = "url(images/unsplash_ubIWo074QlU.jpg)"

})