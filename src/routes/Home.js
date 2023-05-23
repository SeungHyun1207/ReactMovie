
import {useEffect, useState} from "react";
import Movie from "../components/Movie";

function Home(){
    //  일단 로딩중이라고 뜬다.
    let [loading, setLoading] = useState(true);
    let [movies, setMovies] = useState([]);

    let getMovies = async () => {
        let json = await (
            // 영화리스트 띄워준다.
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        console.log("Home_Json",json);
        setLoading(false);
    };

    useEffect( () => {
        getMovies();
    }, []);

    return (
        /* loading이 참일 경우 Loading 출력 아닐경우 null */
        <div>
            {loading ? (
                <h1>Loading... </h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;