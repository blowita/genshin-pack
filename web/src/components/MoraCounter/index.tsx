import React, { useCallback, useMemo } from "react";

import { FaStar } from "react-icons/fa";

import { ResourceId } from "../../data/resources";

import { resourceStore } from "../../recoil/entities";
import { useMoraTarget } from "../../recoil/hooks/moraTarget";

import { Container, Counter, Cover, Filler, Stars } from "./styles";

const integerRegexp = /^[0-9]*$/;

const MoraCounter: React.FC = () => {
  const resource = resourceStore.useEntityValue(ResourceId.Mora);
  const patchResource = resourceStore.usePatchEntity(ResourceId.Mora);

  const { mora: target } = useMoraTarget();

  const changeCounter = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (integerRegexp.test(event.target.value)) {
        const input = Number(event.target.value);
        if (input >= 0 && input < 1000000000) {
          patchResource({ stock: input });
        }
      }
    },
    [patchResource]
  );

  const fulfilled = useMemo(() => {
    return !target || resource.stock >= target;
  }, [resource, target]);

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
          value={resource.stock}
          onChange={changeCounter}
          size={7}
          aria-label="Amount of Mora acquired."
        />
        <span
          className={fulfilled ? "fulfilled" : "required"}
          aria-label="Amount of Mora required."
        >
          {target || "-"}
        </span>
      </Counter>
    </Container>
  );
};

export default MoraCounter;
