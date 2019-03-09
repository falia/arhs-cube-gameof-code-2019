package com.greglturnquist.payroll.data;

import com.greglturnquist.payroll.repository.Category;
import com.greglturnquist.payroll.repository.Subject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CategoryTO {

    private static Map<Long, String> iconMap = new HashMap<>();
    private static Map<Long, String> colorMap = new HashMap<>();

    static {
        iconMap.put(1L, "/icons/icon-category-economy.png");
        iconMap.put(2L, "/icons/icon-category-politic.png");
        iconMap.put(3L, "/icons/icon-category-sport.png");
        iconMap.put(4L, "/icons/icon-category-technology.png");

        colorMap.put(1L, "#e9c996");
        colorMap.put(2L, "#a5aee3");
        colorMap.put(3L, "#74c764");
        colorMap.put(4L, "#836123");
    }

    private Long id;
    private String title;
    private String icon;
    private String color;
    private List<Subject> subjects = new ArrayList<>();


    public CategoryTO(Category category) {
        this.id = category.getId();
        this.title = category.getName();
        this.icon = iconMap.get(category.getId());
        this.color = colorMap.get(category.getId());
        for (Subject subject : category.getSubjects()) {
            this.subjects.add(subject);
        }
    }
}
