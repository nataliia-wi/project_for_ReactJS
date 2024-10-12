// http://localhost:3000/note/l5gyj97fn2daxka1cxdy8yeg

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import env from "../env.json"


function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState("");
    const [lineClass, setLineClass] = useState("hide");
    const [formClass, setFormClass] = useState("hide");
    const [errorClass, setErrorClass] = useState("hide");

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: "POST",
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass("");
                        setFormClass("hide");
                        setErrorClass("hide")
                    }
                    else if (!response.result) {
                        setLineClass("hide");
                        setFormClass("hide");
                        setErrorClass("")
                    }
                })
        } else {
            setLineClass("hide");
            setFormClass("");
            setErrorClass("hide")
        }

    }, [])

    const getNote = (event) => {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === "") {
            alert("Enter a note");
            return false;
        }
        noteURL = url;
        window.location.href = env.url + "/" + url;
    }

    return (
        <div>
            <div className={lineClass}>
                <h4>Note:</h4>
                <div className="mt-3 fs-5">{noteText}</div>
                <div><button className="btn btn-primary mt-3" onClick={() => window.location.href = env.url}>Watch another note</button></div>
            </div>
            <div className={errorClass} >
                <p className="mt-3 fs-5" >Note not found</p>
            </div>
            <div className={formClass} >
                <form action="" onSubmit={getNote}>
                    <label className="form-label pt-2 fs-5" htmlFor="url">Enter hash of note</label>
                    <input type="text" name="url" id="url" className="form-control" />
                    <button type="submit" className="btn btn-primary mt-3">Find Note</button>
                </form>
            </div>
        </div>
    );
}

export default Note;