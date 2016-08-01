# react-dropform
Dropforms. Forms that are contained inside buttons.

# Demo
<img src='http://oatlikeoatmeal.com/files/react-dropform.gif'></src>

#Installation
### 1. npm install
`npm install react-dropform` --save

### 2. In your component.jsx
```javascript
var DropForm = require('./dropform.jsx');

var component = React.createClass({
  render: function() {
    return (
      <div>
        <DropForm open={false} title='Sign In' className='inline-block align-top'>
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

### 3. In your CSS
