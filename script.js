function createGrid(size) { 
    /* creates a grid based on what size is passed to function */
    grid = document.querySelector('.grid')
    let div = document.createElement('div')
    let row = document.createElement('div')
    for (let i=0; i<size; i++) {
        row.id=`row-${i+1}`
        row.className="row"
        grid.appendChild(row)
            for (let x=0; x<size; x++) {
                div.id=`${i+1}-${x+1}`
                div.className="block"
                row.appendChild(div)
                div = document.createElement('div')
            }
        row = document.createElement('div')
    }
    /* drawing event listener reloads at each resize */
    blocks = document.querySelectorAll('.block')
    blocks.forEach((block) =>{
        block.addEventListener('mouseenter', function(e) {
            e.target.style.background = 'black'
        })
    })
    }
const sizeIndicator = document.querySelector('.size')
const slider = document.querySelector("#myRange")
let size = slider.value
createGrid(size)
sizeIndicator.textContent = `${size}x${size}`

/* slider */
slider.addEventListener('input', function(e) {
    size = e.target.value
    grid.innerHTML = '';
    createGrid(size);
    sizeIndicator.textContent = `${size}x${size}`
})


