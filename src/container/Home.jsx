import React from 'react';
import { useSelector } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = () => {
  const myList = useSelector(state => state.myList);
  const trends = useSelector(state => state.trends);
  const originals = useSelector(state => state.originals);
  const search = useSelector(state => state.search);
  const results = trends.concat(originals).filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Search isHome />
      <Categories title='Mi lista'>
        <Carousel>
          {myList?.length > 0 && myList.map(item => (
            <CarouselItem
              key={item.id}
              {...item}
              isList
            />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Tendencias'>
        <Carousel>
          {trends?.length > 0 && trends.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de platzi Video'>
        <Carousel>
          {originals?.length > 0 && originals.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;
//export default connect(props, actions)(Home);