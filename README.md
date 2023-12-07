[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Professionnel-Social-Platform

Development of a web application for sharing job offers to connect recruiters and job seekers. Recruiters can post job offers, review profiles of candidates with relevant qualifications, and contact them if necessary.

---

<h3>Screen</h3>

![alt](screens/scr1.png)

---

> run applictaion
> enter my database and play with my data

first : create my docker container
we have in our root back-end project file named : docker-compose.yml
we can run this command : docker compose up -d
after : docker compose ps
enter ur container in interactive mode : sudo docker exec -it postgres bash
to use psql : psql -U ayoubkassi
switch into our db : \c talenthunter
show tables : \dt
