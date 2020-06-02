import React, { PureComponent } from 'react'
import Widgets from './widgets/Widgets'
import BlogRoll from './blog/BlogRoll'
import queryString from 'query-string'

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = { 
            searchQuery: ''
        }
    }
    componentDidUpdate() { 
        this.setState({
            searchQuery: queryString.parse(window.location.search).search || ''
        })
    }
    componentDidMount() {
        window.initPageScripts()
    }

    render() {  
        return (
            <>
            <div className="container">
	    		<div className="row d-flex">
                    <BlogRoll searchQuery={this.state.searchQuery} page={ this.props.match.params.page || 1}/>
                    <Widgets searchQuery={this.state.searchQuery} />
                </div>
            </div>
            </>
        )
    }
}

export default Home