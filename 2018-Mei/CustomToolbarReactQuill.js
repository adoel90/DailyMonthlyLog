	/*
	 * Example Parchment format from
	 * https://quilljs.com/guides/cloning-medium-with-parchment/
	 */
	let Inline = Quill.import('blots/inline');
	class BoldBlot extends Inline { }
	BoldBlot.blotName = 'bold';
	BoldBlot.tagName = 'strong';
	Quill.register(BoldBlot);

	/*
	 * Editor component with default and custom formats
	 */
	class MyComponent extends React.Component {
	  constructor(props) {
	    this.formats = ['italic', 'underline'] // default formats
	    this.state = { text: '' }
	  }

	  handleChange(value) {
	    this.setState({text: value})
	  }

	  render() {
	    return (
	      <ReactQuill
	        value={this.state.text}
	        onChange={this.handleChange}
	        formats={this.formats} // the custom format is already registered
	      />
	    )
	  }
	}