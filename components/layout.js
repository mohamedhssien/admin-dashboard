import Link from 'next/link'
const Layout = (props) => ( 

    <div  style=  { {marginBottom: 20} } >
        
        {/* <Link href="/" ><a style=  { {padding: 20} }>manage Posts</a></Link> */}
        <Link href="/comments"><a style=  { {padding: 20} }>manage Comments</a></Link>
        <Link href="/userstst"><a style=  { {padding: 20} }>manage Users</a></Link>
        <Link href="/posts-page"><a style=  { {padding: 20} }>manage Posts</a></Link>



        { props.children }

    </div>
 );

 export default Layout