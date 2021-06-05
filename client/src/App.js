import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getPosts } from './action/posts'

import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";

export default function App() {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <>
            <div className="container w-auto mx-auto md:px-4 bg-black flex justify-center ">
                <img src="/logo.png" alt="logo" className="m-2 filter w-1/4 sepia transform scale-100 hover:scale-125 delay-200 duration-300" />
            </div>

            <div className="container flex flex-col-reverse w-full md:flex-row mx-auto gap-2 my-2">
                <div className="w-full flex flex-row md:w-2/3 md:flex-col">
                    <Posts setCurrentId={setCurrentId} />
                </div>
                <div className="w-full md:w-1/3">
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </div>
            </div>
        </>
    )
}