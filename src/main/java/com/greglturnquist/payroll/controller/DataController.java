package com.greglturnquist.payroll.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.greglturnquist.payroll.data.*;
import com.greglturnquist.payroll.repository.Category;
import com.greglturnquist.payroll.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

@Controller
public class DataController {

    @Autowired
    private CategoryRepository categoryRepository;

    @RequestMapping(value = "/api/s", produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public String requestData() {

        List<CategoryTO> categoryTO = new ArrayList<>();
        for (Category category : categoryRepository.findAll()) {
            categoryTO.add(new CategoryTO(category));
        }

        Player1TO player1 = new Player1TO();
        Player2TO player2 = new Player2TO();
        DeckTO deckTO = new DeckTO();

        JsonArray jsonArray = new JsonArray();
        Gson gson = new GsonBuilder().create();

        List<CardTO> cards = createDeck(categoryTO);

        List<CardTO> player1Cards = getCards(cards, 5);
        player1.getHand().addAll(player1Cards);
        player1.displayCards(false);

        List<CardTO> player2Cards = getCards(cards, 5);
        player2.getHand().addAll(player2Cards);
        player2.displayCards(true);

        deckTO.getDeck().addAll(cards);
        deckTO.displayCards(false);

        jsonArray.add(gson.toJsonTree(categoryTO));
        jsonArray.add(gson.toJsonTree(player1));
        jsonArray.add(gson.toJsonTree(player2));
        jsonArray.add(gson.toJsonTree(deckTO));

        return gson.toJson(jsonArray);
    }

    private List<CardTO> getCards(List<CardTO> cards, int amount) {
        List<CardTO> myCards = new ArrayList<>();

        for (int i=0; i<amount; i++) {
            Random rand = new Random();
            int value = rand.nextInt(cards.size());
            myCards.add(new CardTO(cards.get(value)));
            cards.remove(cards.get(value));
        }
        return myCards;
    }


    private List<CardTO> createDeck(List<CategoryTO> categoryTOS) {
        List<CardTO> cards = new ArrayList<>();

        for (CategoryTO category : categoryTOS) {
            for (SubjectTO subject :category.getSubjects()) {
                String url = subject.getUrls().get(0);
                cards.add(new CardTO(category, subject, url, "hidden"));
            }
        }

        return cards;
    }
}
