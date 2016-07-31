var React = require('react');
var ReactDOM = require('react-dom');
var DropForm = require('./dropform.jsx');

var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <DropForm open={false} title='Your Title' className='inline-block align-top'>
          <form>
            <fieldset>
              <input type="text" className="centered capitalize" name='preview' required/>
              <label for='preview'>Your Name</label>
            </fieldset>
            <fieldset>
              <input type="text" className="centered capitalize" name='preview' required/>
              <label for='preview'>Your Email</label>
            </fieldset>
            <button className='sharp-filled white-text' type='submit'>Submit</button>
          </form>
        </DropForm>
        <DropForm open={false} title='Your Title' formStyle='semi-round' className='inline-block align-top'>
          <form>
            <fieldset>
              <input type="text" className="centered capitalize" name='preview' required/>
              <label for='preview'>Your Name</label>
            </fieldset>
            <fieldset>
              <input type="text" className="centered capitalize" name='preview' required/>
              <label for='preview'>Your Email</label>
            </fieldset>
            <fieldset>
              <input type="password" className="centered capitalize" name='preview' required/>
              <label for='preview'>Your Phone Number</label>
            </fieldset>
            <button className='sharp-filled white-text' type='submit'>Submit</button>
          </form>
        </DropForm>
        <DropForm open={false} title='Your Title' formStyle='round' className='inline-block align-top'>
          <form>
            <fieldset>
              <input type="text" className="centered capitalize" name='preview' required/>
              <label for='preview'>Your Name</label>
            </fieldset>
            <fieldset>
              <input type="text" className="centered capitalize" name='preview' required/>
              <label for='preview'>Your Email</label>
            </fieldset>
            <fieldset>
              <input type="password" className="centered capitalize" name='preview' required/>
              <label for='preview'>Your Password</label>
            </fieldset>
            <fieldset>
              <input type="password" className="centered capitalize" name='preview' required/>
              <label for='preview'>Confirm Password</label>
            </fieldset>
            <button className='sharp-filled white-text' type='submit'>Submit</button>
          </form>
        </DropForm>
      </div>
    );
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
