window.onload = function () {
    video = document.getElementById("video")
    video.src = "videos/Джарахов.mp4"
    playpause = document.getElementsByClassName("playpause")[0]
    video__button = document.getElementsByClassName("video__button")

    playpause.onclick = (e) => {
        playpause.style = 'width: 0; height: 0; margin: 0;'
        video.play()
    }

    video.onclick = (e) => {
        video.pause()
        playpause.style = ''
    }

    video.onended = (e) => {
        showButton(1)
    }

}

function showButton (e) {
    if (e == 1) {

        var add = document.createElement('button')
        add.innerText = "Да"
        add.className = "video__button first"
        add.onclick = "changeVideo('Миша')"
        element = document.getElementsByClassName("wrapper")[0]
        element.appendChild( add );
        var add = document.createElement('button')
        add.innerText = "Нет"
        add.className = "video__button second"
        add.onclick = "changeVideo('Кто я')"
        element.appendChild( add );
        var add = document.createElement('button')
        add.innerText = "Не знаю"
        add.className = "video__button third"
        add.onclick = "changeVideo('Я')"
        element.appendChild( add );
    } else {
        element = document.getElementsByClassName("video__button")

        for (var i = 0; i < element.length; i++) {
            element[i].remove()
        }
    }
}

function changeVideo (e)  {
    if (e == "Миша") {
        video.src = "videos/Нет.mp4"
    }
    if (e == "Кто я") {
        video.src = "videos/Кто я.mp4"
    }
    if (e == "Я") {
        alert("Знаешь")
    }
    video.play()
    showButton()
}