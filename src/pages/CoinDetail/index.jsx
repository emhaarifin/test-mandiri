import React from 'react';
import Card from '../../components/Card';
import { useParams } from 'react-router-dom';
import fetcher from '../../components/HOC/fetcher';

const CoinDetail = ({ coins, loading }) => {
  const { id } = useParams();
  // const { state } = useLocation();
  const coin = coins.find((coin) => coin.id === id);
  return (
    <Card title='Coin Detail'>
      {loading ? (
        <div>Loading</div>
      ) : (
        <section className='flex flex-wrap coin-detail mt-9'>
          <div className='w-32 mr-10'>
            <p className='py-4'>ID</p>
            <p className='py-4'>Name</p>
            <p className='py-4'>Symbol</p>
            <p className='py-4'>Active</p>
            <p className='py-4'>Is New ?</p>
          </div>
          <div className='font-bold'>
            <p className='py-4'>{coin.id}</p>
            <p className='py-4'>{coin.name}</p>
            <p className='py-4'>{coin.symbol}</p>
            <p className='capitalize py-4'>{`${coin.is_active}`}</p>
            <p className='capitalize py-4'>{`${coin.is_new}`}</p>
          </div>
        </section>
      )}
    </Card>
  );
};

export default fetcher(CoinDetail);
