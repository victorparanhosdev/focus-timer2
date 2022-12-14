const Botao = {
  minutos: document.querySelector('.minutos'),
  segundos: document.querySelector('.segundos'),
  play: document.querySelector('.btn-play'),
  stop: document.querySelector('.btn-stop'),
  mais: document.querySelector('.btn-over'),
  menos: document.querySelector('btn-under'),
  floresta: document.querySelector('.floresta'),
  chuva: document.querySelector('.chuva'),
  cafeteria: document.querySelector('.cafeteria'),
  lareira: document.querySelector('.lareira'),
  corpo: document.querySelector('body'),
}

const Sound = {
  floresta: new Audio("./files/Floresta.wav"),
  chuva: new Audio("./files/Chuva.wav"),
  cafeteria: new Audio("./files/Cafeteria.wav"),
  lareira: new Audio("./files/lareira.wav"),
}




Botao.floresta.addEventListener('click', ()=>{
  Botao.corpo.classList.add('floresta')
  Botao.corpo.classList.remove('lareira')
  Botao.corpo.classList.remove('cafeteria')
  Botao.corpo.classList.remove('chuva')
  
  Sound.chuva.pause()
  Sound.cafeteria.pause()
  Sound.lareira.pause()
  Sound.floresta.play()
  
})


Botao.chuva.addEventListener('click', ()=>{
  Botao.corpo.classList.remove('floresta')
  Botao.corpo.classList.remove('lareira')
  Botao.corpo.classList.remove('cafeteria')
  Botao.corpo.classList.add('chuva')
  Sound.floresta.pause()
  Sound.cafeteria.pause()
  Sound.lareira.pause()
  Sound.chuva.play()

})

Botao.cafeteria.addEventListener('click', ()=>{
  Botao.corpo.classList.remove('floresta')
  Botao.corpo.classList.remove('chuva')
  Botao.corpo.classList.remove('lareira')
  Botao.corpo.classList.add('cafeteria')
  Sound.floresta.pause()
  Sound.chuva.pause()
  Sound.lareira.pause()
  Sound.cafeteria.play()

})

Botao.lareira.addEventListener('click', ()=>{
  Botao.corpo.classList.remove('floresta')
  Botao.corpo.classList.remove('chuva')
  Botao.corpo.classList.remove('cafeteria')
  Botao.corpo.classList.add('lareira')
  Sound.floresta.pause()
  Sound.chuva.pause()
  Sound.cafeteria.pause()
  Sound.lareira.play()

})