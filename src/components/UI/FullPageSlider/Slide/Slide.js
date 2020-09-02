import React from 'react';

import PropTypes from 'prop-Types';

function slide ()  {
    return <div className="hero_slide_single section p-0" data-anchor="Overview">
        <div style={{position: 'relative'}} className="reset_slide_in_scroll">
            <img src={`${process.env.PUBLIC_URL}/assets/image/${props.image}`}  alt="" className="hero_slide_single_img" />
            <div className="hero_slide_single_dtls">
                <h1 className="text-white">
                    {props.header}
                </h1>

                <p className="mb-30 text-white">
                    {props.description}
                </p>
            </div>
        </div> 
    </div>;
}

slide.propTypes = {
    image:PropTypes.string,
    header: PropTypes.string,
    description:PropTypes.string

}

export default slide;