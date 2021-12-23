import {makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    Button:{
        borderRadius:"100px 100px 100px 100px",
        marginTop:"10px",
        objectPosition:"5px 10%;",
        backgroundColor:"#6495ED",
        marginLeft:"20px",
    },
    News:{
        width:"30%",
        display: "block",
        marginRight:"auto",
        marginLeft:"auto",
        backgroundColor:"#1E90FF",
        textAlign:"left",
   },
    Body:{ 
        justifyContent:"center",
        textAlign:"center",
   },
});


export  {useStyles};  