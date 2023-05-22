import React from 'react'

export default function Appointment({obj, index }) {
return (
    <div className="Appointment" key={index}>
        <p>Pet: <span>{obj.Pet}</span>
        </p>
        <p>Owner: <span>{obj.Owner}</span>
        </p>
        <p>Date: <span>{obj.Date}</span>
        </p>
        <p>Time: <span>{obj.Time}</span>
        </p>
        <p>Symptoms: <span>{obj.Symptoms}</span>
        </p>
        <button className="button Erase u-full-width ">Erase ×</button>
    </div>
)
}