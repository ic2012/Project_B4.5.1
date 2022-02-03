console.log('Выборка из массива');

var orders = [{
    "name" : "Карандаши", 
    "description" : "Карандаши цветные", 
    "status": "shipped"
}, 
{
    "name": "Карандаши", 
    "description" : "Карандаши стандартные", 
    "status": "shipped"
}, 
{
    "name": "Фломастеры", 
    "description" : "64 шт разноцветные", 
    "status": "delivered"
},
{
    "name": "Резинка", 
    "description" : "Стиральная качественная", 
    "status": "delivered"
}];
 
var orderInfo = orders.map( function(order) {
 if( order.status === "delivered"){
     var info = { 
         "orderName": order.name,
         "orderDescription": order.description
        }
     return info;
    }
});

console.log(orderInfo);
