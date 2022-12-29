import React from 'react';

const Table = ({data}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name  </th> 
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Number</th>
                </tr>
                {data.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id } <hr/></td>
                        <td>{item.first_name} <hr/></td>
                        <td>{item.last_name} <hr/></td>
                        <td>{item.email} <hr/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default Table;

{/* <ul className="list">    
               
{Users.filter((user) => user.first_name.toLowerCase().includes(query)).map((user) =>(
   <li key={user.id} className="listItem">{user.first_name}</li>
))}

    <li className="listItem">master</li>
    <li className="listItem">developer</li>
</ul> */}