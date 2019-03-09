package com.greglturnquist.payroll.data;

import com.greglturnquist.payroll.repository.DocumentUrl;
import com.greglturnquist.payroll.repository.Subject;

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
        for (DocumentUrl doc : subject.getDocuments()) {
            this.url.add(doc.getUrl());
        }
    }
}
