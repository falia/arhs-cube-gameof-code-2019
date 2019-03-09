package com.greglturnquist.payroll.data;

import com.greglturnquist.payroll.repository.DocumentUrl;
import com.greglturnquist.payroll.repository.DocumentUrlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ScienceDocuments {

    @Autowired
    private DocumentUrlRepository documentUrlRepository;

    public List<DocumentUrl> createAstronomyDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3223808&custom_att_2=direct")));
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1128690&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createBiologyDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1908423&custom_att_2=direct")));
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1908581&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createInformaticsDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1908278&custom_att_2=direct")));
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1836542&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createHealthDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=728617&custom_att_2=direct")));
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1908499&custom_att_2=direct")));
        return documents;
    }
}
