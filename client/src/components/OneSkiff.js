import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const OneSkiff = (props) => {
    const { id } = props;
    const [skiff, setSkiff] = useState({});


    useEffect(() => {
        axios.get("http://localhost:8000/api/skiffs/" + id)
            .then((res) => {
                const mySkiff = res.data;
                console.log(mySkiff);
                setSkiff(mySkiff);
            })
    }, []);
    // {
    //     "buildComplete": true,
    //     "_id": "6031feef4da27418949f4567",
    //     "ownerName": "Antonio",
    //     "builderName": "Joseph",
    //     "modelName": "Jumbo",
    //     "startDate": "2003-08-18T00:00:00.000Z",
    //     "finishDate": "2006-11-21T00:00:00.000Z",
    //     "stockLength": 22,
    //     "customLength": 22,
    //     "pictureUrl": "https://i.pinimg.com/originals/50/66/d3/5066d3d153f8de1ae5a5ac3b07ef164d.jpg",
    //     "createdAt": "2021-02-21T06:34:23.740Z",
    //     "updatedAt": "2021-02-21T06:34:23.740Z",
    //     "__v": 0
    // }
    return (
        <div>
            <h2>{skiff.ownerName}'s' Skiff</h2>
            <img src={skiff.pictureUrl} alt={`${skiff.ownerName}s Boat`} />
            <p>
                Build Complete: {skiff.buildComplete ? <span>True</span> : <span>Not Yet!</span>}
            </p>
            <p>
                Owner Name: {skiff.ownerName}
            </p>
            <p>
                Builder Name: {skiff.builderName}
            </p>
            <p>
                Model Name: {skiff.modelName}
            </p>
            <p>
                Start Date: {(new Date(skiff.startDate)).toLocaleDateString("en-us")}
            </p>
            <p>
                Finish Date : {(new Date(skiff.finishDate)).toLocaleDateString("en-us")}
            </p>
            <p>
                Stock Length: {skiff.stockLength}
            </p>
            <p>
                Custom Length: {skiff.customLength}
            </p>
            <p>
                Picture URL : {skiff.pictureUrl}
            </p>
            <p>
                Description: {skiff.description}
            </p>
            <button
                onClick={() => window.history.back()}>Back</button>
        </div>
    )
}

export default OneSkiff;
