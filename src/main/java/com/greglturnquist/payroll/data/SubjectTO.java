package com.greglturnquist.payroll.data;

import com.greglturnquist.payroll.repository.DocumentUrl;
import com.greglturnquist.payroll.repository.Subject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SubjectTO {

    private static Map<Long, String> colorMap = new HashMap<>();

    private static final Map<Long, String> thumbnailMap = new HashMap();

    static {
        thumbnailMap.put(1L, "thumbnails/1877-01-07_01-00001.jpg");
        thumbnailMap.put(2L, "thumbnails/1877-01-09_01-00001.jpg");
        thumbnailMap.put(3l, "thumbnails/1877-01-13_01-00001.jpg");
        thumbnailMap.put(4L, "thumbnails/1877-02-03_01-00001.jpg");
        thumbnailMap.put(5L, "thumbnails/1877-02-10_01-00001.jpg");
        thumbnailMap.put(6L, "thumbnails/1877-04-01_01-00001.jpg");
        thumbnailMap.put(7L, "thumbnails/1877-09-30_01-00001.jpg");
        thumbnailMap.put(8L, "thumbnails/1877-10-20_01-00001.jpg");
    }

    private Long id;
    private String title;
    private String thumbnail;
    private List<String> url;


    public SubjectTO(Subject subject) {
        this.id = subject.getId();
        this.title = subject.getName();
        this.thumbnail = thumbnailMap.get(subject.getId()%7);
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
