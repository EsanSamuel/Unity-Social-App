const fileInput = document.querySelector(".file-input")
previewImg = document.querySelector(".preview-img img")
Prv = document.getElementById("prv")
Prvvv = document.getElementById("prvvv")
Prvv = document.getElementById("prvv")
MaincImg = document.getElementById("mainc")
chooseBtn = document.querySelector(".choose")
toolBtn = document.querySelectorAll(".tool")
Postsome = document.getElementById("postsome")
Post = document.querySelector(".postit")
textarea = document.getElementById("textarea")
PostElem = document.querySelector(".mypost")
Like = document.getElementById("like")
Love = document.getElementById("love")
Like2 = document.getElementById("like2")
Submit = document.querySelector(".Submit")
Firstname = document.getElementById("Firstname")
Surname = document.getElementById("Surname")
Elem = document.querySelector(".pname")
Elem2 = document.querySelector(".welcomeAI")
Elem3 = document.querySelector(".name")
Menu = document.getElementById("menu")
Edit = document.getElementById("editp")

const loadImage = () =>{
    let file = fileInput.files[0]
    if(!file) return
    previewImg.src = URL.createObjectURL(file)
    Prv.src = URL.createObjectURL(file)
    Prvv.src = URL.createObjectURL(file)
    MaincImg.src = URL.createObjectURL(file)
    Prvvv.src = URL.createObjectURL(file)
    
}

fileInput.addEventListener("change",loadImage)
chooseBtn.addEventListener("click",() => fileInput.click())

toolBtn.forEach(btn =>{
    btn.addEventListener("click",()=>{
        document.querySelector(".options .active")
        .classList.remove("active")
        btn.classList.add("active")
    })
})

function openPost(){
    Postsome.classList.add("Openps")
}

function closePost(){
    Postsome.classList.remove("Openps")
}

Post.addEventListener("click",(e)=>{
    e.preventDefault()
    addPost()
})

function addPost(){
    let post =document.createElement("div")
    post.classList.add("card")
    post.innerHTML =`
    
            <div class="preview-img" id="prev">
                <img src="robot.jpg" id="prvv">
            </div>  <div class="rrname"><h3 id="rr"></h3></div>
                <h3 class="hh">${textarea.value}</h3>
                </div>
            </div>
            
       <div class="icons">
           <i class="bx bx-heart" id="like" onclick="like()"></i>
           <i class="bx bx-comment"></i>
           <i class="bx bx-share-alt"></i>
           <i class="bx bx-dots-vertical-rounded" class="del"></i>
              </div>
    `
    PostElem.appendChild(post)
    textarea.value = ""

     let Del = post.querySelector(".del")
     Del.addEventListener("click",()=>{
         post.remove()
     })

    
}



function like(){
    Like.style.color ="rgb(194, 21, 79)" 
}

function love(){
    Love.style.color ="rgb(194, 21, 79)" 
}

Submit.addEventListener("click",(e)=>{
    e.preventDefault(e)
    addName()
})

function addName(){
    let cardname = document.createElement("div")
    cardname.classList.add("jj")
    cardname.innerHTML = `
    <h2 class="jj">${Firstname.value} ${Surname.value}</h2>

    `
    Elem.appendChild(cardname)
}

Submit.addEventListener("click",(e)=>{
    e.preventDefault(e)
    addName2()
})

function addName2(){
    let cardn = document.createElement("div")
    cardn.classList.add("welcome")
    cardn.innerHTML =`
    <h2 class="welcome">Welcome, ${Firstname.value}. </h2>
    `
    Elem2.appendChild(cardn)
}

Submit.addEventListener("click",(e)=>{
    e.preventDefault(e)
    addName3()
})

function addName3(){
    let cardnm = document.createElement("div")
    cardnm.classList.add("rr")
    cardnm.innerHTML =`
    <h3 class="rr">${Firstname.value} ${Surname.value}</h3>
    `
    Elem3.appendChild(cardnm)
}

function openM(){
    Menu.classList.toggle("openMenu")
}

function openEdit(){
    Edit.classList.add("openE")
}

function closeEdit(){
    Edit.classList.remove("openE")
}


