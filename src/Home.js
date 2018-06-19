import React, { Component } from 'react';
import './Home.css';

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
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {

        return(
            <div>

                <div className="w3-container w3-teal">
                    <h1 className="heading">E-Nigeria Now!</h1>
                    <p className="heading">All the latest entertainment stories that Nigerians love</p>
                </div>
               
               
                <div className="w3-content">

                   <ul>

                   {articles.map(article => (

                       <li key={article.title}>

                    <div className="w3-row w3-margin">

                       <div className="w3-third">
                           <img src={article.urlToImage}/>
                       </div>

                       <div className="w3-twothird w3-container">
                       <h2>{article.title}</h2>
                       <a href={article.url}>{article.url}</a>
                       </div>

                    </div>{/* w3-row w3-margin*/}

                    
                       </li>

                    ))}

                </ul>

                </div> {/* w3-content*/}

                <div className="w3-bar w3-teal">
                     <a href="#" className="w3-bar-item w3-button w3-mobile">Reach Us</a>
                    <a href="https://www.grotisk.com" className="w3-bar-item w3-button w3-mobile">Who is Grotisk?</a>
                </div>   

            </div>

            ); {/* return method*/}
          }
    }
}