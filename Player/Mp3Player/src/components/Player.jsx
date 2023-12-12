import { useRef, useState, useEffect } from "react"
import napster from "../services/napster.js"


function Player({ song }) {

    const [isPlaying, setIsPlaying] = useState(false)
    const [tracks, setTracks] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const music = useRef()
    const key = "ZTVhYTU3MWEtZjRhNy00MmRmLWJiZDAtNjQwNTAwN2E0ODhi"

    useEffect(() => {
        getMusics()
    }, [])

    useEffect(() => {
        console.log(tracks)
    }, [tracks])

    const getMusics = async () => {
        let musics = await napster.get(`top?apikey=${key}`).then(r => r)
        setTracks(musics.data.tracks)
    }

    const loadSong = () => {
        music.current.src = tracks[currentIndex]?.previewURL
        
        play()
    }

    const play = () => {
        music.current.play()
        setIsPlaying(true)
    }

    const pause = () => {
        music.current.pause()
        setIsPlaying(false)
    }

    const next = () => {
        setCurrentIndex(i => i > 19 ?  0 : i + 1)
        loadSong()
    }

    const prev = () => {
        setCurrentIndex(i => i < 0 ?  19 : i - 1)
        loadSong()
    }

    return (
        <div>
            {isPlaying ? (
                <h2> {tracks[currentIndex].name}</h2>
            ) : (
                <h2></h2>
            )}
            <audio ref={music} src={tracks[currentIndex]?.previewURL || "https://listen.hs.llnwd.net/g2/prvw/4/2/4/9/8/911189424.mp3"} ></audio>
            <button>⏮</button>
            <button onClick={ isPlaying ? pause : play}>
                { isPlaying ? "⏸" : "▶"}
            </button>
            <button onClick={ next }>⏭</button>
        </div>
    )
}

export default Player