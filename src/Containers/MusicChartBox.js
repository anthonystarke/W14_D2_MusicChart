import React,{Component} from "react";
import MusicList from '../Components/MusicList'

class MusicChartBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      music: []
    };
  }


  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET',url);

    request.addEventListener("load", () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({music: data})

    });
    request.send();
  }
render(){

  return(
    <div>
      <h2> rendering from MusicChartBox </h2>
      <MusicList musicData = {this.state}/>
    </div>
  )
}

}

export default MusicChartBox
