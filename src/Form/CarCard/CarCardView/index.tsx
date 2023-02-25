import React from "react";
import { Paper, Stack, Switch, TextField } from "@mui/material";
import { ICar } from '../../index';

interface ICarCardViewProps extends ICar {
  iconSrc: string;
  carName: 'carA' | 'carB' | 'carV' | 'carG',

  onChangeValue: (e: React.ChangeEvent<unknown>) => void,
}

// const transformValue = (str: string) => {
//   if (str === '') return '';
//   const num = +str;
//   return isNaN(num)? 0 : num;
// }

export const CarCardView = ({ iconSrc, speed, width, acceleration, onChangeValue, carName, isActive }: ICarCardViewProps) => {
  const active = typeof isActive === 'undefined' || isActive;
  return (
    <Paper sx={{ width: 'max-content', padding: '20px', 'min-height': '400px' }}>
      <div style={{ minHeight: 40 }}>
      { typeof isActive !== 'undefined' && <Switch checked={ isActive }  name={ `${carName}.isActive` } onChange={ onChangeValue } /> }
      </div>

      <Stack direction='column' alignItems='center' justifyContent='space-evenly' gap={2}>
        <img draggable={false} src={ iconSrc } alt='car' style={{ objectFit: 'scale-down', transform: 'rotate(90deg)', height: '150px', userSelect: 'none' }} />
        <TextField
          disabled={!active}
          label='Габариты машины' type='number'
          inputProps={{ 'autoComplete': 'off' }}
          id={ `${carName}.width` }
          name={ `${carName}.width` }
          onChange={ onChangeValue }
          value={ width } size='small' variant='outlined'>
        </TextField>
        <TextField
          disabled={!active}
          label='Скорость, км/ч' type='number'
          id={ `${carName}.speed` }
          name={ `${carName}.speed` }
          onChange={ onChangeValue }
          inputProps={{ 'autoComplete': 'off' }}
          value={ speed } size='small' variant='outlined'>
        </TextField>
        <TextField
          disabled={!active}
          label='Ускорение м/с²' type='number'
          inputProps={{ 'autoComplete': 'off' }}
          id={ `${carName}.acceleration` }
          name={ `${carName}.acceleration` }
          onChange={ onChangeValue }
          value={ acceleration } size='small' variant='outlined'>
        </TextField>
      </Stack>
    </Paper>
  )
}