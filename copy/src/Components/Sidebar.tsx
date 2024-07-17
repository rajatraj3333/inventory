import './css/sidebar.css'

function Sidebar(){
    return (
        <aside className="content-area-aside">
        <h2>
            <img src="/now.png" alt="" />
        </h2>
        <div className="nav">
            <ul>
                <li>
                    <img src="/products.png" alt="" />
                    <em>Stocks</em>
                </li>
                <li><img src="/stockpurchase.png" alt=""/>
                    <em>Purchase</em>
                </li>
            </ul>
        </div>


    </aside>
    )
}

export default Sidebar;