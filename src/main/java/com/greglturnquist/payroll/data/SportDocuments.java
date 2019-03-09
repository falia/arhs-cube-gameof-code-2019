package com.greglturnquist.payroll.data;

import com.greglturnquist.payroll.repository.DocumentUrl;
import com.greglturnquist.payroll.repository.DocumentUrlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SportDocuments {

    @Autowired
    private DocumentUrlRepository documentUrlRepository;

    public List<DocumentUrl> createFootDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=728019&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1908356&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createTennisDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=2305598&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=2352522&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createBaseballDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=840928&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1276414&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createCyclingDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1276159&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=1371440&custom_att_2=direct")));
        return documents;
    }

    public List<DocumentUrl> createHandballDocuments() {
        List<DocumentUrl> documents = new ArrayList<>();
        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3494329&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3494334&custom_att_2=direct")));
        return documents;
    }

//    public List<DocumentUrl> createRallyDocuments() {
//        List<DocumentUrl> documents = new ArrayList<>();
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3292325&custom_att_2=direct")));
//        documents.add(documentUrlRepository.save(new DocumentUrl("http://www.eluxemburgensia.lu/webclient/DeliveryManager?pid=3292326&custom_att_2=direct")));
//        return documents;
//    }
}
