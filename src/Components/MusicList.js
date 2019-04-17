import React from "react"

const MusicList = (props) => {

  console.log(props.musicData);
  console.log(props.musicData.music.feed);


  // const musicList = props.musicData.map((song,index) =>{
  //   return song.title
  //
  // })

  return(
    <div>
    <h2> Rending List </h2>
    </div>
  )
}

export default MusicList;
