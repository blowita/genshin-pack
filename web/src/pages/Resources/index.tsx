import React, { useCallback, useMemo, useState } from 'react'

import FlatList from 'flatlist-react'
import { BiArrowToTop } from 'react-icons/bi'
import {
  GiBookCover,
  GiDroplets,
  GiSwordSmithing,
  GiSwordwoman,
} from 'react-icons/gi'

import MoraCounter from '../../components/MoraCounter'
import ResourceCounter from '../../components/ResourceCounter'

import { Resource, resources } from '../../data/resources'

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
  const [category, setCategory] = useState('')

  const categorySelection = (base: string) => {
    return () => setCategory((category) => (category !== base ? base : ''))
  }

  const sort = useMemo(() => ['sortId'], [])

  const filter = useCallback(
    (item: Resource) => {
      switch (category) {
        case 'monster drops':
          return item.type === 'Common Ascension Material'
          break
        case 'character ascension':
          return item.type === 'Character Ascension Material'
          break
        case 'talent upgrade':
          return item.type === 'Talent Level-Up Material'
        case 'weapon ascension':
          return item.type === 'Weapon Ascension Material'
        default:
          return true
      }
    },
    [category]
  )

  return (
    <Container>
      <Categories>
        <div className="wrapper">
          <button
            className={category === 'monster drops' ? 'selected' : ''}
            onClick={categorySelection('monster drops')}
          >
            <GiDroplets />
          </button>
          <span className="tooltip">Monster Drops</span>
        </div>
        <div className="wrapper">
          <button
            className={category === 'character ascension' ? 'selected' : ''}
            onClick={categorySelection('character ascension')}
          >
            <GiSwordwoman />
          </button>
          <span className="tooltip">Character Ascension</span>
        </div>
        <div className="wrapper">
          <button
            className={category === 'talent upgrade' ? 'selected' : ''}
            onClick={categorySelection('talent upgrade')}
          >
            <GiBookCover />
          </button>
          <span className="tooltip">Talent Level-Up</span>
        </div>
        <div className="wrapper">
          <button
            className={category === 'weapon ascension' ? 'selected' : ''}
            onClick={categorySelection('weapon ascension')}
          >
            <GiSwordSmithing />
          </button>
          <span className="tooltip">Weapon Ascension</span>
        </div>
      </Categories>
      <Content>
        <FlatList
          list={resources}
          renderItem={renderResourceListItem}
          wrapperHtmlTag="div"
          renderOnScroll
          renderWhenEmpty={() => <span>No items available.</span>}
          sortBy={sort}
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
