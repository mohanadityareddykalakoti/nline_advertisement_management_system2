import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const SignUpFormPageInf = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [instagram, setInstagram] = useState("");
  const [instagramFollowers, setInstagramFollowers] = useState("");
  const [facebook, setFacebook] = useState("");
  const [facebookFollowers, setFacebookFollowers] = useState("");
  const [twitter, setTwitter] = useState("");
  const [twitterFollowers, setTwitterFollowers] = useState("");

  const postdata = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/signupinf", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
          age,
          city,
          state,
          country,
          instagram,
          instagramFollowers,
          facebook,
          facebookFollowers,
          twitter,
          twitterFollowers,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful response
        alert(
          "Your account is under verification. We will inform you via email."
        );
        history.push("/");
      } else {
        // Handle API errors
        setError(data.error);
        toast.error(data.error);
      }
    } catch (err) {
      // Handle network or other errors
      console.error("Error during fetch:", err);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MDBContainer className="mt-5">
      <MDBCard>
        <MDBCardBody>
          <form onSubmit={postdata}>
            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    required
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Your Phone Number"
                    icon="phone-alt"
                    group
                    type="tel"
                    validate
                    required
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">                
                  <MDBInput
                    label="Your Age"
                    icon="calendar-plus"
                    group
                    type="number"
                    validate
                    required
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Your City"
                    icon="city"
                    group
                    type="text"
                    validate
                    required
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="Your State"
                    icon="warehouse"
                    group
                    type="text"
                    validate
                    required
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Your country"
                    icon="flag"
                    group
                    type="text"
                    validate
                    required
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="Your Instagram Handle"
                    icon="user-edit"
                    group
                    type="text"
                    validate
                    required
                    name="instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Instagram Followers"
                    icon="users"
                    group
                    type="text"
                    validate
                    required
                    name="instagramFollowers"
                    value={instagramFollowers}
                    onChange={(e) => setInstagramFollowers(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="Your FaceBook Handle"
                    icon="user-edit"
                    group
                    type="text"
                    validate
                    required
                    name="facebook"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Facebook Followers"
                    icon="users"
                    group
                    type="text"
                    validate
                    required
                    name="facebookFollowers"
                    value={facebookFollowers}
                    onChange={(e) => setFacebookFollowers(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="Your Twitter Handle"
                    icon="user-edit"
                    group
                    type="text"
                    validate
                    required
                    name="twitter"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Twitter Followers"
                    icon="users"
                    group
                    type="text"                    validate
                    required
                    name="twitterFollowers"
                    value={twitterFollowers}
                    onChange={(e) => setTwitterFollowers(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>
            <div className="text-center py-4 mt-3">
              <MDBBtn color="cyan" type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </MDBBtn>
            </div>

            {error && (
              <div className="text-center py-4 mt-3">
                <p style={{ color: "red" }}>{error}</p>
              </div>
            )}
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default SignUpFormPageInf;
