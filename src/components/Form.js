import Input from "./Input";
import React, { useState } from "react";
import "../App";
export default function Form({onCreateAppointment}) {
const [idState, setId] = useState(0);
const CreateAppointment = (data) => {
data.preventDefault();
let newAppointment = {
id: idState,
Pet: data.target.Pet.value,
Owner: data.target.Owner.value,
Date: data.target.Date.value,
Time: data.target.Time.value,
Symptoms: data.target.Symptoms.value
}
setId(idState+1)
data.target.Pet.value = ''
data.target.Owner.value = ''
data.target.Date.value = ''
data.target.Time.value = ''
data.target.Symptoms.value = ''
onCreateAppointment(newAppointment);
}

return (
<>
<form onSubmit={(data) => CreateAppointment(data)}>
<Input type="text" name="Pet" placeholder="Pet" required className="u-full-width" title="Pet" />
<Input type="text" name="Owner" placeholder="Owner" required className="u-full-width" title="Owner" />
<Input type="date" name="Date" className="u-full-width" title="Date" />
<Input type="time" name="Time" placeholder="Time" className="u-full-width" title="Time" />
<label>Symptoms</label>
<textarea name="Symptoms" className="u-full-width"></textarea>
<button type="submit" className="u-full-width button-primary">CreateAppointment</button>
</form>
</>
)
}