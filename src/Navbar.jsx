import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Leaderboard from './Leaderboard.jsx';

const Navbar = () => {

  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const handleLeaderboard = () => {
    setShowLeaderboard(true);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Math Mania <span className="icon-logo"><AddIcon /><RemoveIcon /><ClearIcon /><CallMadeIcon /></span>
          </Typography>
    <div className="navbar-links">
    <a href="/studentgame">Game</a>
    <a href="#" onClick={handleLeaderboard}>Leaderboard</a>
    </div>



          <Button color="inherit">Logout</Button>

        </Toolbar>
      </AppBar>
      {showLeaderboard && <Leaderboard />}
    </Box>
  );
}

export default Navbar;