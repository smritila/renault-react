import React from 'react';
import FooterItems from './FooterItems/FooterItems';

function footer() {
    return <footer className="footer_bottom ">
        <section class="footer_bottom_l">
            <p>
                TC Euro Cars Sdn. Bhd. (113605-D)
            </p>
        </section>
        <section class="footer_bottom_r">
           <FooterItems />
        </section>
    </footer>;
}

export default footer;