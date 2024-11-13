import React, { useState } from 'react';
import {
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    InputAdornment,
    IconButton,
    Popover,
    Autocomplete,
} from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PeopleIcon from '@mui/icons-material/People';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const FlightSearch = ({ onSearch, setLoading }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [nearbyAirports, setNearbyAirports] = useState(false);
    const [directFlights, setDirectFlights] = useState(false);

    // Travelers & Cabin Modal State
    const [anchorEl, setAnchorEl] = useState(null);
    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);
    const [travelClass, setTravelClass] = useState('Economy');

    const cities = [
        'Chennai', 'Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 'Hyderabad',
        'Pune', 'Ahmedabad', 'Kochi', 'Goa', 'Thiruvananthapuram',
        'Coimbatore', 'Madurai', 'Tiruchirapalli', 'Salem',
        'Tuticorin', 'Puducherry', 'New York', 'London',
        'Tokyo', 'Paris', 'Los Angeles', 'Beijing', 'Dubai',
        'Singapore', 'Hong Kong', 'Sydney', 'Frankfurt',
        'Madrid', 'Shanghai', 'Istanbul', 'Rome'
    ];

    const handleSearch = async () => {
        if (!from || !to || !departDate) {
          alert("Please fill in the 'From', 'To', and 'Depart' fields.");
          return;
        }
    
        setLoading(true);
    
        const searchCriteria = {
          origin: from.toLowerCase(),
          destination: to.toLowerCase(),
        };
    
        try {
          const response = await axios.get('http://localhost:5001/api/flights/search', {
            params: searchCriteria,
          });
          onSearch(response.data);
          window.location.href="/results?origin="+from.toLowerCase()+"&destination="+to.toLowerCase();
        } catch (error) {
          console.error("Error fetching flights:", error);
          alert("According to the worst weather condition the flight was cancelled , Stay safe.");
        } finally {
          setLoading(false);
        }
      };

    const handleTravelersClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleTravelersClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'travelers-popover' : undefined;

    return (
        <>
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#192252', color: 'white' }}>
            <h2>Millions of cheap flights. One simple search.</h2>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={3}>
                    <Autocomplete
                        options={cities}
                        value={from}
                        onChange={(event, newValue) => setFrom(newValue)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="From"
                                variant="filled"
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FlightTakeoffIcon />
                                        </InputAdornment>
                                    ),
                                    style: { backgroundColor: 'white' },
                                }}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Autocomplete
                        options={cities}
                        value={to}
                        onChange={(event, newValue) => setTo(newValue)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="To"
                                variant="filled"
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FlightTakeoffIcon />
                                        </InputAdornment>
                                    ),
                                    style: { backgroundColor: 'white' },
                                }}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        label="Depart"
                        type="date"
                        value={departDate}
                        onChange={(e) => setDepartDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        variant="filled"
                        InputProps={{
                            style: { backgroundColor: 'white' },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CalendarTodayIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        label="Return"
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        variant="filled"
                        InputProps={{
                            style: { backgroundColor: 'white' },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CalendarTodayIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        label="Travelers & Cabin"
                        variant="filled"
                        value={`${adult} Adult, ${child} Child, ${infant} Infant, ${travelClass}`}
                        onClick={handleTravelersClick}
                        InputProps={{
                            style: { backgroundColor: 'white' },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PeopleIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleTravelersClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                    >
                        <div style={{ padding: '20px', width: '300px', textAlign: 'center' }}>
                            <IconButton onClick={handleTravelersClose} style={{ float: 'right' }}>
                                <CloseIcon />
                            </IconButton>
                            <h4>Travelers & Cabin</h4>

                            <div style={{ marginBottom: '15px' }}>
                                <p>Adult</p>
                                <IconButton onClick={() => setAdult(Math.max(1, adult - 1))}>
                                    <RemoveIcon />
                                </IconButton>
                                {adult}
                                <IconButton onClick={() => setAdult(adult + 1)}>
                                    <AddIcon />
                                </IconButton>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <p>Child</p>
                                <IconButton onClick={() => setChild(Math.max(0, child - 1))}>
                                    <RemoveIcon />
                                </IconButton>
                                {child}
                                <IconButton onClick={() => setChild(child + 1)}>
                                    <AddIcon />
                                </IconButton>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <p>Infant</p>
                                <IconButton onClick={() => setInfant(Math.max(0, infant - 1))}>
                                    <RemoveIcon />
                                </IconButton>
                                {infant}
                                <IconButton onClick={() => setInfant(infant + 1)}>
                                    <AddIcon />
                                </IconButton>
                            </div>

                            <TextField
                                select
                                label="Class"
                                value={travelClass}
                                onChange={(e) => setTravelClass(e.target.value)}
                                variant="filled"
                                fullWidth
                                SelectProps={{ native: true }}
                                style={{ backgroundColor: 'white' }}
                            >
                                <option value="Economy">Economy</option>
                                <option value="Business">Business</option>
                                <option value="First Class">First Class</option>
                            </TextField>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleTravelersClose}
                                style={{ marginTop: '15px', backgroundColor: '#344fa1' }}
                            >
                                Done
                            </Button>
                        </div>
                    </Popover>
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox checked={nearbyAirports} onChange={() => setNearbyAirports(!nearbyAirports)} />}
                        label="Include Nearby Airports"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={directFlights} onChange={() => setDirectFlights(!directFlights)} />}
                        label="Direct Flights Only"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSearch}
                        style={{ backgroundColor: '#3f51b5' }}
                    >
                        Search Flights
                    </Button>
                </Grid>
            </Grid>
        </div>
        </>
    );
};

export default FlightSearch;
