
const express = $node['express']()
express.use((req, res, next) => {
	$mol_fiber_root( ()=> $mol_fiber_unlimit( ()=> {
		res.send(new $app_start().toString())
	} ) )
})
