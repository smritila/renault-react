import React, { Fragment } from 'react';
function AboutRenault() {
    return (
        <div class="pt-70">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="product_box about_product_box">
                        <div className="product_box_img">
                            <img src={`${process.env.PUBLIC_URL}/assets/image/captur/product/product_box_img_1.png`} alt="" />
                        </div>
                        <div className="product_box_details">
                            <h3>
                                About us
                            </h3>
                            <p>
                                Established in 2004, TC Euro Cars Sdn Bhd - is part of the Tan Chong Group. We are the official distributor of Renault vehicles in Malaysia, including the assembly, distribution and after-sales support.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="product_box about_product_box">
                        <div className="product_box_img">
                            <img src={`${process.env.PUBLIC_URL}/assets/image/captur/product/product_box_img_2.png`} alt="" />
                        </div>
                        <div className="product_box_details">
                            <h3>
                                Our network
                            </h3>
                            <p>
                                We have 5 Renault showrooms in Central region, Penang and Johor Bharu, and a wide network of 20 authorized Service Centres nationwide.
                            </p>

                            <a href="" type="Submit" className="button yellow">
                                Locate Us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="product_box about_product_box">
                        <div className="product_box_img">
                            <img src={`${process.env.PUBLIC_URL}/assets/image/captur/product/product_box_img_3.png`} alt="" />
                        </div>
                        <div className="product_box_details">
                            <h3>
                                Join our team
                            </h3>
                            <p>
                                We are constantly looking for talented and passionate individuals to join our team. If you have a passion for vehicles, drop your resume with us.
                            </p>

                            <a href="" type="Submit" className="button yellow">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            <div className="container">
                <div class="interior_box about_banner_box mb-100">
                    <img src={`${process.env.PUBLIC_URL}/assets/image/about/about_banner.png`} alt="" />
                    <div class="interior_box_text">
                        <div>
                            <h1>
                                <span class="font-weight-bold" style={{color: "#fece2b"}}>Motosports</span>
                                <br />
                                <span class="font-weight-light">Innovation, our passion</span>
                            </h1>

                            <a href="" type="Submit" class="button yellow">
                                More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
 }   
export default AboutRenault;