const answers = document.querySelectorAll(".answer")
const buttons = document.querySelectorAll("button")

buttons.forEach((item , index) =>{
    item.onclick=(e)=>{
        if (e.target.innerHTML ==="Показать ответ"){
            e.target.innerHTML = "скрыть ответ"
            answers[index].style.display = "block"
        }else {

        e.target.innerHTML = "Показать ответ"
        answers[index].style.display = "none"}
    }
})