import ProfileCard from "../ProfileCard"
import pp1 from "../../../../../assets/pp1.jpeg";
import pp2 from "../../../../../assets/pp2.jpeg";
import pp3 from "../../../../../assets/pp3.jpeg";
import pp4 from "../../../../../assets/pp4.jpeg";
import pp5 from "../../../../../assets/pp5.jpeg";
import pp6 from "../../../../../assets/pp6.jpeg";
import pp7 from "../../../../../assets/pp7.jpeg";
import pp8 from "../../../../../assets/pp8.jpeg";
import pp9 from "../../../../../assets/pp9.jpeg";
import BirthChart from '../BirthChart'
import AstrologyServices from "../AstrologyServices";
import Footer from "../Footer";
import InsideHeader from '../InsideHeader'
import AstroCard from '../AstroCard'
import AstroImage from '../AstroImage'

export default function(){
   var profileinfo=[ 
{id:1,name:'Arjun Pandit',rate:'17',profilephoto:pp1},
{id:2,name:'Love Guru',rate:'22',profilephoto:pp2},
{id:3,name:'Swami Ji',rate:'35',profilephoto:pp3},
{id:4,name:'Raman',rate:'20',profilephoto:pp4},
{id:5,name:'Shivam Sharma',rate:'15',profilephoto:pp5},
{id:6,name:'Love Oracle',rate:'26',profilephoto:pp6},
{id:7,name:'Guru Anil',rate:'24',profilephoto:pp7},
{id:8,name:'Tarot Rajiv',rate:'21',profilephoto:pp8},
{id:9,name:'Pandit Jagannath',rate:'22',profilephoto:pp9},

   ]
   
    return(<div>
<div>
    <InsideHeader />
</div>

<div style={{width:'100%',background:'black',marginTop:'5%'}}>
  <div><AstroImage /></div> 
 <div><AstroCard /> </div> 


</div>
        <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
            <ProfileCard data={profileinfo} />
        </div>

        {/* <div style={{width:'100%',display:'flex',justifyContent:'flex-start',alignItems:'center',marginBottom:30,marginTop:20}}>
            <BirthChart />
        </div> */}

        <div>
            <AstrologyServices />
        </div>

        <div>
            <Footer />
        </div>
    </div>)
}