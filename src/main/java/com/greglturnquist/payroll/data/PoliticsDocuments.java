package com.greglturnquist.payroll.data;

import com.greglturnquist.payroll.repository.DocumentUrl;
import com.greglturnquist.payroll.repository.DocumentUrlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PoliticsDocuments {

    @Autowired
    private DocumentUrlRepository documentUrlRepository;

    public List<DocumentUrl> createSocialDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3621180&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1836594&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createSocietyDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1421989&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=165911&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createInternationalDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3494605&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3494929&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createEducationDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1769663&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1769663&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createEcologyDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3714743&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1770226&custom_att_2=direct")));
        return documents;
    }

}
