import React,{Component} from 'react';
import styles from './space.module.css';
import axios from 'axios';
import Spinner from '../component/Spinner/Spinner'
import spinner from '../component/Spinner/Spinner';


class Space extends Component {
state={
 
    year:[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017, 2018,2019,2020 ],
    spaceData:[],
    spinner:false

}



componentDidMount(){

    //console.log("DibMount", this.props.data)

    this.setState({spaceData:this.props.data});
}

yearFilter=(year)=>{

let url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year="+year;
this.setState({spinner:true})
axios(url).then((resYear)=>{
    this.setState({spinner:false})
   this.setState({spaceData:resYear.data})
}).catch((err)=>{})


}


launchHandler=(val)=>{

let url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success="+val;



this.setState({spinner:true})
axios(url).then((res)=>{
    this.setState({spinner:false})
    this.setState({spaceData:res.data})
 }).catch((err)=>{
    this.setState({spinner:false})
 })
}




landingHandler=(val)=>{

    let url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success="+val;
    
    
    
    this.setState({spinner:true})
    axios(url).then((res)=>{
        this.setState({spinner:false})
        this.setState({spaceData:res.data})
     }).catch((err)=>{
        this.setState({spinner:false})
     })
    }



    render(){

//console.log("Vaa==",this.state.spaceData[1]);
let dataElement = null;
if(this.state.spinner){
dataElement = <Spinner/>

}
else if(this.state.spaceData.length===0){
    dataElement=<h2 style ={{textAlign: 'center', color:"red", marginTop: '200px'}}>Oops!.....No Record Found</h2> 

}
else{
dataElement = <div className={styles.divMain}> 
{ this.state.spaceData.map((res)=>{
return(
<div className={styles.divCol} key ={ res.launch_date_unix}> 
<p className={styles.falconId}  >FalconSat #{res.flight_number}</p>
<label className={styles.label}> Mission Name:</label>
<p className={styles.p}>{res.mission_name}</p>
<br></br>

<label className={styles.label}> Launch Year:</label>
<p className={styles.p}>{res.launch_year}</p>   

<br></br>

<label className={styles.label}> Sucessful Launch:</label>
<p className={styles.p}>{res.launch_success ? "true" : "false"}</p>  


<br></br>

<label className={styles.label}> Sucessful Landing:</label>
<p className={styles.p}>{res.rocket.first_stage.cores[0].land_success ? "true" : "false"}</p>  


      </div>

)})  }
</div>

}



return (
<div className = {styles.div}>


    <h2 style={{marginLeft: '20px'}} >SpaceX Launch Program</h2>
<div className={styles.divFillter}>

<h3>Filter</h3>

<p style={{textAlign: 'center', marginBottom: '-6px'}} >Sucessful Launch</p>
<hr/>
<div  className={styles.buttonDiv} > 
<button onClick={()=>this.launchHandler(true)} className={styles.button2} >True</button>
<button onClick={()=>this.launchHandler(false)}  className={styles.button2}>False</button>
</div>


<p style={{textAlign: 'center', marginBottom: '-6px'}} >Sucessful Landing</p>
<hr/>
<div  className={styles.buttonDiv} > 
<button onClick={()=>this.landingHandler(true)}  className={styles.button2} >True</button>
<button onClick={()=>this.landingHandler(false)}  className={styles.button2}>False</button>
</div>
<p style={{textAlign: 'center', marginBottom: '-6px'}} >Launch Year</p>
<hr/>
{this.state.year.map((y)=>{

return(
<div key = {y} className={styles.buttonDiv}> 
<button onClick = {()=>this.yearFilter(y)} className={styles.button}> {y}  </button>

</div>
)

})}


</div>

{dataElement}

</div>

)


    }





}

export default Space;




