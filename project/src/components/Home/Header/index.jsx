import styled from "styled-components";

import ToHomeContainer from "./ToHome/Container";
import CategoryContainer from "./Category/Container";
import RightContainer from "./RightBanners/Container";
import { useEffect, useState } from "react";
const Header = () => {
  const [scroll, setScroll] = useState(0);
  const changeScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
  });
  return (
    <>
      {scroll > 0 ? (
        <ChangeHeaderBox>
          <ToHomeContainer />
          <CategoryContainer />
          <RightContainer />
        </ChangeHeaderBox>
      ) : (
        <HeaderBox>
          <ToHomeContainer />
          <CategoryContainer />
          <RightContainer />
        </HeaderBox>
      )}
    </>
  );
};

export default Header;

const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  z-index: 5;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    color: black;
    background-color: white;
  }
  &:hover a {
    color: black;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child {
      justify-content: flex-start;
      width: 20%;
    }
    &:nth-child(2) {
      width: 58%;
    }
    &:last-child {
      justify-content: flex-end;
      width: 20%;
    }
    & > div {
      padding: 0 10px;
    }
  }
  &:hover > div:last-child > div:first-child > div:first-child > div img,
  &:hover > div:last-child > div:nth-child(2) > a > div img {
    width: 24px;
    filter: invert(0);
  }
`;

const ChangeHeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: black;
  background-color: white;

  z-index: 5;
  a {
    text-decoration: none;
    color: black;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child {
      justify-content: flex-start;
      width: 20%;
    }
    &:nth-child(2) {
      width: 58%;
    }
    &:last-child {
      justify-content: flex-end;
      width: 20%;
    }
    & > div {
      padding: 0 10px;
    }
  }

  & > div:last-child > div:first-child > div:first-child > div img,
  & > div:last-child > div:nth-child(2) > a > div img {
    width: 24px;
    filter: invert(0);
  }
`;
