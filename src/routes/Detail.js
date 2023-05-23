import { useParams } from "react-router-dom";
import {useEffect} from "react";

function Detail(){

    let {id} = useParams();
    let getMovie = async () => {

        console.log(id);
        let json = await (
            await  fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    };

    useEffect( () => {
        getMovie();
    }, []);
    return (
        <h1>Detail</h1>
    )
}


export default Detail;
