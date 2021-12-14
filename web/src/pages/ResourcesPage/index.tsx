import React, { useCallback, useState } from "react";

import FlatList from "flatlist-react";
import {
  GiBookCover,
  GiDroplets,
  GiFireFlower,
  GiSwordSmithing,
  GiSwordwoman,
  GiTwoCoins,
} from "react-icons/gi";

import { ExpCounter, MoraCounter, ResourceCounter } from "../../components";

import { Resource, resources, ResourceType } from "../../data/resources";

import { Categories, CategoryButton, Container, Content } from "./styles";

const renderResourceListItem = (
  resource: Resource,
  key: number
): JSX.Element => {
  switch (resource.type) {
    case ResourceType.CommonCurrency:
      return <MoraCounter key={key} />;
    case ResourceType.CharacterExp:
      return <ExpCounter resourceId={resource.id} key={key} />;
    default:
      return <ResourceCounter resourceId={resource.id} key={key} />;
  }
};

const ResourcesPage: React.FC = () => {
  const [category, setCategory] = useState<ResourceType | string | null>(null);

  const categorySelection = (base: ResourceType | string) => {
    return () => setCategory((category) => (category !== base ? base : null));
  };

  const filter = useCallback(
    (item: Resource) => {
      if (category === "Mora and Exp") {
        return (
          item.type === ResourceType.CommonCurrency ||
          item.type === ResourceType.CharacterExp
        );
      }
      return category ? item.type === category : true;
    },
    [category]
  );

  return (
    <Container>
      <Categories>
        <CategoryButton
          data-title="Mora and Exp"
          selected={category === "Mora and Exp"}
          onClick={categorySelection("Mora and Exp")}
        >
          <GiTwoCoins />
          <span className="visuallyhidden">Mora and Exp</span>
        </CategoryButton>
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
          renderOnScroll
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
