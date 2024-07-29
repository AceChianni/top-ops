import React from "react";

export default function AddSongForm({ handleAddSong }) {
  return (
    <form
      onSubmit={handleAddSong}
      className="p-5 m-5 border border-purple-800"
    >
      <h2 className="mb-2 text-2xl">Add a Song</h2>
      <div>
        <input
          className="w-1/4 p-1 mb-2 border rounded border-purple-600"
          placeholder="Anime"
          type="text"
          name="anime"
          id="anime-input"
          required
        />
        <input
          className="w-1/4 p-1 mb-2 border rounded border-purple-600"
          placeholder="Song"
          type="text"
          name="song"
          id="song-input"
          required
        />
        <input
          className="w-1/4 p-1 mb-2 border rounded border-purple-600"
          placeholder="Artist"
          type="text"
          name="artist"
          id="artist-input"
          required
        />
        <input
          className="w-1/4 p-1 mb-2 border rounded border-purple-600"
          placeholder="Number"
          type="number"
          name="number"
          id="number-input"
          min={1}
          max={5}
          required
        />
      </div>
      <button
        className="p-2 my-4 border rounded border-purple-500 hover:bg-purple-600"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
