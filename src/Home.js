import React, { Component } from 'react';
//import './Home.css';
import './homescreen.css';

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoading: false,
            articles: []
        };
    }

    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=51a2bdde808e4355aeb084e6e0ead725')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    articles: result.articles
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    render(){
        const { error, isLoaded, articles } = this.state;
        if (error) {
            return <div className="status-indicator">Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div className="status-indicator">Loading...</div>;
          } else {

        return(
            <div className="body">

                <div className="w3-container w3-teal">
                    <h1 className="heading">E-Nigeria LinkUp!</h1>
                    <p className="heading">Get the LINKS to all the latest entertainment that Nigerians love</p>
                </div>
               
               
                <div className="w3-content">

                   <ul>

                   {articles.map(article => (

                       <li key={article.title}>

                    <div className="w3-row w3-margin">

                       <div className="w3-third">
                           <img src={article.urlToImage} alt=""/>
                       </div>

                       <div className="w3-twothird w3-container">
                       <h2>{article.title}</h2>
                       <a href={article.url}><button>Link up &raquo;</button></a>
                       {/*<a href={article.url}>{article.url}</a>*/}
                       </div>

                    </div>{/* w3-row w3-margin*/}

                    
                       </li>

                    ))}
                    <hr />

                </ul>

                </div> {/* w3-content*/}

                {/*<footer className="w3-container w3-green">
                       <a className="w3-btn w3-xlarge w3-circlew3-theme-action w3-right w3-red" id="floatbutton">+</a>
                              <p>&copy; 2018</p>
                </footer>*/}

                <div className="w3-bar w3-teal">
                     <a href="https://www.digirealis.com" className="w3-bar-item w3-button w3-mobile">Reach Us</a>
                    <a href="https://www.digirealis.com" className="w3-bar-item w3-button w3-mobile">About digirealis</a>
                </div>   

            </div>

            ); {/* return method*/}
          }
    }
}