package com.bruno.vaccinecardapi.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "vaccines")
public class VaccineCardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String vacina;
    private String doses;
    private String data;
    private String local;

}
