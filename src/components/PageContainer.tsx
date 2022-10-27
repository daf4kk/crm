import React from 'react';
import {Link} from 'react-router-dom'

import '../styles/pageContainer.css'
import logoIcon from '../imgs/logo.svg';
import profileIcon from '../imgs/person-icon.svg';

import homeIcon from '../imgs/home.svg';
import navAddressIcon from '../imgs/nav-search.svg';
import tablesIcon from '../imgs/tables.svg';
import calendarIcon from '../imgs/calendar.svg';
import mapsIcon from '../imgs/location.svg';
import widgetsIcon from '../imgs/widgets.svg';
import settingsIcon from '../imgs/settings.svg';
    import openSettingsIcon from '../imgs/open-settings-arrow.svg'
    import userSettingIcon from '../imgs/settings-user.svg'
    import financeIcon from '../imgs/finance.svg';
import exitIcon from '../imgs/exit.svg'

interface Props{
    children: JSX.Element
}

const settingsHandler = () => {
    const settingsBlockIcon = document.querySelector('.settings .open-icon');
    const settingsItems = document.querySelector('.settings-items')
    settingsBlockIcon?.classList.toggle('active-settings')
    settingsItems?.classList.toggle('active-settings-items')
}

const PageContainer:React.FC<Props> = ({children}) => {
    return (
        <div className='page-container'>
        <header>
            <div className="logo header__logo">
                <img src = {logoIcon} alt = 'logo'></img>
                <h3>Wrench CRM</h3>
            </div>

            <div className='profile header-profile'>
                <img src = {profileIcon} alt = 'profile'></img>
                <div className="data profile-data">
                    <h3>Имя</h3>
                    <h3>Фамилия</h3>
                </div>
            </div>
        </header>
    
        <div className='container'>
            <div className='navigation'>
                <h3 className='title'>Меню</h3>
                <ul>
                    <Link to = '/' className='item nav-item home link' id = 'mt-0'>
                        <img src = {homeIcon} alt = 'home'></img>
                        <p>Главная</p>
                    </Link>
                    

                    <Link to = '/address' className='item nav-item address link'>
                        <img src = {navAddressIcon} alt = 'find-adress'></img>
                        <p>Поиск адресов</p>
                    </Link>


                    <li className='item nav-item tables'>
                        <img src = {tablesIcon} alt = 'tables'></img>
                        <p>Таблицы</p>
                    </li>

                    <li className='item nav-item calendar'>
                        <img src = {calendarIcon} alt = 'calendar'></img>
                        <p>Календарь</p>
                    </li>

                    <li className='item nav-item maps'>
                        <img src = {mapsIcon} alt = 'maps'></img>
                        <p>Карты</p>
                    </li>

                    <li className='item nav-item widgets'>
                        <img src = {widgetsIcon} alt = 'widgets'></img>
                        <p>Виджеты</p>
                    </li>
                    <div className='item nav-item settings' onClick = {settingsHandler}>
                        <img src = {settingsIcon} alt = ''></img>
                        <p>Настройки</p>
                        <img src = {openSettingsIcon} alt = 'open' className='open-icon'></img>
                    </div>   
                    <div className='settings-items'>
                        <li className='item settings-item profile-settings'>
                            <img src = {userSettingIcon} alt = 'widgets'></img>
                            <p>Настройки <br></br>профиля</p>
                        </li>
                        <li className='item settings-item finances'>
                            <img src = {financeIcon} alt = 'widgets'></img>
                            <p>Управление финансами</p>
                        </li>
                    </div>

                    <li className='item nav-item'>
                        <img src = {exitIcon} alt = 'exit'></img>
                        <p>Выход</p>
                    </li>
                </ul>
            </div>
            
            <div className='content'>
                {children}
            </div>
        </div>
        
        </div>
    );
};

export default PageContainer;