import { useContext } from "react";
import { useForm } from "react-hook-form"
import { myCostumFetch } from "../../helpers/fetch";
import { AuthContext } from "../login/AuthProvider";

export const CommentsForm = () => {
    const { register, handleSubmit, watch, formState: {errors}} = useForm();
    const { loginData } = useContext(AuthContext)

    const onSubmit = async data => {
        let formData = new FormData();
        const token = loginData.access_token

        formData.append('title', data.title);
        formData.append('comment', data.commment);
        formData.append('item_id', 1);

        const options = {
            method: 'POST',
            headers: {
                'Authorization' : `Baerer ${loginData.access_token}`
            },
            body: formData
        }

        const url = 'https://api.mediehuset.net/snippets/comments'
        const result = await myCostumFetch(url, options)
        console.log(result);
    };

    return(
        <>
        <h1>Formular</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Titel:</label>
                <input type="text" name="title" {...register('title', {required: true})} />
                {errors.commment && <span className="error">Du skal skrive en kommentar</span>}
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
        </>
    )
}