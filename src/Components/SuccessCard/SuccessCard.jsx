import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions  } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styles from "./SuccessCard.module.css"

const SuccessCard = ({rate ,image,height,width,page,name,}) => {

  const theme = createTheme({
    components: {  

    
      MuiCardMedia: {
        styleOverrides: {
         
          root: {
            
            width : "auto",
           
           
          },
        },
      },
    },
  });
  
  return (
    <div>
     
       <Card className={styles.card} sx={{ maxWidth: 345 ,backgroundColor:"black" , maxHeight:350 , borderRadius:10}} >
      
      <CardActionArea >
        <ThemeProvider theme={theme}>
        <CardMedia
          component="img"
          width={width}
          height={height}
          image={image}
          alt="card-icon"
          className={styles.icon}
          sx={{ marginTop:"10px" ,objectFit : 'cover'}}
        />
        </ThemeProvider>
      
        <CardContent>
          {page === "attorney" ?(
             <Typography gutterBottom variant="h5" component="div"  className={styles.color} sx={{color : 'white'}}>
             {rate} Success Rate
           </Typography>
          ):( <Typography gutterBottom variant="h5" component="div"  className={styles.color} sx={{color : 'white'}}>
            {name}
        </Typography>)}

        {page === "attorney" ?(null):(
          <Typography gutterBottom variant="h5" component="div"  className={styles.color} sx={{color : 'white'}}>
          CEO OF HUNT
      </Typography>
        )}
         
          <Typography variant="body2"  className={styles.color} sx={{color : '#757171'}} >
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dignissimos itaque sunt ad sapiente sit facilis! Eum, labore? Quae, ducimus nostrum?
          </Typography>
        </CardContent>
      </CardActionArea>
    

      {page ==="attorney" ?( <CardActions>
       
       <Button size="small" className={styles.button} sx={{color : "white", backgroundColor: "#E3B748", marginLeft : 3
 }}>
        Read More
       </Button>
     </CardActions>):(null)}
     
    </Card>
    </div>
  );
}

export default SuccessCard;
