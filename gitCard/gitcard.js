let u = document.querySelector("#usuario-github")
let b = document.querySelector("#buscar-github")
let a = document.querySelector("a")

let avatar_link = document.querySelector(".avatar")
let img = avatar_link.querySelector("img")
let nome = document.querySelector(".content h1")
let repo = document.querySelectorAll(".status li a strong")[0]
let gist = document.querySelectorAll(".status li a strong")[1]
let seg = document.querySelectorAll(".status li a strong")[2]


const getGitHubInfo = function (username) {

    var url = `https://api.github.com/users/${username}`

    var ajax = new XMLHttpRequest()
    
    ajax.onreadystatechange = function () {

        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText)
            nome.innerText = ajax.name
            seg.innerText = ajax.followers
            repo.innerText = ajax.public_repos
            gist.innerText = ajax.public_gists
            img.src = ajax.avatar_url
            a.href = ajax.html_url
            console.log(ajax)
        }
        
    }

    ajax.open('GET', url, true)
    ajax.send()

}

b.addEventListener("click", e => {
    e.preventDefault();
    getGitHubInfo(u.value);
})