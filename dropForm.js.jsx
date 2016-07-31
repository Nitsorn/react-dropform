var React = require('react');
var PropTypes = React.PropTypes;

var DropForm = React.createClass({

  getDefaultProps: function() {
    return {
      buttonHeight: 45,
      formStyle: 'default'
    };
  },

  getInitialState: function() {
    var buttonHeight = this.props.buttonHeight;
    return {
      height: buttonHeight+'px',
      open: this.props.open
    };
  },

  render: function() {
    var open = this.props.open;
    var round = this.props.style === 'round';

    var style = {
      height: this.state.height,
    };

    var additionalClasses = this.props.formStyle + (this.state.open ? ' active ' : ' ') + this.props.className;

    return (
      <div ref='dropform' className={'dropForm-container ' + additionalClasses} style={style}>
        <div id='header' onClick={this.toggleDropForm}>
          {this.props.title}
        </div>
        { this.props.children }
      </div>
    );
  },

  componentDidMount: function() {
    this.getFullHeight();
  },

  getFullHeight: function(){
    var buttonHeight = this.state.buttonHeight;
    // var formHeight = $(this.refs.dropform.childNodes[1]).outerHeight();
    var formHeight = this.refs.dropform.scrollHeight;
    this.setState({fullHeight: formHeight + 2});
  },

  toggleDropForm: function() {
    var open = this.state.open;
    var fullHeight = this.state.fullHeight;
    if (open)
      this.setState({
        height: this.props.buttonHeight,
        open: false
      })
    else {
      this.setState({
        height: fullHeight,
        open: true
      })
    }
  },
});

module.exports = DropForm;
