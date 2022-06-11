import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Dropdown = ({question}) => {
  return (
    <Accordion sx={{width: '50vw'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{question.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {question.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default Dropdown