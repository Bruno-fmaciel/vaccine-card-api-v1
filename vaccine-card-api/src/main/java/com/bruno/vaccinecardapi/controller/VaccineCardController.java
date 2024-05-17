package com.bruno.vaccinecardapi.controller;

import com.bruno.vaccinecardapi.model.VaccineCard;
import com.bruno.vaccinecardapi.services.VaccineCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class VaccineCardController {
    @Autowired
    private VaccineCardService vaccineCardService;

    public VaccineCardController(VaccineCardService vaccineCardService) {
        this.vaccineCardService = vaccineCardService;
    }

    @PostMapping("/vaccinecards")
    public VaccineCard createVaccineCard(@RequestBody VaccineCard vaccineCard){
        return vaccineCardService.createVaccineCard(vaccineCard);
    }

    @GetMapping("/vaccinecards")
    public List<VaccineCard> getAllVaccineCards() {
        return vaccineCardService.getAllVaccineCards();
    }

    @DeleteMapping("/vaccinecards/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteVaccine(@PathVariable Long id) {
        boolean deleted = false;
        deleted = vaccineCardService.deleteVaccine(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/vaccinecards/{id}")
    public ResponseEntity<VaccineCard> getVaccineById(@PathVariable Long id) {
        VaccineCard vaccineCard = null;
        vaccineCard = vaccineCardService.getVaccineById(id);
        return ResponseEntity.ok(vaccineCard);
    }

    @PutMapping("/vaccinecards/{id}")
    public ResponseEntity<VaccineCard> updateVaccine(@PathVariable Long id,@RequestBody VaccineCard vaccineCard) {
        vaccineCard = vaccineCardService.updateVaccine(id, vaccineCard);
        return ResponseEntity.ok(vaccineCard);
    }
}
