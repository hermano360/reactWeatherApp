var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function(e){
		//prevents whole page from reloading
		e.preventDefault();
		var location = this.refs.location.value;

		if(location.length > 0){
			this.refs.location.value = '';
			this.props.onSearch(location);
		}

	},
	render: function(){
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input type="text" ref="location" placeholder="Enter A City Name"/>
				</div>
				<div>
					<button>Submit</button>
				</div>
			</form>
		)
	}
});

module.exports = WeatherForm;
