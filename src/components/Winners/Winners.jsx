import { useState } from "react";
import { Card } from "../card/card";

export function Winners({ data }) {
    const ganhadores = [
        "The Departed",
        "No Country for Old Men",
        "Slumdog Millionaire",
        "The Hurt Locker",
        "The King's Speech",
        "The Artist",
        "Argo",
        "12 Years a Slave",
        "Birdman",
        "Spotlight",
        "Moonlight",
        "The Shape of Water",
        "Green Book",
        "Parasite",
        "Nomadland",
    ];

    return (
        <>
            {data.map((current) => {
                if (ganhadores.includes(current.Title)) {
                    return <Card  
                    
                    poster={current.Poster}
                    title={current.Title}
                    duration={current.Runtime}
                    gender={current.Genre}
                    director={current.Director}
                    date={current.Released}
                    score={current.imdbRating}
                    key={current.imdbID}
                    
            
                    
                    
                    />;
                }
                return null;
            })}
        </>
    );
}