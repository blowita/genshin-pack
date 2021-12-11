import React, { useCallback } from "react";

import FlatList from "flatlist-react";
import { useRecoilState } from "recoil";

import { CharacterProgressCard } from "../../components";

import { characterIds } from "../../data/characters";

import {
  hideUncheckedCheckbox,
  lockAscensionsCheckbox,
  lockCharactersCheckbox,
  lockDesiredCheckbox,
} from "../../recoil/controls/CharactersPage";
import { characterStore, CharacterEntity } from "../../recoil/entities";

import { Container, Content, Controls } from "./styles";

const renderCharacterProgressCard = (
  character: CharacterEntity,
  key: number
): JSX.Element => (
  <CharacterProgressCard characterId={character.id} key={key} />
);

const CharactersPage: React.FC = () => {
  const characterList = characterStore.useEntityList(characterIds);

  const [hideUnchecked, setHideUnchecked] = useRecoilState(
    hideUncheckedCheckbox
  );
  const [lockAscensions, setLockAscensions] = useRecoilState(
    lockAscensionsCheckbox
  );
  const [lockCharacters, setLockCharacters] = useRecoilState(
    lockCharactersCheckbox
  );
  const [lockDesired, setLockDesired] = useRecoilState(lockDesiredCheckbox);

  const toggleHideUnchecked = useCallback(
    () => setHideUnchecked((value) => !value),
    [setHideUnchecked]
  );

  const toggleLockCharacters = useCallback(
    () => setLockCharacters((value) => !value),
    [setLockCharacters]
  );

  const toggleLockAscensions = useCallback(
    () => setLockAscensions((value) => !value),
    [setLockAscensions]
  );

  const toggleLockDesired = useCallback(
    () => setLockDesired((value) => !value),
    [setLockDesired]
  );

  const filter = useCallback(
    (character: CharacterEntity) => !hideUnchecked || character.enabled,
    [hideUnchecked]
  );

  return (
    <Container>
      <Controls>
        <label>
          <input
            type="checkbox"
            checked={hideUnchecked}
            onChange={toggleHideUnchecked}
          />
          <span>Show only characters you marked</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={lockCharacters}
            onChange={toggleLockCharacters}
          />
          <span>Lock characters</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={lockAscensions}
            onChange={toggleLockAscensions}
          />
          <span>Lock ascensions</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={lockDesired}
            onChange={toggleLockDesired}
          />
          <span>Lock desired</span>
        </label>
      </Controls>
      <Content>
        <FlatList
          list={characterList}
          renderItem={renderCharacterProgressCard}
          wrapperHtmlTag="div"
          renderWhenEmpty={() => <span>No items available.</span>}
          sortBy={["sortId"]}
          filterBy={filter}
        />
      </Content>
    </Container>
  );
};

export default CharactersPage;
