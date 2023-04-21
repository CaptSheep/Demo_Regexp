import * as readlineSync from 'readline-sync'
let inputString = readlineSync.question('Nhap chuoi can kiem tra : ')
let inputPhone = readlineSync.question('Nhap SDT can kiem tra : ')
let patternEmail = /^[a-z]+@+[a-z]+.[a-z]{3}$/
let patternPhone = /\(\+[0-9]{2}\)[0-9]{10}$/
if(patternEmail.test(inputString)){
    console.log('Email hop le')
}
else {
    console.log('Email khong hop le')
}
if(patternPhone.test(inputPhone)){
    console.log('SDT hop le')
}
else {
    console.log('SDT khong hop le')
}
