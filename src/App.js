import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Button from "./Button";

import styles from "./css/App.module.css";
import {BrowserRouter as Router, Route, Routes, Link, BrowserRouter} from "react-router-dom"; // Switch 대신 Routes로 변경
// Switch 컴포넌트 > Routes 컴포넌트로 5버전에서 6버전으로 바뀌면서 컴포넌트도 변경이 되었다.
// Switch 대신 Routes를 사용하면 된다.
// Ex) 사용방법 : Route컴포넌트 사이에 자식 컴포넌트를 넣지 않고, element prop에 자식 컴포넌트를 할당하도록 바뀌었습니다.
// Route path="/" element={< Home / >}
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/hello" element={<h1>Hello</h1>} />
                <Route path="/movie/:id" element={<Detail />} />
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;