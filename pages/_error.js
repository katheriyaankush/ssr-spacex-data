import React from 'react';

import Router from 'next/router'
import Link from 'next/link';    


const Users = (props)=>
(
<div>
<h1>Opps ... page not found</h1>

<p>Go  to back
<Link href="/" >
    <a>  Click</a>
  </Link></p>

</div>
    );


export default Users;