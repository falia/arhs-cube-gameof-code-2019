package com.greglturnquist.payroll.data;

import java.util.ArrayList;
import java.util.List;

public class Player1TO {

    private List<CardTO> player1;

    private SummaryTO summary;

    public Player1TO() {
        this.summary = new SummaryTO(0);
    }

    public List<CardTO> getHand() {
        if (player1 == null) {
            player1 = new ArrayList<>();
        }
        return player1;
    }

    public SummaryTO getSummary() {
        return summary;
    }

    public void setSummary(SummaryTO summary) {
        this.summary = summary;
    }
}
