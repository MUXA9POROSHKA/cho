
import './Form.css'
import { useTelegram } from '../../Hooks/useTelegram';
import { React, useCallback, useEffect, useState } from 'react';
 

export const Form =()=>{
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [subject, setSubject] = useState ('');

  const tg = useTelegram(); 

  const onSendData = useCallback(()=>{
    const data = {
      country, city, subject
    }
    tg.sendData(JSON.stringify(data))
  }, [city, country, subject])

  useEffect(()=>{
    tg.onEvent('mainButtonClicked', onSendData)
    console.log(country, city, subject)
    return() =>{
      tg.offEvent('mainButtonClicked', onSendData)
    }
  })

  useEffect(()=>{
    tg.MainButton.setParams({
text: 'Отправит даныэ'
    })
  }, [])
  
  useEffect(()=>{
    if (!country || !city){
    tg.MainButton.hide();
  }else{
    tg.MainButton.show();
  }

}, [country, city])

const onChangeCity = (e) =>{
  setCity(e.target.value);
 
}
const onChangeCountry = (e) =>{
  setCountry(e.target.value);
}
const onChangeSubject = (e) =>{
  setSubject(e.target.value);
}

  return (
    <>
   
      <h3>Введите ваши данные</h3>
      <input
      className = 'input'
      type='text'
      placeholder='Город'
      value={city}
      onChange={onChangeCity}
      />
      <input
      className='input'
      type='text'
      placeholder='Страна'
      value={country}
      onChange={onChangeCountry}
      />
      <select value={subject} onChange={onChangeSubject} className='select'>
        <option value={'Физ.лицо'}>Физ.лицо </option>
        <option value={'Юр.лицо'}>Юр.лицо </option>
      </select>
     </>
  )
}

