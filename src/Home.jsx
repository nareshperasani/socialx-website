import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://m.media-amazon.com/images/I/619QIdx19yL._SX3000_.jpg" alt="" />
                <div className="home_data">
                    <div className="home_row">
                        <Product title="Indian Economy - Principles, Policies, and Progress | For UPSC & State Civil Services Examinations | Second Edition | By Pearson" price={19.99} image={"https://images-eu.ssl-images-amazon.com/images/I/51YvjVIU6PL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"} rating={5} />
                        <Product title={"Indian Polity | For UPSC Civil Services Exam | First Edition | By Pearson Paperback – 10 April 2021"} price={25.59} image={"https://images-na.ssl-images-amazon.com/images/I/51xXQ9FB91L._SX392_BO1,204,203,200_.jpg"} rating={4} />
                    </div>
                    <div className="home_row">
                        <Product title={"Echo Studio - Smart speaker with high-fidelity audio, Dolby Atmos and Alexa (Black)"} price={99} image={"https://m.media-amazon.com/images/I/61Bq3LQhDSL._SL1000_.jpg"} rating={3} />
                        <Product title={"Sennheiser Consumer Audio Momentum Truly Wireless Bluetooth In Ear Earbuds with Mic"} price={122} image={"https://m.media-amazon.com/images/I/81FaX2+wu2L._SL1500_.jpg"} rating={4} />
                        <Product title={"PS4 1TB slim/Horizon Zero Dawn CE/GT Sport II/Ratchet &Clank/PS+3M"} price={111} image={"https://m.media-amazon.com/images/I/51Ki4WQUHjS.jpg"} rating={4} />
                    </div>
                <div className="home_row">
                    <Product title={"Apple iPhone 11 (64GB) - Black"} price={599} image={"https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"} rating={2} />
                    <Product title={"Apple iPhone 13 Pro Max (128GB) - Sierra Blue"} price={799} image={"https://m.media-amazon.com/images/I/61i8Vjb17SL._SL1500_.jpg"} rating={5} />
                    <Product title={"OnePlus 9 5G (Arctic Sky,12GB RAM, 256GB Storage)"} price={499} image={"https://m.media-amazon.com/images/I/61fy+u9uqPL._SL1500_.jpg"} rating={4} />
                    <Product title={"Realme GT 5G Master Edition (Voyager Grey, 8GB RAM)"} price={399} image={"https://m.media-amazon.com/images/I/31VEHnJFAIL.jpg"} rating={3} />
                </div>
                <div className="home_row">
                    <Product title={"Samsung Galaxy Z Flip3 5G (Lavender, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"} price={899} image={"https://m.media-amazon.com/images/I/719OjGWiuWL._SL1500_.jpg"} rating={3} />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
