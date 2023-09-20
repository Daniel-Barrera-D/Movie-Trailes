import React from "react"
import { Link } from "react-router-dom"
import Button from "../components/Button/Button"

const NewVideo = () => {
    return (
        <section>
            <h3>Vista para agregar nuevo video</h3>
            <Link to={"/nueva-categoria"} style={ {textDecoration: "none"} }><Button>Agregar Nueva</Button></Link>
        </section>
    )
}

export default NewVideo