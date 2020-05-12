import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location , history} = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state){
            return ( <div className = "movie_detail">
            <img className="imgs" src = {location.state.poster} alt ="title"></img>
            <div className="details">
            <h1>{location.state.title}</h1>
            <h3>{location.state.years}</h3>
            <h3>{location.state.genres}</h3>
            <p>{location.state.summary}</p>
            </div>
            </div>
            );
        } else {
            return null;
            }
    }
}

   

export default Detail;