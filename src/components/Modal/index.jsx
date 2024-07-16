import { useEffect, useState, useRef } from "react";
import useVideos from "../../hooks/useVideos";
import { CgCloseO } from "react-icons/cg";

import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

import './styles.css'

const Modal = ({ videoId = 0, categories = [], isOpen = false, closeModal }) => {
    const formRef = useRef(null)
    const { getVideoById, loadingVideos, editVideo, createVideo } = useVideos()
    const [ video, setVideo ] = useState({
        title: "",
        category: "",
        image: "",
        url: "",
        description: ""
    })

    const handleSubmit = e => {
        e.preventDefault()

        const formData = new FormData(formRef.current);
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        if(videoId > 0) {
            editVideo(videoId, object);
        } else {
            createVideo(object);
        }
        closeModal();
    }

    const handleReset = () => {
        const resetVideo = {
            title: "",
            category: "",
            image: "",
            url: "",
            description: ""
        }
        setVideo(resetVideo)
    }

    useEffect(() => {
        if(!loadingVideos && videoId > 0) {
            setVideo(getVideoById(videoId))
        } else {
            handleReset()
        }
    }, [loadingVideos, isOpen, videoId])

    if(!isOpen) return
    return (
        <div className="modal-backshadow">
            <div className="modal-dialog">
                <CgCloseO className="close" onClick={() => closeModal()} />
                <h3>Editar card:</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="d-flex flex-column">
                    <Input label="Título" placeholder="" value={video.title} name="title" />
                    <Select label="Categoria" placeholder="Categoria" selected={video.category} values={categories} name="category" />
                    <Input label="Imagen" placeholder="" value={video.image} name="image" />
                    <Input label="Video" placeholder="" value={video.url} name="url" />
                    <Input label="Descripción" placeholder="" value={video.description} name="description" isTextarea />
                    <div className="d-flex justify-content-between">
                        <Button label="GUARDAR" action={(e) => handleSubmit(e)} />
                        <Button label="LIMPAR" action={handleReset} color="white" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Modal;