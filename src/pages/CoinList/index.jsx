import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import fetcher from '../../components/HOC/fetcher';
import Pagination from '../../components/Pagination';

const CoinList = ({ coins, loading, setCoins }) => {
  const deleteCoins = (id) => setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== id));
  const [searchName, setSearchName] = useState('');

  const [pagination, setPagination] = useState({
    page: 1,
    start: 0,
    end: 4,
  });

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
  };
  const searchCoins = (e) => {
    e.preventDefault();
    setCoins(coins.filter((coin) => coin.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1));
  };

  return (
    <Card title='Coin List'>
      <div className='flex my-9'>
        <select className='py-2 px-4 border rounded'>
          <option>Select</option>
        </select>
        <form className='mx-3' onSubmit={searchCoins}>
          <input
            value={searchName}
            onChange={handleSearchName}
            className='py-2 px-4 mr-3 rounded border'
            placeholder='Search '
          ></input>
          <button type='submit' className='btn-search py-2 px-6 text-white'>
            Search
          </button>
        </form>
      </div>
      {!loading && (
        <Fragment>
          <div className='overflow-x-auto'>
            <table width='100%'>
              <thead>
                <tr>
                  <td width='12%' className='px-3 rounded-tl pt-2 pb-4 pl-8 '>
                    ID
                  </td>
                  <td width='10% ' className='px-3 pt-2 pb-4'>
                    Name
                  </td>
                  <td width='9%' className='px-3 pt-2 pb-4'>
                    Symbol
                  </td>
                  <td width='9%' className='px-3 pt-2 pb-4'>
                    rank
                  </td>
                  <td width='20%' className='px-3 pt-2 pb-4'>
                    Type
                  </td>
                  <td width='20%' className='px-3 pt-2 pb-4'>
                    Active
                  </td>
                  <td width='20%' className='px-3 rounded-tr pt-2 pb-4'>
                    Action
                  </td>
                </tr>
              </thead>
              <tbody>
                {coins.slice(pagination.start, pagination.end).map((coin, index) => (
                  <tr key={coin.id} className={` ${index % 2 !== 0 ? 'coin-even' : ''}`}>
                    <td className='link--coin-detail px-3 pl-8'>
                      <Link to={`${coin.id}`} state={{ coin }}>
                        {coin.id}{' '}
                      </Link>
                    </td>
                    <td className='capitalize px-3 py-2'>{coin.name}</td>
                    <td className='capitalize px-3  py-2'>{coin.symbol}</td>
                    <td className='capitalize px-3  py-2'>{coin.rank}</td>
                    <td className='capitalize px-3  py-2'>{coin.type}</td>
                    <td className='capitalize  px-3 py-2'>{`${coin.is_active}`}</td>
                    <td className='px-3  py-2'>
                      <button onClick={() => deleteCoins(coin.id)} className='btn-delete'>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Fragment>
      )}
    </Card>
  );
};

export default fetcher(CoinList);
