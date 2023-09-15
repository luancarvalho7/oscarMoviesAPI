import { useState } from "react";
import { Card2 } from "../card/card2";

export function Note({ data }) {

    const notas = [
        { nome: "The Departed", notaLuan: "8.3", notaRebeca: "9.1" },
        { nome: "No Country for Old Men", notaLuan: "7.6", notaRebeca: "8.9" },
        { nome: "Slumdog Millionaire", notaLuan: "8.2", notaRebeca: "9.2" },
        { nome: "The Hurt Locker", notaLuan: "7.4", notaRebeca: "9.0" },
        { nome: "The King's Speech", notaLuan: "8.7", notaRebeca: "8.6" },
        { nome: "The Artist", notaLuan: "6.8", notaRebeca: "7.9" },
        { nome: "Argo", notaLuan: "7.2", notaRebeca: "8.2" },
        { nome: "12 Years a Slave", notaLuan: "8.9", notaRebeca: "9.7" },
        { nome: "Birdman", notaLuan: "8.5", notaRebeca: "9.3" },
        { nome: "Spotlight", notaLuan: "7.8", notaRebeca: "8.4" },
        { nome: "Moonlight", notaLuan: "8.0", notaRebeca: "9.0" },
        { nome: "The Shape of Water", notaLuan: "6.5", notaRebeca: "8.8" },
        { nome: "Green Book", notaLuan: "9.1", notaRebeca: "9.6" },
        { nome: "Parasite", notaLuan: "9.2", notaRebeca: "10" },
        { nome: "Nomadland", notaLuan: "6.2", notaRebeca: "7.1" },
    ];

    const ganhadores = ["The Departed",
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
                    const nota = notas.find((nota) => nota.nome === current.Title);
                    
                    const nL = nota ? nota.notaLuan : 'N/A';
                    const nR = nota ? nota.notaRebeca : 'N/A';

                    return (
                        <Card2
                            poster={current.Poster}
                            title={current.Title}
                            duration={current.Runtime}
                            gender={current.Genre}
                            director={current.Director}
                            date={current.Released}
                            nL={nL}
                            nR={nR}
                            key={current.imdbID}
                        />
                    );
                }
                return null;
            })}
        </>
    );
}