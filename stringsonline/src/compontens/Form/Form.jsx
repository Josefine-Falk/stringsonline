import Style from './Form.scss';
import React from "react";
import { useForm } from "react-hook-form";


export const Form = () => {
    const { register, handleSubmit, watch, formState: { errors}} = useForm();

    const onSubmit = data => {
        let formData = new FormData();

        formData.append('firstname', data.firstname);
        formData.append('lastname', data.lastname);
        formData.append('zipcode', data.zipcode);
        formData.append('email', data.email);

        let options = {
            method: 'POST',
            body: formData
        }
        try{
            const url = "https://api.mediehuset.net/snippets/contact"
            fetch(url, options)
            .then(response => response.json())
            .then(data => console.log(data))
        }
        catch(error) {
            console.error(error);
        }
    };

    return(
        <>
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={Style.formcontainer}>
            <div>    
                <input type="text" name="firstname" placeholder="Fornavn" {...register('firstname', {required: true, minLength: 2})} />
                {errors.firstname && <span className="error">Du mangler at indtaste dit fornavn</span>}
            </div>
            <div>
                <input type="text" name="lastname" placeholder="Efternavn" {...register('lastname')} />
            </div>
            <div>
                <input type="text" name="adress" placeholder="Adresse" />
            </div>
            <div>
                <input type="number" name="zipcode" placeholder="Postnr." {...register('zipcode', {required: true, pattern: /^[0-9]+$/i})}/>
                <input type="text" name="city" placeholder="By" />
            </div>
            </div>
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="email" name="email" placeholder="Email" {...register('email', {required: true, pattern: /^\S+@\S+\.\S+$/})} />
            </div>
            <div>
                <input type="number" name="telefon" placeholder="Telefonnummer" {...register('telefon', {required: true, minLength: 8})} />
            </div>
        </form>
        <form>
            <input type="text" placeholder="Bankoverførsel" />
        </form>
        </div>
        </>
    )
}