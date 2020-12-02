import React, { useCallback, useState } from 'react'

import FlatList from 'flatlist-react'
import { BiArrowToTop } from 'react-icons/bi'
import {
  GiBookCover,
  GiDroplets,
  GiSwordSmithing,
  GiSwordwoman,
} from 'react-icons/gi'

import {
  MoraCounter,
  ResourceCategoryButton,
  ResourceCounter,
} from '../../components'

import { Resource, resources, ResourceType } from '../../data/resources'

import { Categories, Container, Content } from './styles'

let moraStock = 0

const moraTarget = Math.floor(Math.random() * 100000000)

const stocks = resources.map((item) => ({
  name: item.name,
  stock: 0,
}))

const targets = resources.map((item) => ({
  name: item.name,
  target: Math.floor(Math.random() * 999),
}))

const renderResourceListItem = (resource: Resource, key: number): JSX.Element =>
  resource.name === 'Mora' ? (
    <MoraCounter
      count={moraStock}
      setCount={(value) => (moraStock = value)}
      target={moraTarget}
      key={key}
    />
  ) : (
    <ResourceCounter
      resource={resource}
      count={stocks[key].stock}
      setCount={(value) => (stocks[key].stock = value)}
      target={targets[key].target}
      key={key}
    />
  )

const ScrollToTopButton: React.FC = () => (
  <button>
    <BiArrowToTop />
  </button>
)

const Resources: React.FC = () => {
  const [category, setCategory] = useState<ResourceType | null>(null)

  const categorySelection = (base: ResourceType) => {
    return () => setCategory((category) => (category !== base ? base : null))
  }

  const filter = useCallback(
    (item: Resource) => (category ? item.type === category : true),
    [category]
  )

  return (
    <Container>
      <Categories>
        <ResourceCategoryButton
          tooltip="Monster Drops"
          selected={category === ResourceType.CommonAscension}
          onClick={categorySelection(ResourceType.CommonAscension)}
        >
          <GiDroplets />
        </ResourceCategoryButton>
        <ResourceCategoryButton
          tooltip="Character Ascension"
          selected={category === ResourceType.CharacterAscension}
          onClick={categorySelection(ResourceType.CharacterAscension)}
        >
          <GiSwordwoman />
        </ResourceCategoryButton>
        <ResourceCategoryButton
          tooltip="Talent Level-Up"
          selected={category === ResourceType.TalentLevelUp}
          onClick={categorySelection(ResourceType.TalentLevelUp)}
        >
          <GiBookCover />
        </ResourceCategoryButton>
        <ResourceCategoryButton
          tooltip="Weapon Ascension"
          selected={category === ResourceType.WeaponAscension}
          onClick={categorySelection(ResourceType.WeaponAscension)}
        >
          <GiSwordSmithing />
        </ResourceCategoryButton>
      </Categories>
      <Content>
        <FlatList
          list={resources}
          renderItem={renderResourceListItem}
          wrapperHtmlTag="div"
          renderOnScroll
          renderWhenEmpty={() => <span>No items available.</span>}
          sortBy={['sortId']}
          filterBy={filter}
          scrollToTop
          scrollToTopButton={ScrollToTopButton}
          scrollToTopPadding={0}
          scrollToTopPosition="top right"
        />
      </Content>
    </Container>
  )
}

export default Resources
