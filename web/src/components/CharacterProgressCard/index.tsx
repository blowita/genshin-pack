import React, { useCallback, useMemo } from "react";

import { FaAngleDoubleDown, FaForward } from "react-icons/fa";
import { useRecoilValue } from "recoil";

import { ReactComponent as AscensionStar } from "../../assets/AscensionStar.svg";

import { ElementType, travelerId } from "../../data/characters";
import { ascensionLimits, talentLimits } from "../../data/levelingData";

import {
  lockAscensionsCheckbox,
  lockCharactersCheckbox,
  lockDesiredCheckbox,
} from "../../recoil/controls/CharactersPage";
import {
  CharacterEntity,
  characterStore,
  TalentProgress,
  TravelerTalentProgress,
} from "../../recoil/entities";

import CharacterAvatar from "../CharacterAvatar";

import {
  Avatar,
  AscensionProgressFieldset,
  CharacterElement,
  CharacterInfo,
  CharacterName,
  CharacterNameTooltip,
  CharacterToggle,
  CharacterWeapon,
  Container,
  Filler,
  LevelProgress,
  Talents,
} from "./styles";

const isLevel = /^[1-9][0-9]*$/;
const isTalentLevel = /^(10)|[1-9]$/;

interface CharacterProgressProps {
  characterId: string;
}

const CharacterProgress: React.FC<CharacterProgressProps> = ({
  characterId,
}) => {
  const character = characterStore.useEntityValue(characterId);
  const patchCharacter = characterStore.usePatchEntity(characterId);

  const lockAscension = useRecoilValue(lockAscensionsCheckbox);
  const lockCharacter = useRecoilValue(lockCharactersCheckbox);
  const lockDesired = useRecoilValue(lockDesiredCheckbox);

  const toggleEnabled = useCallback(() => {
    patchCharacter({ enabled: !character.enabled });
  }, [character, patchCharacter]);

  const changeAscensionProgress = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const current = Number(event.target.value);
      let patch = {
        ascension: {
          current,
          desired: Math.max(current, character.ascension.desired),
        },
        level: {
          ...character.level,
        },
        talentLevels: {
          ...character.talentLevels,
        },
      };
      if (ascensionLimits[current] < patch.level.current) {
        patch.level.current = ascensionLimits[current];
      }
      if (current > 0 && patch.level.current < ascensionLimits[current - 1]) {
        patch.level.current = ascensionLimits[current - 1];
      }
      if (patch.level.desired < ascensionLimits[patch.ascension.desired - 1]) {
        patch.level.desired = ascensionLimits[patch.ascension.desired - 1];
      }
      if (character.id === travelerId) {
        const talents = patch.talentLevels as TravelerTalentProgress;
        patch = {
          ...patch,
          talentLevels: {
            [ElementType.Anemo]: {
              attack: {
                ...talents[ElementType.Anemo].attack,
                current: Math.min(
                  talents[ElementType.Anemo].attack.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              skill: {
                ...talents[ElementType.Anemo].skill,
                current: Math.min(
                  talents[ElementType.Anemo].skill.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              burst: {
                ...talents[ElementType.Anemo].burst,
                current: Math.min(
                  talents[ElementType.Anemo].burst.current,
                  talentLimits[patch.ascension.current]
                ),
              },
            },
            [ElementType.Cryo]: {
              attack: {
                ...talents[ElementType.Cryo].attack,
                current: Math.min(
                  talents[ElementType.Cryo].attack.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              skill: {
                ...talents[ElementType.Cryo].skill,
                current: Math.min(
                  talents[ElementType.Cryo].skill.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              burst: {
                ...talents[ElementType.Cryo].burst,
                current: Math.min(
                  talents[ElementType.Cryo].burst.current,
                  talentLimits[patch.ascension.current]
                ),
              },
            },
            [ElementType.Dendro]: {
              attack: {
                ...talents[ElementType.Dendro].attack,
                current: Math.min(
                  talents[ElementType.Dendro].attack.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              skill: {
                ...talents[ElementType.Dendro].skill,
                current: Math.min(
                  talents[ElementType.Dendro].skill.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              burst: {
                ...talents[ElementType.Dendro].burst,
                current: Math.min(
                  talents[ElementType.Dendro].burst.current,
                  talentLimits[patch.ascension.current]
                ),
              },
            },
            [ElementType.Electro]: {
              attack: {
                ...talents[ElementType.Electro].attack,
                current: Math.min(
                  talents[ElementType.Electro].attack.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              skill: {
                ...talents[ElementType.Electro].skill,
                current: Math.min(
                  talents[ElementType.Electro].skill.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              burst: {
                ...talents[ElementType.Electro].burst,
                current: Math.min(
                  talents[ElementType.Electro].burst.current,
                  talentLimits[patch.ascension.current]
                ),
              },
            },
            [ElementType.Geo]: {
              attack: {
                ...talents[ElementType.Geo].attack,
                current: Math.min(
                  talents[ElementType.Geo].attack.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              skill: {
                ...talents[ElementType.Geo].skill,
                current: Math.min(
                  talents[ElementType.Geo].skill.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              burst: {
                ...talents[ElementType.Geo].burst,
                current: Math.min(
                  talents[ElementType.Geo].burst.current,
                  talentLimits[patch.ascension.current]
                ),
              },
            },
            [ElementType.Hydro]: {
              attack: {
                ...talents[ElementType.Hydro].attack,
                current: Math.min(
                  talents[ElementType.Hydro].attack.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              skill: {
                ...talents[ElementType.Hydro].skill,
                current: Math.min(
                  talents[ElementType.Hydro].skill.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              burst: {
                ...talents[ElementType.Hydro].burst,
                current: Math.min(
                  talents[ElementType.Hydro].burst.current,
                  talentLimits[patch.ascension.current]
                ),
              },
            },
            [ElementType.Pyro]: {
              attack: {
                ...talents[ElementType.Pyro].attack,
                current: Math.min(
                  talents[ElementType.Pyro].attack.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              skill: {
                ...talents[ElementType.Pyro].skill,
                current: Math.min(
                  talents[ElementType.Pyro].skill.current,
                  talentLimits[patch.ascension.current]
                ),
              },
              burst: {
                ...talents[ElementType.Pyro].burst,
                current: Math.min(
                  talents[ElementType.Pyro].burst.current,
                  talentLimits[patch.ascension.current]
                ),
              },
            },
          },
        };
      } else {
        const talents = patch.talentLevels as TalentProgress;
        patch = {
          ...patch,
          talentLevels: {
            attack: {
              ...talents.attack,
              current: Math.min(
                talents.attack.current,
                talentLimits[patch.ascension.current]
              ),
            },
            skill: {
              ...talents.skill,
              current: Math.min(
                talents.skill.current,
                talentLimits[patch.ascension.current]
              ),
            },
            burst: {
              ...talents.burst,
              current: Math.min(
                talents.burst.current,
                talentLimits[patch.ascension.current]
              ),
            },
          },
        };
      }
      patchCharacter(patch);
    },
    [character, patchCharacter]
  );

  const changeDesiredAscensionProgress = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const desired = Number(event.target.value);
      let patch = {
        ascension: {
          ...character.ascension,
          desired: Math.max(character.ascension.current, desired),
        },
        level: {
          ...character.level,
        },
        talentLevels: {
          ...character.talentLevels,
        },
      };
      if (ascensionLimits[desired] < patch.level.desired) {
        patch.level.desired = ascensionLimits[desired];
      }
      if (desired > 0 && patch.level.desired < ascensionLimits[desired - 1]) {
        patch.level.desired = ascensionLimits[desired - 1];
      }
      if (character.id === travelerId) {
        const talents = patch.talentLevels as TravelerTalentProgress;
        patch = {
          ...patch,
          talentLevels: {
            [ElementType.Anemo]: {
              attack: {
                ...talents[ElementType.Anemo].attack,
                desired: Math.min(
                  talents[ElementType.Anemo].attack.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              skill: {
                ...talents[ElementType.Anemo].skill,
                desired: Math.min(
                  talents[ElementType.Anemo].skill.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              burst: {
                ...talents[ElementType.Anemo].burst,
                desired: Math.min(
                  talents[ElementType.Anemo].burst.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
            },
            [ElementType.Cryo]: {
              attack: {
                ...talents[ElementType.Cryo].attack,
                desired: Math.min(
                  talents[ElementType.Cryo].attack.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              skill: {
                ...talents[ElementType.Cryo].skill,
                desired: Math.min(
                  talents[ElementType.Cryo].skill.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              burst: {
                ...talents[ElementType.Cryo].burst,
                desired: Math.min(
                  talents[ElementType.Cryo].burst.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
            },
            [ElementType.Dendro]: {
              attack: {
                ...talents[ElementType.Dendro].attack,
                desired: Math.min(
                  talents[ElementType.Dendro].attack.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              skill: {
                ...talents[ElementType.Dendro].skill,
                desired: Math.min(
                  talents[ElementType.Dendro].skill.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              burst: {
                ...talents[ElementType.Dendro].burst,
                desired: Math.min(
                  talents[ElementType.Dendro].burst.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
            },
            [ElementType.Electro]: {
              attack: {
                ...talents[ElementType.Electro].attack,
                desired: Math.min(
                  talents[ElementType.Electro].attack.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              skill: {
                ...talents[ElementType.Electro].skill,
                desired: Math.min(
                  talents[ElementType.Electro].skill.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              burst: {
                ...talents[ElementType.Electro].burst,
                desired: Math.min(
                  talents[ElementType.Electro].burst.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
            },
            [ElementType.Geo]: {
              attack: {
                ...talents[ElementType.Geo].attack,
                desired: Math.min(
                  talents[ElementType.Geo].attack.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              skill: {
                ...talents[ElementType.Geo].skill,
                desired: Math.min(
                  talents[ElementType.Geo].skill.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              burst: {
                ...talents[ElementType.Geo].burst,
                desired: Math.min(
                  talents[ElementType.Geo].burst.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
            },
            [ElementType.Hydro]: {
              attack: {
                ...talents[ElementType.Hydro].attack,
                desired: Math.min(
                  talents[ElementType.Hydro].attack.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              skill: {
                ...talents[ElementType.Hydro].skill,
                desired: Math.min(
                  talents[ElementType.Hydro].skill.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              burst: {
                ...talents[ElementType.Hydro].burst,
                desired: Math.min(
                  talents[ElementType.Hydro].burst.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
            },
            [ElementType.Pyro]: {
              attack: {
                ...talents[ElementType.Pyro].attack,
                desired: Math.min(
                  talents[ElementType.Pyro].attack.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              skill: {
                ...talents[ElementType.Pyro].skill,
                desired: Math.min(
                  talents[ElementType.Pyro].skill.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
              burst: {
                ...talents[ElementType.Pyro].burst,
                desired: Math.min(
                  talents[ElementType.Pyro].burst.desired,
                  talentLimits[patch.ascension.desired]
                ),
              },
            },
          },
        };
      } else {
        const talents = patch.talentLevels as TalentProgress;
        patch = {
          ...patch,
          talentLevels: {
            attack: {
              ...talents.attack,
              desired: Math.min(
                talents.attack.desired,
                talentLimits[patch.ascension.desired]
              ),
            },
            skill: {
              ...talents.skill,
              desired: Math.min(
                talents.skill.desired,
                talentLimits[patch.ascension.desired]
              ),
            },
            burst: {
              ...talents.burst,
              desired: Math.min(
                talents.burst.desired,
                talentLimits[patch.ascension.desired]
              ),
            },
          },
        };
      }
      patchCharacter(patch);
    },
    [character, patchCharacter]
  );

  const changeCurrentLevel = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isLevel.test(event.target.value)) {
        const current = Number(event.target.value);
        const patch = {
          level: {
            current: Math.min(
              Math.max(
                current,
                character.ascension.current > 0
                  ? ascensionLimits[character.ascension.current - 1]
                  : 1
              ),
              ascensionLimits[character.ascension.current]
            ),
            desired: Math.min(
              Math.max(current, character.level.desired),
              ascensionLimits[character.ascension.desired]
            ),
          },
        };
        patchCharacter(patch);
      }
    },
    [character, patchCharacter]
  );

  const changeDesiredLevel = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isLevel.test(event.target.value)) {
        const desired = Number(event.target.value);
        patchCharacter({
          level: {
            ...character.level,
            desired: Math.min(
              Math.max(
                character.level.current,
                desired,
                character.ascension.desired > 0
                  ? ascensionLimits[character.ascension.desired - 1]
                  : 1
              ),
              ascensionLimits[character.ascension.desired]
            ),
          },
        });
      }
    },
    [character, patchCharacter]
  );

  const talentProgress = useMemo((): TalentProgress => {
    if (character.id === travelerId) {
      const element = character.travelerCurrentElement as keyof TravelerTalentProgress;
      const talents = character.talentLevels as TravelerTalentProgress;
      return talents[element];
    } else {
      return character.talentLevels as TalentProgress;
    }
  }, [character]);

  const changeCurrentTalentProgress = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isTalentLevel.test(event.target.value)) {
        const talentKey = event.target.name as keyof TalentProgress;
        const current = Number(event.target.value);
        let patch: Partial<CharacterEntity>;
        let talent: TalentProgress;
        if (character.id === travelerId) {
          const element = character.travelerCurrentElement as keyof TravelerTalentProgress;
          const talents = character.talentLevels as TravelerTalentProgress;
          patch = {
            talentLevels: {
              ...talents,
              [element]: {
                ...talents[element],
                [talentKey]: {
                  current: Math.min(
                    current,
                    talentLimits[character.ascension.current]
                  ),
                  desired: Math.max(
                    Math.min(
                      current,
                      talentLimits[character.ascension.current]
                    ),
                    talents[element][talentKey].desired
                  ),
                },
              },
            },
          };
        } else {
          talent = character.talentLevels as TalentProgress;
          patch = {
            talentLevels: {
              ...talent,
              [talentKey]: {
                current: Math.min(
                  current,
                  talentLimits[character.ascension.current]
                ),
                desired: Math.max(
                  Math.min(current, talentLimits[character.ascension.current]),
                  talent[talentKey].desired
                ),
              },
            },
          };
        }
        patchCharacter(patch);
      }
    },
    [character, patchCharacter]
  );

  const changeDesiredTalentProgress = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isTalentLevel.test(event.target.value)) {
        const talentKey = event.target.name as keyof TalentProgress;
        const desired = Number(event.target.value);
        let patch: Partial<CharacterEntity>;
        let talent: TalentProgress;
        if (character.id === travelerId) {
          const element = character.travelerCurrentElement as keyof TravelerTalentProgress;
          const talents = character.talentLevels as TravelerTalentProgress;
          patch = {
            talentLevels: {
              ...talents,
              [element]: {
                ...talents[element],
                [talentKey]: {
                  ...talents[element].attack,
                  desired: Math.max(
                    talents[element][talentKey].current,
                    Math.min(desired, talentLimits[character.ascension.desired])
                  ),
                },
              },
            },
          };
        } else {
          talent = character.talentLevels as TalentProgress;
          patch = {
            talentLevels: {
              ...talent,
              [talentKey]: {
                ...talent[talentKey],
                desired: Math.max(
                  talent[talentKey].current,
                  Math.min(desired, talentLimits[character.ascension.desired])
                ),
              },
            },
          };
        }
        patchCharacter(patch);
      }
    },
    [character, patchCharacter]
  );

  return (
    <Container enabled={character.enabled}>
      <CharacterInfo>
        <CharacterName>{character.name}</CharacterName>
        <CharacterNameTooltip>{character.name}</CharacterNameTooltip>
        <CharacterToggle>
          <input
            aria-label={`Toggle tracking of ${character.name}`}
            type="checkbox"
            checked={character.enabled}
            onChange={toggleEnabled}
            className="visuallyhidden"
            disabled={lockCharacter}
          />
          <span />
        </CharacterToggle>
        <Filler />
        <CharacterElement data-title={character.element}>
          <span className="visuallyhidden">{character.element}</span>
        </CharacterElement>
        <CharacterWeapon data-title={character.weapon}>
          <span className="visuallyhidden">{character.weapon}</span>
        </CharacterWeapon>
      </CharacterInfo>
      <Avatar enabled={character.enabled}>
        <CharacterAvatar characterId={character.id} />
      </Avatar>
      <LevelProgress>
        <legend>Ascension/Level</legend>
        <div>
          <AscensionProgressFieldset
            disabled={!character.enabled || lockAscension}
          >
            <legend className="visuallyhidden">{`${character.name}'s current ascension:`}</legend>
            <label data-title="Unascended">
              <input
                type="radio"
                name={`ascension-progress-current-${character.name}`}
                value={0}
                checked={character.ascension.current === 0}
                onChange={changeAscensionProgress}
                className="visuallyhidden"
              />
              <span className="visuallyhidden">Unascended</span>
              <AscensionStar className="fulfilled" />
            </label>
            {[...Array(6).keys()].map((v) => (
              <label data-title={`Ascension ${v + 1}`} key={v}>
                <input
                  type="radio"
                  name={`ascension-progress-current-${character.name}`}
                  value={v + 1}
                  checked={character.ascension.current === v + 1}
                  onChange={changeAscensionProgress}
                  className="visuallyhidden"
                />
                <span className="visuallyhidden">{`Ascension ${v + 1}`}</span>
                <AscensionStar
                  className={
                    character.ascension.current >= v + 1 ? "fulfilled" : ""
                  }
                />
              </label>
            ))}
          </AscensionProgressFieldset>
          <div>
            <span>Lv.</span>
            <input
              aria-label={`${character.name}'s current level`}
              type="number"
              min="1"
              max={ascensionLimits[character.ascension.current]}
              step="1"
              value={character.level.current}
              onChange={changeCurrentLevel}
              disabled={!character.enabled}
            />
            <span>/{ascensionLimits[character.ascension.current]}</span>
          </div>
        </div>
        <span>
          <FaAngleDoubleDown />
        </span>
        <div>
          <AscensionProgressFieldset
            disabled={!character.enabled || lockAscension || lockDesired}
          >
            <legend className="visuallyhidden">{`${character.name}'s desired ascension:`}</legend>
            <label data-title="Unascended">
              <input
                type="radio"
                name={`ascension-progress-desired-${character.name}`}
                value={0}
                checked={character.ascension.desired === 0}
                onChange={changeDesiredAscensionProgress}
                disabled={character.ascension.current > 0}
                className="visuallyhidden"
              />
              <span className="visuallyhidden">Unascended</span>
              <AscensionStar className="fulfilled" />
            </label>
            {[...Array(6).keys()].map((v) => (
              <label data-title={`Ascension ${v + 1}`} key={v}>
                <input
                  type="radio"
                  name={`ascension-progress-desired-${character.name}`}
                  value={v + 1}
                  checked={character.ascension.desired === v + 1}
                  onChange={changeDesiredAscensionProgress}
                  disabled={character.ascension.current > v + 1}
                  className="visuallyhidden"
                />
                <span className="visuallyhidden">{`Ascension ${v + 1}`}</span>
                <AscensionStar
                  className={
                    character.ascension.desired >= v + 1 ? "fulfilled" : ""
                  }
                />
              </label>
            ))}
          </AscensionProgressFieldset>
          <div>
            <span>Lv.</span>
            <input
              aria-label={`${character.name}'s desired level`}
              type="number"
              min="1"
              max={ascensionLimits[character.ascension.desired]}
              step="1"
              value={character.level.desired}
              onChange={changeDesiredLevel}
              disabled={!character.enabled || lockDesired}
            />
            <span>/{ascensionLimits[character.ascension.desired]}</span>
          </div>
        </div>
      </LevelProgress>
      <Talents>
        <legend>Talents</legend>
        <div>
          <span>Attack</span>
          <input
            aria-label={`${character.name}'s attack talent current level`}
            name="attack"
            type="number"
            min="1"
            max="10"
            step="1"
            value={talentProgress.attack.current}
            onChange={changeCurrentTalentProgress}
            disabled={!character.enabled}
          />
          <span>
            <FaForward />
          </span>
          <input
            aria-label={`${character.name}'s attack talent desired level`}
            name="attack"
            type="number"
            min="1"
            max="10"
            step="1"
            value={talentProgress.attack.desired}
            onChange={changeDesiredTalentProgress}
            disabled={!character.enabled || lockDesired}
          />
        </div>
        <div>
          <span>Skill</span>
          <input
            aria-label={`${character.name}'s elemental skill talent current level`}
            name="skill"
            type="number"
            min="1"
            max="10"
            step="1"
            value={talentProgress.skill.current}
            onChange={changeCurrentTalentProgress}
            disabled={!character.enabled}
          />
          <span>
            <FaForward />
          </span>
          <input
            aria-label={`${character.name}'s elemental skill talent desired level`}
            name="skill"
            type="number"
            min="1"
            max="10"
            step="1"
            value={talentProgress.skill.desired}
            onChange={changeDesiredTalentProgress}
            disabled={!character.enabled || lockDesired}
          />
        </div>
        <div>
          <span>Burst</span>
          <input
            aria-label={`${character.name}'s elemental burst talent current level`}
            name="burst"
            type="number"
            min="1"
            max="10"
            step="1"
            value={talentProgress.burst.current}
            onChange={changeCurrentTalentProgress}
            disabled={!character.enabled}
          />
          <span>
            <FaForward />
          </span>
          <input
            aria-label={`${character.name}'s elemental burst talent desired level`}
            name="burst"
            type="number"
            min="1"
            max="10"
            step="1"
            value={talentProgress.burst.desired}
            onChange={changeDesiredTalentProgress}
            disabled={!character.enabled || lockDesired}
          />
        </div>
      </Talents>
    </Container>
  );
};

export default CharacterProgress;
