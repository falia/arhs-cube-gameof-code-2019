package com.greglturnquist.payroll.data;

import com.greglturnquist.payroll.repository.Category;
import com.greglturnquist.payroll.repository.Subject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CategoryTO {

    private static Map<String, String> iconMap = new HashMap<>();
    private static Map<String, String> colorMap = new HashMap<>();

    static {
        iconMap.put("Economy", "/icons/icon-category-economy.png");
        iconMap.put("Politic", "/icons/icon-category-politic.png");
        iconMap.put("Sport", "/icons/icon-category-sport.png");
        iconMap.put("Science", "/icons/icon-category-technology.png");
        iconMap.put("Culture", "/icons/icon-category-music.png");

        colorMap.put("Economy", "#e9c996");
        colorMap.put("Politic", "#a5aee3");
        colorMap.put("Sport", "#74c764");
        colorMap.put("Science", "#47dde2");
        iconMap.put("Culture", "#de73b4");
    }

    private Long id;
    private String title;
    private String icon;
    private String color;
    private List<SubjectTO> subjects;


    public CategoryTO(Category category) {
        this.id = category.getId();
        this.title = category.getName();
        this.icon = iconMap.get(category.getName());
        this.color = colorMap.get(category.getName());
        for (Subject subject : category.getSubjects()) {
            SubjectTO subjectTO = new SubjectTO(subject);
            getSubjects().add(subjectTO);
        }
    }

    public CategoryTO(Long id, String title){
        this.id = id;
        this.title = title;
        this.icon = iconMap.get(title);
        this.color = colorMap.get(title);
    }

    public List<SubjectTO> getSubjects() {
        if (subjects == null) {
            subjects = new ArrayList<>();
        }
        return subjects;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIcon() {
        return icon;
    }

    public String getColor() {
        return color;
    }
}
