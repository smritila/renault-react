import React from 'react';
import Slide from '../../../components/UI/FullPageSlider/Slide/Slide';
import FullPageSlider from '../../../components/UI/FullPageSlider/FullPageSlider';

class Megane extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    anchor: 'Overview',
                    tooltip: 'Overview',
                    image: 'megane/megane_1.png',
                    header: ' Megane R.S.',
                    description: 'Conquer Every Corner'
                },
                {
                    anchor: 'Exterior',
                    tooltip: 'Exterior',
                    image:  'megane/megane_2.png',
                    header: 'Koleos',
                    description: 'Conquer Every Corner'
                },
                {
                    anchor: 'Interior',
                    tooltip: 'Interior',
                    image: 'megane/megane_3.png',
                    header: 'Megane R.S.' ,
                    description: 'Conquer Every Corner'
                    
                },

                {
                    anchor: 'Technology',
                    tooltip: 'Technology',
                    image: 'megane/megane_4.png',
                    header: 'Technology',
                    description: 'Conquer Every Corner'
                    
                },

                {
                    anchor: 'Safety',
                    tooltip: 'Safety',
                    image: 'megane/megane_5.png',
                    header: 'Safety',
                    description: 'Conquer Every Corner'
                    

                },    

                {
                    anchor: 'PriceAndSpecifications',
                    tooltip: 'PriceAndSpecifications',
                    image: 'megane/megane_3.png',
                    header: 'Megane R.S.',
                    description: 'Conquer Every Corner'
                },

                {
                    anchor: 'Review',
                    tooltip: 'Review',
                    image: 'megane/megane_4.png',
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

export default Megane;