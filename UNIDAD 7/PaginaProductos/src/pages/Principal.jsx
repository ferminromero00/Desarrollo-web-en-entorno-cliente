import React from 'react';
import Navegacion from '../components/Navegacion';
import { Fetch } from '../utils/Fetch';
import { useEffect } from 'react';

export default function Principal() {
  useEffect(() => { Fetch('https://fakestoreapi.com/products'); }, []);

  return (
    <>
      <Navegacion />
    </>
  );
}