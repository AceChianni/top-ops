"use client";
import SongComponent from "../components/Song";
import { Song, AnimeTop5 } from "../utils/animeTop5";
import { useState, useEffect } from "react";
import { getAllDocuments } from "@/utils/firebaseUtils";
import { db } from "../../firebase.config";

export default function Home() {
  const [animeTop5, setAnimeTop5] = useState(new AnimeTop5("My Top 5 Anime OPs", []));

  useEffect(() => {
    async function fetchData() {
      try {
        const documents = await getAllDocuments(db, "songs");

        const songInstances = documents.map((doc) => {
          return new Song(doc.anime, doc.song, doc.artist, doc.number);
        });
        setAnimeTop5(new AnimeTop5(animeTop5.name, songInstances));
      } catch (error) {
        console.log("error fetching docs", error);
      }
    }

    fetchData();
    return () => {
      console.log("home page side effect cleanup");
    };
  }, []);

  return (
    <main style={{ minHeight: "85vh" }}>
      <h1 className="py-12 text-6xl text-center bg-purple-500">
        {animeTop5.name}
      </h1>
      <h2 className="py-3 text-3xl text-center bg-purple-300">
        My Favorite Anime Opening Songs!
      </h2>

      <div>
        <h3 className="m-5 text-xl">Song list</h3>
        <hr className="mx-5"></hr>
        <div className="flex flex-wrap">
          {animeTop5.songs.map((song) => {
            return (
              <div key={song.number} className="w-1/4">
                <SongComponent
                  anime={song.anime}
                  song={song.song}
                  artist={song.artist}
                  op number={song.number}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
