import React from 'react'
import '../css/home.css'
// Cards
import HomeMatches from './Cards/HomeMatches'
import HomePlayers from './Cards/HomePlayers'
import HomeNews from './Cards/HomeNews'
// Api
import PlayerApi from '../Components/api/player'
import LogosApi from './api/Social_logos/LogosApi'
import HomeNewsApi from './api/homeNewsApi'
// Images
import One from '../images/cricket/One.jpeg'
import T20Rank from '../images/cricket/T20Rank.png'

const Home = () => {
    return (
        <>
            <form action="https://ptv.com.pk/livestreaming" >
                <button type='submit' className='btn btn-success floating' formTarget='_blank'>Live Matches</button>
            </form>
            {/* Top section */}
            <section className='top_section'>
                <div className="row">
                    <div className="col-lg-3 col-sm-12">
                        <a href="https://www.icc-cricket.com/rankings/mens/player-rankings/t20i/batting"><img src={T20Rank} alt="" /></a>
                    </div>
                    <div className="col-lg-5 col-sm-12">

                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={One} alt="..."></img>
                                </div>
                                <div className="carousel-item">
                                    <img src={One} alt="..."></img>
                                </div>
                                <div className="carousel-item">
                                    <img src={One} alt="..."></img>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        {/* <img src={One} alt="" /> */}
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <h5>Urgent</h5>
                    </div>
                </div>
            </section>

            {/* Latest Matches section */}
            <section className='matches same'>
                <h2>Latest Matches</h2>
                <div className="row">
                    <HomeMatches />

                </div>
            </section>

            {/* Players section */}
            <section className='players same'>
                <h2>Players</h2>
                <div className="row">
                    {
                        PlayerApi.map((curVal, index) => {
                            return <HomePlayers key={index} name={curVal.name} image={curVal.image} bio={curVal.bio} spec={curVal.spec} link={curVal.link} />
                        })
                    }
                </div>
            </section>


            {/* Latest News */}
            <section className=' same'>
                <h2>Latest News</h2>
                <div className="row">
                    <HomeNews image={HomeNewsApi[0].image} heading={HomeNewsApi[0].heading} />
                </div>
            </section>

            {/* Social media  */}
            <section className='social same' id='contacUs'>
                <h2>Social media</h2>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="platform">
                            <div className="logo">
                                <img src={LogosApi[0].facebook} alt="" />
                            </div>
                            {/* <p>Instagram</p> */}
                            <a href="https://twitter.com/?lang=en">Follow</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="platform">
                            <div className="logo">
                                <img src={LogosApi[0].twitter} alt="" />
                            </div>
                            {/* <p>Instagram</p> */}
                            <a href="https://twitter.com/?lang=en">Follow</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="platform">
                            <div className="logo">
                                <img src={LogosApi[0].youtube} alt="" />
                            </div>
                            {/* <p>Instagram</p> */}
                            <a href="https://twitter.com/?lang=en">Follow</a>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="platform">
                            <div className="logo">
                                <img src={LogosApi[0].gmail} alt="" />
                            </div>
                            {/* <p>Instagram</p> */}
                            <a href="https://twitter.com/?lang=en">Follow</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="platform">
                            <div className="logo">
                                <img src={LogosApi[0].whatsapp} alt="" />
                            </div>
                            {/* <p>Instagram</p> */}
                            <a href="https://twitter.com/?lang=en">Follow</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="platform">
                            <div className="logo">
                                <img src={LogosApi[0].instagram} alt="" />
                            </div>
                            {/* <p>Instagram</p> */}
                            <a href="https://twitter.com/?lang=en">Follow</a>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Home
