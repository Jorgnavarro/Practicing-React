import { useEffect, useState } from "react";
import { getId } from "../utils/getId";
import { Comment } from "./Comment";
import { PostComment } from './PostComment'

export function ListComments() {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        try {
            async function getData() {
                const callApi = await fetch(`https://jsonplaceholder.typicode.com/comments`)
                const response = await callApi.json();
                const limitedResults = response.slice(0, 3);
                console.log(limitedResults);
                setListData(limitedResults);
            }
            getData();
        } catch (error) {
            console.log(error);
        }

    }, [])

    return (
        <div>
            <ul className="list-group">
                {listData.map(comment=>{
                    return <Comment key={getId()} comment={comment}/>
                })}
            </ul>
            <PostComment setListData={setListData} listData={listData}/>
        </div>
    )
}