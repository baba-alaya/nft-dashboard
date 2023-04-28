
const user = document.getElementById("user");
const creator = document.getElementById("creator");
const switch_value = document.getElementById("switch_value");
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const avatar = document.getElementById('avatar');
const sideBar = document.getElementById('pnft')
const profile = document.getElementById("socials")

next.addEventListener('click', function () {
    // if(sideBar.classList.contains("translate")) {
    //     sideBar.classList.remove("translate")
    // } else {
    //     sideBar.classList.add("translate")
    // }
    sideBar.classList.toggle('translate')
})

prev.addEventListener('click', function () {
    if (sideBar.classList.contains("translate")) {
        sideBar.classList.remove("translate")
    }
})

avatar.addEventListener('click', function () {
    if (profile.classList.contains("socials_translate")) {
        profile.classList.remove("socials_translate")
    } else {
        profile.classList.add("socials_translate")
    }
})

profile.addEventListener('drag', closeProfile);
document.querySelector(".creators").addEventListener('drag', closeProfile);
document.querySelector(".analyse").addEventListener('drag', closeProfile);

function closeProfile() {
    if (profile.classList.contains("socials_translate")) {
        profile.classList.remove("socials_translate")
    }
    console.log('drag')
}

user.addEventListener('click', function () {
    if (user.classList.contains("active")) {
        user.classList.add("active")
    } else {
        user.classList.add("active")
        creator.classList.remove("active")
        switch_value.textContent = 'Top Users'
    }
})

creator.addEventListener('click', function () {
    if (creator.classList.contains("active")) {
        creator.classList.add("active")
    } else {
        creator.classList.add("active")
        user.classList.remove("active")
        switch_value.textContent = 'Top Creators'
    }
})

















window.addEventListener('load', function () {

    user.classList.add("active")
})
