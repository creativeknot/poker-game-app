import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

// Styles
const useStyles = makeStyles({
  card: {
    width: '50vw',
    margin: '20px 0 10px 0'
  },
  cardHeader: {
    background: '#555',
    color: '#fff'
  },
  cardContent: {},
  handRankTitle: {
    marginTop: 20
  }
})

// Component
function Rules () {
  const classes = useStyles()
  const rows = [
    {
      name: 'Royal Flush',
      key: 'ROYAL_FLUSH'
    },
    {
      name: 'Straight Flush',
      key: 'STRAIGHT_FLUSH'
    },
    {
      name: 'Four-of-a-kind',
      key: 'FOUR_OF_A_KIND'
    },
    {
      name: 'Full House',
      key: 'FULL_HOUSE'
    },
    {
      name: 'Flush',
      key: 'FLUSH'
    },
    {
      name: 'Straight',
      key: 'STRAIGHT'
    },
    {
      name: 'Three-of-a-kind',
      key: 'THREE_OF_A_KIND'
    },
    {
      name: 'Two Pairs',
      key: 'TWO_PAIR'
    },
    {
      name: 'Pair',
      key: 'PAIR'
    },
    {
      name: 'High Card',
      key: 'HIGH_CARD'
    }
  ]
  const prizes = JSON.parse(localStorage.getItem('prizes'))

  return (
    <Container>
      <Card elevation={7} className={classes.card}>
        <CardHeader className={classes.cardHeader} title="Rules to Play" />
        <CardContent className={classes.cardContent}>
          <Typography component="ol">
            <li>Click the START button to show your hand</li>
            <li>Select the cards you want to replace - you can only replace each card once</li>
            <li>Click on CONTINUE button to see if you won or lost your hand to the dealer&apos;s hand</li>
            <li>Click TRY AGAIN button to take you back to Step 1 and start a new game</li>
          </Typography>
        </CardContent>
      </Card>

      <Card elevation={7} className={classes.card}>
        <CardHeader className={classes.cardHeader} title="Prizes" />
        <CardContent className={classes.cardContent}>
          <Typography style={{ marginBottom: 20 }}>
            Below are the hand rankings on the returns you will get when win a hand.
             For example, if you won with a <b><u>Pair</u></b> hand against a dealer&apos;s <b><u>High Card</u></b> hand
             and you bet $10 - you will get 3x10 = $30 back to your Total Credits.
          </Typography>
          <Typography>
            <Link
              href="https://www.cardplayer.com/rules-of-poker/hand-rankings"
              target="_blank"
              rel="noopener"
              color="error"
            >
              Click here
            </Link> to see how to form the hands below.
          </Typography>
          <TableContainer elevation={0} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Hand Rank</TableCell>
                  <TableCell>Prize (Ratio of winning returns)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell>1 : {prizes[row.key]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Rules
