import React, {Component} from 'react';
class Nav extends React.Component{
    render(){
        return(
            <div>
              <div class="renault_nav">
                                <a href="" class="logo">
                                    <img src="assets/image/logo.png" alt=""/>
                                </a>

                 <div class="menu_desktop">
                     <ul>
                        <li>
                            <a href="captur.html">
                                Captur
                            </a>
                        </li>
                        <li>
                            <a href="koleos.html">
                                Koleos
                            </a>
                        </li>
                        <li>
                            <a href="megane.html">
                                Megane R.S.
                            </a>
                        </li>
                </ul>


                <ul>
                        <li>
                            <a href="test-drive.html">
                                Test drive
                            </a>
                        </li>
                    <li>
                            <a href="subscription.html">
                                Subscription
                            </a>
                    </li>
                    <li>
                            <a href="pre-owned.html">
                                Pre-owned
                            </a>
                    </li>
                   </ul>
             </div>
        </div>   
                 
  </div>
   );
   }
}
export default Nav