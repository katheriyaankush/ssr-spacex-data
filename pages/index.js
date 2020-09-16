import React,{Component} from 'react';
import Space from '../container/space'





class Users extends Component {

    static async getInitialProps(ctx) {
        const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100')
        const json = await res.json()
        return { appData: json }
      }


render(){


    return (
<div>
     
    < Space  data={this.props.appData}  />
</div>
    );
    }
}
export default Users;