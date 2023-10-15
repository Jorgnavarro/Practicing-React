import { useState } from "react";

export function PostComment({setListData, listData}) {
    const [valueTitle, setValueTitle] = useState("");
    const [valueComment, setValueComment] = useState("");
    const [valueEmail, setValueEmail] = useState("");
    
    const handleInputTitle = (e) =>{
        console.log(e.target.value);
        setValueTitle(e.target.value);
    }

    const handleInputComment = (e) =>{
        console.log(e.target.value);
        setValueComment(e.target.value)
    }

    const handleInputEmail = (e) =>{
        console.log(e.target.value);
        setValueEmail(e.target.value);
    }

    const handleForm = (e) =>{
        e.preventDefault();
        const commentObject = {
            postId : 1,
            name: valueTitle,
            email: valueEmail,
            body: valueComment,
        }
        async function newPost(){
            try {
                const postComment = await fetch('https://jsonplaceholder.typicode.com/comments',{
                method: 'POST',
                body: JSON.stringify(commentObject),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
                })

            const response = await postComment.json();

            setListData([
                ...listData, 
                response,
            ])

            console.log(response);
                
            } catch (error) {
                console.log(error);
            }
        }
        
        newPost();
        
    }

    return (
        <div className="container mt-4">
            <h3>Post a new comment</h3>
            <form onSubmit={handleForm}>
                <div className="mb-3 row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="inputTitle" className="form-label">
                                <strong>Title</strong>
                            </label>
                        </div>
                        <div className="col-7">
                            <input type="text" className="form-control" id="inputTitle" placeholder="Write a title for your comment..." onChange={handleInputTitle}
                            defaultValue={valueTitle}
                            />
                        </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputComment" className="form-label">
                        <strong>Comment</strong>
                    </label>
                    <textarea className="form-control" id="inputComment" rows="3"
                    onChange={handleInputComment}
                    defaultValue={valueComment}
                    />
                </div>
                <div className="mb-3 row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="inputEmail" className="form-label">
                                <strong>Email author:</strong>
                            </label>
                        </div>
                        <div className="col-7">
                            <input type="text" className="form-control" id="inputEmail" placeholder="Write a title for your comment..."
                            onChange={handleInputEmail}
                            defaultValue={valueEmail}
                            />
                        </div>
                </div>
                <button type="submit" className="btn btn-outline-success">Post comment</button>
            </form>
        </div>
    )
}