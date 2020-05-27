import React, { Component, Fragment } from 'react';
import './App.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 12,
  },
  title: {
    flexGrow: 1,
  },
}));

const searchStyles = {
  search: {
    position: 'relative',
    borderRadius: 2,
    backgroundColor: '#3d8ad9',
    opacity: 0.5,
    marginRight: 12,
    marginLeft: 24,
    width: 'auto',
  },
  searchIcon: {
    padding: 0,
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 6,
    zIndex: 111,
    cursor: 'pointer'
  },
  inputRoot: {
    color: 'inherit',
    marginLeft: 12
  },
  inputInput: {
    padding: 8,
    paddingLeft: `calc(1em + ${8}px)`,
    width: '100%',
  },
}

class Search extends Component {
  state = {
    input: ''
  };

  onChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log(this.state)
    }
  }

  onClick = () => {
    console.log(this.state)
  }

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon} onClick={this.onClick}>
          <SearchIcon/>
        </div>
        <InputBase
          onChange={this.onChange}
          placeholder="Search…"
          value={this.state.value}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    )
  }
}

const SearchWithStyles = withStyles(searchStyles)(Search)

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Open Monument Map
        </Typography>
        <SearchWithStyles />
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

class Layout extends Component {
  render = () => {
    const { children } = this.props
    return (
      <Fragment>
        <Header name='Open Monument Map' />
        {children}
      </Fragment>
    )
  }
}

class App extends Component {
  render = () => {
    return (
      <Layout>
        Content
      </Layout>
    )
  }
}

export default App;
