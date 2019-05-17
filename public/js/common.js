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
    let tag = document.querySelector(".select-wrap.tag > .active").dataset.tag
    alert(tag)
}
