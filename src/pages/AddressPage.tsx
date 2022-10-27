import React, {useEffect, useState} from 'react';
import PageContainer from '../components/PageContainer';
import { useFetchAddressesMutation } from '../store/dadataApi/datata.api';
import findIcon from '../imgs/address-find.svg';
import '../styles/addressPage.css';
import { IAddress } from '../types/serverModels';
const AddressPage = () => {

    

    const [query, setQuery] = useState<string>('');
    // const [fetchAddresses, {data:addresses, isLoading, isError}] = useLazyFetchAddressesQuery()
    const [fetchAddresses, {data:addresses, isLoading,isError}] = useFetchAddressesMutation()
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setQuery(e.target.value)
    } 

    const findData = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.length >= 3){
            fetchAddresses(query);
            
        }
    }

    useEffect(() => {
        document.querySelector('.address')?.classList.add('active-page');
    }, [])
    
    return (
        <PageContainer>
        <div className='address-page'>
            <h1 className='title'>Поиск адресов</h1>
            <br></br>
            <p className = 'sub-title'>Введите интересующий вас адрес</p>

            <form onSubmit={findData}>
                <input placeholder = 'Введите интересующий вас адрес' onChange={changeHandler}></input>
                <button type = 'submit'>
                    <img src = {findIcon} alt = 'find'></img>
                    <p>Поиск</p>
                </button>
            </form>

            <div className='response-container'>
                <h1>Адреса</h1>
                
                <ul>
                    {isError && <h1>Произошла ошибка на сервере</h1>}
                    {isLoading && <h1>Загрузка...</h1>}
                    {addresses?.length === 0 && <h1>Ничего не найдено</h1>}
                    {addresses?.map((item:IAddress, id) => {
                        return (
                            <li className='response-item' key = {id}>
                                {item.value}
                            </li>
                        )
                    })}     
                    {/* <li className='response-item'>Мама мама мама мама</li>
                    <li className='response-item'>Мама мама мама мама</li>
                    <li className='response-item'>Мама мама мама мама</li>
                    <li className='response-item'>Мама мама мама мама</li>
                    <li className='response-item'>Мама мама мама мама</li>
                    <li className='response-item'>Мама мама мама мама</li>
                    <li className='response-item'>Мама мама мама мама</li>
                    <li className='response-item'>Мама мама мама мама</li>
                    <li className='response-item'>Мама мама мама мама</li>
                    <li className='response-item'>Мама мама мама мама</li>
                    <li className='response-item'>Мама мама мама мама</li>
                    <li className='response-item'>Мама мама мама мама</li>
                    <li className='response-item'>Мама мама мама мама</li>
                    <li className='response-item'>Мама мама мама мама</li> */}
                </ul>
            </div>

            


        </div>
        </PageContainer>
        
    );
};

export default AddressPage;