import React, { useEffect, useState } from 'react'
const Table = () => {
    const data1 = [
        {id:1, name: 'John Doe', title: 'Developer', description: 'Frontend Developer' },
        {id:2, name: 'Jane Smith', title: 'Designer', description: 'UI/UX Designer' },
        {id:3, name: 'Mike Johnson', title: 'Manager', description: 'Project Manager' },
      ];
  
   
    return (
        <section>
            <TableComponent data={data1} />
        </section>
    )
}

export default Table;


const TableComponent = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'dsc';
    }

    const sortedArray = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    console.log(sortedArray)
    setSortedData(sortedArray);
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => sortData('name')}>Name {sortConfig.key === 'name' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}</th>
          <th onClick={() => sortData('title')}>Title {sortConfig.key === 'title' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}</th>
          <th onClick={() => sortData('description')}>Description {sortConfig.key === 'description' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

