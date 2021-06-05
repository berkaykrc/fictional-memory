import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../action/posts'

export default function Form({ currentId, setCurrentId }) {
    const dispatch = useDispatch()
    const [postData, setPostData] = useState({
        creator: '', title: '', content: '', tags: '', selecetedFile: '',
    })
    const post = useSelector((state) => currentId ? state.posts.find((post) => post._id === currentId) : null)
    function handleSubmit(e) {
        e.preventDefault()

        if (currentId) {
            dispatch(updatePost(currentId, postData))
        }
        else {
            dispatch(createPost(postData))
        }
        clear()
    }
    useEffect(() => {
        if (post) setPostData(post);

    }, [post])
    function clear() {
        setCurrentId(null)
        setPostData({ creator: '', title: '', content: '', tags: '', selecetedFile: '' })
    }
    return (
        <div className="container flex flex-col gap-y-4 bg-black p-2">
            <div><span>{currentId ? "Editing" : "Creating"}</span></div>
            <form className="flex flex-col gap-4 gap-x-4" autoComplete="off" noValidate onSubmit={handleSubmit}>
                <label htmlFor="title" className="text-yellow-300">Title
                <input name="title" id="name" type="text" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                </label>
                <label htmlFor="content" className="text-yellow-300">Content
                <input name="content" value={postData.content} onChange={(e) => setPostData({ ...postData, content: e.target.value })} />
                </label>
                <label htmlFor="creator" className="text-yellow-300">Creator
                <input name="creator" placeholder="creator name" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                </label>
                <label htmlFor="tags" className="text-yellow-300">Tags
                <input name="tags" type="text" placeholder="Tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                </label>
                <label htmlFor="image" className="text-yellow-300">Choose image
                    <FileBase type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selecetedFile: base64 })}
                    />


                </label>
                <button className="bg-yellow-300" type="submit">SUBMIT</button>
                <button className="bg-yellow-300" onClick={clear}>CLEAR</button>
            </form>
        </div>
    )
}