const hora = Number(prompt("digite quantas horas você trabalha por dia"))
const valor = Number(prompt("digite quanto você ganha por hora"))
const dias = Number(prompt("digite quantos dias você trabalha por mês"))

const salario = (hora*valor) * dias
const inss = (salario*0.075) 
const ir = (salario*0.015) 

console.log(`seu salário bruto é ${salario} reais`)
console.log(`seu salário líquido é ${salario - ir - inss} reais`)
