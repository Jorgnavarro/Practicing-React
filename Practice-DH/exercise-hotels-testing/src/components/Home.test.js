import {fireEvent, render, screen} from "@testing-library/react";
import {Home} from "./Home";




describe('Check home component', () => {

    const hotels =[
        {
            "id" : 1,
            "name": "Royal Rio Palace Hotel",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlWM3unUNFjswxj-5xSL7y9kny4hpZdXWPA&usqp=CAU",
            "daily_price": "R$500,00",
            "stars": 5,
            "city": "Rio de Janeiro",
            "description": "Localizado a 500 m da Praia de Copacabana, o Royal Rio Palace oferece piscina com vista panorâmica do mar na cobertura e café da manhã. O hotel está a 300 metros da Estação de Metrô Cardeal Arcoverde e a 10 km do Aeroporto Santos Dumont.",
            "wifi": true,
            "air-conditioned": true,
            "parking": true,
            "restaurant_service": true,
            "pool_service": true,
            "phone": "(22)98650000",
            "email": "htl@gmail.com"
        },
        {
            "id" : 2,
            "name": "Fasyano Palace Hotel",
            "img": "https://upload.wikimedia.org/wikipedia/commons/7/79/Ponta_Negra_Beach_Hotel.jpg",
            "daily_price": "R$300,00",
            "stars": 3,
            "city": "São Paulo",
            "description": "Localizado em são paulo, o Fasyano Palace oferece piscina com vista panorâmica do mar na cobertura e café da manhã. O hotel está a 300 metros da Estação de Metrô.",
            "wifi": true,
            "parking": true,
            "restaurant_service": false,
            "air-conditioned": false,
            "pool_service": true,
            "phone": "(22)98651111",
            "email": "htl1@gmail.com"
        },
        {
            "id" : 3,
            "name": "Premium Hotel",
            "img": "https://www.hotelpremiumcampinas.com.br/wp-content/uploads/2021/08/fachada-scaled.jpg",
            "daily_price": "R$400,00",
            "stars": 5,
            "city": "Rio de Janeiro",
            "description": "Localizado a 500 m da Praia de Copacabana, o Royal Rio Palace oferece piscina com vista panorâmica do mar na cobertura e café da manhã. O hotel está a 300 metros da Estação de Metrô Cardeal Arcoverde e a 10 km do Aeroporto Santos Dumont.",
            "wifi": true,
            "parking": false,
            "restaurant_service": true,
            "air-conditioned": true,
            "pool_service": true,
            "phone": "(22)98652222",
            "email": "htl2@gmail.com"
        }
    ]
    
    
    beforeEach(()=>{
            render(
                <Home hotels={hotels}/>
            )
    })

    test('show name on list', () => {
        expect(screen.queryByText(/Royal Rio Palace Hotel/i)).toBeDefined()
    })
    
});

