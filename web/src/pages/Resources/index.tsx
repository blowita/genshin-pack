import React from 'react'

import Counter from '../../components/ResourceCounter'

import { Container, Content } from './styles'

const items = [
  {
    name: "Boreal Wolf's Milk Tooth",
    type: 'weapon ascension material',
    rarity: 2,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Boreal_Wolf%27s_Milk_Tooth.png',
    stock: 8,
  },
  {
    name: "Boreal Wolf's Cracked Tooth",
    type: 'weapon ascension material',
    rarity: 3,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Boreal_Wolf%27s_Cracked_Tooth.png',
    stock: 4,
  },
  {
    name: "Boreal Wolf's Broken Fang",
    type: 'weapon ascension material',
    rarity: 4,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Boreal_Wolf%27s_Broken_Fang.png',
    stock: 2,
  },
  {
    name: "Boreal Wolf's Nostalgia",
    type: 'weapon ascension material',
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_Boreal_Wolf%27s_Nostalgia.png',
    stock: 1,
  },
  {
    name: "Boreal Wolf's Milk Tooth",
    type: 'weapon ascension material',
    rarity: 2,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Boreal_Wolf%27s_Milk_Tooth.png',
    stock: 8,
  },
  {
    name: "Boreal Wolf's Cracked Tooth",
    type: 'weapon ascension material',
    rarity: 3,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Boreal_Wolf%27s_Cracked_Tooth.png',
    stock: 4,
  },
  {
    name: "Boreal Wolf's Broken Fang",
    type: 'weapon ascension material',
    rarity: 4,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Boreal_Wolf%27s_Broken_Fang.png',
    stock: 2,
  },
  {
    name: "Boreal Wolf's Nostalgia",
    type: 'weapon ascension material',
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_Boreal_Wolf%27s_Nostalgia.png',
    stock: 1,
  },
]

const Resources: React.FC = () => (
  <Container>
    <Content>
      {items.map((item, key) => (
        <Counter
          item={item}
          count={item.stock}
          setCount={(value) => (items[key].stock = value)}
          target={Math.floor(Math.random() * 999)}
          key={key}
        />
      ))}
    </Content>
  </Container>
)

export default Resources
