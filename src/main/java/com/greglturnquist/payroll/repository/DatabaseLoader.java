/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.greglturnquist.payroll.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Greg Turnquist
 */
// tag::code[]
@Component
public class DatabaseLoader implements CommandLineRunner {

    private final CategoryRepository categoryRepository;
    private final SubjectRepository subjectRepository;
    private final DocumentUrlRepository documentUrlRepository;

    @Autowired
    public DatabaseLoader(CategoryRepository repository, SubjectRepository subjectRepository, DocumentUrlRepository documentUrlRepository) {
        this.categoryRepository = repository;
        this.subjectRepository = subjectRepository;
        this.documentUrlRepository = documentUrlRepository;
    }

    @Override
    public void run(String... strings) throws Exception {

        createCategory("Sport", createSportSubjects());
        createCategory("Economy", createEconomySubjects());
        createCategory("Politic", createPoliticSubjects());
//        createCategory("People", createPeopleSubjects());
        createCategory("Culture", createCultureSubjects());
        createCategory("Science", createScienceSubjects());
    }

    private void createCategory(String name, List<Subject> subjects) {

        List<Subject> savedSubjects = new ArrayList<>();

        for(Subject s : subjects) {
            savedSubjects.add(this.subjectRepository.save(s));
        }

        Category c = new Category(name);
        c.setSubjects(savedSubjects);

        this.categoryRepository.save(c);
    }

    private List<Subject> createScienceSubjects() {
        ArrayList<Subject> subjects = new ArrayList<>();
        subjects.add(createSubject("Astronomy").addAllDocument(createAstronomyDocuments()));
        subjects.add(createSubject("Biology").addAllDocument(createBiologyDocuments()));
        subjects.add(createSubject("Informatics"));
        subjects.add(createSubject("Health"));
        return subjects;
    }

    private List<DocumentUrl> createAstronomyDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3223808&custom_att_2=direct")));
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1128690&custom_att_2=direct")));
        return documents;
    }

    private List<DocumentUrl> createBiologyDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1908423&custom_att_2=direct")));
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1908581&custom_att_2=direct")));
        return documents;
    }

    private List<Subject> createCultureSubjects() {
        ArrayList<Subject> subjects = new ArrayList<>();
        subjects.add(createSubject("Cinema"));
        subjects.add(createSubject("Music"));
        subjects.add(createSubject("Spectacle"));
        subjects.add(createSubject("Literature"));
        subjects.add(createSubject("Television"));
        subjects.add(createSubject("Exposition"));
        return subjects;
    }

    private List<Subject> createSportSubjects() {
        ArrayList<Subject> subjects = new ArrayList<>();
        subjects.add(createSubject("Football"));
        subjects.add(createSubject("Basketball"));
        subjects.add(createSubject("Tennis"));
        subjects.add(createSubject("Cycling"));
        subjects.add(createSubject("Handball"));
        subjects.add(createSubject("Rally"));
        return subjects;
    }

    private List<Subject> createEconomySubjects() {
        ArrayList<Subject> subjects = new ArrayList<>();
        subjects.add(createSubject("International"));
        subjects.add(createSubject("National"));
        subjects.add(createSubject("Job"));
        subjects.add(createSubject("Market"));
        subjects.add(createSubject("Real state"));
        subjects.add(createSubject("Macro economy"));
        return subjects;
    }

    private List<Subject> createPoliticSubjects() {
        ArrayList<Subject> subjects = new ArrayList<>();
        subjects.add(createSubject("Social"));
        subjects.add(createSubject("Society"));
        subjects.add(createSubject("International"));
        subjects.add(createSubject("Education"));
        subjects.add(createSubject("Ecology"));
        return subjects;
    }



    private Subject createSubject(String name) {
        Subject subject = new Subject(name);
        subject = this.subjectRepository.save(subject);
        return subject;
    }
}
// end::code[]