import React, { useCallback, useState } from "react";

import FlatList from "flatlist-react";
import {
  GiBookCover,
  GiDroplets,
  GiFireFlower,
  GiSwordSmithing,
  GiSwordwoman,
} from "react-icons/gi";

import { ExpCounter, MoraCounter, ResourceCounter } from "../../components";

import { Resource, resources, ResourceType } from "../../data/resources";

import { Categories, CategoryButton, Container, Content } from "./styles";

let moraStock = 0;

const stocks = resources.map((item) => ({
  name: item.name,
  stock: 0,
}));

const targets = resources.map((item) => ({
  name: item.name,
  target: Math.floor(Math.random() * 999),
}));

const renderResourceListItem = (
  resource: Resource,
  key: number
): JSX.Element => {
  switch (resource.type) {
    case ResourceType.CommonCurrency:
      return (
        <MoraCounter
          count={moraStock}
          setCount={(value) => (moraStock = value)}
          key={key}
        />
      );
    case ResourceType.CharacterExp:
      return (
        <ExpCounter
          resource={resource}
          count={stocks[key].stock}
          setCount={(value) => (stocks[key].stock = value)}
          key={key}
        />
      );
    default:
      return (
        <ResourceCounter
          resource={resource}
          count={stocks[key].stock}
          setCount={(value) => (stocks[key].stock = value)}
          target={targets[key].target}
          key={key}
        />
      );
  }
};

const ResourcesPage: React.FC = () => {
  const [category, setCategory] = useState<ResourceType | null>(null);

  const categorySelection = (base: ResourceType) => {
    return () => setCategory((category) => (category !== base ? base : null));
  };

  const filter = useCallback(
    (item: Resource) => (category ? item.type === category : true),
    [category]
  );

  return (
    <Container>
      <Categories>
        <CategoryButton
          data-title="Monster Drops"
          selected={category === ResourceType.CommonAscension}
          onClick={categorySelection(ResourceType.CommonAscension)}
        >
          <GiDroplets />
          <span className="visuallyhidden">Monster Drops</span>
        </CategoryButton>
        <CategoryButton
          data-title="Character Ascension"
          selected={category === ResourceType.CharacterAscension}
          onClick={categorySelection(ResourceType.CharacterAscension)}
        >
          <GiSwordwoman />
          <span className="visuallyhidden">Character Ascension</span>
        </CategoryButton>
        <CategoryButton
          data-title="Talent Level-Up"
          selected={category === ResourceType.TalentLevelUp}
          onClick={categorySelection(ResourceType.TalentLevelUp)}
        >
          <GiBookCover />
          <span className="visuallyhidden">Talent Level-Up</span>
        </CategoryButton>
        <CategoryButton
          data-title="Weapon Ascension"
          selected={category === ResourceType.WeaponAscension}
          onClick={categorySelection(ResourceType.WeaponAscension)}
        >
          <GiSwordSmithing />
          <span className="visuallyhidden">Weapon Ascension</span>
        </CategoryButton>
        <CategoryButton
          data-title="Local Specialty"
          selected={category === ResourceType.LocalSpecialty}
          onClick={categorySelection(ResourceType.LocalSpecialty)}
        >
          <GiFireFlower />
          <span className="visuallyhidden">Local Specialty</span>
        </CategoryButton>
      </Categories>
      <Content>
        <FlatList
          list={resources}
          renderItem={renderResourceListItem}
          wrapperHtmlTag="div"
          renderWhenEmpty={() => <span>No items available.</span>}
          sortBy={["sortId"]}
          filterBy={filter}
        />
      </Content>
    </Container>
  );
};

export default ResourcesPage;
