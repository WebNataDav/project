import React, { useState } from "react";
import { IRepo } from "../models/models";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

export function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

  const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addFavourite(repo.html_url);
    setIsFav(true);
  };

  const removeFromFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFavourite(repo.html_url);
    setIsFav(false);
  };

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
        </p>
        <p className="text-sm">
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
        {!isFav && (
          <button
            onClick={addToFavourite}
            className="py-2 px-2 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
          >
            Add
          </button>
        )}
        {isFav && (
          <button
            onClick={removeFromFavourite}
            className="py-2 px-2 bg-red-400 rounded hover:shadow-md transition-all"
          >
            Remove
          </button>
        )}
      </a>
    </div>
  );
}
