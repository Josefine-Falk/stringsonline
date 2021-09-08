import { useContext, useEffect, useState } from "react"
import { myCostumFetch } from "../../helpers/fetch"
import { AuthContext } from "../login/AuthProvider"

export const CommentsList = (props) => {
    const [apiData, setApiData] = useState()
    const {loginData} = useContext(AuthContext)
    const id = props.itemId;

    const getData = async () => {
        const url = `https://api.mediehuset.net/snippets/comments/${id}`
        const options = {
            method: 'GET',
            headers: {
                'Authorization' : `Baerer ${loginData.access_token}`
            }
        }
        try{
            const result = await myCostumFetch(url, options);
            setApiData(result);
        }
        catch(error) {
            console.error(error);
        }
    }
    useEffect(() => {
        if(loginData) {
            getData();
        }
    }, [loginData, id])

    return(
        <>
        <h4>Kommentarer</h4>
        <ul>
            {apiData && apiData.items.map((item, key) => {
                return(
                    <li key={key}>{item.title}</li>
                )
            })}
        </ul>
        </>
    )
}