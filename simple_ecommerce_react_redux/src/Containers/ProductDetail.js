import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
  const { productId } = useParams();
  console.log(productId,"productId");
  return (
    <div>ProductDetail</div>
  )
}
