import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const EditSkiff = (props) => {
    const { skiffId } = props;


    const [buildComplete, setBuildComplete] = useState(false);
    const [ownerName, setOwnerName] = useState("");
    const [builderName, setBuilderName] = useState("");
    const [modelName, setModelName] = useState("Standard");
    const [startDate, setStartDate] = useState("");
    const [finishDate, setFinishDate] = useState("");
    const [stockLength, setStockLength] = useState();
    const [customLength, setCustomLength] = useState();
    const [pictureUrl, setPictureUrl] = useState("");
    const [description, setDescription] = useState("");
    const [errs, setErrs] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/skiffs/" + skiffId)
            .then((res) => {
                const mySkiff = res.data;
                console.log(mySkiff);
                setBuildComplete(mySkiff.buildComplete);
                setOwnerName(mySkiff.ownerName);
                setBuilderName(mySkiff.builderName);
                setModelName(mySkiff.modelName);
                setStartDate((new Date(mySkiff.startDate)).toLocaleDateString("en-us"));
                setFinishDate((new Date(mySkiff.finishDate)).toLocaleDateString("en-us"));
                setStockLength(mySkiff.stockLength);
                setCustomLength(mySkiff.customLength);
                setPictureUrl(mySkiff.pictureUrl);
                setDescription(mySkiff.description);
            })
    }, []);


    //we are keeping track of whats being types via useState hook
    const submitForm = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post requests to create a new skiff
        axios.put('http://localhost:8000/api/skiffs/' + skiffId, {
            buildComplete: buildComplete,
            ownerName: ownerName,
            builderName: builderName,
            modelName: modelName,
            startDate: startDate,
            finishDate: finishDate,
            stockLength: stockLength,
            customLength: customLength,
            pictureUrl: pictureUrl,
            description: description,
        })
            .then((res) => {
                if (res.data.errors) {
                    console.log(res.data.errors); //check errors not errs
                    setErrs(res.data.errors);
                } else {
                    console.log(res.data);
                    navigate(`/skiff/${res.data._id}`);
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }
    return (
        <div>
            <h2>Edit Skiffs</h2>
            <form onSubmit={submitForm}>
                <div>
                    <label>Build Complete</label>
                    {
                        errs.buildComplete ?
                            <span className="error-text">{errs.buildComplete.message}</span>
                            : null
                    }
                    <input
                        type="checkbox"
                        checked={buildComplete}
                        name="buildComplete"
                        onChange={(e) => setBuildComplete(!buildComplete)}
                    />

                </div>
                <div>
                    <label>Owner Name</label>
                    {
                        errs.setOwnerName ?
                            <span className="error-text">{errs.setOwnerName.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="ownerName"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                    />

                </div>
                <div>
                    <label>Builders Name</label>
                    {
                        errs.builderName ?
                            <span className="error-text">{errs.builderName.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        value={builderName}
                        name="builderName"
                        onChange={(e) => setBuilderName(e.target.value)}
                    />

                </div>
                <div>
                    <label>Model Name</label>

                    <select
                        value={modelName}
                        name="modelName"
                        onChange={(e) => setModelName(e.target.value)}
                    >
                        <option value="Standard">Standard</option>
                        <option value="Wide Body">Wide Body</option>
                        <option value="Flat Bottom">Flat Bottom</option>
                    </select>
                </div>
                <div>
                    <label>Build Start</label>
                    {
                        errs.startDate ?
                            <span className="error-text">{errs.startDate.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />

                </div>
                <div>
                    <label>Build Finish Date</label>
                    {
                        errs.finishDate ?
                            <span className="error-text">{errs.finishDate.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="finishDate"
                        value={finishDate}
                        onChange={(e) => setFinishDate(e.target.value)}
                    />

                </div>
                <div>
                    <label>Stock Length</label>
                    {
                        errs.stockLength ?
                            <span className="error-text">{errs.stockLength.message}</span>
                            : null
                    }
                    <input
                        type="number"
                        value={stockLength}
                        name="stockLength"
                        onChange={(e) => setStockLength(e.target.value)}
                    />

                </div>
                <div>
                    <label>Custom Length</label>
                    {
                        errs.customLength ?
                            <span className="error-text">{errs.customLength.message}</span>
                            : null
                    }
                    <input
                        type="number"
                        value={customLength}
                        name="customLength"
                        onChange={(e) => setCustomLength(e.target.value)}
                    />

                </div>
                <div>
                    <label>URL for your Skiff's picture (selfie)</label>
                    {
                        errs.pictureUrl ?
                            <span className="error-text">{errs.pictureUrl.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        value={pictureUrl}
                        name="pictureUrl"
                        onChange={(e) => setPictureUrl(e.target.value)}
                    />

                </div>
                <div>
                    <label>Description</label>
                    {
                        errs.description ?
                            <span className="error-text">{errs.description.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        value={description}
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                </div>
                <button type="submit" >Update Skiff</button>
                <button
                    onClick={() => window.history.back()}>Back</button>
            </form>
        </div>
    )
}



export default EditSkiff;
