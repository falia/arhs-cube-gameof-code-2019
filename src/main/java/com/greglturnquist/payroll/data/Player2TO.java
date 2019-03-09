package com.greglturnquist.payroll.data;

import java.util.ArrayList;
import java.util.List;

public class Player2TO {

    private List<CardTO> player2;

    private SummaryTO summary;

    public Player2TO() {
        this.summary = new SummaryTO(0);
    }

    public List<CardTO> getHand() {
        if (player2 == null) {
            player2 = new ArrayList<>();
        }
        return player2;
    }

    public SummaryTO getSummary() {
        return summary;
    }

    public void setSummary(SummaryTO summary) {
        this.summary = summary;
    }
}
