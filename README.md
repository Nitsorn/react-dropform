# react-dropform
Dropforms. Forms that are contained inside buttons.

# Demo
<img src='http://oatlikeoatmeal.com/files/react-dropform.gif'></src>

#Installation
### 1. npm install
`npm install react-dropform --save`

### 2. In your component.jsx
require `DropFrom` in the component you wish to use this in.
`var DropForm = require('./dropform.jsx');`

### 3. In your CSS
include `dropform.css` to your project.
`<link rel="stylesheet" href="./link/to/dropform.css">`

# Usage
```javascript
var DropForm = require('./dropform.jsx');

var component = React.createClass({
  render: function() {
    return (
      <div>
        <DropForm
          open={false}
          title='Sign In'
          formStyle='default' // * optional
          className='inline-block align-top'>
        {
        // Add the form you want to create
        }
          <form>
            <fieldset>
              <input type="text" className="centered capitalize" name='preview' required/>
              <label for='preview'>Email Address</label>
            </fieldset>
            <fieldset>
              <input type="password" className="centered capitalize" name='preview' required/>
              <label for='preview'>Password</label>
            </fieldset>
            <button className='sharp-filled white-text' type='submit'>Submit</button>
          </form>

        </DropForm>
      </div>
    );
  }
});
```

# Variables
```HTML
  <DropForm
    open={false}
    title='Sign In'
    className='inline-block align-top'>
```
`open (boolean)`: Whether or not the form is shown on initial render. <br />
`title (string)`: Title of the button. <br />
`className (string)`: Additional classes for the form container. <br />
`formStyle (string)`: `default`, `semi-round`, `round` (see demo video)<br />
