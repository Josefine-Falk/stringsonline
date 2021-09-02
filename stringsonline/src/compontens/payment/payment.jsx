import React from "react";
import { Form } from "../Form/Form";
import Style from "./payment.module.scss";
export function Payment() {
    return(
        <>
        <h1 className={Style.kasse} >Kasse</h1>
        <Form/>
        </>
    )
}