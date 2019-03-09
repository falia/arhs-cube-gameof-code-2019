package com.greglturnquist.payroll.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.greglturnquist.payroll.data.CategoryTO;
import com.greglturnquist.payroll.repository.Category;
import com.greglturnquist.payroll.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class DataController {

    @Autowired
    private CategoryRepository categoryRepository;

    @RequestMapping(value = "/api/data", produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    @ResponseBody
    public String requestData() {

        List<CategoryTO> categoryTO = new ArrayList<>();
        for (Category category : categoryRepository.findAll()) {
            categoryTO.add(new CategoryTO(category));
        }

        Gson gson = new GsonBuilder().create();
        return gson.toJson(categoryTO);
    }
}
