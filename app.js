var app = function (n){
  console.log(this.mil(n))
}

app.countDigits = function (n) {
  if (n === 0) {
    return 1
  }
  return Math.floor(Math.log10(n) + 1)
}

app.unit = function (n) {
  var numeros = ['cero','uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']
  return numeros[n]
}

app.dec = function (n) {
  var self = this
  var after30 = function (str, num) {
    if (num > 0) {
      var res = `${str} y ${self.unit(num)}`
      return res
    } else {
      return str
    }
  }
  var dec = parseInt(n / 10)
  var r = n % 10
  var numeros = []
  switch (dec) {
    case 0:
      return this.unit(n)
    case 1:
      numeros = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciseis', 'diecisiete', 'dieciocho', 'diecinueve']
      return numeros[r]
    case 2:
      numeros = ['veinte', 'veintiuno', 'veintidos', 'veintitres', 'veinticuatro', 'veinticinco', 'veintiseis', 'veintisiete', 'veintiocho', 'veintinueve']
      return numeros[r]
    case 3:
      return after30('treinta', r)
    case 4:
      return after30('cuarenta', r)
    case 5:
      return after30('cincuenta', r)
    case 6:
      return after30('sesenta', r)
    case 7:
      return after30('setenta', r)
    case 8:
      return after30('ochenta', r)
    case 9:
      return after30('noventa', r)
  }
}


app.cent = function (n) {
  var self = this
  var format = function (str,num) {
    if(num > 0){
      if (str === 'cien')
        str+='to'
      return `${str} ${self.dec(num)}`
    }
    else {
      return str
    }
  }
  var h = parseInt(n / 100)
  var r = n % 100
  var hstr = ['cien', 'docientos', 'trecientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']
  if(h === 0) // si no es mayor a cien
    return this.dec(n)
  return format(hstr[h - 1], r)
}

app.tho = function (n) {
  var th = parseInt(n / 1000)
  var r = n % 1000
  var res = 0
  if(th === 0)
    return this.cent(n)

  if(th === 1){
    res =  'mil'
  } else {
    var res = `${this.cent(th)} mil`
  }

  if(res.indexOf('uno mil') > -1)
    res = res.replace('uno mil', 'un mil')

  if (r > 0) {
    return `${res} ${this.cent(r)}`
  } else {
    return res
  }
}

app.mil = function (n) {
  var ml = parseInt(n / 1000000)
  var r = n % 1000000
  var res = 0
  // console.log(ml, r)
  if(ml===0)
    return this.tho(n)
  if(ml === 1){
    res =  'un millon'
  } else {
    // console.log(`${this.tho(ml)}`,ml)
    var res = `${this.tho(ml)} millones`
  }
  if(res.indexOf('uno millones') > -1)
    res = res.replace('uno millones', 'un millones')

  // console.log(res)
  if (r > 0) {
    return `${res} ${this.tho(r)}`
  } else {
    return res
  }
}

console.log(process.argv[2] ? app.mil(process.argv[2]) : app.mil(0))

module.exports = app
