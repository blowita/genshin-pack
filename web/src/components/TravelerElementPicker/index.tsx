/* eslint-disable jsx-a11y/no-autofocus */
import React, { useCallback, useEffect, useState } from "react";

import { FaCaretDown } from "react-icons/fa";

import { CharacterId, ElementType } from "../../data/characters";

import { characterStore } from "../../recoil/entities";

import {
  Button,
  CharacterElement,
  Container,
  DropdownList,
  DropdownListItem,
} from "./styles";

interface TravelerElementPickerProps {
  disabled: boolean;
}

const focusable = [ElementType.Anemo, ElementType.Geo, ElementType.Electro];

const TravelerElementPicker: React.FC<TravelerElementPickerProps> = ({
  disabled,
}) => {
  const character = characterStore.useEntityValue(CharacterId.Traveler);
  const patchCharacter = characterStore.usePatchEntity(CharacterId.Traveler);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState(
    character.travelerCurrentElement ?? ElementType.Anemo
  );

  const changeElement = useCallback(
    (element: ElementType) => {
      if (element !== character.travelerCurrentElement) {
        patchCharacter({ travelerCurrentElement: element });
      }
      document.getElementById("traveler-element-picker-button")?.focus();
      setDropdownOpen(false);
    },
    [character, patchCharacter, setDropdownOpen]
  );

  const toggleDropdownList = useCallback(() => {
    if (!dropdownOpen) {
      for (let i = 0; i < focusable.length; i++) {
        if (character.travelerCurrentElement === focusable[i]) {
          document.getElementById(`ddi-${focusable[i]}`)?.focus();
          setSelectedElement(focusable[i]);
          break;
        }
      }
    }
    setDropdownOpen(!dropdownOpen);
  }, [character, dropdownOpen, setSelectedElement]);

  useEffect(() => {
    if (dropdownOpen) {
      for (let i = 0; i < focusable.length; i++) {
        if (selectedElement === focusable[i]) {
          document.getElementById(`ddi-${focusable[i]}`)?.focus();
          break;
        }
      }
      const eventListener = (e: KeyboardEvent): void => {
        if (e.key === "Tab") {
          e.preventDefault();
          if (e.shiftKey) {
            for (let i = 0; i < focusable.length; i++) {
              if (selectedElement === focusable[i]) {
                const idx = (focusable.length + i - 1) % focusable.length;
                document.getElementById(`ddi-${focusable[idx]}`)?.focus();
                setSelectedElement(focusable[idx]);
                break;
              }
            }
          } else {
            for (let i = 0; i < focusable.length; i++) {
              if (selectedElement === focusable[i]) {
                const idx = (i + 1) % focusable.length;
                document.getElementById(`ddi-${focusable[idx]}`)?.focus();
                setSelectedElement(focusable[idx]);
                break;
              }
            }
          }
        }
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          for (let i = 0; i < focusable.length; i++) {
            if (selectedElement === focusable[i]) {
              const idx = (i + 1) % focusable.length;
              document.getElementById(`ddi-${focusable[idx]}`)?.focus();
              setSelectedElement(focusable[idx]);
              break;
            }
          }
        }
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          for (let i = 0; i < focusable.length; i++) {
            if (selectedElement === focusable[i]) {
              const idx = (focusable.length + i - 1) % focusable.length;
              document.getElementById(`ddi-${focusable[idx]}`)?.focus();
              setSelectedElement(focusable[idx]);
              break;
            }
          }
        }
        if (e.key === "Home") {
          e.preventDefault();
          document.getElementById(`ddi-${focusable[0]}`)?.focus();
          setSelectedElement(focusable[0]);
        }
        if (e.key === "End") {
          e.preventDefault();
          document
            .getElementById(`ddi-${focusable[focusable.length - 1]}`)
            ?.focus();
          setSelectedElement(focusable[focusable.length - 1]);
        }
        if (e.key === "Escape") {
          e.preventDefault();
          changeElement(character.travelerCurrentElement ?? ElementType.Anemo);
        }
      };

      document.addEventListener("keydown", eventListener);

      return () => document.removeEventListener("keydown", eventListener);
    }
  }, [
    character,
    changeElement,
    dropdownOpen,
    selectedElement,
    setSelectedElement,
  ]);

  return (
    <Container>
      <span id="element-picker-title" className="visuallyhidden">
        Pick Traveler&apos;s element:
      </span>
      <Button
        onClick={toggleDropdownList}
        disabled={disabled}
        id="traveler-element-picker-button"
        aria-labelledby="element-picker-title traveler-current-element"
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
      >
        <CharacterElement data-title={character.travelerCurrentElement}>
          <span id="traveler-current-element" className="visuallyhidden">
            {character.travelerCurrentElement}
          </span>
        </CharacterElement>
        <FaCaretDown />
      </Button>
      {dropdownOpen && (
        <DropdownList
          role="listbox"
          aria-labelledby="element-picker-title"
          tabIndex={-1}
          aria-activedescendant={`ddi-${selectedElement}`}
        >
          <DropdownListItem
            onClick={() => changeElement(ElementType.Anemo)}
            role="option"
            id={`ddi-${ElementType.Anemo}`}
            aria-selected={selectedElement === ElementType.Anemo}
          >
            <CharacterElement data-title="Anemo">
              <span className="visuallyhidden">Anemo</span>
            </CharacterElement>
          </DropdownListItem>
          <DropdownListItem
            onClick={() => changeElement(ElementType.Geo)}
            role="option"
            id={`ddi-${ElementType.Geo}`}
            aria-selected={selectedElement === ElementType.Geo}
          >
            <CharacterElement data-title="Geo">
              <span className="visuallyhidden">Geo</span>
            </CharacterElement>
          </DropdownListItem>
          <DropdownListItem
            onClick={() => changeElement(ElementType.Electro)}
            role="option"
            id={`ddi-${ElementType.Electro}`}
            aria-selected={selectedElement === ElementType.Electro}
          >
            <CharacterElement data-title="Electro">
              <span className="visuallyhidden">Electro</span>
            </CharacterElement>
          </DropdownListItem>
        </DropdownList>
      )}
    </Container>
  );
};

export default TravelerElementPicker;
