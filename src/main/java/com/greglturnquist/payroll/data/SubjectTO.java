package com.greglturnquist.payroll.data;

import com.greglturnquist.payroll.repository.DocumentUrl;
import com.greglturnquist.payroll.repository.Subject;

import java.util.ArrayList;
import java.util.List;

public class SubjectTO {

    private Long id;
    private String title;
    private String thumbnail;
    private List<String> url;


    public SubjectTO(Subject subject) {
        this.id = subject.getId();
        this.title = subject.getName();
        this.thumbnail = "";
        this.url = new ArrayList<>();
        for (DocumentUrl doc : subject.getDocuments()) {
            getUrls().add(doc.getUrl());
        }
    }

    public SubjectTO(Long id, String title, String thumbnail) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
//        this.url = new ArrayList<>();
//        this.url.add(url);
    }

    public List<String> getUrls() {
        if (url == null) {
            url = new ArrayList<>();
        }
        return url;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getThumbnail() {
        return thumbnail;
    }
}
