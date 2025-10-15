import { DialogContent, Dialog, Button, Typography, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import myImage from "../../../../assets/generated-image (1).png";

export default function DocumentUpload() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    photo: null,
    aadhar: null,
    pan: null,
    certificate: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleError = (label, errorMessage) => {
    setError((prev) => ({ ...prev, [label]: errorMessage }));
  };

  const validate = () => {
    let err = false;

    if (!formData.photo) {
      handleError("photo", "Please upload your photo.");
      err = true;
    } else handleError("photo", "");

    if (!formData.aadhar) {
      handleError("aadhar", "Please upload your Aadhaar card.");
      err = true;
    } else handleError("aadhar", "");

    if (!formData.pan) {
      handleError("pan", "Please upload your PAN card.");
      err = true;
    } else handleError("pan", "");

    if (!formData.certificate) {
      handleError("certificate", "Please upload your certificate document.");
      err = true;
    } else handleError("certificate", "");

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();

    if (!err) {
      alert("Documents uploaded successfully!");
      setFormData({
        photo: null,
        aadhar: null,
        pan: null,
        certificate: null,
      });
      setLoginOpen(false);
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setLoginOpen(true)}>
        Upload Documents
      </Button>

      <Dialog
        open={loginOpen}
        maxWidth="sm"
        PaperProps={{
          sx: { borderRadius: "10px", width: "900px", maxWidth: "110vw" },
        }}
      >
        <DialogContent
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={myImage}
              alt="Astrology"
              width="420"
              style={{ paddingRight: 10, objectFit: "cover" }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 10,
                height: "auto",
                paddingLeft: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "rgb(79, 79, 79)",
                    fontFamily: "Okra, Helvetica, sans-serif",
                  }}
                >
                  Document Verification
                </Typography>
                <div style={{ marginLeft: "auto", cursor: "pointer" }}>
                  <CloseIcon onClick={() => setLoginOpen(false)} />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Profile Photo */}
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Upload Profile Photo
                </Typography>
                <TextField
                  type="file"
                  name="photo"
                  inputProps={{ accept: "image/*" }}
                  onChange={handleFileChange}
                  fullWidth
                  margin="dense"
                  error={!!error.photo}
                  helperText={error.photo}
                />

                {/* Aadhaar Card */}
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Upload Aadhaar Card
                </Typography>
                <TextField
                  type="file"
                  name="aadhar"
                  inputProps={{ accept: "image/*,.pdf" }}
                  onChange={handleFileChange}
                  fullWidth
                  margin="dense"
                  error={!!error.aadhar}
                  helperText={error.aadhar}
                />

                {/* PAN Card */}
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Upload PAN Card
                </Typography>
                <TextField
                  type="file"
                  name="pan"
                  inputProps={{ accept: "image/*,.pdf" }}
                  onChange={handleFileChange}
                  fullWidth
                  margin="dense"
                  error={!!error.pan}
                  helperText={error.pan}
                />

                {/* Certificate */}
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Upload Certificate Document
                </Typography>
                <TextField
                  type="file"
                  name="certificate"
                  inputProps={{ accept: "image/*,.pdf" }}
                  onChange={handleFileChange}
                  fullWidth
                  margin="dense"
                  error={!!error.certificate}
                  helperText={error.certificate}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  Submit for Verification
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
