import React, { PureComponent } from 'react'
import SearchForm from './SearchForm'

class Widgets extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            searchQuery: this.props.searchQuery
        }
    }
    componentDidUpdate() { 
        this.setState({ 
            searchQuery: this.props.searchQuery
        })
    }
    render() {
        return (
            <div className="col-xl-4 sidebar ftco-animate bg-light pt-5">
				<div className="sidebar-box pt-md-4">

                    <SearchForm searchQuery={this.state.searchQuery}/>
                    </div>
                    <div className="sidebar-box ftco-animate">
                        <h3 className="sidebar-heading">Categories</h3>
                    <ul className="categories">
                        <li><a href="#">Fashion <span>(6)</span></a></li>
                        <li><a href="#">Technology <span>(8)</span></a></li>
                        <li><a href="#">Travel <span>(2)</span></a></li>
                        <li><a href="#">Food <span>(2)</span></a></li>
                        <li><a href="#">Photography <span>(7)</span></a></li>
                    </ul>
                    </div>

                    <div className="sidebar-box ftco-animate">
                    <h3 className="sidebar-heading">Popular Articles</h3>
                    <div className="block-21 mb-4 d-flex">
                        <a className="blog-img mr-4" style={{
                                    backgroundImage: 'url(images/image_1.jpg)'
                                }}></a>
                        <div className="text">
                        <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control</a></h3>
                        <div className="meta">
                            <div><a href="#"><span className="icon-calendar"></span> June 28, 2019</a></div>
                            <div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                        </div>
                        </div>
                    </div>
                    <div className="block-21 mb-4 d-flex">
                        <a className="blog-img mr-4" style={{
                                    backgroundImage: 'url(images/image_2.jpg)'
                                }}></a>
                        <div className="text">
                        <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control</a></h3>
                        <div className="meta">
                            <div><a href="#"><span className="icon-calendar"></span> June 28, 2019</a></div>
                            <div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                        </div>
                        </div>
                    </div>
                    <div className="block-21 mb-4 d-flex">
                        <a className="blog-img mr-4" style={{
                                    backgroundImage: 'url(images/image_3.jpg)'
                                }}></a>
                        <div className="text">
                        <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control</a></h3>
                        <div className="meta">
                            <div><a href="#"><span className="icon-calendar"></span> June 28, 2019</a></div>
                            <div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="sidebar-box ftco-animate">
                    <h3 className="sidebar-heading">Tag Cloud</h3>
                    <ul className="tagcloud">
                        <a href="#" className="tag-cloud-link">animals</a>
                        <a href="#" className="tag-cloud-link">human</a>
                        <a href="#" className="tag-cloud-link">people</a>
                        <a href="#" className="tag-cloud-link">cat</a>
                        <a href="#" className="tag-cloud-link">dog</a>
                        <a href="#" className="tag-cloud-link">nature</a>
                        <a href="#" className="tag-cloud-link">leaves</a>
                        <a href="#" className="tag-cloud-link">food</a>
                    </ul>
                    </div>

                                <div className="sidebar-box subs-wrap img py-4" style={{
                                    backgroundImage: 'url(images/bg_1.jpg)'
                                }}>
                                    <div className="overlay"></div>
                                    <h3 className="mb-4 sidebar-heading">Newsletter</h3>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia</p>
                    <form action="#" className="subscribe-form">
                        <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address" />
                        <input type="submit" value="Subscribe" className="mt-2 btn btn-white submit"/>
                        </div>
                    </form>
                    </div>

                    <div className="sidebar-box ftco-animate">
                        <h3 className="sidebar-heading">Archives</h3>
                    <ul className="categories">
                        <li><a href="#">Decob14 2018 <span>(10)</span></a></li>
                        <li><a href="#">September 2018 <span>(6)</span></a></li>
                        <li><a href="#">August 2018 <span>(8)</span></a></li>
                        <li><a href="#">July 2018 <span>(2)</span></a></li>
                        <li><a href="#">June 2018 <span>(7)</span></a></li>
                        <li><a href="#">May 2018 <span>(5)</span></a></li>
                    </ul>
                    </div>


                    <div className="sidebar-box ftco-animate">
                    <h3 className="sidebar-heading">Paragraph</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut.</p>
                </div>
            </div>
        )
    }
}

export default Widgets