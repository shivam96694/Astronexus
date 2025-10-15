import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function UserInformation() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    mobile: "",
    dob: null,
    tob: null,
    pob: "",
    country: "",
state: "",
maritalStatus: "",
    currentCity: "",
    serviceType: "",
    question: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Information:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
   <div style={{width:'80%',height:'auto',justifyContent:'center',alignItems:'center',display:'flex'}}>
      <div style={{width:'50%',height:'auto',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}  >
        <Typography variant="h5" fontWeight="bold" gutterBottom align="center" marginBottom={3} marginTop={2}>
          Kundli / Birth Chart
        </Typography>

        
          <Grid container spacing={2}>
            {/* Full Name */}
            <Grid item size={4} xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Grid>

            

            {/* Email */}
            <Grid item size={4} xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Mobile Number */}
            <Grid item size={4} xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Grid>

            {/* Gender */}
            <Grid item size={4} xs={12} sm={6}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Gender
              </Typography>
              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
            </Grid>

            {/* Date of Birth */}
            <Grid item size={4} xs={12} sm={6}>
              <DatePicker
                label="Date of Birth"
                value={formData.dob}
                onChange={(newValue) =>
                  setFormData({ ...formData, dob: dayjs(newValue) })
                }
                slotProps={{ textField: { fullWidth: true, required: true } }}
              />
            </Grid>

            {/* Time of Birth */}
            <Grid item size={4} xs={12} sm={6}>
              <TimePicker
                label="Time of Birth"
                value={formData.tob}
                onChange={(newValue) =>
                  setFormData({ ...formData, tob: dayjs(newValue) })
                }
                slotProps={{ textField: { fullWidth: true, required: true } }}
              />
            </Grid>

           
               <Grid item size={4} xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  label="Country"
                >
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* State */}
            <Grid item size={4} xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  label="State"
                >
                  <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                  <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                  <MenuItem value="Gujarat">Gujarat</MenuItem>
                  <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>


           
            {/* Current City */}
            <Grid item size={4} xs={12} sm={6}>
              <TextField
                fullWidth
                label="Current City"
                name="currentCity"
                value={formData.currentCity}
                onChange={handleChange}
              />
            </Grid>


  {/* Place of Birth */}
            <Grid item size={4} xs={12} sm={6}>
              <TextField
                fullWidth
                label="Place of Birth"
                name="pob"
                value={formData.pob}
                onChange={handleChange}
                required
              />
            </Grid>


            {/* Marital Status */}
            <Grid item size={4} xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Marital Status</InputLabel>
                <Select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  label="Marital Status"
                >
                  <MenuItem value="Single">Single</MenuItem>
                  <MenuItem value="Married">Married</MenuItem>
                  <MenuItem value="Divorced">Divorced</MenuItem>
                  <MenuItem value="Widowed">Widowed</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Service Type */}
            <Grid item size={4} xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Service Type</InputLabel>
                <Select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  label="Service Type"
                >
                  <MenuItem value="Kundali">Kundali</MenuItem>
                  <MenuItem value="Matchmaking">Matchmaking</MenuItem>
                  <MenuItem value="Career">Career</MenuItem>
                  <MenuItem value="Health">Health</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Question */}
            <Grid item size={12} xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Your Question / Concern"
                name="question"
                value={formData.question}
                onChange={handleChange}
              />
            </Grid>

            {/* Terms */}
            <Grid item size={12} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />
                }
                label="I agree to the terms and conditions"
              />
            </Grid>

            {/* Submit */}
            <Grid item  size={12} xs={12} textAlign="center">
              <Button onClick={handleSubmit} variant="contained" color="primary" type="submit">
                Submit Information
              </Button>
            </Grid>
          </Grid>
      
      </div>


      </div>
    </LocalizationProvider>
  );
}
