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

    state = {news: []};

    fetchNews = async () => {

        const response = await newsApi.get('top-headlines', {
            params: {
                country: 'us'
            }
        });

        console.log(response.data.articles);

        this.setState({news: response.data.articles});

    };


    componentDidMount() {

        this.fetchNews();

    }


    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBarIcon/>

                    <main>
                        <div className="searchBar">
                            <TextField className="searchField"
                                       hintText="Search "
                            />

                            <RaisedButton className="searchButton" label="Search" secondary={true}/>

                        </div>

                        <Tabs/>


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