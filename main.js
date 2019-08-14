const POLY_API_KEY = "AIzaSyDe9-3O5VWj88WjfeBPY3AJZYw99KHpAAk"

const POLY_API_ENDPOINT = "https://poly.google.com/view"

function main()
{
	const args = window.location.search
		.slice(1)
		.split('&')
		.map((v) => v.split('='))
		.reduce((object, tuple) => 
			Object.assign(object, {[tuple[0]]: tuple[1]}), {});
			
	const gblock = `${POLY_API_ENDPOINT}/${args.polyid}?key=${POLY_API_KEY}`;
	const marker = `${args.pattid}.patt`;
	
			
	document.body.innerHTML = `
	<a-scene embedded arjs>    
		<a-marker-camera id="marker" type='pattern' url="${marker}">			
			<a-entity gblock="${gblock}" position="0 -2 0" scale="2 2 2"></a-entity>
		</a-marker-camera>		
	</a-scene>
	`



	
	
	console.log('hello world ', marker);
}