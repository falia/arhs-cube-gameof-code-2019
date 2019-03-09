package com.greglturnquist.payroll.data;

import com.greglturnquist.payroll.repository.DocumentUrl;
import com.greglturnquist.payroll.repository.DocumentUrlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CultureDocuments {

    @Autowired
    private DocumentUrlRepository documentUrlRepository;

    public List<DocumentUrl> createCinemaDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1908865&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1908885&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createMusicDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3493494&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3443533&custom_att_2=direct")));
        return documents;
    }

//    public List<DocumentUrl> createEventsDocuments() {
//        List<DocumentUrl> documents = new ArrayList<>();
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3494174&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3494225&custom_att_2=direct")));
//        return documents;
//    }

    public List<DocumentUrl> createLiteratureDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1908571&custom_att_2=direct")));
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1908548&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createTelevisionDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1836619&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1769858&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createExpositionDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3494493&custom_att_2=direct")));
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3494714&custom_att_2=direct")));
        return documents;
    }

}
