import React from "react";

export default function Anime(props) {
  return (
    <div className="p-5 m-5 border bg-orange-500 border-black rounded-md">
      Anime: {props.anime}
      <br></br>
      Song: {props.song}
      <br></br>
      Artist: {props.artist}
    </div>
  );
}
