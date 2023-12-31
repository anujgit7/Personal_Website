import React from 'react'

const CustomTable = ({ data }) => {
    console.log(data)
    const tableRows = data.map((row, rowIndex) => (
        <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ));
    console.log(tableRows)

  return (
    <table style={{fontFamily: "'Comic Sans MS', 'Comic Sans', 'cursive'", marginBottom: '2%', borderCollapse: 'separate', borderSpacing: '20px 5px'}}>
        <tbody>{ tableRows }</tbody>
    </table>
  )
}

export default CustomTable