/*eslint-disable*/

import { Fragment } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import IconButton  from '@mui/material/IconButton';


export function CardBody(props){
    return(
        <Fragment>
          <Grid container spacing={1}>
            <Grid item xs={8}>
               {props.text}
            </Grid>
            <Grid item xs={1} style={{marginTop: '-1%',marginLeft: '-2%'}}>
              <IconButton  color="error" id="basic" name="basic" onClick={props.openBasicModal}>
                  <EditIcon fontSize="small"/>
              </IconButton >
            </Grid>
          </Grid>
        </Fragment>
    )
}