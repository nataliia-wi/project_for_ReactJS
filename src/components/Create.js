import React from "react";
import { useState } from "react";
import env from "../env.json"

function Create() {
    const [url, setUrl] = useState("");
    const [lineClass, setLineClass] = useState("hide");
    const [formClass, setFormClass] = useState("")

    const sendData = (object) => {
        setFormClass("hide");
        setLineClass("");
        fetch(env.urlBackend, {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(object)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setUrl(env.url + "/" + response.url)
                }

            })
    }
    const loadDataFromForm = (event) => {
        event.preventDefault();
        let noteValue = event.target.elements.note.value;
        let note = noteValue.trim();
        if (note === "") {
            alert("Enter a note");
            return false;
        }
        sendData({ "note": note });
    }
    return (
        <div>
            <div className="mb-3">
                <form onSubmit={loadDataFromForm} className={formClass}>
                    <label className="form-label pt-2 fs-5" htmlFor="">Enter a note</label>
                    <textarea className="form-control" rows="3" name="note" id="note" defaultValue='My text'></textarea>
                    <button className="btn btn-primary mt-3" type="submit">Push</button>
                </form>
            </div>

            <div className={lineClass}>
                <div className="fs-5">{url}</div>
                <div><button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>New note</button></div>
            </div>
        </div>
    );
}

export default Create;