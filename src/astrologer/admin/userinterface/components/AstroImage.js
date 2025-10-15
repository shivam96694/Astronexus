import { Paper } from "@mui/material";
import {Button} from "@mui/material";
import { useState } from "react";
import {useTheme} from'@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";


export default function AstroImage(){
      const [bk,setBK]=useState('')
       const [isHovered, setIsHovered] = useState(false);
      const theme=useTheme()
      const matches=useMediaQuery(theme.breakpoints.up('sm'));
        
    return(
       <div style={{width:matches?'100%':'100%',height:matches?450:'auto',borderRadius:"17px solid #000",background:'black',justifyContent:matches?"center":"center" , display:"flex",alignItems:"center"}}>
    
    <div style={{width:'80%',background:'#F0DF20',height:'50vh',borderRadius:'20px'}}>

          <div style={{width:"100%",display:'flex',flexDirection:matches?'row':"column-reverse",alignItems: "center", justifyContent: "center"}}>
         
            <div style={{width: matches? "60%":"80%",display:"flex"}}>
            <img
            src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/320x410/assets/images/astrologer_baba.webp"
                style={{borderRadius:"8px",maxWidth:"600px",width:"100%",height:"59vh"}}
              />
            </div>
           
            <div style={{width:matches?"50%":"90%", textAlign:matches?"Left":"center",padding:"20px"}}>
           <div style={{  fontSize: '32px',
         fontWeight: 600,
          color: '#444',
          marginBottom: '10px',
        textAlign: 'left',margin:matches?"0px":"auto"}}>
        200+ Celebs recommend Astrotalk


       </div>
       <div style={{marginTop:25,fontWeight:'bolder',fontSize:matches?"52px":"36px", fontSize: '42px',
  fontWeight: 'normal',
  marginBottom: '20px',
  textAlign: 'left'}}>
      Chat With Astrologer
       </div>
      
     <div style={{ marginTop: 10 }}>
      <a href="https://astrotalk.com/chat-with-astrologer" style={{ textDecoration: "none" }}>
        <Button
          fullWidth
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            border: "0.5px solid #000",
            width: matches ? 180 : 350,
            backgroundColor: isHovered ? "#333" : "#000", // light black on hover
            padding: "10px 45px",
            borderRadius: 15,
            boxShadow: "0 1px 2px 1px #333",
            display: "inline-flex",
            color: "#fff",
            transition: "all 0.3s ease-in-out",
            position: "relative",
            textTransform: "capitalize",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Chat Now
        </Button>
      </a>
    </div>
            </div>

          </div>

</div>

       </div>
    )
   }