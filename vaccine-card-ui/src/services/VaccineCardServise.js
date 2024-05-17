import axios from "axios";

const VACCINE_CARD_BASE_URL = "http://localhost:8080/api/v1/vaccinecards";

class VaccineCardService {

    saveVaccineCard(vaccinecard) {
        return axios.post(VACCINE_CARD_BASE_URL, vaccinecard);
    }

    getVaccines() {
        return axios.get(VACCINE_CARD_BASE_URL);
    }

    deleteVaccine(id) {
        return axios.delete(VACCINE_CARD_BASE_URL + "/" + id);
    }

    getVaccineById(id) {
        return axios.get(VACCINE_CARD_BASE_URL + "/" + id);
    }

    updateVaccine(vaccineCard, id) {
        return axios.put(VACCINE_CARD_BASE_URL + "/" + id, vaccineCard);
    }

}

export default new VaccineCardService;