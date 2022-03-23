import { Link } from 'react-router-dom'

const AdminPage = () => {
    return(
        <div className="admin-table">
        <Link className="btn-reg" to="/add-product">Add product</Link>
        <Link className="btn-reg" to="/manage-products">Manage products</Link>
        <Link className="btn-reg" to="/manage-users">Manage users</Link>
    </div>
    )
}

export default AdminPage