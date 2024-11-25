var $ligar = document.getElementById('ligar')
var $desligar = document.getElementById('desligar')
var $lampada = document.getElementById('lamp')

function lampQuebrada(){
          return $lampada.src.indexOf('quebrada')>-1
}

function ligarLamp(){  
   if(!lampQuebrada()) {
              $lampada.src ='./lampada-acesa.jpg'
        }
}

function desligarLamp(){
    $lampada.src ='./lampada-apagada.jpg'
}

function quebrarLamp(){
    if(!lampQuebrada()) {
           $lampada.src ='./lampada-quebrada.jpg'
       }
}


$ligar.addEventListener('click',ligarLamp)
$desligar.addEventListener('click',desligarLamp)
$lampada.addEventListener('mouseleave',desligarLamp)
$lampada,addEventListener('dblclick',quebrarLamp)