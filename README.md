# CH-eCommerceBE
BE plataforma de eCommerce de CoderHouse para el curso de backend

1° entrega

POSTMAN EXAMPLES
##cart
http://localhost:8080/api/carrito
{
    "productos": [
        {
            "nombre": "Prueba",
            "descripcion": "DescripcionPrueba",
            "codigo": "123-asdsa",
            "fotoUrl": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
            "precio": 123.45,
            "stock": 123,
            "id": 1,
            "timestamp": 1646624063574
        }
    ]
}

##product
http://localhost:8080/api/productos
{
    "nombre": "Prueba",
    "descripcion": "DescripcionPrueba",
    "codigo": "123-asdsa",
    "fotoUrl": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    "precio": 123.45,
    "stock": 123
}
