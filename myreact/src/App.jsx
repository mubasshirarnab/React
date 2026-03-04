import './App.css'

function App() {
  return (
    <>
      {/* A beautifull signup form. and a login form. and a forgot password form. and a reset password form. and a verify email form. and a resend verification email form. and a delete account form. and a update profile form. and a update password form. and a update email form. and a update phone number form. and a update address form. */}
      
      <div>
        <h1>Signup Form</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div>
        <h1>Login Form</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <button type="submit">Log In</button>
        </form>
      </div>
      <div>
        <h1>Forgot Password Form</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <button type="submit">Reset Password</button>
        </form>
      </div>  
      <div>
        <h1>Reset Password Form</h1>
        <form>    
          <label htmlFor="password">New Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <button type="submit">Reset Password</button>
        </form>
      </div>
      <div>
        <h1>Verify Email Form</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <button type="submit">Verify Email</button>
        </form>
      </div>
      <div>
        <h1>Resend Verification Email Form</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <button type="submit">Resend Verification Email</button>
        </form>
      </div>
      <div>
        <h1>Delete Account Form</h1>
        <form>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <button type="submit">Delete Account</button>
        </form>
      </div>
      <div>
        <h1>Update Profile Form</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <button type="submit">Update Profile</button>
        </form>
      </div>
      <div>
        <h1>Update Password Form</h1>
        <form>
          <label htmlFor="currentPassword">Current Password:</label>
          <input type="password" id="currentPassword" name="currentPassword" required />
          <br />
          <label htmlFor="newPassword">New Password:</label>
          <input type="password" id="newPassword" name="newPassword" required />
          <br />
          <button type="submit">Update Password</button>
        </form>
      </div>
      <div>
        <h1>Update Email Form</h1>
        <form>
          <label htmlFor="currentEmail">Current Email:</label>
          <input type="email" id="currentEmail" name="currentEmail" required />
          <br />
          <label htmlFor="newEmail">New Email:</label>
          <input type="email" id="newEmail" name="newEmail" required />
          <br />
          <button type="submit">Update Email</button>
        </form>
      </div>
      <div>
        <h1>Update Phone Number Form</h1>
        <form>    
          <label htmlFor="currentPhoneNumber">Current Phone Number:</label> 
          <input type="tel" id="currentPhoneNumber" name="currentPhoneNumber" required />
          <br />
          <label htmlFor="newPhoneNumber">New Phone Number:</label>
          <input type="tel" id="newPhoneNumber" name="newPhoneNumber" required />
          <br />
          <button type="submit">Update Phone Number</button>
        </form>
      </div>
      <div>
        <h1>Update Address Form</h1>
        <form>
          <label htmlFor="currentAddress">Current Address:</label>
          <input type="text" id="currentAddress" name="currentAddress" required />
          <br />
          <label htmlFor="newAddress">New Address:</label>
          <input type="text" id="newAddress" name="newAddress" required />
          <br />
          <button type="submit">Update Address</button>
        </form>
      </div>  
    
    </>
  )
}

export default App
