import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import { useSelector } from "react-redux";
import { globalState } from '../../models/Crypto';

function TableView() {
  const cryptoData = useSelector((state: globalState) => state.allCryptoItems.crypto);
  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });
  const classes = useStyles();
  return (
    <>
      <Paper>
        {/* <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
        /> */}
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Coin</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">24h Change</TableCell>
                <TableCell align="right">Market Cap</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cryptoData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">Rs {row.market_data.current_price.inr}</TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}

export default TableView;