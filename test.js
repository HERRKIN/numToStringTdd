var chai = require('chai');
var should = chai.should()
var app = require('./app.js')

describe('Verificando entrada',() => {
  it('should return the correct number of digits',()=>{
    var number = app.countDigits(20)
    number.should.equal(2)
  })
})



describe('identificar hasta el 10',() => {
  it('should identifiy the unit number',()=>{
    var number = app.unit(1)
    number.should.equal('uno')
    number = app.unit(2)
    number.should.equal('dos')
    number = app.unit(3)
    number.should.equal('tres')
    number = app.unit(4)
    number.should.equal('cuatro')
    number = app.unit(5)
    number.should.equal('cinco')
    number = app.unit(6)
    number.should.equal('seis')
    number = app.unit(7)
    number.should.equal('siete')
    number = app.unit(8)
    number.should.equal('ocho')
    number = app.unit(9)
    number.should.equal('nueve')

  })
})



describe('identificar decena',() => {
  it('Identify correct multiple of 10',()=>{

    var number = app.dec(10)
    number.should.equal('diez')
    number = app.dec(20)
    number.should.equal('veinte')
    number = app.dec(30)
    number.should.equal('treinta')
    number = app.dec(40)
    number.should.equal('cuarenta')
    number = app.dec(50)
    number.should.equal('cincuenta')
    number = app.dec(60)
    number.should.equal('sesenta')
    number = app.dec(70)
    number.should.equal('setenta')
    number = app.dec(80)
    number.should.equal('ochenta')
    number = app.dec(90)
    number.should.equal('noventa')
  })
  it('Evaluating 11 to 19 on dec',()=>{

    var number = app.dec(11)
    number.should.equal('once')
    number = app.dec(12)
    number.should.equal('doce')
    number = app.dec(13)
    number.should.equal('trece')
    number = app.dec(14)
    number.should.equal('catorce')
    number = app.dec(15)
    number.should.equal('quince')
    number = app.dec(16)
    number.should.equal('dieciseis')
    number = app.dec(17)
    number.should.equal('diecisiete')
    number = app.dec(18)
    number.should.equal('dieciocho')
    number = app.dec(19)
    number.should.equal('diecinueve')
  })
  it('Evaluating 20 to 29 on dec',()=>{

    var number = app.dec(20)
    number.should.equal('veinte')
    number = app.dec(21)
    number.should.equal('veintiuno')
    number = app.dec(22)
    number.should.equal('veintidos')
    number = app.dec(23)
    number.should.equal('veintitres')
    number = app.dec(24)
    number.should.equal('veinticuatro')
    number = app.dec(25)
    number.should.equal('veinticinco')
    number = app.dec(26)
    number.should.equal('veintiseis')
    number = app.dec(27)
    number.should.equal('veintisiete')
    number = app.dec(28)
    number.should.equal('veintiocho')
    number = app.dec(29)
    number.should.equal('veintinueve')
  })

  it('Evaluating 30 to 39 on dec',()=>{
    v = 'treinta'
    n = 3*10

    var number = app.dec(n)
    number.should.equal(v)
    number = app.dec(n+1)
    number.should.equal(`${v} y uno`)
    number = app.dec(n+5)
    number.should.equal(`${v} y cinco`)
    number = app.dec(n+9)
    number.should.equal(`${v} y nueve`)
  })

  it('Evaluating 40 to 49 on dec',()=>{
    v = 'cuarenta'
    n = 4*10

    var number = app.dec(n)
    number.should.equal(v)
    number = app.dec(n+1)
    number.should.equal(`${v} y uno`)
    number = app.dec(n+5)
    number.should.equal(`${v} y cinco`)
    number = app.dec(n+9)
    number.should.equal(`${v} y nueve`)
  })

  it('Evaluating 50 to 59 on dec',()=>{
    v = 'cincuenta'
    n = 5*10

    var number = app.dec(n)
    number.should.equal(v)
    number = app.dec(n+1)
    number.should.equal(`${v} y uno`)
    number = app.dec(n+5)
    number.should.equal(`${v} y cinco`)
    number = app.dec(n+9)
    number.should.equal(`${v} y nueve`)
  })
  it('Evaluating 60 to 69 on dec',()=>{
    v = 'sesenta'
    n = 6*10

    var number = app.dec(n)
    number.should.equal(v)
    number = app.dec(n+1)
    number.should.equal(`${v} y uno`)
    number = app.dec(n+5)
    number.should.equal(`${v} y cinco`)
    number = app.dec(n+9)
    number.should.equal(`${v} y nueve`)
  })
  it('Evaluating 70 to 79 on dec',()=>{
    v = 'setenta'
    n = 7*10

    var number = app.dec(n)
    number.should.equal(v)
    number = app.dec(n+1)
    number.should.equal(`${v} y uno`)
    number = app.dec(n+5)
    number.should.equal(`${v} y cinco`)
    number = app.dec(n+9)
    number.should.equal(`${v} y nueve`)
  })
  it('Evaluating 80 to 89 on dec',()=>{
    v = 'ochenta'
    n = 8*10

    var number = app.dec(n)
    number.should.equal(v)
    number = app.dec(n+1)
    number.should.equal(`${v} y uno`)
    number = app.dec(n+5)
    number.should.equal(`${v} y cinco`)
    number = app.dec(n+9)
    number.should.equal(`${v} y nueve`)
  })
  it('Evaluating 90 to 99 on dec', () => {
    v = 'noventa'
    n = 9*10

    var number = app.dec(n)
    number.should.equal(v)
    number = app.dec(n+1)
    number.should.equal(`${v} y uno`)
    number = app.dec(n+5)
    number.should.equal(`${v} y cinco`)
    number = app.dec(n+9)
    number.should.equal(`${v} y nueve`)
  })
})

describe('identificar centenas', () => {
  it('Evaluando multiplos de 100', () => {
    var num = [100, 200, 300, 400, 500, 600, 700, 800, 900]
    var str = ['cien', 'docientos', 'trecientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']
    num.forEach((n, i) => {
      let r = app.cent(n)
      r.should.equal(str[i])
    })
  })

  it('Evalua numeros al azar de 3 cifras', () => {
    var num = [101, 250, 999, 371]
    var str = ['ciento uno', 'docientos cincuenta', 'novecientos noventa y nueve', 'trecientos setenta y uno']
    num.forEach((n,i) => {
      let r = app.cent(n)
      r.should.equal(str[i])
    })
  })

  it('Evalua numeros al azar de 2 cifras', () => {
    var num = [01, 50, 99, 71]
    var str = ['uno', 'cincuenta', 'noventa y nueve', 'setenta y uno']
    num.forEach((n,i) => {
      let r = app.cent(n)
      r.should.equal(str[i])
    })
  })
})


describe('identificar milesimas', ( ) => {
  it('Evalua numeros al azar de 2 cifras', () => {
    var num = [01, 50, 99, 71]
    var str = ['uno', 'cincuenta', 'noventa y nueve', 'setenta y uno']
    num.forEach((n,i) => {
      let r = app.cent(n)
      r.should.equal(str[i])
    })
  })

  it('Evalua numeros al azar de 3 cifras', () => {
    var num = [101, 250, 999, 371, 100]
    var str = ['ciento uno', 'docientos cincuenta', 'novecientos noventa y nueve', 'trecientos setenta y uno', 'cien']
    num.forEach((n,i) => {
      let r = app.cent(n)
      r.should.equal(str[i])
    })
  })

  it('Evaluando milesimas enteras', ( ) => {
    var num = [1000, 5000, 9000, 50000, 10000, 99000, 700000]
    var str = ['mil', 'cinco mil', 'nueve mil', 'cincuenta mil', 'diez mil', 'noventa y nueve mil', 'setecientos mil']
    num.forEach((n, i) => {
      let r = app.tho(n)
      r.should.equal(str[i])
    })
  })

  it('Evaluando milesimas random', ( ) => {
    var num = [1001, 5105, 9900, 50000, 10000, 99999, 571841]
    var str = ['mil uno', 'cinco mil ciento cinco', 'nueve mil novecientos', 'cincuenta mil', 'diez mil', 'noventa y nueve mil novecientos noventa y nueve', 'quinientos setenta y un mil ochocientos cuarenta y uno']
    num.forEach((n, i) => {
      let r = app.tho(n)
      r.should.equal(str[i])
    })
  })

})


describe('Identificar millones', () => {
  it('deberia retornar un millon', () =>{
    var num = 1000000
    var r = app.mil(num)
    r.should.equal('un millon')
  })
  it('deberia retornar cien millones', () =>{
    var num = 100000000
    var r = app.mil(num)
    r.should.equal('cien millones')
  })
  it('deberia retornar mil millones', () =>{
    var num = 1000000000
    var r = app.mil(num)
    r.should.equal('mil millones')
  })
  it('deberia retornar 600 mil millones', () =>{
    var num = 600000000000
    var r = app.mil(num)
    r.should.equal('seiscientos mil millones')
  })
  it('deberia returnar un numero al azar', ( ) => {
    var num = [600000000001, 5871980,201001001,1,100,1000]
    var str = ['seiscientos mil millones uno','cinco millones ochocientos setenta y un mil novecientos ochenta', 'docientos un millones mil uno','uno', 'cien', 'mil' ]
    num.forEach((n, i) => {
      let r = app.mil(n)
      // console.log(r)
      r.should.equal(str[i])
    })


  })

})
