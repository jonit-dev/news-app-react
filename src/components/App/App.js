import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarIcon from '../material-ui/AppBar';
import TextField from 'material-ui/TextField';
import '../style.css';
import RaisedButton from "material-ui/RaisedButton/index";
import Tabs from "../Tabs/Tabs";
import NewsList from "../News/NewsList";
import newsApi from '../../api/news';

class App extends Component {

    state = {news: [], selectedTab: null, term: ""};

    fetchNews = async (params) => {

        const response = await newsApi.get('top-headlines', {
            params: params
        });

        console.log(response.data.articles);

        this.setState({news: response.data.articles});

    };

    onSelectTab = (tab) => {
        this.setState({selectedTab: tab});


        switch (tab) {
            case 'brazil':
                this.fetchNews({
                    country: 'br',
                    q: this.state.term
                });
                break;

            case 'search-results':
                this.fetchNews({
                    country: 'us',
                    q: this.state.term
                });
                break;


            case 'usa':
                this.fetchNews({
                    country: 'us',
                    q: this.state.term
                });
                break;
            case 'india':
                this.fetchNews({
                    country: 'in',
                    q: this.state.term
                });
                break;
            case 'china':
                this.fetchNews({
                    country: 'au',
                    q: this.state.term
                });
                break;
            default:
                this.fetchNews({
                    country: 'us',
                    q: this.state.term
                })


        }

    };

    componentDidUpdate() {

    }


    componentDidMount() {

        this.fetchNews({
            country: 'us',
            q: this.state.term
        })

    }

    searchResults = () => {

        console.log("clicked search button");

        this.fetchNews({
            country: 'us',
            q: this.state.term
        })

    };


    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBarIcon/>

                    <main>
                        <div className="searchBar">
                            <TextField className="searchField"
                                       hintText="Search "
                                       value={this.state.term}
                                       onChange={(e) => this.setState({term: e.target.value})}
                            />

                            <RaisedButton className="searchButton" label="Search" secondary={true}
                                          onClick={this.searchResults}/>

                        </div>

                        <Tabs onSelectTab={this.onSelectTab}/>


                        <div className="newsContainer">

                            <NewsList news={this.state.news}/>


                        </div>
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;