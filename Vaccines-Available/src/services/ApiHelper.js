import axios from 'axios';

export async function getVaccineAvailability(date) {
    return await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=560079&date=${date}`)
}
export async function getStates() {
    return await axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/states`)
}
export async function getDistricts(selectedStateId) {
    console.log(selectedStateId,"selected state id");
    return await axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${selectedStateId}`)
}