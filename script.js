var root = document.querySelector(':root')
var rootStyles = getComputedStyle(root)

var $tag = (a) => document.getElementsByTagName(a)
var $id = (a) => document.getElementById(a)
var $class = (a) => document.getElementsByClassName(a)
var $query = (a) => document.querySelector(a)
var $name = (a) => document.getElementsByName(a)


// 1#>quatro-botoes/gadget-4
;(function () {
  // 2##>primeiro-botao
  ;(function(){
      let botao = $class('botao-1-gdt3')[0]
      let paragrafo = botao.children[0].style
  
      let botao_cont = 0
      botao.addEventListener('click', function () {
          if (botao_cont == 0) {
              paragrafo.top = '-35%'
              botao_cont++
          } else {
              paragrafo.top = '50%'
              botao_cont--
          }
      })
  })()
  
  // 2##>segundo-botao
  ;(function(){
      let botao_2 = document.getElementsByClassName('botao-2-gdt3')[0]
      
      let botao_2_cont = 0
      botao_2.addEventListener('click', function() {
          if (botao_2_cont == 0) {
              botao_2.style.backgroundColor = 'var(--fundo-padrao-reverso)'
              botao_2.style.color = 'var(--cor)'
  
              botao_2_cont++
          } else {
              botao_2.style.backgroundColor = 'var(--fundo-padrao)'
              botao_2.style.color = ' var(--fundo-padrao-reverso)'
  
              botao_2_cont--
          }
      })
  })() 
  
  // 2##>terceiro-botao
  ;(function(){
      let botao = $query('div.botao-3-gdt3') 
      
      let botao_cont = 0
      botao.addEventListener('click', clicou) 
      function clicou() {
          let limpar = $class('fundo-limpar')[0]
          let limpou = $class('fundo-limpou')[0]
          
          if (botao_cont == 0) {
              limpar.style.width = '0px'
              limpou.style.width = '100%'
              botao_cont++
          } else {
              limpar.style.width = '100%'
              limpou.style.width = '0px'
              botao_cont--
          }
      }
  })()

  // 2##>querto-botao
  ;(function() {
      let botao = $class('botao-4-gdt3')[0]
      
      botao.addEventListener('click', function () {
          botao.style.filter = 'brightness(250%)'
          setTimeout(function() {
              botao.style.filter = 'brightness(130%)'
          }, 150)

      })

      botao.addEventListener('mousemove', function() {
          botao.style.filter = 'brightness(130%)'
      })

      botao.addEventListener('mouseout', function() {
          botao.style.filter = 'none'
      })

  })()
})()