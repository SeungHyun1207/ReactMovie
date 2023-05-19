
import Button from "./Button";
import styles from "./css/App.module.css";

// 상태변경시 필요한 useState
// 한번만 실행되게 하는 것 useEffect
// useEffect는 두개의 argument를 가지는 function이다.
import {useState,useEffect} from "react";

/* CSS import할때 주의할 점  ./로 시작해야 한다. */
/* import styles from "./css/Button.module.css"; */

function App(){

    //  일단 로딩중이라고 뜬다.
    let [loading, setLoading] = useState(true);

    return (

        <div>
            {/* loading이 참일 경우 Loading 출력 아닐경우 null */}
            {loading ? <strong> Loading...</strong> : null}
        </div>

    )

}





























/*
// 암호화폐 리스트
function App(){

    let [loading, setLoading] = useState(true);
    let [coins, setCoins] = useState([]);


    useEffect( () => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(response => response.json())
            .then(json => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1> The Coins! </h1>
            {loading ? <strong> Loading...</strong> : null}
            <ul>
                {coins.map((coin) => <li>{coin.name} ({coin.symbol} : ${coin.quotes.USD.price} USD)</li>)}
            </ul>
        </div>
    )
}*/


/*
// 메모장
function App(){

    let [toDo, setToDo] = useState(""); // 값
    let [toDos, setToDos] = useState([]); // 저장소
    let onChange = (event) => setToDo(event.target.value);

    // 값을 넘길 때 만약 toDo가 비어있다면 리턴, 만약 값을 넘겼다면 빈값으로 만들기
    let onSubmit = (event) => {
        event.preventDefault();
        if (toDo === ""){
            return;
        }
        setToDos( (currentArray) => [toDo, ...currentArray]);
        setToDo("");
        console.log(toDos);
    };

    return (
        <div>
            <h1>나의 메모 ( 메모 개수 : {toDos.length} 개)</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    onChange={onChange}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr/>
            <ul>
                {toDos.map( (item,index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}*/

/*function Hello(){
    // 2개중에 편한것을 쓰면 된다.
    /!*useEffect( () => {
        console.log("hi :)");
        return () => console.log("bye :(");
    }, []);*!/
    /!*useEffect(function (){
        console.log("hi :)");
        return function(){
            console.log("bye :)(");
        }
    })*!/
    return <h1>Hello</h1>
}*/

//  Cleanup
/*function App(){
    let [showing, setShowing] = useState(false);
    let onClick = () => setShowing( (prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    )
}*/


/* ================================================== */
//  배운거 복습
/*function App() {

    let [counter, setValue] = useState(0);
    let [keyword, setKeyword] = useState("");
    let onClick = () => setValue((prev) => prev + 1);
    let onChange = (event) => setKeyword(event.target.value);
    // [keyword]는 keyword가 변화할때 코드를 실행할 거라고 react에게 알려준다.
    // if문에서는 keyword의 검색이 5글자이상일때 이 코드를 실행하겠다 라고 알려준다.
    useEffect( () => {
        console.log("I run only once.");
    })
    useEffect( () => {
        if( keyword !== "" & keyword.length > 5){
            console.log("나는 키워드가 5글자 이상일때 실행됩니다.", keyword);
        }
    }, [keyword]);
    useEffect( () => {
        if( counter > 3){
            console.log("나는 카운트가 3이상일때 실행됩니다.", counter);
        }
    }, [counter]);

  return (
      <div>
          <input
              value={keyword}
              onChange={onChange}
              type="text"
              placeholder="Search here..."
          />
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
      </div>
  );
}*/

export default App;
