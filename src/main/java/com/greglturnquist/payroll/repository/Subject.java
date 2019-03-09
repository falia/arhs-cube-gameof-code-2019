package com.greglturnquist.payroll.repository;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Subject {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToMany
    private List<DocumentUrl> documents;


    public Subject(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<DocumentUrl> getDocuments() {
        if (this.documents == null) {
            this.documents = new ArrayList<>();
        }
        return documents;
    }

    public void setDocuments(List<DocumentUrl> documents) {
        this.documents = documents;
    }

    public Subject addAllDocument(List<DocumentUrl> documentUrl) {
        getDocuments().addAll(documentUrl);
        return this;
    }
}
