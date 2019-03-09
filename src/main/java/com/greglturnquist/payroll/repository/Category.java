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
public class Category {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToMany
    private List<Subject> subjects;

    public Category(String name) {
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

    public List<Subject> getSubjects() {
        return subjects;
    }

    public void setSubjects(List<Subject> subjects) {
        this.subjects = subjects;
    }

    public Category addSubject(Subject subject) {
        if (this.subjects == null) {
            this.subjects = new ArrayList<>();
        }

        this.subjects.add(subject);
        return this;
    }
}
