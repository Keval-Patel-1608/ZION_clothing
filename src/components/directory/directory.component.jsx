import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.scss';
import React from "react";
import Button from "../button/button.component";
import { Link } from "react-router-dom";
// import { Video } from "react-router-dom";
import backgroundVideo from "../../assets/sneakers-video.mp4";

const Directory = ({categories}) => { 
    
    return (

    <div className="container">
        <div class="row">
            <div class="row">
                <div class="column one">
                    <div class="title-name">
                        Introducing Your New Streetwear Wardrobe
                    </div>        
                    <Link className="shop-button" to="/shop">
                        <Button buttonType='inverted'>
                            Start Shopping
                        </Button>
                    </Link>
                </div>
                
                <div class="column two">
                    <Link to="/shop/sneakers">
                        <div className="directory-item-container">                    
                            {/* <div 
                                className="background-image" 
                                style={{
                                    backgroundImage: `url("https://i.ibb.co/0jqHpnp/sneakers.png")`,
                                }} 
                            /> */}

                            <video autoPlay loop controls muted id='video'>
                                <source src={backgroundVideo} type='video/mp4'/>
                            </video>

                            <div className="body">
                                <h2>Sneakers</h2>
                                <p>Shop Now</p>
                            </div>        
                        </div>
                    </Link>
                </div>
            </div>
                
            <div class="row">
                <div class="column three">
                    <Link to="/shop/hats">
                        <div className="directory-item-container">                    
                            <div 
                                className="background-image" 
                                style={{
                                    backgroundImage: `url("https://i.ibb.co/cvpntL1/hats.png")`,
                                }} 
                            />
                            <div className="body">
                                <h2>Hats</h2>
                                {/* <p>Shop Now</p> */}
                            </div>
                        </div>
                    </Link>
                </div>
                
                <div class="column four">
                    <Link to="/shop/jackets">                   
                        <div className="directory-item-container"> 
                            <div 
                                className="background-image" 
                                style={{
                                    backgroundImage: `url("https://i.ibb.co/px2tCc3/jackets.png")`,
                                }} 
                                />
                            <div className="body">
                                <h2>Jackets</h2>
                                {/* <p>Shop Now</p> */}
                            </div>
                        </div>
                    </Link>
                </div>
                
                <div class="column five">
                    <Link to="/shop/womens">                                   
                        <div className="directory-item-container">                    
                            <div 
                                className="background-image" 
                                style={{
                                    backgroundImage: `url("https://i.ibb.co/GCCdy8t/womens.png")`,
                                }} 
                                />
                            <div className="body">
                                <h2>Womens</h2>
                                {/* <p>Shop Now</p> */}
                            </div>
                        </div>
                    </Link>
                </div>
                
                <div class="column six">
                    <Link to="/shop/mens">                                                       
                        <div className="directory-item-container">                    
                            <div 
                                className="background-image" 
                                style={{
                                    backgroundImage: `url("https://i.ibb.co/R70vBrQ/men.png")`,
                                }} 
                            />
                            <div className="body">
                                <h2>Mens</h2>
                                {/* <p>Shop Now</p> */}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>                        

            <div className="row homepage-footer">
                © 2023. &nbsp; All rights reserved
            </div>
        </div>
    </div>


        // <div className="directory-container">
        //     {/* <div className="directory-banner" > */}
        //         <span className="banner-component">
        //             <div className="title-name">
        //                 Introducing Your New Streetwear Wardrobe                    
        //             </div>
        //             <Button buttonType='inverted' onClick={() => this.nextPath('/shop')}>Start Shopping</Button>
        //         </span>
        //         <span className="category-1">
        //             hello !
        //         </span>
        //     {/* </div> */}
        //     <div className="directory-components">
        //         {/* {categories.map(( category ) => (
        //             <DirectoryItem key={category.id} category={category} />
        //         ))} */}
        //     </div>
        // </div> 
    );
};

export default Directory;