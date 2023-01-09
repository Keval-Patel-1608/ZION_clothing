import '../directory-item/directory-item.styles.scss';
import './directory.styles.scss';
import React from "react";
import Button from "../button/button.component";
import { Link } from "react-router-dom";
import backgroundVideo from "../../assets/sneakers-video.mp4";

const Directory = ({categories, product }) => { 
    
    return (

    <div className="container">
        <div className="row">
            <div className="row">

                <div className="column one">
                    <div className="title-name">
                        Introducing Your New Streetwear Wardrobe
                    </div>        
                    <Link className="shop-button" to="/shop">
                        <Button buttonType='inverted'>
                            Start Shopping
                        </Button>
                    </Link>
                </div>
                
                <div className="column two">
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
                
            <div className="row">

                <div className="column three">
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
                            </div>
                        </div>
                    </Link>
                </div>
                
                <div className="column four">
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
                            </div>
                        </div>
                    </Link>
                </div>
                
                <div className="column five">
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
                            </div>
                        </div>
                    </Link>
                </div>
                
                <div className="column six">
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
                            </div>
                        </div>
                    </Link>
                </div>

            </div>                        
            
            <div className="row heading-name">
                <span>LATEST ARRIVALS</span>
            </div>

            <div className='category-preview-container'>
                <div className='preview'>
                    <div className='product-card-container container-align'>
                        <img src="https://i.ibb.co/bLB646Z/red-beanie.png" alt="Red Beanie" />
                        <div className='footer'>
                            <span className='name'>Red Beanie</span>
                            <span className='price'>$ 18</span>
                        </div>
                        <Link className="redirect-button" to="/shop/hats">
                            <Button buttonType='inverted'>
                                More Like This
                            </Button>
                        </Link>
                    </div>
                    <div className='product-card-container'>
                        <img src="https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png" alt="Red Dot Dress" />
                        <div className='footer'>
                            <span className='name'>Red Dot Dress</span>
                            <span className='price'>$ 80</span>
                        </div>
                        <Link className="redirect-button" to="/shop/womens">
                            <Button buttonType='inverted'>
                                More Like This
                            </Button>
                        </Link>
                    </div>
                    <div className='product-card-container'>
                        <img src="https://i.ibb.co/RvwnBL8/pink-shirt.png" alt="Men Pink T-shirt" />
                        <div className='footer'>
                            <span className='name'>Pink T-shirt</span>
                            <span className='price'>$ 25</span>
                        </div>
                        <Link className="redirect-button" to="/shop/mens">
                            <Button buttonType='inverted'>
                                More Like This
                            </Button>
                        </Link>
                    </div>
                    <div className='product-card-container'>
                        <img src="https://i.ibb.co/QcvzydB/nikes-red.png" alt="Nike Red shoes" />
                        <div className='footer'>
                            <span className='name'>Nike Red High Tops</span>
                            <span className='price'>$ 160</span>
                        </div>
                        <Link className="redirect-button" to="/shop/sneakers">
                            <Button buttonType='inverted'>
                                    More Like This
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row homepage-footer">
                © 2023. &nbsp; All rights reserved
            </div>
        </div>
    </div>
    );    
};

export default Directory;