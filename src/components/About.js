import React, { PureComponent } from 'react'
import axios from 'axios'

class About extends PureComponent {
    constructor(props) {
        super(props)

        this.state = { 
            about: []
        }
    }

    componentDidMount() { 
        this.fetchData()  
        
        window.initPageScripts()
    } 
    fetchData() { 
        axios.get(`${process.env.REACT_APP_API_BASE}/pages?_embed`)
            .then( response => {  
                response.data.map( (item, i) => {  
                    if( item.slug == 'about') { 
                        this.setState( { 
                            about: item,
                        })
                    }
                })
            })
            .catch( err => {
                console.error(err)
            }) 
    }

    

    render() { 
        // console.log(this.state.about._embedded['wp:featuredmedia'] )
        let thumb = this.state.about._embedded ? this.state.about._embedded['wp:featuredmedia'][0].source_url : ''; 
        console.log(thumb)
        return (
            <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
            <div className="container-fluid px-0">
                <div className="row d-flex">
                    <div className="col-md-6 d-flex">
                        <div className="img  d-flex align-self-stretch align-items-center js-fullheight" 
                            style={{
                                    backgroundImage: `url(${thumb})`
                                }}
                        > </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="text px-4 pt-5 pt-md-0 px-md-4 pr-md-5 ftco-animate">
                            <h2 className="mb-4">I'm <span>Andrea Moore</span> a Scotish Blogger &amp; Explorer</h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>
                    </div>
                </div>
            </div> 
            </section>          
        )
    }
}

export default About