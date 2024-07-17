import React from 'react';
import './css/table.css'
import { ProductsUpdate, targetValue } from './typesdefine';
import { isJSDocReturnTag } from 'typescript';

interface tableDetails {

    data: any,
    action(e: React.MouseEvent, id: number, type: string): void
    update(e: targetValue, id: number)
}
function Table(props: tableDetails) {

    const { data, action, update } = props

    return (
        <div className="table-wrap">
            <table>
                <tr>
                    <th colSpan={1}>Product Name</th>
                    <th colSpan={1}>Price</th>
                    <th colSpan={1}>Stock</th>
                    <th colSpan={1}>Size</th>
                    <th colSpan={4}>Discount</th>
                    <th colSpan={1}>PurchaseDate</th>
                    <th colSpan={1}>Region</th>
                    <th colSpan={1}>State</th>
                    <th colSpan={6}>Actions</th>
                </tr>




                {data.map(item => (
                    <tr style={{ padding: '40px' }} key={item.id} >

                        {item.edit ? <td><textarea style={{ width: '280px', height: '60px' }} onChange={(e) => update(e, item.id)} name='ProductName'>{item.ProductName}</textarea></td> : <td>{item.ProductName}</td>}
                        {item.edit ? <td><input type="text" style={{ width: '80px', height: '40px' }} placeholder={item.Price} onChange={(e) => update(e, item.id)} name='Price' /></td> : <td>{item.Price}</td>}
                        {item.edit ? <td><input type="text" style={{ width: '80px', height: '40px' }} placeholder={item.Stock} onChange={(e) => update(e, item.id)} name='Stock' /></td> : <td>{item.Stock}</td>}

                        {item.edit ? <td><input type="text" style={{ width: '140px', height: '40px' }} placeholder={item.Size} onChange={(e) => update(e, item.id)} name='Size' /></td> : <td>{item.Size}</td>}

                        {item.edit ? <td colSpan={3}><input type="text" style={{ width: '80px', height: '40px' }} placeholder={item.Discount} onChange={(e) => update(e, item.id)} name='Discount' /></td> : <td colSpan={3}>{item.Discount}</td>}

                        <td colSpan={2}>{item.PurchaseDate}</td>


                        {item.edit ? <td colSpan={1}><input type="text" style={{ width: '100px', height: '40px' }} placeholder={item.Region} onChange={(e) => update(e, item.id)} name='Region' /></td> : <td colSpan={1}>{item.Region}</td>}

                        {item.edit ? <td colSpan={1}><input type="text" style={{ width: '100px', height: '40px' }} placeholder={item.State} onChange={(e) => update(e, item.id)} name='State' /></td> : <td colSpan={1}>{item.State}</td>}

                        <td><a href="" className="edit" onClick={(e) => action(e, item.id, item.edit ? 'save' : 'edit')}>{item.edit ? 'Save' : 'Edit'}</a></td>
                        <td><a href="" className="delete" onClick={(e) => action(e, item.id, 'delete')}>Delete</a></td>
                    </tr>
                ))}


            </table>
        </div>
    )
}

export default Table;