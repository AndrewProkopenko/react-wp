import React, { PureComponent } from 'react'
import {Redirect, NavLink} from 'react-router-dom'
import axios from 'axios' 
// import { NavLink} from 'react-router-dom'

class SearchForm extends PureComponent {

    constructor(props) { 
        super(props)

        this.state = { 
            search : '',
            searchQuery: this.props.searchQuery, 
            redirect: false,
            liveResults: []
        }
        
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onFieldChange = this.onFieldChange.bind(this)
    }

    componentDidUpdate(prevProps, prevStates) { 
        if(prevProps.searchQuery !== this.props.searchQuery) {  
            this.setState({ 
                search: this.props.searchQuery,  
                liveResults: []
            })   
        }        
    }

    onFormSubmit(e) { 
        e.preventDefault()
        this.setState({
            redirect: true
        })

    }
    onFieldChange(e) {
        this.setState( { 
            redirect: false,
            search: e.target.value
        })
       
        if ( e.target.value.length > 2) { 
            this.getLiveResults() 
        } else { 
            this.setState( { 
                liveResults: []
            })
        }
    }

    getLiveResults() {  
        axios.get(`${process.env.REACT_APP_API_BASE}/search?per_page=5&search=${this.state.search}`)
        .then( response => { 
            this.setState( { 
                liveResults: response.data
            }) 
        })
       
        .catch( err => {
            console.error(err)
        })
    }

    render() {
        return (
            <div>
                 <form action="/" className="search-form" onSubmit = { this.onFormSubmit}>
                    <div className="form-group">
                        <span className="icon icon-search"></span>
                        <input 
                            type="search" 
                            className="form-control" 
                            placeholder="Type a keyword and hit enter" 
                            value = { this.state.search }
                            onChange = { this.onFieldChange }
                        />
                        {  this.state.liveResults.length > 0 &&
                           <ul className="list-group position-absolute w-100 list-live-search">
                                {
                                    this.state.liveResults.map( (post, i) => { 
                                        let slug = post.url; 
                                        slug = slug.replace(process.env.REACT_APP_SERVER_URL,'')
                                        slug = slug.replace('http://localhost/server','')
                                        return ( 
                                                <li className="list-group-item" key={i}>
                                                    <NavLink to={'post' + slug } > 
                                                        {post.title} 
                                                    </NavLink>
                                                </li> 
                                        )
                                    })
                                }
                            </ul>
                        }
                    </div>
                    { 
                        this.state.redirect && 
                        <Redirect to={'/?search='+this.state.search}/>
                    }
                </form>
            </div>
        )
    }
}

export default SearchForm
