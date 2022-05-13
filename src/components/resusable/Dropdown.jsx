import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Dropdown = () => {
  return (
    <Accordion sx={{width: '50vw'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What are your business hours?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are open weekdays 8:00a - 5:00p<br />Saturdays 10:00a - 3:00p<br />Sundays by Appointment
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default Dropdown