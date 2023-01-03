import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ArrowLeftSvg from 'assets/icons/ArrowLeftSvg';
import * as S from './BackButton.style';

BackButton.propTypes = {
  url: PropTypes.string,
};

export default function BackButton({ url }) {
  const navigate = useNavigate();

  const handleOnClickBack = () => {
    const backUrl = url || -1;
    navigate(backUrl);
  };
  return (
    <S.Container onClick={handleOnClickBack}>
      <ArrowLeftSvg />
    </S.Container>
  );
}