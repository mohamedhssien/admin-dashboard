import Link from 'next/link'
const Layout = (props) => ( 

    <div>
        
        <Link href="/users"><a>manage Users</a></Link>

        { props.children }

    </div>
 );

 export default Layout