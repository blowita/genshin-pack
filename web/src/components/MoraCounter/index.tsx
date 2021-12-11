import React, { useCallback, useEffect, useMemo, useState } from "react";

import { FaStar } from "react-icons/fa";

import { moraId, resources } from "../../data/resources";

import { useMoraTarget } from "../../recoil/hooks/moraTarget";

import { Container, Counter, Cover, Filler, Stars } from "./styles";

const resource = resources.find((item) => item.id === moraId);

const integerRegexp = /^[0-9]*$/;

interface MoraCounterProps {
  count?: number;
  setCount: (count: number) => void;
}

const MoraCounter: React.FC<MoraCounterProps> = ({ count, setCount }) => {
  const [counter, setCounter] = useState(count || 0);

  const { mora: target } = useMoraTarget();

  const changeCounter = useCallback((e) => {
    if (integerRegexp.test(e.target.value)) {
      const input = Number(e.target.value);
      if (input >= 0 && input < 1000000000) {
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
    <Container>
      <Cover resourceImageUrl={resource ? resource.imageUrl : ""}>
        <Filler />
        <Stars>
          {[...Array(resource?.rarity).keys()].map((key) => (
            <FaStar key={key} />
          ))}
        </Stars>
      </Cover>
      <Counter>
        <input
          value={counter}
          onChange={changeCounter}
          size={7}
          aria-label={`${name} stored amount`}
        />
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

export default MoraCounter;
