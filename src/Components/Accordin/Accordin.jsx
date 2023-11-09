import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {AiFillPlusCircle} from "react-icons/ai";
import styles from "./Accordin.module.css"

const Accordin = ({question}) => {
  return (
    <div >
        <Accordion className={styles.wrapper} >
        <AccordionSummary
          expandIcon={<AiFillPlusCircle />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Accordin;
