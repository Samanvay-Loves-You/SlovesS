import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect, useRef, useCallback, createRef, useMemo } from 'react';
import { EnvironmentBanner } from './love';
import { AppBar, Toolbar, Button } from "@material-ui/core";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';


export default function MultilineTextFields() {
    const [boyName, setboyName] = React.useState('');
    const [girlName, setgirlName] = React.useState('');
    function Header(name1:string, name2:string) {
      return(
      <Collapse in={open}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 , width:'50%'}}
      >
        Love Percent Between {name1} and {name2} is 
        <Typography sx={{color:'green'}}> 100% </Typography>
      </Alert>
    </Collapse>);
    }
    const handleBoyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setboyName(event.target.value);
      };
      const handleGirlNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setgirlName(event.target.value);
        };
      const [open, setOpen] = React.useState(true);
      const [open2, setOpen2] = React.useState(true);
    return (

      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',

          
        }}
        noValidate
        autoComplete="off"
      >
      <Box>
              <Collapse in={open}>
        <Alert sx={{height:'100%', width:'70%'}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen2(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Love Percent Between Shreya and Samanvay is 
          <Typography sx={{color:'green'}}> 100% </Typography>
        </Alert>
      </Collapse>
      <Collapse in={open2}>
        <Alert sx={{height:'100%', width:'70%'}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen2(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Love Percent Between {boyName} and {girlName} is 
          <Typography sx={{color:'orange'}}> 50% </Typography>
        </Alert>
      </Collapse>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
        }}
        noValidate
        autoComplete="off"
        flex='1'
      >
      </Box>
        <EnvironmentBanner></EnvironmentBanner>
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            display: 'flex',

          }}>
          <TextField
            disabled= {open || open2}
            id="outlined-multiline-flexible"
            label="Boy's Name"
            multiline
            maxRows={4}
            value={boyName}
            onChange={handleBoyNameChange}

          />
                    <TextField
                                disabled= {open || open2}
            id="outlined-multiline-flexible"
            label="Girl's Name"
            multiline
            maxRows={4}
            value={girlName}
            onChange={handleGirlNameChange}

          />
                  <Button        
        variant="outlined"
        onClick={() => {
          if(boyName.toLowerCase()=='samanvay' && girlName.toLowerCase()=='shreya')
          setOpen(true);
          else
          setOpen2(true)
        }}>COMPUTE</Button>
        </Box>
        <Box sx={{ width: '100%' }}>

    </Box>
    </Box>
      </Box>
    );
  }
  