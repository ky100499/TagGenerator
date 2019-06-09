let tag = ""
let tags = document.getElementById("select-tag").children
let saved = false
for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', e => {
        let classes = tags[i].classList
        if (classes.contains("active")) {
            tags[i].classList.remove('active')
            tag = ""
        }
        else {
            let active = document.querySelector("#select-tag .active");
            if (active)
                active.classList.remove("active");

            tags[i].classList.add('active')
            tag = tags[i].innerText
        }
        console.log(tag)
    })
}

let attrStack = 0
document.getElementById("add-attr").addEventListener("click", e => {
    if (attrStack++ < 5) {
        let item = document.createElement("div")
        item.classList.add("select-item")

        item.innerText = " : "

        let ipt_attr = document.createElement("input")
        ipt_attr.type = "text"
        ipt_attr.name = "attr"
        item.prepend(ipt_attr)

        let ipt_val = document.createElement("input")
        ipt_val.type = "text"
        ipt_val.name = "val"
        item.append(ipt_val)

        document.getElementById("select-attr").append(item)

        document.getElementById("select-attr").append(document.getElementById("add-attr"))
    }
    else {
        alert("속성이 이렇게 많이 필요해?")
    }
})

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
