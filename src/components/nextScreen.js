import React from 'react';
import Button from '@mui/material/Button';

const NextScreen = () => {
    return (
        <div className="next-btn">
            <Button variant="contained" color="success"
                sx={{marginLeft:90}}
            >
                Next
            </Button>
        </div>
    )
}

export default NextScreen;
