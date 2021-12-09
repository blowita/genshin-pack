import React, { useCallback, useEffect, useMemo, useState } from "react";

import { GrUpgrade } from "react-icons/gr";
import { TiMinus, TiPlus } from "react-icons/ti";

import { Resource } from "../../data/resources";

import RarityDisplay from "../RarityDisplay";

import { Actions, Container, Counter, Cover, Filler } from "./styles";

const upgradable = false;

const integerRegexp = /^[0-9]*$/;

interface ResourceCounterProps {
  resource: Resource;
  count?: number;
  setCount: (count: number) => void;
  target?: number;
}

const ResourceCounter: React.FC<ResourceCounterProps> = ({
  resource,
  count,
  setCount,
  target,
}) => {
  const [counter, setCounter] = useState(count || 0);
  const [hideButtons, setHideButtons] = useState(true);

  const name = `${resource.name} (${resource.type} - rarity ${resource.rarity})`;

  const increment = useCallback(() => {
    return setCounter((c) => Math.min(c + 1, 9999));
  }, []);

  const decrement = useCallback(
    () => setCounter((c) => Math.max(c - 1, 0)),
    []
  );

  const changeCounter = useCallback((e) => {
    if (integerRegexp.test(e.target.value)) {
      const input = Number(e.target.value);
      if (input >= 0 && input < 10000) {
        setCounter(input);
      }
    }
  }, []);

  const fulfilled = useMemo(() => {
    return !target || counter >= target;
  }, [counter, target]);

  useEffect(() => {
    setCount(counter);
  }, [counter, setCount]);

  return (
    <Container
      onMouseEnter={() => setHideButtons(false)}
      onMouseLeave={() => setHideButtons(true)}
    >
      <Cover
        resourceImageUrl={resource.imageUrl}
        resourceRarity={resource.rarity}
      >
        <Actions hidden={hideButtons}>
          <button
            className="plus"
            tabIndex={-1}
            onClick={increment}
            aria-label={`Increment ${name} stored amount`}
          >
            <TiPlus />
          </button>
          <button
            className="minus"
            tabIndex={-1}
            onClick={decrement}
            aria-label={`Decrement ${name} stored amount`}
          >
            <TiMinus />
          </button>
          {upgradable && (
            <button
              className="upgrade"
              tabIndex={-1}
              onClick={() => null}
              aria-label={`Show ${name} rarity upgrade screen`}
            >
              <GrUpgrade />
            </button>
          )}
        </Actions>
        <Filler />
        <RarityDisplay rarity={resource.rarity} />
      </Cover>
      <Counter>
        <input
          value={counter}
          onChange={changeCounter}
          size={3}
          aria-label={`${name} stored amount`}
        />
        <span>/</span>
        <span
          className={fulfilled ? "fulfilled" : "required"}
          aria-label={`${name} required amount`}
        >
          {target || "-"}
        </span>
      </Counter>
    </Container>
  );
};

export default ResourceCounter;
