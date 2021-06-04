import React from 'react'
import moment from 'moment'

export default function PostCard({ post, setCurrentId }) {
    return (
        <>
            <div className="flex flex-col bg-black h-full rounded md:p-2">
                <div className="relative">
                    <img alt="post" className="object-fill filter blur hover:blur-0" srcSet="./reaper.jpg " />
                    <span className="absolute left-0 top-2 text-yellow-300">{post.creator}</span>
                    <span className="absolute left-0 top-7 text-yellow-100">{moment(post.createdAt).fromNow()}</span>
                    <button className="absolute top-0 right-0" onClick={() => { }}>
                        <span className="text-white pr-2 font-black">. . .</span>
                    </button>
                </div>

                <span className="filter brightness-75 text-yellow-300">{post.tags.map(tag => `#${tag}`)}</span>
                <span className="text-yellow-300 text-xl font-medium text-center">{post.title}</span>
                <p className="py-2 truncate text-yellow-300">
                    {post.content}
                </p>
                <div className="flex justify-between mx-1">
                    <label className="text-yellow-300">
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </label>
                    <label className="text-yellow-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </label>
                </div>
            </div>
        </>
    )
}