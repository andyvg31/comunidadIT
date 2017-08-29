let gastosViaje=[10000, 3000, 2000];
gastoTotal= gastosViaje.reduce(function(total,gasto){
    return total+gasto;
})
console.log(gastoTotal);