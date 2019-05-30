let tag = ""
let tags = document.getElementById("select-tag").children
let saved = false
for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', e => {
        let classes = tags[i].classList
        let hasActive = false
        for (let j = 0; j < classes.length; j++) {
            if (classes[j] == "active") {
                hasActive = true
                break
            }
        }
        if (hasActive) {
            tags[i].classList.remove('active')
            tag = ""
        }
        else {
            for (let j = 0; j < tags.length; j++) {
                tags[j].classList.remove('active')
            }
            tags[i].classList.add('active')
            tag = tags[i].innerText
        }
        console.log(tag)
    })
}

function genTag() {
    if (tag == "") {
        alert("요소를 선택하세요")
    }
    else {
        let elem = document.createElement(tag)

        bgColor = document.getElementById("color-bg").value
        fgColor = document.getElementById("color-fg").value
        elem.style.backgroundColor = bgColor
        elem.style.color = fgColor

        let attrs = document.getElementById("select-attr").children
        for (let i = 0; i < attrs.length; i++) {
            let inputs = attrs[i].children
            let attr = inputs.attr.value.trim()
            let val = inputs.val.value
            if (attr.length > 0) {
                elem.setAttribute(attr, val)
            }
            inputs.attr.value = ""
            inputs.val.value = ""
        }

        text = document.getElementById("select-text").value
        elem.innerText = text

        document.getElementById("result").innerHTML = ""
        document.getElementById("result").append(elem)
        document.getElementById("history").prepend(elem.cloneNode(true))

        let actives = document.getElementsByClassName("active")
        for (let i = 0; i < actives.length; i++) {
            actives[i].classList.remove("active")
        }
        tag = ""

        document.getElementById("color-bg").value = "#000000"
        document.getElementById("color-fg").value = "#000000"

        for (let i = 0; i < attrs.length; i++) {
            let inputs = attrs[i].children
            inputs.attr.value = ""
            inputs.val.value = ""
        }

        document.getElementById("select-text").value = ""

        saved = false
    }
}

function saveTag() {
    if (!saved) {
        let target = document.getElementById("result").children[0]
        document.getElementById("saved").prepend(target.cloneNode(true))
        saved = true
    }
}
