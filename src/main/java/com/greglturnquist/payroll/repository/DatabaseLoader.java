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

import com.greglturnquist.payroll.data.CultureDocuments;
import com.greglturnquist.payroll.data.EconomyDocuments;
import com.greglturnquist.payroll.data.ScienceDocuments;
import com.greglturnquist.payroll.data.SportDocuments;
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

    @Autowired
    private ScienceDocuments scienceDocuments;
    @Autowired
    private SportDocuments sportDocuments;
    @Autowired
    private EconomyDocuments economyDocuments;
    @Autowired
    private CultureDocuments cultureDocuments;

    @Autowired
    public DatabaseLoader(CategoryRepository repository, SubjectRepository subjectRepository) {
        this.categoryRepository = repository;
        this.subjectRepository = subjectRepository;
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
        subjects.add(createSubject("Astronomy").addAllDocument(scienceDocuments.createAstronomyDocuments()));
        subjects.add(createSubject("Biology").addAllDocument(scienceDocuments.createBiologyDocuments()));
        subjects.add(createSubject("Informatics").addAllDocument(scienceDocuments.createInformaticsDocuments()));
        subjects.add(createSubject("Health").addAllDocument(scienceDocuments.createHealthDocuments()));
        return subjects;
    }

    private List<Subject> createCultureSubjects() {
        ArrayList<Subject> subjects = new ArrayList<>();
        subjects.add(createSubject("Cinema").addAllDocument(cultureDocuments.createCinemaDocuments()));
        subjects.add(createSubject("Music").addAllDocument(cultureDocuments.createMusicDocuments()));
        subjects.add(createSubject("Spectacle").addAllDocument(cultureDocuments.createEventsDocuments()));
        subjects.add(createSubject("Literature").addAllDocument(cultureDocuments.createLiteratureDocuments()));
        subjects.add(createSubject("Television").addAllDocument(cultureDocuments.createTelevisionDocuments()));
        subjects.add(createSubject("Exposition").addAllDocument(cultureDocuments.createExpositionDocuments()));
        return subjects;
    }

    private List<Subject> createSportSubjects() {
        ArrayList<Subject> subjects = new ArrayList<>();
        subjects.add(createSubject("Football").addAllDocument(sportDocuments.createFootDocuments()));
        subjects.add(createSubject("Basketball").addAllDocument(sportDocuments.createBaseballDocuments()));
        subjects.add(createSubject("Tennis").addAllDocument(sportDocuments.createTennisDocuments()));
        subjects.add(createSubject("Cycling").addAllDocument(sportDocuments.createCyclingDocuments()));
        subjects.add(createSubject("Handball").addAllDocument(sportDocuments.createHandballDocuments()));
        subjects.add(createSubject("Rally").addAllDocument(sportDocuments.createRallyDocuments()));
        return subjects;
    }

    private List<Subject> createEconomySubjects() {
        ArrayList<Subject> subjects = new ArrayList<>();
        subjects.add(createSubject("International").addAllDocument(economyDocuments.createInternationalDocuments()));
        subjects.add(createSubject("National").addAllDocument(economyDocuments.createNationalDocuments()));
        subjects.add(createSubject("Job").addAllDocument(economyDocuments.createJobsDocuments()));
        subjects.add(createSubject("Market").addAllDocument(economyDocuments.createMarketDocuments()));
        subjects.add(createSubject("Real state").addAllDocument(economyDocuments.createRealStateDocuments()));
        subjects.add(createSubject("Macro economy").addAllDocument(economyDocuments.createMacroEconomyDocuments()));
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