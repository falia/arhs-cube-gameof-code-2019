package com.greglturnquist.payroll.repository;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class DocumentUrl {

    @Id
    @GeneratedValue
    private Long id;

    private String url;

    public DocumentUrl(String url) {
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
