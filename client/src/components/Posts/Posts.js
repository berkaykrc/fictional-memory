import React from 'react'
import PostCard from './PostCard/PostCard'
import { useSelector } from 'react-redux'
export default function Post({ setCurrentId }) {
    const posts = useSelector((state) => state.posts)
    return (
        !posts.length ? (
            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_xsrtzvyq.json" className="width:300px" background="transparent" speed="1" hover loop  ></lottie-player>) : (
            <div className="flex flex-wrap w-full flex-col md:flex-row gap-y-5" >
                {
                    posts.map((post) => (
                        <div className="md:w-1/2 w-full pr-2" key={post._id}>

                            <PostCard post={post} setCurrentId={setCurrentId} />
                        </div>
                    )
                    )
                }
            </div>
        )
    )
}