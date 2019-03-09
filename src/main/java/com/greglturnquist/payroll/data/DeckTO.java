package com.greglturnquist.payroll.data;

import java.util.ArrayList;
import java.util.List;

public class DeckTO {

    private List<CardTO> deck;

    public List<CardTO> getDeck() {
        if (deck == null) {
            deck = new ArrayList<>();
        }
        return deck;
    }

    public void setDeck(List<CardTO> deck) {
        this.deck = deck;
    }


    public void displayCards(Boolean isVisible) {
        for (CardTO card :deck) {
            card.setStatus(isVisible?"visible":"hidden");
        }
    }
}
