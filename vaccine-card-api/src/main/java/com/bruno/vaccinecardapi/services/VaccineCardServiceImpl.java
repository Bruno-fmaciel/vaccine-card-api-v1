package com.bruno.vaccinecardapi.services;

import com.bruno.vaccinecardapi.entities.VaccineCardEntity;
import com.bruno.vaccinecardapi.model.VaccineCard;
import com.bruno.vaccinecardapi.repository.VaccineCardRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VaccineCardServiceImpl implements VaccineCardService{
    private VaccineCardRepository vaccineCardRepository;

    public VaccineCardServiceImpl(VaccineCardRepository vaccineCardRepository) {
        this.vaccineCardRepository = vaccineCardRepository;
    }

    @Override
    public VaccineCard createVaccineCard(VaccineCard vaccineCard) {
        VaccineCardEntity vaccineCardEntity = new VaccineCardEntity();
        BeanUtils.copyProperties(vaccineCard, vaccineCardEntity);
        vaccineCardRepository.save(vaccineCardEntity);
        return vaccineCard;
    }

    @Override
    public List<VaccineCard> getAllVaccineCards() {
        List<VaccineCardEntity> vaccineCardEntities = vaccineCardRepository.findAll();

        List<VaccineCard> vaccineCards = vaccineCardEntities.stream().map(vac -> new VaccineCard(vac.getId(), vac.getVacina(), vac.getDoses(), vac.getData(), vac.getLocal())).collect(Collectors.toList());

        return vaccineCards;

    }

    @Override
    public boolean deleteVaccine(Long id) {
        VaccineCardEntity vaccine = vaccineCardRepository.findById(id).get();
        vaccineCardRepository.delete(vaccine);
        return true;
    }

    @Override
    public VaccineCard getVaccineById(Long id) {
        VaccineCardEntity vaccineCardEntity = vaccineCardRepository.findById(id).get();
        VaccineCard vaccineCard = new VaccineCard();
        BeanUtils.copyProperties(vaccineCardEntity, vaccineCard);
        return vaccineCard;
    }

    @Override
    public VaccineCard updateVaccine(Long id, VaccineCard vaccineCard) {
        VaccineCardEntity vaccineCardEntity = vaccineCardRepository.findById(id).get();
        vaccineCardEntity.setVacina(vaccineCard.getVacina());
        vaccineCardEntity.setDoses(vaccineCard.getDoses());
        vaccineCardEntity.setData(vaccineCard.getData());
        vaccineCardEntity.setLocal(vaccineCard.getLocal());

        vaccineCardRepository.save(vaccineCardEntity);
        return vaccineCard;
    }
}
