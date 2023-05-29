import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import React from 'react';

type ErrorProps = {
  title?: string;
  subtitle?: string;
};

export default function Error(props:ErrorProps){
  const { title, subtitle } = props;
  return (
    <Hero>
    <Banner title={title} subtitle={subtitle}>
        <Link to="/" className='btn-primary'>
            Return Home
            </Link>
    </Banner>
    </Hero>
  )
}
