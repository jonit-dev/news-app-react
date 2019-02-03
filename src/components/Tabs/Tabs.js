import React, {Component} from 'react';

class Tabs extends Component {


    onSelectTab = (tab) => {
        console.log(`sending keyword ${tab} to parent`);
        this.props.onSelectTab(tab);
    };


    render() {
        return (<div className="tabsWrapper">

            <a href="# " className="tab" onClick={() => this.onSelectTab('brazil')}>
                <i className=" fas fa-globe-americas"></i>
                Brazil
            </a>

            <a href="# " className="tab" onClick={() => this.onSelectTab('usa')}>
                <i className=" fas fa-globe-americas"></i>
                USA
            </a>


            <a href="# " className="tab" onClick={() => this.onSelectTab('search-results')}>
                <i className="fab fa-hotjar"></i>
                Search Results
            </a>

            <a href="# " className="tab" onClick={() => this.onSelectTab('india')}>
                <i className=" fas fa-globe-americas"></i>
                India
            </a>

            <a href="# " className="tab" onClick={() => this.onSelectTab('australia')}>
                <i className=" fas fa-globe-americas"></i>
                Australia
            </a>

        </div>)
    }
}

export default Tabs;