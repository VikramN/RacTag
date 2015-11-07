# RacTag
RactiveJs Tags

### By Vikram

### View Demo 
http://vikramn.github.io/RacTag/

### Example

```javascript
var tagger = new RacTag({
  // # of where to mount this
  el: 'tagger_container',
	
	// model
	data: { 
	
    // Pre-populated tags if any : optional
    tags: ['lowercase-input-only','and-cant', 'delete', 'these', '5'],
		
		// Array of chars to use as delims : optional
		// Defaults to ,  and space
		breaks : [',', ' ', ';', '+'],
		
		// Called Before Adding : optional
		// Return value becomes tag
		// Return null to prevent add
		onTag : function(tag){
			console.log('Adding Tag => '  + tag );
			return tag.toLowerCase();
		},				
			
		// Called before deleting : optional
		// Return true to allow delete
		onRemove : function(index, tag) {
			console.log('Removing Tag => '  + tag );
			return (index >= 5 );
		}
	}
});
			
