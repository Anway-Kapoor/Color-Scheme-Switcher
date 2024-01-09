const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id == "white"){
            body.style.background = e.target.id
        }
        if(e.target.id == "grey"){
            body.style.background = e.target.id
        }
        if(e.target.id == "blue"){
            body.style.background = e.target.id
        }
        if(e.target.id == "yellow"){
            body.style.background = e.target.id
        }
        if(e.target.id == "cornflowerblue"){
            body.style.background = e.target.id
        }
        if(e.target.id == "blueviolet"){
            body.style.background = e.target.id
        }
        if(e.target.id == "chartreuse"){
            body.style.background = e.target.id
        }
        if(e.target.id == "crimson"){
            body.style.background = e.target.id
        }
        if(e.target.id == "darkorange"){
            body.style.background = e.target.id
        }
    })
})