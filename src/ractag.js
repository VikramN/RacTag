var RacTag = Ractive.extend({
	template: '#ractag',
	oninit: function() {
		var me = this;
		var t = me.get();
		
		if(!t.tags) me.set('tags', []);
		var breaks = t.breaks && t.breaks.length > 0 ? t.breaks : [',',' '];
		var tagRegex = new RegExp('[' + breaks.join('') + ']');
		
		var addTag = function(tag){
			var tags = tag.split(tagRegex);						
			tags.forEach(function(x){
				if(x && x !== '') {
					var x2 = t.onTag? t.onTag(x) : x;
					if(x2 && x2 !== '') {
						t.tags.push(x2);	
					}	
				}							
			});
		};
		
		var hasDelim = function(txt) {						
			for(var i =0; i < breaks.length; i++){
				if(txt.indexOf(breaks[i]) !== -1){
					return true;
				}
			}

			return false;
		};
		
		this.on('onkey', function(ev){
			var e = ev.original;
			if(e.keyCode === 13){
				if(e.preventDefault) { e.preventDefault(); }
				addTag(t.tag);
				me.set('tag', '');
				return false;
			}
			
			if(t.tag.length > 1 && hasDelim(t.tag)){
				addTag(t.tag);
				me.set('tag', '');
			}
		});
		
		this.on('onblur', function(e){
			addTag(t.tag);
			me.set('tag', '');
		})
		
		this.on('remove', function(e){
			var ix = parseInt(e.node.attributes['data-index'].value);
			var tag = t.tags[ix];
			if(t.onRemove? t.onRemove(ix, tag) : true) { 
				t.tags.splice(ix, 1);
			}						
		});
	}
});