import Input from "./Input";
import React, { useState } from "react";
export default function Form({AddAppointment}) {

const AddAppointment = (e) => {
e.preventDefault();
let newCita = {
Pet: e.target.pet.value,
Owner: e.target.owner.value,
Date: e.target.date.value,
Time: e.target.time.value,
Symptoms: e.target.symptoms.value
}
e.target.Pet.value = ''
e.target.Owner.value = ''
e.target.Date.value = ''
e.target.Time.value = ''
e.target.symptoms.value = ''    
AddAppointment(newCita);
}
return (
<>
<form onSubmit={(e) => AddAppointment(e)}>
<Input type="text" name="Pet" placeholder="Pet" required className="u-full-width" title="Pet" />
<Input type="text" name="Owner" placeholder="Owner" required className="u-full-width" title="Owner" />
<Input type="date" name="Date" className="u-full-width" title="Date" />
<Input type="time" name="Time" placeholder="Time" className="u-full-width" title="Time" />
<label>Symptoms</label>
<textarea name="symptoms" className="u-full-width"></textarea>
<button type="submit" className="u-full-width button-primary">Add Appointment</button>
</form>

</>
)
}