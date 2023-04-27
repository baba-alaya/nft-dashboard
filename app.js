
const user = document.getElementById("user");
const creator = document.getElementById("creator");
const switch_value = document.getElementById("switch_value");
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const avatar = document.getElementById('avatar');
const sideBar = document.getElementById('pnft')
const profile = document.getElementById("socials")

next.addEventListener('click' , function () {
    if(sideBar.classList.contains("translate")) {
        sideBar.classList.remove("translate")
        console.log(sideBar.classList)
    } else {
        sideBar.classList.add("translate")
        console.log(sideBar.classList)
    }
})

prev.addEventListener('click' , function () {
    if(sideBar.classList.contains("translate")) {
        sideBar.classList.remove("translate")
        console.log(sideBar.classList)
    }
})

avatar.addEventListener('click' , function () {
    console.log(profile)
    if(profile.classList.contains("socials_translate")) {
        profile.classList.remove("socials_translate")
        console.log(profile.classList)
    } else {
        profile.classList.add("socials_translate")
        console.log(profile.classList)
    }
    
})
profile.addEventListener('drag', function() {
    if(profile.classList.contains("socials_translate")) {
        profile.classList.remove("socials_translate")
        console.log(profile.classList)
    }
    console.log("profile")
})

user.addEventListener('click' , function(){
    console.log('bake')
    if(user.classList.contains("active")) {
        user.classList.remove("active")
    } else {
        user.classList.add("active")
        creator.classList.remove("active")
        switch_value.textContent = 'Top Users'
        
    }
})

creator.addEventListener('click' , function(){
    console.log('bake')
    if(creator.classList.contains("active")) {
        creator.classList.remove("active")
    } else {
        creator.classList.add("active")
        user.classList.remove("active")
        switch_value.textContent = 'Top Creators'
    }
})


