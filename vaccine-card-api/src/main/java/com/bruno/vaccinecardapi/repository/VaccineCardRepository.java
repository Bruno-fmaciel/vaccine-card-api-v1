package com.bruno.vaccinecardapi.repository;

import com.bruno.vaccinecardapi.entities.VaccineCardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VaccineCardRepository extends JpaRepository<VaccineCardEntity, Long> {

}
