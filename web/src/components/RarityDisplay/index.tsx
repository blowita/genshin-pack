import React from "react";

import { FaStar } from "react-icons/fa";

import { Container } from "./styles";

const stars = [...Array(5).keys()].map((key) => <FaStar key={key} />);

interface RarityDisplayProps {
  rarity: number;
}

const RarityDisplay: React.FC<RarityDisplayProps> = ({ rarity }) => (
  <Container>{stars.slice(0, rarity)}</Container>
);

export default RarityDisplay;
