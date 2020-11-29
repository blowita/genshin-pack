import React, { useCallback, useMemo } from 'react'

import FlatList from 'flatlist-react'
import { BiArrowToTop } from 'react-icons/bi'

import ResourceCounter from '../../components/ResourceCounter'

import { Resource, resources } from '../../data/resources'

import { Container, Content } from './styles'

const stocks = resources.map((item) => ({
  name: item.name,
  stock: 0,
}))

const renderResourceListItem = (
  resource: Resource,
  key: number
): JSX.Element => (
  <ResourceCounter
    resource={resource}
    count={stocks[key].stock}
    setCount={(value) => (stocks[key].stock = value)}
    target={Math.floor(Math.random() * 999)}
    key={key}
  />
)

const ScrollToTopButton: React.FC = () => (
  <button>
    <BiArrowToTop />
  </button>
)

const Resources: React.FC = () => {
  const sort = useMemo(() => ['sortId'], [])

  const filter = useCallback((item: Resource) => !!item.imageUrl, [])

  return (
    <Container>
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
