$(document).ready(function (){
    $("#pb1").animate({
        width:$("#pb1").attr("data-procent")
    },2000)
    $("#pb2").animate({
        width:$("#pb2").attr("data-procent")
    },2000)
    $("#pb2").css({backgroundColor:"red"})
    $("#pb3").animate({
        width:$("#pb3").attr("data-procent")
    },2000)
    $("#pb3").css({backgroundColor:"orange"})
    $("#pb4").animate({
        width:$("#pb4").attr("data-procent")
    },2000)
    $("#pb4").css({backgroundColor:"blue"})
    $("#pb5").animate({
        width:$("#pb5").attr("data-procent")
    },2000)
    $("#pb5").css({backgroundColor:"pink"})
    $("#pb6").animate({
        width:$("#pb6").attr("data-procent")
    },2000)
    $("#pb6").css({backgroundColor:"yellow"})
})
let val1 = document.querySelector('.val1')
let val2 = document.querySelector('.val2')
let val3 = document.querySelector('.val3')
let val4 = document.querySelector('.val4')
let val5 = document.querySelector('.val5')
let val6 = document.querySelector('.val6')

function sumPersent(max1,max2,max3,max4,max5,max6){
    let sum=0
    setInterval(function(){
       sum++
       if(sum<=max1){
           val1.textContent=sum+'%'
       }
       if(sum<=max2){
        val2.textContent=sum+'%'
        }
        if(sum<=max3){
            val3.textContent=sum+'%'
        }
        if(sum<=max4){
         val4.textContent=sum+'%'
         }
         if(sum<=max5){
            val5.textContent=sum+'%'
        }
        if(sum<=max6){
         val6.textContent=sum+'%'
         }

    },20)
}
sumPersent(100,90,75,80,90,55)

