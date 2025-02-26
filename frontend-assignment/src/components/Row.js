function Row({ rowData }) {
  return (
    <tr>
      <td>{rowData["s.no"]}</td>
      <td>{rowData["percentage.funded"]}</td>
      <td>{rowData["amt.pledged"]}</td>
    </tr>
  );
}

export default Row;
