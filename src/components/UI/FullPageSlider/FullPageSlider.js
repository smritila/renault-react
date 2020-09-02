import React from 'react';
import fullpage from 'fullpage.js';

class FullPageSlider extends React.Component {

    constructor(props) {
        super(props);
        this.sliderRef = React.createRef();
        this.fullPage = null;
    }

    componentWillUnmount() {
        this.fullPage.destroy('all');
    }

    componentDidMount() {
        const sliderDomNode = this.sliderRef.current;
        this.fullPage = new fullpage(sliderDomNode, {
            anchors: ['Overview', 'PriceAndSpecifications'],
            navigationTooltips: ['Overview', 'Price & Specifications'],
            showActiveTooltip: true,
            autoScrolling:true,
            scrollHorizontally: false,
            fitToSection:true,
            navigation: true,
            navigationPosition: 'left',
            responsiveHeight: true,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            scrollOverflow: true,
            slideSelector:'slide'
        })
    }

    render() {
        return <div className="capture_slider" ref={this.sliderRef}>
            <div className="hero_slide_single section p-0" data-anchor="Overview">
                <div style={{ position: 'relative' }} className="reset_slide_in_scroll">
                    <img 
                        src={ `${process.env.PUBLIC_URL}/assets/image/captur/captur_1.jpg` } 
                        alt="" 
                        className="hero_slide_single_img" />
                    <div className="hero_slide_single_dtls">
                        <h1 className="text-white">
                            Captur
                        </h1>
                        <p className="mb-30 text-white">
                            Europe’s best-selling crossover in its segment
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero_slide_single section p-0" data-anchor="PriceAndSpecifications" >
                <div className="scroll_main_top_banner_hide reset_slide_in_scroll">
                    <img src={`${process.env.PUBLIC_URL}/assets/image/captur/captur_6.jpg`} alt="" className="hero_slide_single_img" />
                    <div className="hero_slide_single_dtls">
                        <h1 className="text-white">
                            Captur
                        </h1>

                        <p className="mb-30 text-white">
                            Europe’s best-selling crossover in its segment
                        </p>
                        


                        <div className="hero_slide_single_dtls_bottom">
                            <div className="dtls_list price_spec_dtls">
                                <h2 className="text-center">
                                    Price & Specifications
                                </h2>
                            </div>

                            <div className="text-center center_btn">
                                <a href="javascript:;" className="button btn_white_border btn_rounded btn_more learn_more_btn" data-target="#price_spec">
                                    More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }

}

export default FullPageSlider;