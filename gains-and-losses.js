let income = parseInt(prompt ("Qual é o valor de entrada?"));
let cost = parseInt(prompt ("Qual o valor de saída?"));
let taxPercent = parseInt(prompt ("Qual é a porcentagem de imposto?"));
let grossProfit = income - cost;
let tax = grossProfit*taxPercent/100;
let netIncome = grossProfit - tax;
document.write("O seu lucro é R$ "+ netIncome +".");