import React from 'react';
import Slide from '../../../components/UI/FullPageSlider/Slide/Slide';
import FullPageSlider from '../../../components/UI/FullPageSlider/FullPageSlider';

class Koleos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    anchor: 'Overview',
                    tooltip: 'Overview',
                    image: 'koleos/koleos_1.png',
                    header: ' Koleos',
                    description: 'Elevate your luxury'
                },
                {
                    anchor: 'Exterior',
                    tooltip: 'Exterior',
                    image: 'koleos/koleos_2.png',
                    header: 'Koleos',
                    description: ' Elevate your luxury'
                },
                {
                    anchor: 'Interior',
                    tooltip: 'Interior',
                    image: 'koleos/koleos_3.png',
                    header: 'Koleos',
                    description: 'Elevate your luxury'
                },

                {
                    anchor: 'Technology',
                    tooltip: 'Technology',
                    image: 'koleos/koleos_4.png',
                    header: 'Koleos',
                    description: 'Elevate your luxury'
                },

                {
                    anchor: 'Safety',
                    tooltip: 'Safety',
                    image: 'koleos/koleos_5.png',
                    header: 'Koleos',
                    description: 'Elevate your luxury'

                },    

                {
                    anchor: 'PriceAndSpecifications',
                    tooltip: 'PriceAndSpecifications',
                    image: 'captur/captur_6.jpg',
                    header: 'Captur',
                    description: 'Europe’s best-selling crossover in its segment'
                },

                {
                    anchor: 'Review',
                    tooltip: 'Review',
                    image: 'hero_2.jpg',
                    header: 'Test drive on your terms',
                    description: ' Enjoy 3-hour pressure test drive'
                },

                
            ]
        }
    }

    render() {

        const slidesEl =  this.state.slides.map((slide, index) => {
            return <Slide 
                key={index} 
                anchor={slide.anchor}
                image={slide.image}
                header={slide.header}
                description={slide.description} 
            />;
        });
        const anchors = this.state.slides.map(slide => slide.anchor);
        const tooltips = this.state.slides.map(slide => slide.tooltip);

        return <div className="hero">
            <div className="wrapper">
                <FullPageSlider anchors={anchors} tooltips={tooltips}>
                    { slidesEl }
                </FullPageSlider>
            </div>
        </div>;
    }
}

export default Koleos;