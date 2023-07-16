import { useState } from "react";
import { createSearchParams, useNavigate
  // , useSearchParams 
} from 'react-router-dom'
import { ReactComponent as SearchLogo } from '../svg/searchIcon.svg';
import Layout from '../components/Layout'

import {
  Input,
  InputGroup,
  InputGroupText,
  Form
} from 'reactstrap';

import Aliens from '../dataFiles/aliens.json';
import Evolutions from '../dataFiles/evolutions.json';
import Hazards from '../dataFiles/hazards.json';
import Lux from '../dataFiles/lux.json';
import Moons from '../dataFiles/moons.json';
import Objectives from '../dataFiles/objectives.json';
import Stations from '../dataFiles/stations.json';
import Technology from '../dataFiles/technology.json';

function filterItems(search) {

  let filteredItems = Object.entries(Aliens.aliens)
  .filter((entry) => entry[1].original.name.toLowerCase().includes(search.toLowerCase()))
  .map((entry) => ["Aliens/" + entry[0], entry[1]]);

  filteredItems = filteredItems.concat(Object.entries(Evolutions.evolutions)
  .filter((entry) => entry[1].original.name.toLowerCase().includes(search.toLowerCase()))
  .map((entry) => ["Variants/Evolutions/" + entry[0], entry[1]])
  );

  filteredItems = filteredItems.concat(Object.entries(Hazards.hazards)
  .filter((entry) => entry[1].original.name.toLowerCase().includes(search.toLowerCase()))
  .map((entry) => ["Variants/Hazards/" + entry[0], entry[1]])
  );

  filteredItems = filteredItems.concat(Object.entries(Lux.lux)
  .filter((entry) => entry[1].original.name.toLowerCase().includes(search.toLowerCase()))
  .map((entry) => ["Variants/Lux/" + entry[0], entry[1]])
  );

  filteredItems = filteredItems.concat(Object.entries(Moons.moons)
  .filter((entry) => entry[1].original.name.toLowerCase().includes(search.toLowerCase()))
  .map((entry) => ["Variants/Moons/" + entry[0], entry[1]])
  );

  filteredItems = filteredItems.concat(Object.entries(Objectives.objectives)
  .filter((entry) => entry[1].original.name.toLowerCase().includes(search.toLowerCase()))
  .map((entry) => ["Variants/Objectives/" + entry[0], entry[1]])
  );

  filteredItems = filteredItems.concat(Object.entries(Stations.stations)
  .filter((entry) => entry[1].original.name.toLowerCase().includes(search.toLowerCase()))
  .map((entry) => ["Variants/Stations/" + entry[0], entry[1]])
  );

  filteredItems = filteredItems.concat(Object.entries(Technology.technologies)
  .filter((entry) => entry[1].original.name.toLowerCase().includes(search.toLowerCase()))
  .map((entry) => ["Variants/Techs/" + entry[0], entry[1]])
  );

  filteredItems.sort(function (a, b) {
    console.log(a)
      if (a[1].original.name < b[1].original.name) {
        return -1;
      }
      else if (a[1].original.name > b[1].original.name) {
        return 1;
      } else {
        return 0;
      }
  })

  return Object.fromEntries(filteredItems)

}

export default function Home() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="hero text-center">
        <h1 className="hero__title">The Praw</h1>
        <p className="hero__subtitle">A Fan-Made Website for <a href="https://futurepastimes.com/cosmic-encounter-board-game">Cosmic Encounter</a></p>
        <Form onSubmit={
            (event) => {
              event.preventDefault();
              const results = Object.entries(filterItems(searchQuery))
              if (results.length === 1) {
                navigate({
                  pathname: results[0][0]
                });
              } else {
                navigate({
                  pathname: `/Search`,
                  search: `?${createSearchParams([['search', searchQuery]])}`
                });
              }
            }}>
          <InputGroup>
            <Input placeholder="Search the Cosmos"
              value = {searchQuery}
              onChange={(e) => {
                if (!/[^ A-Za-z0-9\-,]/.test(e.target.value)){
                  setSearchQuery(e.target.value)
                }
              }} />
            <InputGroupText>
              <SearchLogo />
            </InputGroupText>
          </InputGroup>
        </Form>
      </section>
    </Layout>
  );
}