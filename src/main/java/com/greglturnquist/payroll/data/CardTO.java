package com.greglturnquist.payroll.data;

public class CardTO {

    private CategoryTO category;

    private SubjectTO subject;

    private String status;

    private String url;

    public CardTO(CategoryTO category, SubjectTO subject, String url, String status) {
        this.category = new CategoryTO(category.getId(), category.getTitle());
        this.subject = new SubjectTO(subject.getId(), subject.getTitle(), subject.getThumbnail());
        this.url = url;
        this.status = status;
    }

    public CardTO(CardTO cardTO) {
        this.setCategory(cardTO.getCategory());
        this.setSubject(cardTO.getSubject());
        this.status = cardTO.getStatus();
        this.url = cardTO.getUrl();
    }

    public CategoryTO getCategory() {
        return category;
    }

    public void setCategory(CategoryTO category) {
        this.category = category;
    }

    public SubjectTO getSubject() {
        return subject;
    }

    public void setSubject(SubjectTO subject) {
        this.subject = subject;
    }

    public String getStatus() {
        return status;
    }

    public String getUrl() {
        return url;
    }
}
