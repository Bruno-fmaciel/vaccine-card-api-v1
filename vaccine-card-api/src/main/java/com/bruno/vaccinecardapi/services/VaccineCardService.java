package com.bruno.vaccinecardapi.services;

import com.bruno.vaccinecardapi.model.VaccineCard;

import java.util.List;


public interface VaccineCardService {
    VaccineCard createVaccineCard(VaccineCard vaccineCard);

    List<VaccineCard> getAllVaccineCards();

    boolean deleteVaccine(Long id);

    VaccineCard getVaccineById(Long id);

    VaccineCard updateVaccine(Long id, VaccineCard vaccineCard);
}

