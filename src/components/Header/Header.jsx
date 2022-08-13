import { useEffect, useState } from 'react';
import useGetImages from 'hooks/useGetImages';
import randomNumberGenerator from 'helpers/randomNumberGenerator';

import Searchbar from 'components/Searchbar';

import { Wrapper, Title, List, Item, Link } from './Header.styled';

const Header = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const { getSearchRequest, images } = useGetImages();

  useEffect(() => {
    const getOneImage = () => {
      if (images !== null) {
        const randomNumber = randomNumberGenerator();
        const image = images.find((item, index) => index === randomNumber);
        setImageUrl(image.largeImage);
      }
    };

    getOneImage();
  }, [images]);

  return (
    <>
      <Wrapper background={imageUrl}>
        <Searchbar onSubmit={getSearchRequest} />

        <Title>Incredibly beautiful stock pictures for free</Title>

        <List>
          <Item>
            <Link to={'/'}>Image</Link>
          </Item>
          <Item>
            <Link to={'/video'}>Video</Link>
          </Item>
        </List>
      </Wrapper>
    </>
  );
};

export default Header;
