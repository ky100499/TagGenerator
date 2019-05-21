Array.from(document.querySelectorAll(".select-wrap.tag > .select-item")).forEach(elem => {
    elem.addEventListener('click', function() {
        if (Array.from(this.classList).includes("active")) {
            this.classList.remove("active")
        }
        else {
            Array.from(document.querySelectorAll(".select-wrap.tag > .active")).forEach(item => {
                item.classList.remove('active')
            })
            this.classList.add('active')
        }
    })
})

function genTag() {
    let elem

    let selectedElem = document.querySelector(".select-wrap.tag > .active")
    if (selectedElem == null) {
        alert("요소를 선택하세요")
        return
    }
    else {
        elem = document.createElement(selectedElem.dataset.tag)
    }

    bgColor = document.querySelector("input[name='color-bg']").value
    fgColor = document.querySelector("input[name='color-fg']").value
    elem.style.backgroundColor = bgColor
    elem.style.color = fgColor

    Array.from(document.querySelectorAll(".attr > .select-item")).forEach(e => {
        let attr = e.children.attr.value.trim()
        let val = e.children.val.value.trim()
        if (attr.length > 0)
            elem.setAttribute(attr, val)
    })

    text = document.querySelector("textarea[name='text']").value
    elem.innerText = text

    Array.from(document.getElementById("result").children).forEach(e => {
        e.remove()
    })
    document.getElementById("result").append(elem)

    document.getElementById("history").prepend(document.createElement("br"))
    document.getElementById("history").prepend(elem.cloneNode(true))

    Array.from(document.querySelectorAll(".select-wrap.tag > .active")).forEach(item => {
        item.classList.remove('active')
    })
    document.querySelector("input[name='color-bg']").value = document.querySelector("input[name='color-fg']").value = "#000000"
    Array.from(document.querySelectorAll(".attr > .select-item")).forEach(e => {
        e.children.attr.value = e.children.val.value = ""
    })
    document.querySelector("textarea[name='text']").value = ""
}
