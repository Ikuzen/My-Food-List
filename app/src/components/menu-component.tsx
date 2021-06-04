import * as React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { TestComponent } from './../TestPage'

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="main-container">
            <Router>
                <Switch>
                    <Route path="/test" component={TestComponent} />
                </Switch>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Open Menu
      </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}><Link to="test/">test</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/">My account</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/">Logout</Link></MenuItem>

                </Menu>
            </Router>
        </div>
    );
}