import React from 'react';
import KeySpecification from '../components/Car/Specification/KeySpecification';
import DetailSpecification from '../components/Car/Specification/DetailSpecification';

function carSpecification() {
        const KeySpecification = [
            {
                id: 1,
                header: 'Engine',
                description: '1.2 L turbocharged'
            },
            {
                id: 2,
                header: 'Gearbox',
                description: '6-speed Efficient Dual Clutch (EDC) automatic'
            },
            {
                id: 3,
                header: 'Maximum torque',
                description: '205 Nm @ 2,000 rpm'
            {
                id: 4,
                header: 'Maximum power',
                description: '120 PS @ 5,000 rpm'
            },
            {
                id: 5,
                header: 'Seating',
                description: '5 adults'
            },
            {
                id: 6,
                header: 'Fuel efficiency',
                description: '5.9 L/100km*'
            },
            {
                id: 7,
                header: 'Stop-start function',
                description: 'Yes'
            {
                id: 8,
                header: 'Displays',
                description: '7” touchscreen with online & offiline navigation'
            },
            {
                id: 3,
                header: 'Hands-free Power Tailgate',
                description: 'We are constantly looking for talented and passionate individuals to join our team. If you have a passion for vehicles, drop your resume with us.'
            },
            {
                id: 3,
                header: 'Hands-free Power Tailgate',
                description: 'We are constantly looking for talented and passionate individuals to join our team. If you have a passion for vehicles, drop your resume with us.'
            },
            {
                id: 3,
                header: 'Hands-free Power Tailgate',
                description: 'We are constantly looking for talented and passionate individuals to join our team. If you have a passion for vehicles, drop your resume with us.'
            }
        ];
    
       const cardItemsElement = cardItems.map(item => {
            return <Card 
                key={ item.id} 
                image={ item.image } 
                header={item.header} 
                description={item.description}
            />;
       });
    








        //  return (
       
        //     <div classNameName="price_spec_Page" id="spec_dtls_page">
        //     {/* <!-- ============================== BANNER ============================== --> */}
    
        //     <div className="banner banner_style_2 mb-70" style="background: `url(${process.env.PUBLIC_URL/assets/image/captur/capture_spec_banner.jpg`)">
        //         <div className="banner_into">
        //             <h1 className="mb-15">
        //                 Captur
        //             </h1>
        //             <p className="text-white">
        //                 Europe’s best-selling crossover in its segment
        //             </p>
    
    
    
        //             <div className="banner_bottom with_button">
        //                 <h1>
        //                     Price and specifications
        //                 </h1>
    
        //                 <div>
        //                     <a href="" className="button yellow">
        //                         Test Drive
        //                     </a>
    
        //                     <a href="" className="button yellow">
        //                         Subscribe
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
    
        //    {/*  <!-- ============================== BANNER ============================== --> */}
    
    
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="specImgLeft">
                            <div className="specImgLeft_dtls2">
                                <div className="step_3">
                                    <div className="step_2">
                                        <div className="step_1">
                                            <div className="specImgLeft_dtls1">
                                                <img src={`${process.env.PUBLIC_URL}assets/image/captur/price_spec_car.png`} alt="" />
                                            </div>
                                            <div className="step_text right_1_text">
                                                {/* <!-- */} <span>4</span>
                                                <span>,</span>
                                                <span>1</span>
                                                <span>2</span>
                                                <span>2</span>
                                                <span>m</span>
                                                <span>m</span>{/*  --> */}
                                                4,122mm
                                            </div>
                                        </div>
                                        <div className="step_text bottom_1_text">
                                            4,122mm
                                        </div>
                                    </div>
                                    <div className="step_text right_2_text">
                                        Wheelbase <br /> 2,606mm
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-6">
                        <div className="specdetailRight">
                            <div className="space_adjust">
                                <h1 className="dtls_spec_heading">
                                    Key Specifications
                                </h1>
    
                                <table className="spec_table">
                                    <tr>
                                        <td>
                                            <h3>Engine</h3>
                                            <p>
                                                1.2 L turbocharged
                                            </p>
                                        </td>
                                        <td>
                                            <h3>Gearbox</h3>
                                            <p>
                                                6-speed Efficient Dual Clutch (EDC) automatic
                                            </p>
                                        </td>
                                    </tr>
    
                                    <tr>
                                        <td>
                                            <h3>Maximum torque</h3>
                                            <p>
                                                205 Nm @ 2,000 rpm
                                            </p>
                                        </td>
                                        <td>
                                            <h3>Maximum power</h3>
                                            <p>
                                                120 PS @ 5,000 rpm
                                            </p>
                                        </td>
                                    </tr>
    
                                    <tr>
                                        <td>
                                            <h3>Seating</h3>
                                            <p>
                                                5 adults
                                            </p>
                                        </td>
                                        <td>
                                            <h3>Fuel efficiency</h3>
                                            <p>5.9 L/100km*</p>
                                        </td>
                                    </tr>
    
                                    <tr>
                                        <td>
                                            <h3>Stop-start function</h3>
                                            <p>Yes</p>
                                        </td>
                                        <td>
                                            <h3>Displays</h3>
                                            <p>7” touchscreen with online & offiline navigation</p>
                                        </td>
                                    </tr>
    
                                    <tr>
                                        <td>
                                            <h3>Service</h3>
                                            <p>
                                                5 years services (parts & labour)
                                            </p>
                                        </td>
                                        <td>
                                            <h3>
                                                Storage
                                            </h3>
                                            <p>
                                                377L / 455L of boot space
                                            </p>
                                        </td>
                                    </tr>
    
                                    <tr>
                                        <td>
                                            <h3>Warranty</h3>
                                            <p>5 years manufacturer warranty</p>
                                        </td>
                                        <td>
    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td_small_font">
                                            <p style="font-size: 1.9vh;">
                                                * New European Driving Cycle (NEDS). Acutal fuel consumption may vary
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div className="space_adjust">
                                <h1 className="dtls_spec_heading">
                                    Key Specifications
                                </h1>
                                <table className="spec_table w-100 price_list_table last_bottom_space_adjst">
                                    <tr>
                                        <td>
                                            <h3>Captur: RM 107,695</h3>
                                        </td>
                                        <td>
                                            <a href="" className="button black_border">
                                                Price List
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h3>Captur +: RM 107,695</h3>
                                            <p>
                                                * Pen. M’sia Selling price, exdude fees and insurance
                                            </p>
                                        </td>
                                        <td>
                                            <a href="" className="button black_border">
                                                Price List
                                            </a>
                                        </td>
                                    </tr>
    
                                    <tr>
                                        <td>
                                            <h3>Download our brochure</h3>
                                        </td>
                                        <td>
                                            <a href="" className="button black_border">
                                                Download
                                            </a>
                                        </td>
                                    </tr>
                                </table>
    
                                <div className="text-right btn_more_yellow_top_space_adjust">
                                    <a href="" className="button btn_white_border btn_rounded btn_more_yellow btn_height_same_as_chat_btn">
                                        More
                                    </a>
                                </div>
                            </div>
                        </div>
    
    
    
                        <div className="specdetailRight">
                            <h1 className="dtls_spec_heading">
                                Detailed Specifications
                            </h1>
    
                            <h3 className="sub_heading">
                                Connectivity
                            </h3>
                            <ul>
                                <li>
                                    7” touchscreen for radio, online & offline navigation, media playbackand internet playback
                                </li>
                                <li>
                                    Hands-free Bluetooth®for telephony and audio streaming
                                </li>
                                <li>
                                    USB and AUX connectivity
                                </li>
                                <li>
                                    12V sockets-AM/FM and MP3 playback
                                </li>
                            </ul>
    
    
                            <h3 className="sub_heading">
                                Driving
                            </h3>
                            <ul>
                                <li>
                                    Cruise control & speed limiter
                                </li>
                                <li>
                                    Rear parking sensors with camera
                                </li>
                                <li>
                                    ECO mode
                                </li>
                                <li>
                                    Height and reach adjustable steering wheel-Combination leather seats
                                </li>
                                <li>
                                    Stop-start function
                                </li>
                            </ul>
    
    
    
                            <h3 className="sub_heading">
                                Equipment
                            </h3>
                            <ul>
                                <li>
                                    C-shaped Daytime Running Lights-Automatic windscreen wipes with rainsensors
                                </li>
                                <li>
                                    Automatic headlights-LED front fog lights
                                </li>
                                <li>
                                    Hands-free power tailgate*
                                </li>
                                <li>
                                    Armrest with storage*
                                </li>
                                <li>
                                    Trunk Entry Guard*
                                </li>
                                <li>
                                    Trunk Tray*
                                </li>
                                <li>
                                    Kicking plates*-Regulated air conditioning-Hands-free key card for engine start and stop
                                </li>
                                <li>
                                    Automatic ‘walk-away’ door locking
                                </li>
                            </ul>
    
    
    
                            <h3 className="sub_heading">
                                Storage
                            </h3>
                            <ul>
                                <li>
                                    Passenger glovebox compartment
                                </li>
                                <li>
                                    Top of dashboard compartment
                                </li>
                                <li>
                                    Multi-position boot floor
                                </li>
                                <li>
                                    Front door storage compartment (1.5L)
                                </li>
                                <li>
                                    Rear door storage compartment (0.5L)
                                </li>
                            </ul>
    
    
                            <h3 className="sub_heading">
                                Safety
                            </h3>
                            <ul>
                                <li>
                                    Driver and front passenger airbags-Driver and front passenger head-and-thorax-level side airbags
                                </li>
                                <li>
                                    Digital Video Recorder (DVR)*
                                </li>
                                <li>
                                    Electronic Stability Control (ESC) + Anti-Slip Regulation (ASR)
                                </li>
                                <li>
                                    Anti-Lock Braking System (ABS) + Emergency Brake Assist (EBA)
                                </li>
                                <li>
                                    Electronic Brake Distribution (EBD)
                                </li>
                                <li>
                                    Hill Start Assist (HAS)
                                </li>
                                <li>
                                    Height adjustable front seatbelts with load limiter
                                </li>
                                <li>
                                    SOFIX and outer rear seats and front passenger seat
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="text-left more_btn_space_adjust_2">
                <a href="" className="button btn_white_border btn_rounded btn_more_yellow btn_height_same_as_chat_btn">
                    More
                </a>
            </div>
        </div>



    );

}

export default carSpecification;