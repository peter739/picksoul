import React from 'react'
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import logo from '../../images/ps_logo/picksoul_header_icon_framed_white.svg';
import Row from 'react-bootstrap/Row';
import '../../picksoul_custom.scss';


const Brand = () => {
  return (
  <div class='ps_brand'>
    <Image src={logo} alt='Company Logo' />
    </div>


  )
}



const Image = styled.img`
  height: 5rem;
  margin: 0;
`;

export default Brand
