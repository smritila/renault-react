import React from 'react';
import Slide from '../../../components/UI/FullPageSlider/Slide/Slide';
import FullPageSlider from '../../../components/UI/FullPageSlider/FullPageSlider';

class Captur extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    anchor: 'Overview',
                    tooltip: 'Overview',
                    image: 'captur/captur_1.jpg',
                    header: 'Captur',
                    description: 'Europe’s best-selling crossover in its segment'
                },
                {
                    anchor: 'Exterior',
                    tooltip: 'Exterior',
                    image: 'captur/captur_2.jpg',
                    header: 'Captur',
                    description: 'Europe’s best-selling crossover in its segment'
                },
                {
                    anchor: 'Interior',
                    tooltip: 'Interior',
                    image: 'captur/captur_3.jpg',
                    header: 'A Smart Interior',
                    description: 'Europe’s best-selling crossover in its segment'
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

export default Captur;