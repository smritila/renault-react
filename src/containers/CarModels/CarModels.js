import React from 'react';

import CarModel from './CarModel';

class CarModels extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            carModels: [
                {
                    id:1,
                    image:"test-drive/image_1.png",
                    title:'Captur',
                    description: 'Test drive at showroom'
                },
                {
                    id:2,
                    image:"test-drive/image_2.png",
                    title:'Captur',
                    description: 'Test drive through GoCar with 3 Hours FREE promo code'

                },
                {
                    id:3,
                    image:"test-drive/image_3.png",
                    title:'Koleos',
                    description: ''

                },
                {
                    id:4,
                    image:"test-drive/image_4.png",
                    title:'Megane R.S',
                    description: ''
                }
            ]
        };
    }

    render() {
        const carModelItems = this.state.carModels.map(model => {
            return <CarModel 
                key={ model.id } 
                title={ model.title } 
                description={ model.description } 
                image={ model.image }
            />;
        });
        return <div class="pt-70 sec_gray_bg">
            <div className="container">
                <div className="test_drive_container">
                    <h3 className="heading_01 mb-70">Choose car model</h3>
                </div>
                <div className="row row_with_small_padding">
                    { carModelItems }
                </div>
            </div>
        </div>;
    }

}

export default CarModels;