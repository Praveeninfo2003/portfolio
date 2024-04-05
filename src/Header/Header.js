import React , {useState} from 'react'
import {Link} from 'react-scroll';
import './Header.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Header() {

  const [open, setOpen] = useState(false);

  // State to hold the form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // State to manage error messages
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });


  // Handler to close the dialog
  const handleClose = () => {
    setOpen(false);
    setFormData('')
    setFormErrors('')
  };

  // Handler to update form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for the "Agree" button click
  const handleAgree = () => {
    // Validate the form data
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.phone) {
      errors.phone = 'Phone is required';
    }

    // If there are errors, update the formErrors state and don't proceed with API call
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // If there are no errors, proceed with the API call and close the dialog
    // Here, you can make the POST API call with the formData

    // Reset the formErrors state
    setFormErrors({});

    // Close the dialog
    handleClose();
  };
  
  return (
    <div className='header'>
       <div>
     
       <Dialog
       sx={{width:'500px', marginLeft:'400px'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle    sx={{marginLeft:'80px',fontWeight:'300px'}} id="alert-dialog-title">{"Provide Your Information"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            error={!!formErrors.name} // Show red border if there is an error
            helperText={formErrors.name || ' '}
          />
          <TextField
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email} // Show red border if there is an error
            helperText={formErrors.email || ' '}
          />
          <TextField
            margin="dense"
            id="phone"
            name="phone"
            label="Phone Number"
            type="tel"
            fullWidth
            value={formData.phone}
            onChange={handleChange}
            error={!!formErrors.phone} // Show red border if there is an error
            helperText={formErrors.phone || ' '}
          />
        </DialogContent>
        <DialogActions sx={{marginTop:'-30px'}}>
          <Button sx={{backgroundColor:'red',color:'wheat'}}   onClick={handleClose}>Cancel</Button>
          <Button color="success"  variant="contained" sx={{marginRight:'130px'}} onClick={handleAgree} >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        <div className='header__left'>
            <h1>Develop<span>er</span></h1>
        </div>
        <div className='header__right'>
           <Link to='about' smooth={true} duration={500}>
           <h4>About Me</h4>
           </Link>
           <Link to='skill' smooth={true} duration={500}>
           <h4>Skills</h4>
           </Link>
           <Link to='project' smooth={true} duration={500}>
           <h4>Project</h4>
           </Link>
           <Link to='exp' smooth={true} duration={500}>
           <h4>Experience</h4>
           </Link>
           <Link to='contact' smooth={true} duration={500}>
           <h4>Contact</h4>
           </Link>
        </div>
    </div>
  )
}

export default Header