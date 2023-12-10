package com.ryotakisse;

import jakarta.persistence.*;

import java.util.Date;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "jobOffer")

public class JobOffer {

    @Id
    @SequenceGenerator(name = "offer_id_sequence", sequenceName = "offer_id_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "offer_id_sequence")
    private Integer id;

    private String title;
    private  String description;
    private  String location;
    private  String type;
    private  String salary;
    private Date date;

    @ManyToMany
    Set<User> candidates;


    public JobOffer(){

    }

    public JobOffer(Integer id, String title, String description, String location, String type, String salary, Date date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.location = location;
        this.type = type;
        this.salary = salary;
        this.date = date;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void addCandidate(User user) {
        candidates.add(user);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        JobOffer jobOffer = (JobOffer) o;
        return Objects.equals(id, jobOffer.id) && Objects.equals(title, jobOffer.title) && Objects.equals(description, jobOffer.description) && Objects.equals(location, jobOffer.location) && Objects.equals(type, jobOffer.type) && Objects.equals(salary, jobOffer.salary) && Objects.equals(date, jobOffer.date);
    }

    public Set<User> getCandidates(){
        return candidates;
    }

    public void setCandidates(Set<User> candidates){
        this.candidates = candidates;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, description, location, type, salary, date);
    }

    @Override
    public String toString() {
        return "JobOffer{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", location='" + location + '\'' +
                ", type='" + type + '\'' +
                ", salary='" + salary + '\'' +
                ", date=" + date +
                '}';
    }
}
