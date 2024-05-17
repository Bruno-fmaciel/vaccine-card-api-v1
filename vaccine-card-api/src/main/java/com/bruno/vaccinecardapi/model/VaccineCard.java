package com.bruno.vaccinecardapi.model;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VaccineCard {
    private long id;
    private String vacina;
    private String doses;
    private String data;
    private String local;

}
