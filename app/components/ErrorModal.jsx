var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title:'Error'
    };
  },
  // propTypes:{
  //   title: React.propTypes.string,
  //   message: React.propTypes.string.isRequired
  // },
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    var {title,message} = this.props;

    return (
      <div>
      <div id='error-modal' className = 'reveal tiny text-center' data-reveal="">
        <h1>{title}</h1>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Close
          </button>
        </p>
      </div>
    </div>
    )
  }
});

module.exports = ErrorModal;
